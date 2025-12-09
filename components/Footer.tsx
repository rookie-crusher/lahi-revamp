import React from 'react';
import { TwitterIcon } from './icons/TwitterIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { EmailIcon } from './icons/EmailIcon';

const Footer: React.FC = () => {
  const quickLinks = [
    { href: '/', label: 'Home' },
    // { href: '/blog', label: 'Blog' }, // Uncomment this line to show the Blog link
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Use' },
  ];

    const socialLinks = [
    { href: '#', icon: <TwitterIcon />, label: 'Twitter' },
    { href: '#', icon: <LinkedinIcon />, label: 'LinkedIn' },
    { href: 'mailto:contact@lahi.io', icon: <EmailIcon />, label: 'Email' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Lahi Logo" className="h-16 w-auto" />
            </a>
            <p className="text-gray-600 max-w-md mb-6">
              Creating exceptional digital experiences through innovative apps, games, and media. We transform ideas into engaging digital realities.
            </p>
             <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a key={link.label} href={link.href} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label={link.label}>
                   {React.cloneElement(link.icon, { className: 'h-6 w-6' })}
                </a>
              ))}
            </div>
          </div>
          
          <div>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map(link => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-6">
        <p className="text-center text-gray-500 text-sm">&copy; {new Date().getFullYear()} Lahi.io. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;