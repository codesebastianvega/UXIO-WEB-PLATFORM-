'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Clock, Zap, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import { MicroService, formatCurrency } from '@/data/services';
import { Locale } from '@/types';

interface ServiceSubservicesListProps {
  microServices?: MicroService[];
  onOpenMicroDrawer?: (item: MicroService) => void;
  title?: string;
  lang: Locale;
}

export default function ServiceSubservicesList({
  microServices = [],
  onOpenMicroDrawer,
  title,
  lang,
}: ServiceSubservicesListProps) {
  const isEs = lang === 'es';
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    // 250ms graceful delay to allow cursor to safely travel into the popover
    timeoutRef.current = setTimeout(() => {
      setHoveredId(null);
    }, 250);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!microServices || microServices.length === 0) return null;

  const defaultTitle = isEs ? '// MICRO-SERVICIOS & SPRINTS ÁGILES (24H - 72H)' : '// AGILE MICRO-SERVICES (24H - 72H)';

  return (
    <section className="space-y-4 pt-4">
      {/* Header section */}
      <div className="flex items-center justify-between pb-2 border-b border-black/[0.08] dark:border-white/[0.08]">
        <div className="flex items-center gap-2">
          <Zap size={14} className="text-[#FE385B]" />
          <span className="font-mono text-[11px] font-medium text-[#8E8E93] tracking-tight block">
            {title || defaultTitle}
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#8E8E93]">
          {microServices.length} {isEs ? 'entregas rápidas' : 'fast deliveries'}
        </span>
      </div>

      {/* Grid of Micro-Service Cards in 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {microServices.map((item, idx) => {
          const itemId = item.id || `micro-${idx}`;
          const priceCopText = item.price?.COP ? formatCurrency(item.price.COP, 'COP') : '$450.000 COP';
          const priceUsdText = item.price?.USD ? formatCurrency(item.price.USD, 'USD') : '$115 USD';
          const isHovered = hoveredId === itemId;
          const accent = item.accent || '#FE385B';

          return (
            <div
              key={itemId}
              onMouseEnter={() => handleMouseEnter(itemId)}
              onMouseLeave={handleMouseLeave}
              onClick={() => onOpenMicroDrawer && onOpenMicroDrawer(item)}
              style={{
                borderColor: isHovered ? accent : undefined,
                boxShadow: isHovered ? `0 8px 24px -6px ${accent}25` : undefined,
                zIndex: isHovered ? 50 : 1
              }}
              className="group p-5 rounded-2xl bg-white dark:bg-[#151517] border border-black/[0.08] dark:border-white/[0.08] transition-all duration-300 flex flex-col justify-between gap-4 shadow-soft-sm hover:-translate-y-0.5 cursor-pointer relative"
            >
              <div className="space-y-2.5">
                {/* SPRINT Tag & Timeline */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="font-mono text-[9.5px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider transition-colors"
                    style={{
                      backgroundColor: `${accent}15`,
                      color: accent,
                      border: `1px solid ${accent}30`
                    }}
                  >
                    // SPRINT {item.timeline || '24H-72H'}
                  </span>
                  <span className="font-mono text-[10.5px] text-[#8E8E93] flex items-center gap-1">
                    <Clock size={10.5} /> {item.timeline || '24 a 48h'}
                  </span>
                </div>

                {/* Title and 1-Line Description */}
                <div>
                  <h4 className="font-display font-bold text-sm text-[#111111] dark:text-white transition-colors leading-snug text-left">
                    {item.title}
                  </h4>

                  <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans line-clamp-2 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Price & Accent CTA Button */}
              <div className="flex items-center justify-between pt-3 border-t border-black/[0.04] dark:border-white/[0.06]">
                <div>
                  <span className="font-mono text-[9px] text-[#8E8E93] block uppercase font-medium">
                    {isEs ? 'PRECIO FIJO' : 'FIXED PRICE'}
                  </span>
                  <span className="font-display font-extrabold text-sm text-[#111111] dark:text-white">
                    {priceCopText} <span className="text-[10px] font-mono text-[#8E8E93] font-normal">/ {priceUsdText}</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onOpenMicroDrawer) onOpenMicroDrawer(item);
                  }}
                  style={{
                    backgroundColor: isHovered ? accent : undefined,
                    color: isHovered ? '#FFFFFF' : undefined,
                    borderColor: isHovered ? accent : undefined
                  }}
                  className="py-1.5 px-3 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.05] dark:border-white/[0.06] font-display font-semibold text-xs text-[#111111] dark:text-[#E4E4E7] transition-all duration-300 flex items-center gap-1 cursor-pointer shadow-2xs"
                >
                  <span>{isEs ? 'Contratar Sprint' : 'Book Sprint'}</span>
                  <ArrowUpRight size={12} />
                </button>
              </div>

              {/* SAFE HOVER BRIDGE CONTAINER (ALWAYS OPENS UPWARDS) */}
              <div
                onMouseEnter={() => handleMouseEnter(itemId)}
                onMouseLeave={handleMouseLeave}
                className={`absolute bottom-full left-1/2 -translate-x-1/2 w-[380px] max-w-[calc(100vw-32px)] pb-2.5 z-50 transition-all duration-200 ${
                  isHovered
                    ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                    : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
                }`}
              >
                {/* Popover Card */}
                <div
                  className="p-4 sm:p-4.5 rounded-2xl bg-white dark:bg-[#18181B] border border-black/15 dark:border-white/20 shadow-[0_24px_60px_rgba(0,0,0,0.25)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.7)] cursor-default"
                  style={{ borderTop: `3px solid ${accent}` }}
                >
                  <div className="flex items-center justify-between pb-2 border-b border-black/[0.06] dark:border-white/[0.08] mb-2.5 gap-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <Sparkles size={12} style={{ color: accent }} className="shrink-0" />
                      <span className="font-mono text-[10px] font-bold text-[#111111] dark:text-white uppercase tracking-wider truncate">
                        {isEs ? '// ENTREGABLES DEL SPRINT' : '// SPRINT DELIVERABLES'}
                      </span>
                    </div>
                    <span
                      className="font-mono text-[9px] font-bold px-2 py-0.5 rounded whitespace-nowrap shrink-0"
                      style={{
                        backgroundColor: `${accent}15`,
                        color: accent,
                        border: `1px solid ${accent}30`
                      }}
                    >
                      {item.timeline || '24H-48H'} · 100% GARANTIZADO
                    </span>
                  </div>

                  <div className="space-y-2">
                    {item.deliverables && item.deliverables.length > 0 ? (
                      item.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2 text-[11px] text-[#222222] dark:text-[#E4E4E7] leading-snug">
                          <CheckCircle2 size={12} className="text-[#10B981] shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))
                    ) : (
                      <div className="text-[10.5px] text-[#8E8E93]">
                        {isEs ? 'Entrega ágil con código fuente y capacitación.' : 'Fast delivery with full source code.'}
                      </div>
                    )}
                  </div>

                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenMicroDrawer) onOpenMicroDrawer(item);
                    }}
                    className="mt-3 pt-2.5 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-[#8E8E93] cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <span>{isEs ? 'Seña inicial: 50%' : 'Deposit: 50%'}</span>
                    <span style={{ color: accent }} className="font-semibold flex items-center gap-0.5">
                      {isEs ? 'Clic para cotizar' : 'Click to book'} <ArrowUpRight size={10} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
