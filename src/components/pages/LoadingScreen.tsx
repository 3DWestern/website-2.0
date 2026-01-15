'use client';

import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

type AnimationData = Record<string, unknown>;

export function LoadingScreen() {
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

  if (!isLoading || !animationData) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
      <Lottie
        animationData={animationData}
        loop={false}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
}