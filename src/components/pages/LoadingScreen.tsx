'use client';

import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

export function LoadingScreen() {
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