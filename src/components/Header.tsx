'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Start', href: '#hero' },
  { label: 'O nas', href: '#about' },
  { label: 'Oferta', href: '#services' },
  { label: 'Grafik', href: '#schedule' },
  { label: 'Trenerzy', href: '#trainers' },
  { label: 'Opinie', href: '#testimonials' },
  { label: 'Kontakt', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)] border-b border-lime-500/10'
          : 'bg-transparent'
      }`}
      style={{ opacity: 1, transform: 'translateY(0)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#hero')}
              className="flex items-center"
            >
              <Image
                src="/images/logo.png"
                alt="Power Performance"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                  isScrolled
                    ? 'text-gray-700 hover:text-lime-600 hover:bg-lime-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-lime-500 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-lime-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(132,204,22,0.4)] hover:scale-105"
            >
              ZAPISZ SIE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-gray-100 px-4 pt-4 pb-6 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left text-gray-700 hover:text-lime-600 hover:bg-lime-50 transition-colors duration-200 font-medium py-3 px-4 rounded-xl"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3">
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full bg-lime-500 text-white px-6 py-3.5 rounded-full font-bold hover:bg-lime-400 transition-all duration-200 text-sm"
            >
              ZAPISZ SIE
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
