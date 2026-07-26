'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SavedRecipe } from '@/lib/types';

interface ClientAppShellProps {
  children: React.ReactNode;
}

export function ClientAppShell({ children }: ClientAppShellProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [history, setHistory] = useState<SavedRecipe[]>([]);
  const [favorites, setFavorites] = useState<SavedRecipe[]>([]);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    // Dark mode initial check
    const savedTheme = localStorage.getItem('ai_recipe_theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    // Load History
    try {
      const savedHist = localStorage.getItem('ai_recipe_history');
      if (savedHist) setHistory(JSON.parse(savedHist));
    } catch (e) {
      console.error(e);
    }

    // Load Favorites
    try {
      const savedFavs = localStorage.getItem('ai_recipe_favorites');
      if (savedFavs) setFavorites(JSON.parse(savedFavs));
    } catch (e) {
      console.error(e);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('ai_recipe_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('ai_recipe_theme', 'light');
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans antialiased selection:bg-orange-500 selection:text-white transition-colors duration-200">
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        historyCount={mounted ? history.length : 0}
        favoritesCount={mounted ? favorites.length : 0}
      />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
