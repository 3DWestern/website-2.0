import React, { createContext, useContext } from 'react';

type LoadingContextType = {
  loadingComplete: boolean;
};

export const LoadingContext = createContext<LoadingContextType>({
  loadingComplete: false,
});

export const useLoading = () => useContext(LoadingContext);

export default LoadingContext;
