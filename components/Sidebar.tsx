'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react';
import UxioLogo from './UxioLogo';
import { getSitemap, getSecondaryLinks } from '@/data/sitemap';
import { useSidebar } from '@/context/SidebarContext';
import { Locale } from '@/types';

// Modular Sub-Components
import SidebarLiveDispatch from './navigation/SidebarLiveDispatch';
import SidebarNavSection from './navigation/SidebarNavSection';
import SidebarSecondaryLinks from './navigation/SidebarSecondaryLinks';
import SidebarMobileModal from './navigation/SidebarMobileModal';

interface SidebarProps {
  lang?: Locale;
  dictionary?: any;
}

export default function Sidebar({
  lang,
  dictionary
}: SidebarProps) {
  const pathname = usePathname();
  const { isCollapsed, toggleSidebar } = useSidebar();
  
  const pathSegment = pathname?.split('/')[1];
  const currentLang: Locale = pathSegment === 'en' ? 'en' : (pathSegment === 'es' ? 'es' : (lang || 'es'));

  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    services: true,
    works: false,
    labs: true,
    resources: true,
    academy: true,
    'open-source': false
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // Keyboard shortcut (⌘B / Ctrl+B) to toggle sidebar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleSidebar]);

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const sitemap = getSitemap(currentLang);
  const secondaryLinks = getSecondaryLinks(currentLang);

  const dict = dictionary?.sidebar || {
    subtitle: 'STUDIO & LABS',
    status_live: currentLang === 'es' ? 'DISPATCH EN VIVO' : 'DISPATCH LIVE',
    status_time: '08:30 UTC',
    nav_heading: currentLang === 'es' ? 'NAVEGACIÓN' : 'NAVIGATION',
    groups_count: currentLang === 'es' ? '04 GRUPOS' : '04 GROUPS',
  };

  return (
    <>
      {/* Mobile Top Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-[#0E0E10] border-b border-white/10 sticky top-0 z-40">
        <Link href={`/${currentLang}`} className="flex items-center gap-2.5">
          <UxioLogo className="h-6 w-auto" />
          <span className="font-mono text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-[#8E8E93]">v1.0</span>
        </Link>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="p-2 rounded-lg bg-white/[0.06] text-[#EDEDEE]"
          aria-label="Abrir menú"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Menu Slide-over Modal */}
      <SidebarMobileModal
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sitemap={sitemap}
        secondaryLinks={secondaryLinks}
        pathname={pathname}
        currentLang={currentLang}
      />

      {/* Desktop Main Sidebar Container */}
      <aside
        className={`
          hidden md:flex flex-col justify-between shrink-0 h-screen sticky top-0 z-30 transition-all duration-300
          border-r border-white/[0.08] bg-[#0E0E10] text-[#EDEDEE]
          ${isCollapsed ? 'w-[72px] p-2.5 items-center' : 'w-[280px] p-4'}
        `}
      >
        <div className="flex flex-col items-center md:items-start gap-3.5 w-full flex-1 min-h-0 overflow-y-auto no-scrollbar">
          {/* Logo & Collapse Header */}
          {!isCollapsed ? (
            <div className="flex items-center justify-between w-full pb-2 border-b border-white/[0.08]">
              <Link href={`/${currentLang}`} className="flex flex-col gap-1.5 group">
                <div className="flex items-center">
                  <div className="relative inline-flex items-center h-8 w-auto max-w-[130px] transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src="/uxio-logo.svg" 
                      alt="UXIO" 
                      className="w-full h-full object-contain select-none"
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="font-mono text-[9.5px] text-[#8E8E93] tracking-wider">{dict.subtitle}</div>
              </Link>

              <button
                type="button"
                onClick={toggleSidebar}
                className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-[#8E8E93] hover:text-white transition-colors cursor-pointer"
                title={currentLang === 'es' ? 'Colapsar barra lateral (Ctrl+B)' : 'Collapse sidebar (Ctrl+B)'}
              >
                <PanelLeftClose size={15} />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2.5 w-full pb-2.5 border-b border-white/[0.08]">
              <Link 
                href={`/${currentLang}`} 
                className="group relative flex items-center justify-center p-1 rounded-xl hover:bg-white/[0.06] transition-all" 
                title="UXIO Studio & Labs"
              >
                <div className="h-6 w-auto max-w-[46px] overflow-hidden flex items-center justify-center">
                  <img
                    src="/uxio-logo.svg"
                    alt="UXIO"
                    className="w-full h-full object-contain select-none transition-transform duration-300 group-hover:scale-110"
                    loading="eager"
                  />
                </div>
              </Link>

              <button
                type="button"
                onClick={toggleSidebar}
                className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.14] text-[#8E8E93] hover:text-white transition-colors cursor-pointer"
                title={currentLang === 'es' ? 'Expandir barra lateral (Ctrl+B)' : 'Expand sidebar (Ctrl+B)'}
                aria-label="Expand sidebar"
              >
                <PanelLeftOpen size={14} />
              </button>
            </div>
          )}

          {/* Rotating Live Dispatch */}
          {!isCollapsed ? (
            <div className="w-full">
              <SidebarLiveDispatch currentLang={currentLang} dictionary={dictionary} />
            </div>
          ) : (
            <div 
              className="relative group p-2 rounded-xl bg-[#171719] border border-white/[0.06] hover:border-[#00F0FF]/40 flex items-center justify-center cursor-pointer transition-colors"
              title={`${dict.status_live} (${dict.status_time})`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF] animate-pulse" />
              
              {/* Flyout Tooltip */}
              <div className="absolute left-full ml-3 px-3 py-2 bg-[#171719] border border-white/[0.1] rounded-xl shadow-2xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50 font-mono text-xs text-[#EDEDEE] max-w-xs">
                <div className="text-[10px] text-[#00F0FF] font-semibold mb-0.5">{dict.status_live} ({dict.status_time})</div>
                <div className="text-[#8E8E93] text-[11px] font-sans">Diseñando app nativa para smartwatch · SIE Travel</div>
              </div>
            </div>
          )}

          {/* Navigation Sections Hierarchy */}
          <nav className={`w-full ${isCollapsed ? 'flex flex-col items-center space-y-2' : 'space-y-1'}`}>
            {!isCollapsed && (
              <div className="font-mono text-[10px] uppercase text-[#8E8E93] tracking-wider px-2 py-1 flex items-center justify-between">
                <span>{dict.nav_heading}</span>
                <span>{dict.groups_count}</span>
              </div>
            )}

            {sitemap.map((section, idx) => (
              <SidebarNavSection
                key={section.id}
                section={section}
                idx={idx}
                isCollapsed={isCollapsed}
                isOpen={!!openAccordions[section.id]}
                onToggle={() => toggleAccordion(section.id)}
                pathname={pathname}
                currentLang={currentLang}
                isHovered={hoveredSection === section.id}
                onHover={(hovered) => setHoveredSection(hovered ? section.id : null)}
              />
            ))}
          </nav>
        </div>

        {/* Secondary Bottom Links */}
        <SidebarSecondaryLinks
          secondaryLinks={secondaryLinks}
          pathname={pathname}
          isCollapsed={isCollapsed}
          currentLang={currentLang}
        />
      </aside>
    </>
  );
}
