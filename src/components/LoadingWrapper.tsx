'use client';

import { useState, useEffect, ReactNode } from 'react';
import Lottie from 'lottie-react';

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
      // Dispatch custom event when loading ends
      window.dispatchEvent(new CustomEvent('loadingComplete'));
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading screen overlay */}
      {isLoading && animationData && (
        <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
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
    </>
  );
}
