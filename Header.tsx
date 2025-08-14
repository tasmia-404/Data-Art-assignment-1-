
import React from 'react';
import type { Theme } from '../types';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';
import { HistoryIcon } from './icons/HistoryIcon';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className="bg-surface-light dark:bg-surface-dark shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <HistoryIcon className="h-8 w-8 text-primary-light dark:text-primary-dark" />
          <span className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">Timeline</span>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light dark:focus:ring-offset-background-dark dark:focus:ring-primary-dark text-secondary-light dark:text-secondary-dark hover:bg-gray-200 dark:hover:bg-slate-600"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <MoonIcon className="h-6 w-6" />
          ) : (
            <SunIcon className="h-6 w-6" />
          )}
        </button>
      </div>
    </header>
  );
};
