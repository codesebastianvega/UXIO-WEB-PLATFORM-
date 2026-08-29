'use client';

import React from 'react';
import Link from 'next/link';
import { Info, Users, Mail, Sparkles, ArrowUpRight } from 'lucide-react';
import { Locale } from '@/types';

export interface SecondaryLinkItem {
  id: string;
  label?: string;
  name?: string;
  path: string;
  count?: string;
  badge?: string;
  highlight?: boolean;
}

interface SidebarSecondaryLinksProps {
  secondaryLinks: SecondaryLinkItem[];
  pathname: string;
  isCollapsed: boolean;
  currentLang: Locale;
}

export function getSecondaryIcon(id: string) {
  switch (id) {
    case 'insights': return <Sparkles size={14} className="text-[#00F0FF]" />;
    case 'about': return <Info size={14} className="text-[#8E8E93]" />;
    case 'people': return <Users size={14} className="text-[#8E8E93]" />;
    case 'contact': return <Mail size={14} className="text-[#FE385B]" />;
    default: return <Sparkles size={14} className="text-[#8E8E93]" />;
  }
}

export default function SidebarSecondaryLinks({
  secondaryLinks,
  pathname,
  isCollapsed,
}: SidebarSecondaryLinksProps) {
  if (isCollapsed) {
    return (
      <div className="flex flex-col items-center space-y-2 w-full pt-3 border-t border-white/[0.08]">
        {secondaryLinks.map((link) => {
          const isCurrent = pathname === link.path;
          const displayLabel = link.label || link.name || link.id;

          return (
            <div key={link.path} className="relative group">
              <Link
                href={link.path}
                className={`
                  w-10 h-10 rounded-xl flex items-center justify-center transition-all cursor-pointer relative
                  ${isCurrent 
                    ? 'bg-white/[0.12] text-white border border-white/20 shadow-[0_0_12px_rgba(0,0,0,0.5)]' 
                    : link.highlight
                      ? 'bg-[#FE385B]/15 text-[#FE385B] border border-[#FE385B]/30 hover:bg-[#FE385B] hover:text-white'
                      : 'text-[#8E8E93] hover:text-[#EDEDEE] hover:bg-white/[0.08]'
                  }
                `}
                title={displayLabel}
                aria-label={displayLabel}
              >
                {getSecondaryIcon(link.id)}
                {isCurrent && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 rounded-r bg-[#FE385B]" />
                )}
              </Link>

              {/* Flyout tooltip in dock mode */}
              <div className="absolute left-full ml-3 px-2.5 py-1 bg-[#171719] border border-white/[0.1] rounded-lg shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50 font-mono text-[11px] text-[#EDEDEE]">
                {displayLabel}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="w-full pt-3 border-t border-white/[0.08] space-y-1">
      {secondaryLinks.map((link) => {
        const isCurrent = pathname === link.path;
        const displayLabel = link.label || link.name || link.id;

        if (link.highlight) {
          return (
            <Link
              key={link.path}
              href={link.path}
              className={`
                w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer mt-2
                ${isCurrent 
                  ? 'bg-white text-black shadow-md' 
                  : 'bg-[#FE385B]/15 text-[#FE385B] border border-[#FE385B]/30 hover:bg-[#FE385B] hover:text-white shadow-2xs'
                }
              `}
            >
              <div className="flex items-center gap-2">
                <Mail size={13} />
                <span>{displayLabel}</span>
              </div>
              <ArrowUpRight size={13} className="opacity-70" />
            </Link>
          );
        }

        return (
          <Link
            key={link.path}
            href={link.path}
            className={`
              w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-colors cursor-pointer
              ${isCurrent 
                ? 'bg-white text-black font-semibold shadow-sm' 
                : 'text-[#8E8E93] hover:text-[#EDEDEE] hover:bg-white/[0.06]'
              }
            `}
          >
            <div className="flex items-center gap-2">
              {getSecondaryIcon(link.id)}
              <span>{displayLabel}</span>
            </div>

            {link.count && (
              <span className={`font-mono text-[9px] px-1.5 py-0.2 rounded ${isCurrent ? 'bg-black/10 text-black' : 'bg-white/[0.08] text-[#8E8E93]'}`}>
                {link.count}
              </span>
            )}

            {link.badge && (
              <span className={`font-mono text-[9px] px-1.5 py-0.2 rounded ${isCurrent ? 'bg-black/10 text-black' : 'bg-white/[0.08] text-[#8E8E93]'}`}>
                {link.badge}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
