'use client';

import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import UxioLogo from '@/components/UxioLogo';
import { NavSection, Subroute, Locale } from '@/types';
import { getSectionIcon } from './SidebarSectionIcon';
import { getSecondaryIcon, SecondaryLinkItem } from './SidebarSecondaryLinks';

interface SidebarMobileModalProps {
  isOpen: boolean;
  onClose: () => void;
  sitemap: NavSection[];
  secondaryLinks: SecondaryLinkItem[];
  pathname: string;
  currentLang: Locale;
}

export default function SidebarMobileModal({
  isOpen,
  onClose,
  sitemap,
  secondaryLinks,
  pathname,
  currentLang,
}: SidebarMobileModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex">
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      <div className="relative w-[300px] max-w-[85vw] bg-[#0E0E10] border-r border-white/10 h-full p-6 flex flex-col justify-between overflow-y-auto z-10 animate-slideInLeft text-[#EDEDEE]">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Link href={`/${currentLang}`} onClick={onClose}>
              <UxioLogo className="h-6 w-auto" />
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/[0.06] text-[#8E8E93] hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="space-y-4">
            {sitemap.map((section: NavSection) => (
              <div key={section.id} className="space-y-1.5">
                <div className="flex items-center gap-2 font-display font-semibold text-xs text-[#8E8E93] uppercase tracking-wider">
                  {getSectionIcon(section.id)}
                  <span>{section.label}</span>
                </div>
                <div className="space-y-1 pl-3.5 border-l border-white/[0.08]">
                  {section.subGroups ? (
                    <div className="space-y-2.5 pt-1">
                      {section.subGroups.map((group, gIdx) => {
                        const isMainProject = group.title.toLowerCase().includes('proyect') || group.title.toLowerCase().includes('project') || group.title.toLowerCase().includes('eco');
                        return (
                          <div key={group.title || gIdx} className="space-y-1">
                            <div className="pt-1 pb-0.5 flex items-center">
                              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] shadow-2xs">
                                <span
                                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                                  style={{
                                    backgroundColor: isMainProject ? '#FE385B' : '#00F0FF',
                                    boxShadow: `0 0 6px ${isMainProject ? '#FE385B' : '#00F0FF'}`,
                                  }}
                                />
                                <span
                                  className={`font-display font-bold text-[10px] uppercase tracking-wider ${
                                    isMainProject
                                      ? 'bg-gradient-to-r from-[#FE385B] to-[#FF7F07] bg-clip-text text-transparent'
                                      : 'bg-gradient-to-r from-[#00F0FF] to-[#7928CA] bg-clip-text text-transparent'
                                  }`}
                                >
                                  {group.title}
                                </span>
                              </div>
                            </div>
                            <div className="space-y-0.5 pl-1">
                              {group.items.map((sub: Subroute) => {
                                const isCurrent = pathname === sub.path;
                                return (
                                  <Link
                                    key={sub.path}
                                    href={sub.path}
                                    onClick={onClose}
                                    className={`
                                      flex items-center justify-between py-1 text-xs transition-colors
                                      ${isCurrent ? 'text-white font-bold' : 'text-[#8E8E93] hover:text-white'}
                                    `}
                                  >
                                    <span className="truncate">{sub.name}</span>
                                    {sub.badge && (
                                      <span className="font-mono text-[8px] px-1 py-0.2 rounded bg-white/[0.08] text-[#8E8E93]">
                                        {sub.badge}
                                      </span>
                                    )}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    section.subroutes.map((sub: Subroute) => {
                      const isCurrent = pathname === sub.path;
                      return (
                        <Link
                          key={sub.path}
                          href={sub.path}
                          onClick={onClose}
                          className={`
                            flex items-center justify-between py-1.5 text-xs transition-colors
                            ${isCurrent ? 'text-white font-bold' : 'text-[#8E8E93] hover:text-white'}
                          `}
                        >
                          <span className="truncate">{sub.name}</span>
                          {sub.status && (
                            <span
                              className="inline-flex items-center gap-1 font-mono text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase"
                              style={{
                                backgroundColor: `${sub.statusColor || '#FE385B'}20`,
                                color: sub.statusColor || '#FE385B',
                              }}
                            >
                              <span
                                className="w-1 h-1 rounded-full animate-pulse"
                                style={{ backgroundColor: sub.statusColor || '#FE385B' }}
                              />
                              <span>{sub.status}</span>
                            </span>
                          )}
                          {sub.badge && !sub.status && (
                            <span className="font-mono text-[8.5px] px-1.5 py-0.2 rounded bg-white/[0.08] text-[#8E8E93]">
                              {sub.badge}
                            </span>
                          )}
                        </Link>
                      );
                    })
                  )}
                </div>
              </div>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-white/[0.08] space-y-2">
          {secondaryLinks.map((link: SecondaryLinkItem) => {
            const displayLabel = link.label || link.name || link.id;
            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={onClose}
                className={`
                  flex items-center justify-between py-1.5 px-2 rounded-lg text-xs transition-colors
                  ${link.highlight 
                    ? 'bg-[#FE385B]/15 text-[#FE385B] font-semibold' 
                    : 'text-[#8E8E93] hover:text-white'
                  }
                `}
              >
                <div className="flex items-center gap-2">
                  {getSecondaryIcon(link.id)}
                  <span>{displayLabel}</span>
                </div>
                {link.count && (
                  <span className="font-mono text-[9px] text-[#8E8E93]">{link.count}</span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
