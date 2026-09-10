'use client';

import React, { useState } from 'react';
import { Sparkles, Clock, ArrowRight, BookOpen, Send } from 'lucide-react';
import { InsightArticle } from '@/data/insights';
import { Locale } from '@/types';

interface InsightsCatalogProps {
  categories: { id: string; label: string }[];
  articles: InsightArticle[];
  lang: Locale;
}

export default function InsightsCatalog({ categories, articles, lang }: InsightsCatalogProps) {
  const isEs = lang === 'es';
  const [selectedCat, setSelectedCat] = useState('all');
  const [subscribed, setSubscribed] = useState(false);

  const filteredArticles = selectedCat === 'all'
    ? articles
    : articles.filter((a) => a.category === selectedCat);

  const featuredArticle = articles.find((a) => a.featured) || articles[0];
  const listArticles = filteredArticles.filter((a) => a.id !== (selectedCat === 'all' ? featuredArticle.id : ''));

  return (
    <div className="space-y-10">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCat === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCat(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-display font-semibold transition-all whitespace-nowrap active:scale-95 ${
                isActive
                  ? 'bg-[#111111] dark:bg-white text-white dark:text-black shadow-md'
                  : 'bg-black/[0.04] dark:bg-white/[0.05] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white hover:bg-black/[0.08] dark:hover:bg-white/[0.08]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Featured Lead Insight (Only shown on 'all') */}
      {selectedCat === 'all' && featuredArticle && (
        <article className="group relative p-7 sm:p-10 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] hover:border-black/[0.18] dark:hover:border-white/[0.22] transition-all space-y-6 hover:shadow-soft-xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/25 text-[#00F0FF]">
                FEATURED // {featuredArticle.categoryLabel}
              </span>
              <span className="font-mono text-[11px] text-[#8E8E93]">
                {featuredArticle.publishedAt}
              </span>
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-[#8E8E93]">
              <Clock size={13} />
              <span>{featuredArticle.readTime}</span>
            </div>
          </div>

          <div className="space-y-3 max-w-3xl">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111111] dark:text-white leading-tight group-hover:text-[#00F0FF] transition-colors">
              {featuredArticle.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans">
              {featuredArticle.excerpt}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/[0.04] dark:border-white/[0.06]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#00F0FF]/15 border border-[#00F0FF]/30 flex items-center justify-center font-display font-bold text-xs text-[#00F0FF]">
                {featuredArticle.author.name[0]}
              </div>
              <div className="font-mono text-xs">
                <span className="font-bold text-[#111111] dark:text-white block">
                  {featuredArticle.author.name}
                </span>
                <span className="text-[10px] text-[#8E8E93]">
                  {featuredArticle.author.role}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-display font-bold text-[#111111] dark:text-white group-hover:translate-x-1 transition-transform">
              <BookOpen size={14} className="text-[#00F0FF]" />
              <span>{isEs ? 'Leer Ensayo Completo' : 'Read Full Essay'}</span>
              <ArrowRight size={14} />
            </div>
          </div>
        </article>
      )}

      {/* Grid of Other Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {listArticles.map((article) => (
          <article
            key={article.id}
            className="group relative p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] hover:border-black/[0.16] dark:hover:border-white/[0.2] transition-all flex flex-col justify-between space-y-5 hover:shadow-soft-lg"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span
                  className="font-mono text-[9.5px] uppercase font-bold px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: `${article.accent}15`,
                    color: article.accent,
                    borderColor: `${article.accent}30`,
                    borderWidth: 1,
                  }}
                >
                  {article.categoryLabel}
                </span>
                <span className="font-mono text-[10px] text-[#8E8E93]">
                  {article.readTime}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg sm:text-xl text-[#111111] dark:text-white leading-snug group-hover:text-[#FE385B] transition-colors">
                {article.title}
              </h3>

              <p className="text-xs text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans line-clamp-3">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-3 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {article.tags.slice(0, 2).map((t, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-[9.5px] text-[#8E8E93] bg-black/[0.03] dark:bg-white/[0.04] px-1.5 py-0.5 rounded"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-1 font-display font-semibold text-xs text-[#111111] dark:text-white group-hover:translate-x-0.5 transition-transform">
                <span>{isEs ? 'Leer' : 'Read'}</span>
                <ArrowRight size={13} />
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Studio Dispatch Newsletter Form */}
      <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-soft-sm">
        <div className="space-y-1.5 max-w-xl">
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-[#00F0FF]" />
            <span className="font-mono text-[10px] text-[#00F0FF] uppercase tracking-wider font-semibold">
              // STUDIO DISPATCH
            </span>
          </div>
          <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white">
            {isEs ? 'Recibe ensayos de ingeniería y producto' : 'Get product & engineering essays'}
          </h3>
          <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans">
            {isEs
              ? 'Publicamos aprendizajes técnicos y de adquisición comercial quincenalmente. Sin spam, cero contenido genérico.'
              : 'Bi-weekly technical breakdowns and commercial acquisition architectures. Zero fluff.'}
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubscribed(true);
          }}
          className="w-full md:w-auto flex items-center gap-2"
        >
          {subscribed ? (
            <div className="px-4 py-2.5 rounded-xl bg-[#10B981]/15 border border-[#10B981]/30 text-xs font-mono text-[#10B981]">
              ✓ {isEs ? '¡Suscrito al Dispatch!' : 'Subscribed to Dispatch!'}
            </div>
          ) : (
            <>
              <input
                type="email"
                required
                placeholder={isEs ? 'tu@correo.com' : 'you@domain.com'}
                className="px-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#00F0FF] transition-colors w-full sm:w-64"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#00F0FF] hover:bg-[#00F0FF]/90 text-black font-display font-bold text-xs shadow-md shadow-[#00F0FF]/20 transition-all active:scale-95 shrink-0"
              >
                <span>{isEs ? 'Unirme' : 'Join'}</span>
                <Send size={13} />
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
