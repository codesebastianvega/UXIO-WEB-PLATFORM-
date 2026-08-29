'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Search, ArrowRight, Sun, Moon, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { getSitemap } from '@/data/sitemap';
import { useSidebar } from '@/context/SidebarContext';
import { Locale } from '@/types';

interface DynamicTopBarProps {
  lang: Locale;
  dictionary?: any;
}

export default function DynamicTopBar({
  lang,
  dictionary
}: DynamicTopBarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();
  const { isCollapsed, toggleSidebar } = useSidebar();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pathSegment = pathname?.split('/')[1];
  const currentLang: Locale = pathSegment === 'en' ? 'en' : (pathSegment === 'es' ? 'es' : (lang || 'es'));

  const sitemap = getSitemap(currentLang);
  const dict = dictionary?.home || {};

  // Parse path segments for breadcrumbs & contextual tabs
  const segments = pathname.split('/').filter(Boolean);
  const sectionKey = segments[1];

  const activeSection = sitemap.find(s => s.id === sectionKey);
  const visibleSubroutes = activeSection ? activeSection.subroutes.filter(sub => sub.isVisible !== false) : [];

  const handleLanguageChange = (newLang: Locale) => {
    if (newLang === currentLang) return;
    const segs = pathname.split('/');
    if (segs[1] === 'es' || segs[1] === 'en') {
      segs[1] = newLang;
    } else {
      segs.splice(1, 0, newLang);
    }
    const newPath = segs.join('/') || `/${newLang}`;
    router.push(newPath);
  };

  return (
    <header className="h-14 w-full bg-[#F7F7F5]/90 dark:bg-[#0D0D0E]/90 backdrop-blur-md border-b border-black/[0.08] dark:border-white/[0.08] px-4 sm:px-6 md:px-10 lg:px-12 flex items-center justify-between sticky top-0 z-30 select-none transition-colors">
      
      {/* LEFT: Sidebar Quick Toggle + Breadcrumbs + Contextual Tabs */}
      <div className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto no-scrollbar py-1">
        {/* Quick Sidebar Toggle for Desktop (Only when collapsed to avoid duplicates) */}
        {isCollapsed && (
          <button
            onClick={toggleSidebar}
            className="hidden lg:flex items-center justify-center w-7 h-7 rounded-lg text-[#8E8E93] hover:text-[#111111] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.08] transition-colors"
            title={currentLang === 'es' ? 'Expandir barra lateral (Ctrl+B)' : 'Expand sidebar (Ctrl+B)'}
            aria-label="Expand sidebar"
          >
            <PanelLeftOpen size={15} />
          </button>
        )}

        {/* Breadcrumb Root */}
        <div className="flex items-center gap-1.5 font-mono text-xs text-[#8E8E93] flex-shrink-0">
          <Link 
            href={`/${currentLang}`}
            className="hover:text-[#111111] dark:hover:text-white transition-colors"
          >
            Home
          </Link>

          {activeSection && (
            <>
              <span className="text-black/20 dark:text-white/20">/</span>
              <span className="text-[#111111] dark:text-[#EDEDEE] font-medium">
                {activeSection.label}
              </span>
            </>
          )}
        </div>

        {/* Separator & Horizontal Contextual Tabs */}
        {visibleSubroutes.length > 0 && (
          <>
            <span className="text-black/20 dark:text-white/20 font-mono text-xs flex-shrink-0">|</span>
            <nav className="flex items-center gap-1.5 flex-shrink-0">
              {visibleSubroutes.map((sub) => {
                const isActive = pathname === sub.path;
                return (
                  <Link
                    key={sub.path}
                    href={sub.path}
                    className={`
                      px-2.5 py-1 rounded-lg text-xs font-sans transition-all flex items-center gap-1.5
                      ${isActive
                        ? 'bg-black/[0.07] dark:bg-white/[0.1] text-[#111111] dark:text-white font-semibold shadow-2xs'
                        : 'text-[#666666] dark:text-[#8E8E93] hover:text-[#111111] dark:hover:text-[#EDEDEE] hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                      }
                    `}
                  >
                    <span>{sub.name}</span>
                    {sub.badge && (
                      <span className="font-mono text-[9px] px-1.5 py-0.2 rounded bg-black/[0.04] dark:bg-white/[0.08] text-[#8E8E93]">
                        {sub.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </>
        )}
      </div>

      {/* RIGHT: Actions + Minimalist Language Toggle + Theme Switcher */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-4">
        {/* Search Command Palette Trigger */}
        <button 
          onClick={() => alert("Search palette (⌘K)")}
          className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] hover:border-black/[0.18] dark:hover:border-white/[0.18] text-[#666666] dark:text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-all text-xs font-mono shadow-soft-sm"
        >
          <Search size={12} />
          <span>{dict.search_placeholder || 'Search'}</span>
          <kbd className="px-1.5 py-0.5 text-[10px] bg-black/[0.04] dark:bg-white/[0.08] rounded border border-black/[0.06] dark:border-white/[0.08]">⌘K</kbd>
        </button>

        {/* Ultra-Minimalist Language Switcher Pill */}
        <div className="inline-flex items-center p-0.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.08] border border-black/[0.06] dark:border-white/[0.08] text-xs font-mono">
          <button
            onClick={() => handleLanguageChange('es')}
            className={`
              px-2 py-0.5 rounded-lg transition-all
              ${currentLang === 'es'
                ? 'bg-white dark:bg-[#171719] text-[#111111] dark:text-white font-semibold shadow-2xs'
                : 'text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
              }
            `}
          >
            ES
          </button>
          <span className="text-black/15 dark:text-white/15 px-0.5 text-[10px]">/</span>
          <button
            onClick={() => handleLanguageChange('en')}
            className={`
              px-2 py-0.5 rounded-lg transition-all
              ${currentLang === 'en'
                ? 'bg-white dark:bg-[#171719] text-[#111111] dark:text-white font-semibold shadow-2xs'
                : 'text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
              }
            `}
          >
            EN
          </button>
        </div>

        {/* Minimalist Theme Toggle (Sun / Moon) */}
        <button
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className="w-8 h-8 rounded-xl bg-black/[0.04] dark:bg-white/[0.08] hover:bg-black/[0.08] dark:hover:bg-white/[0.14] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center text-[#111111] dark:text-[#EDEDEE] transition-all"
          aria-label="Toggle Theme"
        >
          {mounted ? (
            resolvedTheme === 'dark' ? (
              <Sun size={13} className="text-[#FFCC48]" />
            ) : (
              <Moon size={13} className="text-[#111111]" />
            )
          ) : (
            <div className="w-3.5 h-3.5" />
          )}
        </button>

        {/* Primary CTA */}
        <button 
          onClick={() => alert("Redirecting to UXIO Intake")}
          className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FE385B] hover:bg-[#e02d4e] text-white font-display font-semibold text-xs transition-all duration-200 shadow-accent-glow hover:shadow-lg active:scale-95"
        >
          <span>{dict.cta_start_project || (currentLang === 'es' ? 'Iniciar Proyecto' : 'Start a Project')}</span>
          <ArrowRight size={12} />
        </button>
      </div>

    </header>
  );
}
