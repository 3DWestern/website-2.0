import { createContext, useContext } from 'react';

interface LoadingContextType {
  loadingComplete: boolean;
}

export const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingContext.Provider');
  }
  return context;
}
