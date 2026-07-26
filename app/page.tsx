'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Sparkles,
  ChefHat,
  Utensils,
  Zap,
  ShieldCheck,
  Flame,
  ArrowRight,
  CheckCircle2,
  Clock,
  BookOpen
} from 'lucide-react';
import { RECIPE_PRESETS } from '@/lib/presets';

export default function HomePage() {
  const router = useRouter();

  const handleSelectPreset = (presetId: string) => {
    router.push(`/generator?preset=${presetId}`);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/80 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-orange-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300 text-xs sm:text-sm font-bold border border-orange-200 dark:border-orange-800 shadow-xs">
              <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400 animate-pulse" />
              <span>Next.js 15 & Gemini AI Powered</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              Turn Leftover Ingredients into <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">Gourmet Recipes</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Type whatever items you have in your fridge or pantry. Our AI Chef calculates exact cooking steps, prep times, calorie estimates, and custom flavor tips in seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                id="hero-generator-cta-btn"
                href="/generator"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 hover:from-orange-700 hover:to-amber-600 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 transition-all flex items-center justify-center gap-3 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <ChefHat className="w-6 h-6" />
                <span>Open Recipe Generator</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                id="hero-preset-cta-btn"
                href="/generator"
                className="w-full sm:w-auto px-6 py-4 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-base rounded-2xl border border-slate-200 dark:border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Utensils className="w-5 h-5 text-orange-500" />
                <span>Explore Presets</span>
              </Link>
            </div>

            {/* Quick Benefits Bullet Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100% Free & Fast
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero Food Waste
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Multi-Cuisine Support
              </span>
            </div>
          </div>

          {/* Right Column Interactive Visual Card */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-800 rounded-3xl border border-orange-200 dark:border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/80 px-3 py-1 rounded-full border border-orange-200 dark:border-orange-800">
                  AI Chef Live Preview
                </span>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase text-slate-400">Your Pantry Inputs:</span>
                  <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-xs font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    Chicken breast, Tomatoes, Garlic, Onions, Green chilies
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-orange-600 dark:text-orange-400 uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Generated Result
                    </span>
                    <span className="text-xs font-bold text-slate-500">20 Mins • 2 Servings</span>
                  </div>

                  <div className="p-4 bg-orange-50/80 dark:bg-slate-900/90 rounded-2xl border border-orange-200 dark:border-slate-700 space-y-2">
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                      Desi Chicken Karahi
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                      Searing chicken tossed in a spiced ginger-tomato gravy with fragrant cumin and coriander.
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      <span>Calories: 420 kcal</span>
                      <span className="text-orange-600 dark:text-orange-400 font-extrabold">Easy Level</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                id="hero-demo-try-btn"
                onClick={() => router.push('/generator')}
                className="w-full py-3 bg-slate-900 dark:bg-orange-600 hover:bg-slate-800 dark:hover:bg-orange-700 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer text-center block"
              >
                Try With Your Ingredients →
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Cook with AI Recipe Generator?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Designed to save time, stretch grocery budgets, and create mouthwatering meals from everyday staples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Instant Generation
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              No scrolling through endless long blogs. Get straight to ingredients, steps, and cooking times in seconds.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Custom Dietary Control
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Filter easily for Halal, Vegetarian, Vegan, Gluten-Free, or Non-Vegetarian options with adjusted ingredients.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Nutrition Breakdown
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              View estimated calories, protein, carbs, and fats per serving to keep your wellness goals on track.
            </p>
          </div>

        </div>
      </section>

      {/* Preset Inspiration Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Popular Preset Recipes
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Click any recipe preset to jumpstart your kitchen session:
            </p>
          </div>
          <Link
            href="/generator"
            className="text-sm font-bold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1"
          >
            View All Presets <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RECIPE_PRESETS.slice(0, 3).map((preset) => (
            <div
              key={preset.id}
              onClick={() => handleSelectPreset(preset.id)}
              className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:shadow-xl hover:border-orange-500 dark:hover:border-orange-500 transition-all cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300">
                    {preset.cuisine}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {preset.dietary}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-orange-600 transition-colors">
                  {preset.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {preset.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-extrabold text-orange-600 dark:text-orange-400">
                <span>{preset.ingredients.length} Ingredients</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Generate Now <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Ready to Cook What’s in Your Fridge?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              No subscription required. Turn random ingredients into dinner in under 30 seconds.
            </p>
          </div>

          <div className="relative z-10 pt-2">
            <Link
              id="cta-bottom-generator-btn"
              href="/generator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-base rounded-2xl shadow-lg transition-all cursor-pointer"
            >
              <ChefHat className="w-5 h-5" />
              <span>Start Recipe Generator</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
