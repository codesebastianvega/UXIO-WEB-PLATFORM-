'use client';

import React from 'react';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';
import { getSectionIcon } from './SidebarSectionIcon';
import { NavSection, Subroute, Locale } from '@/types';

interface SidebarNavSectionProps {
  section: NavSection;
  idx: number;
  isCollapsed: boolean;
  isOpen: boolean;
  onToggle: () => void;
  pathname: string;
  currentLang: Locale;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
}

export default function SidebarNavSection({
  section,
  idx,
  isCollapsed,
  isOpen,
  onToggle,
  pathname,
  currentLang,
  isHovered,
  onHover,
}: SidebarNavSectionProps) {
  const visibleSubroutes = section.subroutes.filter((sub) => sub.isVisible !== false);
  const countDisplay = String(visibleSubroutes.length).padStart(2, '0');
  const sectionBasePath = `/${currentLang}/${section.id}`;
  const isSectionActive = pathname.startsWith(sectionBasePath);
  const hasSubGroups = Boolean(section.subGroups && section.subGroups.length > 0);

  const renderSubGroupHeader = (title: string) => {
    const isEco = title.toLowerCase().includes('eco');
    return (
      <div className="px-1.5 pt-1.5 pb-0.5 flex items-center">
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] shadow-2xs">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{
              backgroundColor: isEco ? '#FE385B' : '#00F0FF',
              boxShadow: `0 0 6px ${isEco ? '#FE385B' : '#00F0FF'}`,
            }}
          />
          <span
            className={`font-display font-bold text-[10.5px] uppercase tracking-wider ${
              isEco
                ? 'bg-gradient-to-r from-[#FE385B] to-[#FF7F07] bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-[#00F0FF] to-[#7928CA] bg-clip-text text-transparent'
            }`}
          >
            {title}
          </span>
        </div>
      </div>
    );
  };

  const renderSubLink = (sub: Subroute) => {
    const isCurrent = pathname === sub.path;
    return (
      <Link
        key={sub.path}
        href={sub.path}
        className={`
          w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-all
          ${isCurrent
            ? 'bg-white text-black font-semibold shadow-xs translate-x-0.5'
            : 'text-[#8E8E93] hover:text-[#EDEDEE] hover:bg-white/[0.06]'
          }
        `}
      >
        <span className="truncate">{sub.name}</span>

        {/* Status Chip (Labs) */}
        {sub.status && (
          <span
            className="inline-flex items-center gap-1 font-mono text-[8.5px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider flex-shrink-0"
            style={{
              backgroundColor: `${sub.statusColor || '#FE385B'}18`,
              color: sub.statusColor || '#FE385B',
              border: `1px solid ${sub.statusColor || '#FE385B'}35`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{
                backgroundColor: sub.statusColor || '#FE385B',
                boxShadow: `0 0 5px ${sub.statusColor || '#FE385B'}`,
              }}
            />
            <span>{sub.status}</span>
          </span>
        )}

        {/* Standard Badge */}
        {sub.badge && !sub.status && (
          <span className={`font-mono text-[9px] px-1.5 py-0.2 rounded ${isCurrent ? 'bg-black/10 text-black' : 'bg-white/[0.08] text-[#8E8E93]'}`}>
            {sub.badge}
          </span>
        )}
      </Link>
    );
  };

  if (isCollapsed) {
    return (
      <div
        className="relative"
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      >
        {/* Compact Dock Button */}
        <Link
          href={sectionBasePath}
          className={`
            w-11 h-11 rounded-xl flex items-center justify-center transition-all relative cursor-pointer group
            ${isSectionActive 
              ? 'bg-white/[0.12] text-white border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.4)]' 
              : 'text-[#8E8E93] hover:text-[#EDEDEE] hover:bg-white/[0.08] border border-transparent'
            }
          `}
          title={section.label}
          aria-label={section.label}
        >
          {getSectionIcon(section.id)}
          
          {isSectionActive && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r bg-[#FE385B] shadow-[0_0_8px_#FE385B]" />
          )}
        </Link>

        {/* Hover Submenu Flyout in Dock mode */}
        {isHovered && (
          <div className="absolute left-full top-0 ml-3 w-64 p-3 bg-[#171719] border border-white/[0.12] rounded-2xl shadow-2xl z-50 animate-fadeIn backdrop-blur-xl max-h-80 overflow-y-auto no-scrollbar">
            <Link
              href={sectionBasePath}
              className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.08] hover:text-white transition-colors group/header"
            >
              <span className="font-display font-semibold text-xs text-[#EDEDEE] group-hover/header:text-white flex items-center gap-1.5">
                {getSectionIcon(section.id)}
                <span>{section.label}</span>
              </span>
              <span className="font-mono text-[10px] text-[#8E8E93] bg-white/[0.06] px-1.5 py-0.5 rounded">
                {countDisplay}
              </span>
            </Link>

            {hasSubGroups && section.subGroups ? (
              <div className="space-y-3">
                {section.subGroups.map((group, gIdx) => (
                  <div key={group.title || gIdx} className="space-y-1">
                    {renderSubGroupHeader(group.title)}
                    <div className="space-y-0.5">
                      {group.items.map((sub) => renderSubLink(sub))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-1">
                {visibleSubroutes.map((sub) => renderSubLink(sub))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // Expanded View
  return (
    <div className="py-1">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left text-[13px] font-medium text-[#EDEDEE] hover:bg-white/[0.06] transition-colors group cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-[#8E8E93] group-hover:text-[#EDEDEE] transition-colors">
            [{section.groupNumber || `0${idx + 1}`}]
          </span>
          <span className="font-display font-semibold text-sm text-[#EDEDEE]">{section.label}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-[#8E8E93] px-1.5 py-0.2 rounded bg-white/[0.06]">
            {countDisplay}
          </span>
          <span className="w-4 h-4 rounded-full flex items-center justify-center bg-white/[0.08] text-[#8E8E93] group-hover:bg-white/[0.15] group-hover:text-white transition-colors">
            {isOpen ? <Minus size={10} /> : <Plus size={10} />}
          </span>
        </div>
      </button>

      {isOpen && (
        <div className="mt-1 pl-3 space-y-0.5 border-l border-white/[0.08] ml-3.5">
          {hasSubGroups && section.subGroups ? (
            <div className="space-y-3 pt-1">
              {section.subGroups.map((group, gIdx) => (
                <div key={group.title || gIdx} className="space-y-1">
                  {renderSubGroupHeader(group.title)}
                  <div className="space-y-0.5 pl-1.5">
                    {group.items.map((sub) => renderSubLink(sub))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-0.5 pt-0.5">
              {visibleSubroutes.map((sub) => renderSubLink(sub))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
