'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
    { path: '/makerspace', label: 'About Makerspace' },
    { path: '/events', label: 'Events' },
    { path: '/dashboard', label: 'Dashboard' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed top-0 rounded-bl-xl right-0 z-50 p-3 pr-4 bg-white">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-4 py-2 transition-colors ${
                    isActive(link.path)
                      ? 'text-purple-600'
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
    </div>
  );
}