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

  const sitemap = getSitemap(currentLang);
  const secondaryLinks = getSecondaryLinks(currentLang);

  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>(() => {
    const activeSection = sitemap.find(s => pathname?.startsWith(`/${currentLang}/${s.id}`));
    if (activeSection) {
      return { [activeSection.id]: true };
    }
    return {};
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

  const dict = dictionary?.sidebar || {
    subtitle: 'STUDIO & LABS',
    status_live: currentLang === 'es' ? 'AHORA EN UXIO' : 'NOW AT UXIO',
    nav_heading: currentLang === 'es' ? 'NAVEGACIÓN' : 'NAVIGATION',
    groups_count: currentLang === 'es' ? '05 GRUPOS' : '05 GROUPS',
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
            <div className="flex items-center justify-center w-full pb-2 border-b border-white/[0.08]">
              <Link 
                href={`/${currentLang}`} 
                className="group relative flex items-center justify-center p-1.5 rounded-xl hover:bg-white/[0.06] transition-all" 
                title="UXIO Studio & Labs"
              >
                <div className="h-6 w-auto max-w-[36px] overflow-hidden flex items-center justify-center">
                  <img
                    src="/uxio-logo.svg" 
                    alt="UXIO" 
                    className="w-full h-full object-contain select-none transition-transform duration-300 group-hover:scale-110"
                    loading="eager"
                  />
                </div>
              </Link>
            </div>
          )}

          {/* Rotating Live Dispatch (Solo en modo expandido) */}
          {!isCollapsed && (
            <div className="w-full">
              <SidebarLiveDispatch currentLang={currentLang} dictionary={dictionary} />
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
