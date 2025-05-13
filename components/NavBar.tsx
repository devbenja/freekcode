'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { ThemeToggle} from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from './ui/button';

import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {

  const { currentLanguage, changeLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-red' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo: Reemplazar por el nuevo :v */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Logo variant={isScrolled ? 'default' : 'default'} />
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="nav-link font-medium dark:text-gray-300 dark:hover:text-freek-yellow tracking-wide">Servicios</a>
            <a href="#portfolio" className="nav-link font-medium dark:text-gray-300 dark:hover:text-freek-yellow tracking-wide">Portfolio</a>
            <a href="#testimonios" className="nav-link font-medium dark:text-gray-300 dark:hover:text-freek-yellow tracking-wide">Testimonios</a>
            <a href="#tecnologias" className="nav-link font-medium dark:text-gray-300 dark:hover:text-freek-yellow tracking-wide">Tecnologías</a>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <LanguageSwitcher />
              <Button variant={"default"}>Contactar</Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle/>
            <LanguageSwitcher />
            <a 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="focus:outline-none text-blue-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="px-4 py-2 space-y-1">
            <a 
              href="#servicios" 
              className="block px-3 py-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-freek-yellow border-b border-gray-100 dark:border-gray-800 tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#portfolio" 
              className="block px-3 py-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-freek-yellow border-b border-gray-100 dark:border-gray-800 tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="#testimonios" 
              className="block px-3 py-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-freek-yellow border-b border-gray-100 dark:border-gray-800 tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonios
            </a>
            <a 
              href="#tecnologias" 
              className="block px-3 py-4 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-freek-yellow border-b border-gray-100 dark:border-gray-800 tracking-wide"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tecnologías
            </a>
            <div className="py-4">
              <a 
                href="#contacto" 
                className="block w-full text-center px-3 py-3 font-medium rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:bg-white transition-colors tracking-wide"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contactar
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
