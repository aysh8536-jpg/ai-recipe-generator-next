'use client';

import React from 'react';
import Link from 'next/link';
import {
  ChefHat,
  Sparkles,
  Zap,
  Globe,
  CheckCircle2,
  Cpu,
  Layers,
  Code2,
  Rocket
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Title */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300 text-xs font-bold border border-orange-200 dark:border-orange-800">
          <ChefHat className="w-4 h-4 text-orange-600 dark:text-orange-400" />
          <span>About AI Recipe Generator</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Smart Kitchen AI Built for <span className="text-orange-600 dark:text-orange-500">Every Cook</span>
        </h1>

        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          Designed to help home cooks, students, busy parents, and food lovers eliminate meal prep stress and cut down food waste by turning pantry staples into delicious meals.
        </p>
      </div>

      {/* Main Philosophy Section */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-xs space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
          <Sparkles className="w-6 h-6 text-orange-600 dark:text-orange-500" />
          Our Core Mission: Zero Waste Cooking
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Food waste is one of the most common issues in daily home cooking. Millions of perfectly usable vegetables, leftover proteins, and pantry items get thrown away simply because people don’t know how to combine them into a cohesive dish. AI Recipe Generator bridges that gap instantly using Google Gemini AI models.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <span className="font-extrabold text-slate-800 dark:text-slate-100 block">Ingredient-First Approach</span>
              <span className="text-slate-500 dark:text-slate-400">Generates recipes specifically using what you already own.</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <span className="font-extrabold text-slate-800 dark:text-slate-100 block">Personalized Dietary Rules</span>
              <span className="text-slate-500 dark:text-slate-400">Respects vegetarian, vegan, halal, and gluten-free choices.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Cards */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center">
          Production Architecture & Tech Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white">Next.js 15 App Router</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Built with Next.js 15 App Router, Server-Side API Routes, and React 19.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white">Google Gemini API</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Powered by `@google/genai` SDK via secure server-side API routes (`/api/generate`).
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white">Tailwind & shadcn</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Designed with Tailwind CSS, custom UI components, and responsive dark mode support.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
              <Rocket className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white">Vercel Ready</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              100% compatible for instant deployment on Vercel or Cloud Run without custom servers.
            </p>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="text-center pt-4">
        <Link
          href="/generator"
          className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-black text-base rounded-2xl shadow-lg transition-all cursor-pointer"
        >
          <Sparkles className="w-5 h-5" />
          <span>Launch AI Recipe Generator</span>
        </Link>
      </div>

    </div>
  );
}
