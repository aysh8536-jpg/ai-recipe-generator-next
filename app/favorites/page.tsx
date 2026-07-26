'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SavedRecipe } from '@/lib/types';
import { RecipeCard } from '@/components/RecipeCard';
import {
  Heart,
  ChefHat,
  Trash2,
  Sparkles,
  ArrowRight,
  BookOpen
} from 'lucide-react';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<SavedRecipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<SavedRecipe | null>(null);

  useEffect(() => {
    try {
      const savedFavs = localStorage.getItem('ai_recipe_favorites');
      if (savedFavs) setFavorites(JSON.parse(savedFavs));
    } catch (e) {
      console.error(e);
    }
  }, []);

  const saveFavoritesToStorage = (updated: SavedRecipe[]) => {
    setFavorites(updated);
    try {
      localStorage.setItem('ai_recipe_favorites', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleRemoveFavorite = (recipeName: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const updated = favorites.filter((item) => item.recipeName !== recipeName);
    saveFavoritesToStorage(updated);
    if (selectedRecipe?.recipeName === recipeName) {
      setSelectedRecipe(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300 text-xs font-bold">
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          <span>Saved Favorites</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Favorite Cookbook
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Your bookmarked recipes saved for quick access whenever you are ready to cook.
        </p>
      </div>

      {/* Selected Favorite Recipe Modal View */}
      {selectedRecipe && (
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-rose-50 dark:bg-slate-800 p-4 rounded-2xl border border-rose-200 dark:border-slate-700">
            <span className="text-xs font-bold text-rose-800 dark:text-rose-300 flex items-center gap-2">
              <ChefHat className="w-4 h-4" /> Viewing Favorite: {selectedRecipe.recipeName}
            </span>
            <button
              type="button"
              onClick={() => setSelectedRecipe(null)}
              className="text-xs font-bold text-slate-500 hover:text-slate-800 dark:hover:text-white px-3 py-1 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer"
            >
              Close View ✕
            </button>
          </div>

          <RecipeCard
            recipe={selectedRecipe}
            onClear={() => setSelectedRecipe(null)}
            isFavorite={true}
            onToggleFavorite={() => handleRemoveFavorite(selectedRecipe.recipeName)}
          />
        </div>
      )}

      {/* Favorites Grid */}
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((item) => (
            <div
              key={item.id || item.recipeName}
              onClick={() => setSelectedRecipe(item)}
              className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-rose-400 p-6 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300">
                    {item.cuisine}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => handleRemoveFavorite(item.recipeName, e)}
                    className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-slate-800 transition-colors"
                    title="Remove from favorites"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-rose-600 transition-colors line-clamp-1">
                  {item.recipeName}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-rose-600 dark:text-rose-400">
                <span>{item.servings} Servings</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Cook Recipe <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-12 text-center space-y-4 max-w-md mx-auto my-12">
          <div className="w-16 h-16 rounded-2xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto">
            <Heart className="w-8 h-8 fill-rose-500" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              No Favorites Saved Yet
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              When viewing any generated recipe, click the heart icon to save it here for instant access later.
            </p>
          </div>
          <Link
            href="/generator"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm rounded-xl shadow-md transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4" /> Generate Recipes Now
          </Link>
        </div>
      )}

    </div>
  );
}
