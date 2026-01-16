'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface MenuContextType {
	isMenuOpen: boolean;
	setIsMenuOpen: (open: boolean) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function MenuProvider({ children }: { children: ReactNode }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
			{children}
		</MenuContext.Provider>
	);
}

export function useMenu() {
	const context = useContext(MenuContext);
	if (!context) {
		throw new Error('useMenu must be used within MenuProvider');
	}
	return context;
}
