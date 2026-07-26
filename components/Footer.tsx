'use client';

import React from 'react';
import Link from 'next/link';
import { ChefHat, Sparkles, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 transition-colors mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center text-white shadow-sm">
                <ChefHat className="w-5 h-5" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                AI Recipe <span className="text-orange-500">Generator</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transforming available pantry ingredients into flavorful, nutritious, zero-waste step-by-step recipes with Gemini AI.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-orange-400 transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/generator" className="hover:text-orange-400 transition-colors">AI Generator</Link>
              </li>
              <li>
                <Link href="/history" className="hover:text-orange-400 transition-colors">Recipe History</Link>
              </li>
              <li>
                <Link href="/favorites" className="hover:text-orange-400 transition-colors">Saved Favorites</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-400 transition-colors">About App</Link>
              </li>
            </ul>
          </div>

          {/* Cuisines Supported */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Cuisine Styles</h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {['Pakistani', 'Indian', 'Chinese', 'Italian', 'American', 'Mexican'].map((c) => (
                <span key={c} className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700/80 font-medium">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Smart Features</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" /> Instant Step-by-Step Cooking
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" /> Portioning & Nutrition Calculator
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" /> PDF / Text Export & Copy
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" /> Offline Local Storage Sync
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} AI Recipe Generator. Production-Ready Next.js 15 Application.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using Next.js, React 19 & Google Gemini AI.
          </p>
        </div>
      </div>
    </footer>
  );
};
