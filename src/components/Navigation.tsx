'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();

  // Listen for loading complete event
  useEffect(() => {
    const handleLoadingComplete = () => setIsLoaded(true);
    window.addEventListener('loadingComplete', handleLoadingComplete);
    return () => window.removeEventListener('loadingComplete', handleLoadingComplete);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
    { path: '/makerspace', label: 'About Makerspace' },
    { path: '/events', label: 'Events' },
    { path: '/dashboard', label: 'Dashboard' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
{/* Mobile menu button - fixed position */}
      <button
        className={`md:hidden fixed top-0 right-0 z-50 p-3 pr-4 bg-white rounded-bl-xl transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <div className="fixed top-0 right-0 z-50 p-3 pr-4 bg-white rounded-bl-xl hidden md:block">
        <div className="flex items-center gap-8">
          {/* {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`transition-colors ${
                isActive(link.path)
                  ? 'text-purple-600'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/login">
            <Button>Login</Button>
          </Link> */}
        </div>
      </div>

      {/* Mobile Navigation - Full Screen Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white flex flex-col items-start justify-center">
          {/* Sewing machine icon in top left */}
          <div className="absolute top-4 left-4">
            <Image
              src="/images/sewing-machine.svg"
              alt="Sewing machine"
              width={48}
              height={48}
            />
          </div>
          
          <div className="flex flex-col items-start gap-6 pl-4 p-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-5xl font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-purple-600'
                    : 'text-gray-700 hover:text-purple-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}