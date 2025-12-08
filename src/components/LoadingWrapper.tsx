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
        <div className="z-[100] bg-white flex w-screen h-screen items-center justify-center">
          <div className="flex items-center justify-center w-[300px] h-[300px]">
            <Lottie
              animationData={animationData}
              autoplay={true}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      )}
      
      {/* Content - hidden until loading completes */}
      <div className={isLoading ? 'invisible' : 'visible'}>
        {children}
      </div>
    </LoadingContext.Provider>
  );
}
