'use client';

import React from 'react';
import { Search, LayoutGrid, List } from 'lucide-react';
import { ResourceCategory, ResourceTier, CATEGORIES_LIST } from '@/data/resources';
import { Locale } from '@/types';

interface ResourcesFilterBarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: ResourceCategory;
  setSelectedCategory: (c: ResourceCategory) => void;
  selectedTier: ResourceTier;
  setSelectedTier: (t: ResourceTier) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (v: 'grid' | 'list') => void;
  totalCount: number;
  lang: Locale;
}

export default function ResourcesFilterBar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedTier,
  setSelectedTier,
  viewMode,
  setViewMode,
  totalCount,
  lang,
}: ResourcesFilterBarProps) {
  const isEs = lang === 'es';

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8E8E93]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isEs ? 'Buscar componentes, hooks, tags...' : 'Search components, hooks, tags...'}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans placeholder-[#8E8E93] focus:outline-none focus:border-[#FE385B]"
          />
        </div>

        {/* Free / Pro Switch & View Toggle */}
        <div className="flex items-center gap-2">
          <div className="flex rounded-xl bg-black/[0.04] dark:bg-white/[0.06] p-1 border border-black/[0.06] dark:border-white/[0.08] font-mono text-[10.5px]">
            {(['all', 'free', 'pro'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedTier(t)}
                className={`px-3 py-1 rounded-lg font-semibold capitalize transition-all ${
                  selectedTier === t
                    ? 'bg-white dark:bg-[#111] text-black dark:text-white shadow-2xs'
                    : 'text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
                }`}
              >
                {t === 'all' ? (isEs ? 'Todos' : 'All') : t === 'free' ? 'Open Source' : 'Pro'}
              </button>
            ))}
          </div>

          <div className="flex rounded-xl bg-black/[0.04] dark:bg-white/[0.06] p-1 border border-black/[0.06] dark:border-white/[0.08]">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-all ${
                viewMode === 'grid' ? 'bg-white dark:bg-[#111] text-black dark:text-white shadow-2xs' : 'text-[#8E8E93]'
              }`}
            >
              <LayoutGrid size={14} />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg transition-all ${
                viewMode === 'list' ? 'bg-white dark:bg-[#111] text-black dark:text-white shadow-2xs' : 'text-[#8E8E93]'
              }`}
            >
              <List size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Subcategory Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
        {CATEGORIES_LIST.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl font-mono text-[11px] whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? 'bg-[#111111] dark:bg-white text-white dark:text-black font-bold shadow-xs'
                : 'bg-black/[0.03] dark:bg-white/[0.04] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white hover:bg-black/[0.06] dark:hover:bg-white/[0.08]'
            }`}
          >
            {isEs ? cat.labelEs : cat.labelEn}
          </button>
        ))}
        <span className="font-mono text-[10px] text-[#8E8E93] ml-auto flex-shrink-0 pl-2">
          {totalCount} {isEs ? 'recursos' : 'resources'}
        </span>
      </div>
    </div>
  );
}
