'use client';

import { useState, useEffect, ReactNode } from 'react';
import Lottie from 'lottie-react';
import { LoadingContext } from '@/context/LoadingContext';

interface LoadingWrapperProps {
	children: ReactNode;
}

export function LoadingWrapper({ children }: LoadingWrapperProps) {
	const [animationData, setAnimationData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('/animations/loading.json')
			.then(res => res.json())
			.then(data => setAnimationData(data));
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
			// Dispatch existing event for backward compatibility
			window.dispatchEvent(new CustomEvent('loadingComplete'));
		}, 5000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<LoadingContext.Provider value={{ loadingComplete: !isLoading }}>
			{/* Loading screen overlay */}
			{isLoading && animationData && (
				<div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
					<Lottie
						animationData={animationData}
						loop={false}
						style={{ width: 300, height: 300 }}
					/>
				</div>
			)}

			{/* Content - hidden until loading completes */}
			<div className={isLoading ? 'invisible' : 'visible'}>
				{children}
			</div>
		</LoadingContext.Provider>
	);
}
