export const HOVER_LINK_PREVIEW_CODE = `'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export interface HoverLinkPreviewProps {
  href: string;
  title: string;
  description?: string;
  badge?: string;
  accentColor?: string;
  tag?: string;
  placement?: 'top' | 'bottom';
  cardWidth?: number;
  showImage?: boolean;
  imageSrc?: string;
  ctaText?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * HoverLinkPreview - High-performance interactive popover component with safe hover bridge.
 * Open Source UI Component by UXIO Studio & Labs.
 */
export default function HoverLinkPreview({
  href,
  title,
  description,
  badge = 'Component',
  accentColor = '#00F0FF',
  tag = '// PREVIEW',
  placement = 'top',
  cardWidth = 280,
  showImage = false,
  imageSrc,
  ctaText = 'Ver Componente ➔',
  children,
  className = '',
}: HoverLinkPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 250);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const isTop = placement === 'top';

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={\`relative inline-flex items-center \${className}\`}
    >
      <Link
        href={href}
        className="group/link inline-flex items-center gap-1.5 font-semibold text-[#111111] dark:text-white underline decoration-black/20 dark:decoration-white/20 underline-offset-4 hover:decoration-[#FE385B] hover:text-[#FE385B] transition-all cursor-pointer"
      >
        <span>{children}</span>
        <ArrowUpRight size={13} className="opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all text-[#8E8E93] group-hover/link:text-[#FE385B]" />
      </Link>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={\`absolute left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out \${
          isTop ? 'bottom-full pb-3.5' : 'top-full pt-3.5'
        } \${
          isOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : isTop ? 'opacity-0 translate-y-2 scale-95 pointer-events-none' : 'opacity-0 -translate-y-2 scale-95 pointer-events-none'
        }\`}
        style={{ width: \`\${cardWidth}px\` }}
      >
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1A1A1D] border border-black/[0.1] dark:border-white/[0.12] shadow-2xl backdrop-blur-xl space-y-3 transform-gpu">
          {showImage && (
            <div className="relative w-full h-28 rounded-xl overflow-hidden bg-gradient-to-tr from-[#111] via-[#1E1E24] to-[#252530] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center">
              {imageSrc ? (
                <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-3 space-y-1">
                  <span className="w-2.5 h-2.5 rounded-full inline-block animate-pulse" style={{ backgroundColor: accentColor }} />
                  <span className="block font-mono text-[10px] text-[#8E8E93]">Live Interactive Mockup</span>
                </div>
              )}
            </div>
          )}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse" style={{ backgroundColor: accentColor }} />
              <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#8E8E93] truncate">{tag}</span>
            </div>
            <span className="font-mono text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide flex-shrink-0" style={{ backgroundColor: \`\${accentColor}18\`, color: accentColor, border: \`1px solid \${accentColor}30\` }}>
              {badge}
            </span>
          </div>
          <div className="space-y-1">
            <h4 className="font-display font-bold text-[13px] text-[#111111] dark:text-white leading-snug">{title}</h4>
            {description && <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans leading-relaxed">{description}</p>}
          </div>
          <div className="pt-2.5 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
            <Link href={href} className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-[#111111] dark:text-white hover:text-[#FE385B] transition-colors">
              <span>{ctaText}</span>
            </Link>
            <span className="font-mono text-[9.5px] text-[#8E8E93]">120 FPS</span>
          </div>
        </div>
        <div className={\`w-2.5 h-2.5 bg-white dark:bg-[#1A1A1D] border-black/[0.1] dark:border-white/[0.12] transform rotate-45 mx-auto \${isTop ? '-mt-1.5 border-r border-b' : '-mb-1.5 -top-1.5 border-l border-t relative'}\`} />
      </div>
    </div>
  );
}`;
