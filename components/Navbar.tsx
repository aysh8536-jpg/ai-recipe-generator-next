'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChefHat,
  Sparkles,
  Menu,
  X,
  Utensils,
  Info,
  Home as HomeIcon,
  History,
  Heart,
  Moon,
  Sun
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  historyCount?: number;
  favoritesCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  historyCount = 0,
  favoritesCount = 0,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: HomeIcon, count: undefined },
    { href: '/generator', label: 'Generator', icon: Utensils, count: undefined },
    { href: '/history', label: 'History', icon: History, count: historyCount },
    { href: '/favorites', label: 'Favorites', icon: Heart, count: favoritesCount },
    { href: '/about', label: 'About', icon: Info, count: undefined },
  ] as const;

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-orange-100 dark:border-slate-800 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <Link
            id="nav-logo-btn"
            href="/"
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <ChefHat className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white block leading-tight">
                AI Recipe <span className="text-orange-600 dark:text-orange-500">Generator</span>
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 hidden sm:block">
                Cook Smart • Reduce Waste
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-50/80 dark:bg-slate-800/80 p-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              const badgeCount = item.count;

              return (
                <Link
                  key={item.href}
                  id={`nav-link-${item.label.toLowerCase()}`}
                  href={item.href}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs lg:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer relative ${
                    isActive
                      ? 'bg-orange-600 text-white shadow-sm shadow-orange-600/30'
                      : 'text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50/50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400 dark:text-slate-400'}`} />
                  <span>{item.label}</span>
                  {badgeCount !== undefined && badgeCount > 0 && (
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                        isActive
                          ? 'bg-white text-orange-600'
                          : 'bg-orange-100 dark:bg-slate-700 text-orange-600 dark:text-orange-400'
                      }`}
                    >
                      {badgeCount}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-desktop-btn"
              onClick={onToggleDarkMode}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            <Link
              id="nav-cta-btn"
              href="/generator"
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-semibold text-sm rounded-xl shadow-md shadow-orange-500/20 hover:shadow-lg transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              Generate Recipe
            </Link>
          </div>

          {/* Mobile Actions & Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="theme-toggle-mobile-icon-btn"
              onClick={onToggleDarkMode}
              className="p-2 rounded-xl text-slate-600 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              title="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            <button
              id="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-slate-800 focus:outline-hidden cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-orange-100 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            const badgeCount = item.count;

            return (
              <Link
                key={item.href}
                id={`mobile-nav-link-${item.label.toLowerCase()}`}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-900'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-orange-600 dark:text-orange-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>

                {badgeCount !== undefined && badgeCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-orange-100 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400">
                    {badgeCount}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <Link
              id="mobile-nav-cta-btn"
              href="/generator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white font-semibold rounded-xl shadow-md shadow-orange-600/20 active:bg-orange-700 transition-colors cursor-pointer"
            >
              <Sparkles className="w-5 h-5" />
              Start Cooking Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
