import React, { useState } from 'react';
import { LahiLogo } from './icons/LahiLogo';
import { ArrowRightIcon } from './icons/ArrowRightIcon';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    // { label: 'Blog', href: '/blog' }, // Uncomment this line to show the Blog link
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-3">
            <LahiLogo className="h-8 w-auto" />
            <span className="text-xl font-bold tracking-tighter text-gray-900">LAHI</span>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center">
            <a href="/contact" className="flex items-center gap-2 bg-gray-800 text-white px-5 py-2.5 rounded-full hover:bg-gray-900 transition-colors font-medium">
              <span>Get in Touch</span>
              <ArrowRightIcon />
            </a>
          </div>
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-start space-y-4 p-4">
            {navLinks.map((link) => (
               <a key={link.label} href={link.href} className="text-gray-700 hover:text-gray-900 transition-colors">
                {link.label}
              </a>
            ))}
            <a href="/contact" className="w-full text-center bg-gray-800 text-white px-5 py-2.5 rounded-full hover:bg-gray-900 transition-colors font-medium mt-4">
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;