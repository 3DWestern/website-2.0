'use client';

import { useState, useEffect, ReactNode } from 'react';
import Lottie from 'lottie-react';
import { LoadingContext } from '@/context/LoadingContext';

type AnimationData = Record<string, unknown>;

interface LoadingWrapperProps {
	children: ReactNode;
}

export function LoadingWrapper({ children }: LoadingWrapperProps) {
	const [animationData, setAnimationData] = useState<AnimationData | null>(null);
	const [animationDone, setAnimationDone] = useState(false);
	const [modelReady, setModelReady] = useState(false);

	// Loading is complete when BOTH animation has finished AND model is ready
	const isLoading = !(animationDone && modelReady);

	useEffect(() => {
		const abortController = new AbortController();

		fetch('/animations/loading.json', { signal: abortController.signal })
			.then(res => {
				if (!res.ok) {
					throw new Error('Failed to load animation');
				}
				return res.json();
			})
			.then((data: AnimationData) => setAnimationData(data))
			.catch(error => {
				if (error.name !== 'AbortError') {
					console.error('Failed to load loading animation:', error);
				}
			});

		return () => abortController.abort();
	}, []);

	// Minimum animation duration timer
	useEffect(() => {
		const timer = setTimeout(() => {
			setAnimationDone(true);
		}, 5000);
		return () => clearTimeout(timer);
	}, []);

	// Dispatch event when loading actually completes
	useEffect(() => {
		if (!isLoading) {
			window.dispatchEvent(new CustomEvent('loadingComplete'));
		}
	}, [isLoading]);

	useEffect(() => {
		if (isLoading) {
			// Save current scroll position
			const scrollY = window.scrollY;

			// Apply CSS-based scroll prevention
			document.documentElement.style.overflow = 'hidden';
			document.documentElement.style.height = '100vh';
			document.body.style.overflow = 'hidden';
			document.body.style.position = 'fixed';
			document.body.style.top = `-${scrollY}px`;
			document.body.style.left = '0';
			document.body.style.right = '0';
			document.body.style.width = '100%';

			// Remove scroll-smooth class from html element
			const htmlElement = document.documentElement;
			const hadScrollSmooth = htmlElement.classList.contains('scroll-smooth');
			if (hadScrollSmooth) {
				htmlElement.classList.remove('scroll-smooth');
				htmlElement.dataset.hadScrollSmooth = 'true';
			}

			// Prevent scroll events
			const preventScroll = (e: Event) => {
				e.preventDefault();
				e.stopPropagation();
				return false;
			};

			const preventKeyScroll = (e: KeyboardEvent) => {
				// Prevent Page Up, Page Down, arrow keys, spacebar
				if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
					e.preventDefault();
					return false;
				}
			};

			// Add event listeners with passive: false to enable preventDefault
			window.addEventListener('wheel', preventScroll, { passive: false });
			window.addEventListener('touchmove', preventScroll, { passive: false });
			window.addEventListener('keydown', preventKeyScroll, { passive: false });

			// Cleanup function
			return () => {
				// Remove event listeners
				window.removeEventListener('wheel', preventScroll);
				window.removeEventListener('touchmove', preventScroll);
				window.removeEventListener('keydown', preventKeyScroll);
			};
		} else {
			// Restore scroll position
			const scrollY = document.body.style.top;

			// Restore CSS properties
			document.documentElement.style.overflow = '';
			document.documentElement.style.height = '';
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.left = '';
			document.body.style.right = '';
			document.body.style.width = '';

			// Restore scroll-smooth class if it was present
			const htmlElement = document.documentElement;
			if (htmlElement.dataset.hadScrollSmooth === 'true') {
				htmlElement.classList.add('scroll-smooth');
				delete htmlElement.dataset.hadScrollSmooth;
			}

			// Restore scroll position
			if (scrollY) {
				window.scrollTo(0, parseInt(scrollY || '0') * -1);
			}
		}
	}, [isLoading]);

	return (
		<LoadingContext.Provider value={{ loadingComplete: !isLoading, modelReady, setModelReady }}>
			{/* Loading screen overlay */}
			{isLoading && (
				<div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
					{animationData ? (
						<Lottie
							animationData={animationData}
							loop={false}
							style={{ width: 300, height: 300 }}
						/>
					) : null}
				</div>
			)}

			{/* Content - hidden until loading completes */}
			<div data-loading={isLoading ? "true" : undefined}>
				{children}
			</div>
		</LoadingContext.Provider>
	);
}
