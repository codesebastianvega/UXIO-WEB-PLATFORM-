'use client';

import React, { useState, useMemo } from 'react';
import { 
  ResourceCategory, 
  ResourceTier, 
  RESOURCES_DATA,
  SECTION_METADATA
} from '@/data/resources';
import { Locale } from '@/types';

// Modular Sub-Components
import ResourcesHeader from './resources/catalog/ResourcesHeader';
import ResourcesFilterBar from './resources/catalog/ResourcesFilterBar';
import ResourceCard from './resources/catalog/ResourceCard';

interface ResourcesCatalogViewProps {
  lang: Locale;
  section?: 'all' | 'components' | 'libraries' | 'tools' | 'templates' | 'open-source';
  initialCategory?: string;
  initialTier?: string;
}

export default function ResourcesCatalogView({
  lang,
  section = 'all',
  initialCategory = 'all',
  initialTier = 'all',
}: ResourcesCatalogViewProps) {
  const isEs = lang === 'es';

  // Section Metadata
  const meta = SECTION_METADATA[section] || SECTION_METADATA.all;

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory>('all');
  const [selectedTier, setSelectedTier] = useState<ResourceTier>(
    section === 'open-source' ? 'free' : (initialTier as ResourceTier) || 'all'
  );
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Copy Install Command
  const handleCopyInstall = (id: string, cmd: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(cmd);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filtered Items Memo
  const filteredResources = useMemo(() => {
    return RESOURCES_DATA.filter((item) => {
      // 1. Base Section Scope Filter
      if (section === 'components' && item.type !== 'component') return false;
      if (section === 'libraries' && item.type !== 'library') return false;
      if (section === 'tools' && item.type !== 'tool') return false;
      if (section === 'templates' && item.type !== 'template') return false;
      if (section === 'open-source' && !item.isOpenSource) return false;

      // 2. Subcategory Filter
      const matchCategory = 
        selectedCategory === 'all' || 
        item.category === selectedCategory ||
        (selectedCategory === 'hover' && (item.category === 'cards' || item.category === 'navigation'));

      // 3. Tier Filter
      const matchTier = 
        selectedTier === 'all' || 
        (selectedTier === 'free' && item.isOpenSource) || 
        (selectedTier === 'pro' && item.tier === 'pro');

      // 4. Search Query Match
      const query = searchQuery.toLowerCase().trim();
      const matchQuery = 
        query === '' ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tech.some(t => t.toLowerCase().includes(query));

      return matchCategory && matchTier && matchQuery;
    });
  }, [section, selectedCategory, selectedTier, searchQuery]);

  return (
    <div className="space-y-10">
      {/* 1. Modular Header */}
      <ResourcesHeader meta={meta} lang={lang} />

      {/* 2. Filter Bar */}
      <ResourcesFilterBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedTier={selectedTier}
        setSelectedTier={setSelectedTier}
        viewMode={viewMode}
        setViewMode={setViewMode}
        totalCount={filteredResources.length}
        lang={lang}
      />

      {/* 3. Resources Grid / List */}
      {filteredResources.length > 0 ? (
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredResources.map((item) => (
            <ResourceCard
              key={item.id}
              item={item}
              lang={lang}
              copiedId={copiedId}
              onCopyInstall={handleCopyInstall}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl bg-black/[0.02] dark:bg-white/[0.02] border border-dashed border-black/10 dark:border-white/10 space-y-3">
          <p className="font-mono text-sm text-[#8E8E93]">
            {isEs ? 'No se encontraron recursos con los filtros seleccionados.' : 'No resources found with selected filters.'}
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setSelectedTier('all'); }}
            className="font-mono text-xs text-[#FE385B] hover:underline cursor-pointer"
          >
            {isEs ? 'Limpiar filtros' : 'Clear filters'}
          </button>
        </div>
      )}
    </div>
  );
}
