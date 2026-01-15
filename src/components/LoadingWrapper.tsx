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
	const [isLoading, setIsLoading] = useState(true);

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

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
			// Dispatch existing event for backward compatibility
			window.dispatchEvent(new CustomEvent('loadingComplete'));
		}, 5000);
		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		// Prevent scrolling while loading
		if (isLoading) {
			document.documentElement.style.overflow = 'hidden';
			document.body.style.overflow = 'hidden';
			document.body.style.position = 'fixed';
			document.body.style.width = '100%';
		} else {
			document.documentElement.style.overflow = '';
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.width = '';
		}

		// Cleanup: restore scrolling on unmount
		return () => {
			document.documentElement.style.overflow = '';
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.width = '';
		};
	}, [isLoading]);

	return (
		<LoadingContext.Provider value={{ loadingComplete: !isLoading }}>
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
			<div className={isLoading ? 'invisible' : 'visible'}>
				{children}
			</div>
		</LoadingContext.Provider>
	);
}
