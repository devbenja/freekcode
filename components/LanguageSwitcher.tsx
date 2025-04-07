'use client'

import React, { useState } from 'react';
import { Globe } from 'lucide-react';

type Language = 'es' | 'en';

interface LanguageSwitcherProps {
  initialLanguage?: Language;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ initialLanguage = 'es' }) => {
  
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-freek-yellow transition-colors"
        aria-label="Change language"
      >
        <Globe size={20} className="text-gray-700 dark:text-gray-300" />
        <span className="ml-1 text-sm font-medium uppercase">{language}</span>
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              onClick={() => toggleLanguage('es')}
              className={`${
                language === 'es' ? 'bg-gray-100 dark:bg-gray-700' : ''
              } block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700`}
              role="menuitem"
            >
              Español
            </button>
            <button
              onClick={() => toggleLanguage('en')}
              className={`${
                language === 'en' ? 'bg-gray-100 dark:bg-gray-700' : ''
              } block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700`}
              role="menuitem"
            >
              English
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

