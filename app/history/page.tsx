'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SavedRecipe } from '@/lib/types';
import { RecipeCard } from '@/components/RecipeCard';
import {
  History,
  Trash2,
  Search,
  ChefHat,
  Heart,
  Calendar,
  Sparkles,
  ArrowRight,
  Utensils
} from 'lucide-react';

export default function HistoryPage() {
  const [history, setHistory] = useState<SavedRecipe[]>([]);
  const [favorites, setFavorites] = useState<SavedRecipe[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<SavedRecipe | null>(null);

  useEffect(() => {
    try {
      const savedHist = localStorage.getItem('ai_recipe_history');
      if (savedHist) setHistory(JSON.parse(savedHist));

      const savedFavs = localStorage.getItem('ai_recipe_favorites');
      if (savedFavs) setFavorites(JSON.parse(savedFavs));
    } catch (e) {
      console.error(e);
    }
  }, []);

  const saveHistoryToStorage = (updated: SavedRecipe[]) => {
    setHistory(updated);
    try {
      localStorage.setItem('ai_recipe_history', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const saveFavsToStorage = (updated: SavedRecipe[]) => {
    setFavorites(updated);
    try {
      localStorage.setItem('ai_recipe_favorites', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteItem = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const updated = history.filter((item) => item.id !== id);
    saveHistoryToStorage(updated);
    if (selectedRecipe?.id === id) {
      setSelectedRecipe(null);
    }
  };

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear your entire recipe history?')) {
      saveHistoryToStorage([]);
      setSelectedRecipe(null);
    }
  };

  const handleToggleFavorite = (savedItem: SavedRecipe) => {
    const exists = favorites.some((f) => f.recipeName === savedItem.recipeName);
    let updatedFavs: SavedRecipe[];
    if (exists) {
      updatedFavs = favorites.filter((f) => f.recipeName !== savedItem.recipeName);
    } else {
      updatedFavs = [{ ...savedItem, isFavorite: true }, ...favorites];
    }
    saveFavsToStorage(updatedFavs);
  };

  const filteredHistory = history.filter((item) => {
    const name = item.recipeName?.toLowerCase() || '';
    const cuisine = item.cuisine?.toLowerCase() || '';
    const query = searchQuery.toLowerCase().trim();
    return name.includes(query) || cuisine.includes(query);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300 text-xs font-bold mb-2">
            <History className="w-3.5 h-3.5" />
            <span>Recipe Archives</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Generated Recipe History
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            View and revisit past recipes created during your AI cooking sessions.
          </p>
        </div>

        {history.length > 0 && (
          <button
            type="button"
            id="clear-all-history-btn"
            onClick={handleClearHistory}
            className="self-start sm:self-auto px-4 py-2.5 rounded-xl border border-rose-200 dark:border-rose-900 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 text-xs font-bold hover:bg-rose-100 transition-colors cursor-pointer flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" /> Clear All History
          </button>
        )}
      </div>

      {/* Selected Recipe View Modal/Container */}
      {selectedRecipe && (
        <div className="space-y-4">
          <div className="flex items-center justify-between bg-orange-50 dark:bg-slate-800 p-4 rounded-2xl border border-orange-200 dark:border-slate-700">
            <span className="text-xs font-bold text-orange-800 dark:text-orange-300 flex items-center gap-2">
              <ChefHat className="w-4 h-4" /> Viewing Saved Recipe: {selectedRecipe.recipeName}
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
            isFavorite={favorites.some((f) => f.recipeName === selectedRecipe.recipeName)}
            onToggleFavorite={() => handleToggleFavorite(selectedRecipe)}
          />
        </div>
      )}

      {/* Search Input */}
      {history.length > 0 && (
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search past recipes by name or cuisine..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:border-orange-500 focus:outline-hidden"
          />
        </div>
      )}

      {/* History Grid */}
      {filteredHistory.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHistory.map((item) => {
            const isFav = favorites.some((f) => f.recipeName === item.recipeName);
            const dateStr = item.timestamp ? new Date(item.timestamp).toLocaleDateString() : 'Recently Saved';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedRecipe(item)}
                className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-orange-500 p-6 shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300">
                      {item.cuisine}
                    </span>

                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleFavorite(item);
                        }}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isFav ? 'text-rose-500' : 'text-slate-300 hover:text-rose-500'
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500' : ''}`} />
                      </button>

                      <button
                        type="button"
                        onClick={(e) => handleDeleteItem(item.id, e)}
                        className="p-1.5 rounded-lg text-slate-300 hover:text-rose-500 transition-colors"
                        title="Delete item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-orange-600 transition-colors line-clamp-1">
                    {item.recipeName}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {dateStr}
                  </span>
                  <span className="text-orange-600 dark:text-orange-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Recipe <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-12 text-center space-y-4 max-w-md mx-auto my-12">
          <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-950/80 text-orange-600 dark:text-orange-400 flex items-center justify-center mx-auto">
            <Utensils className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {searchQuery ? 'No matching recipes found' : 'No saved history yet'}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {searchQuery
                ? 'Try searching for a different keyword or cuisine.'
                : 'Recipes you generate in the AI Kitchen Studio will automatically appear here.'}
            </p>
          </div>
          <Link
            href="/generator"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm rounded-xl shadow-md transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4" /> Generate Your First Recipe
          </Link>
        </div>
      )}

    </div>
  );
}
