'use client';

import React from 'react';
import { PresetCombination } from '@/lib/types';
import { RECIPE_PRESETS } from '@/lib/presets';
import { Sparkles, Utensils, ArrowRight } from 'lucide-react';

interface PresetSelectorProps {
  onSelectPreset: (preset: PresetCombination) => void;
}

export const PresetSelector: React.FC<PresetSelectorProps> = ({ onSelectPreset }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-600 dark:text-orange-500" />
            Quick Inspiration Presets
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Need cooking ideas? Click any preset to instantly populate ingredients & settings:
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {RECIPE_PRESETS.map((preset) => (
          <div
            key={preset.id}
            onClick={() => onSelectPreset(preset)}
            className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-orange-500 dark:hover:border-orange-500 p-5 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300">
                  {preset.cuisine}
                </span>
                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500">
                  {preset.dietary}
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                {preset.title}
              </h4>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                {preset.description}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-orange-600 dark:text-orange-400">
              <span className="flex items-center gap-1">
                <Utensils className="w-3.5 h-3.5" />
                {preset.ingredients.length} Key Ingredients
              </span>
              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Load Preset <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
