'use client';

import React from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Locale } from '@/types';

export interface CardDetailData {
  tag?: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  actionTip?: string;
  image?: string;
  imageCaption?: string;
  iconType?: 'sparkles' | 'check' | 'step';
}

interface SlideDetailModalProps {
  data: CardDetailData | null;
  onClose: () => void;
  lang?: Locale;
  theme?: 'light' | 'dark';
}

export default function SlideDetailModal({
  data,
  onClose,
  lang = 'es',
  theme = 'light',
}: SlideDetailModalProps) {
  if (!data) return null;
  const isEs = lang === 'es';
  const isDark = theme === 'dark';
  const hasImage = Boolean(data.image);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="absolute inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/75 backdrop-blur-lg animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 shadow-2xl border transition-all animate-in zoom-in-95 duration-200 ${
          isDark
            ? 'bg-[#121214] border-white/[0.15] text-white shadow-[0_25px_70px_rgba(0,0,0,0.9)]'
            : 'bg-white border-black/[0.1] text-[#111111] shadow-[0_25px_70px_rgba(0,0,0,0.18)]'
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={isEs ? 'Cerrar detalle' : 'Close detail'}
          className={`absolute top-5 right-5 z-10 p-2 rounded-xl transition-colors ${
            isDark
              ? 'bg-white/[0.08] hover:bg-white/[0.16] text-white'
              : 'bg-black/[0.06] hover:bg-black/[0.1] text-[#111111]'
          }`}
        >
          <X size={16} />
        </button>

        {/* Content Container (Split Grid if Image Present) */}
        <div className={`grid gap-6 select-none ${hasImage ? 'grid-cols-1 md:grid-cols-12' : 'grid-cols-1'}`}>
          {/* Left Column: Visual Image (if provided) */}
          {hasImage && (
            <div className="md:col-span-5 flex flex-col space-y-2">
              <div className="relative w-full h-52 md:h-full min-h-[240px] rounded-2xl overflow-hidden border border-black/[0.08] dark:border-white/[0.1] bg-black/10">
                <img
                  src={data.image}
                  alt={data.title}
                  onError={e => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80';
                  }}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {data.imageCaption && (
                  <span className="absolute bottom-2.5 left-3 right-3 text-[10px] font-mono text-white/90 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg truncate">
                    {data.imageCaption}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Right Column: Educational Narrative & Tips */}
          <div className={`${hasImage ? 'md:col-span-7' : 'col-span-1'} space-y-4`}>
            {/* Header Tag */}
            <div className="flex items-center gap-2">
              {data.tag && (
                <span className="font-mono text-xs text-[#FE385B] font-bold uppercase tracking-wider bg-[#FE385B]/10 px-3 py-1 rounded-lg border border-[#FE385B]/20">
                  {data.tag}
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1">
              <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-tight">
                {data.title}
              </h3>
              {data.subtitle && (
                <p className={`text-sm font-sans ${isDark ? 'text-[#A1A1AA]' : 'text-[#666666]'}`}>
                  {data.subtitle}
                </p>
              )}
            </div>

            {/* Description */}
            <div
              className={`p-3.5 sm:p-4 rounded-2xl border text-xs sm:text-sm font-sans leading-relaxed ${
                isDark
                  ? 'bg-white/[0.03] border-white/[0.06] text-[#E5E5E7]'
                  : 'bg-black/[0.02] border-black/[0.04] text-[#333333]'
              }`}
            >
              {data.description}
            </div>

            {/* Highlights */}
            {data.highlights && data.highlights.length > 0 && (
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] text-[#FE385B] uppercase font-bold tracking-wider block">
                  // {isEs ? 'PUNTOS CLAVE PARA APLICAR' : 'KEY TAKEAWAYS'}
                </span>
                <ul className="space-y-1 text-xs font-sans">
                  {data.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-[#10B981] shrink-0 mt-0.5" />
                      <span className={isDark ? 'text-white' : 'text-[#222222]'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Tip */}
            {data.actionTip && (
              <div className="p-3 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/25 flex items-center gap-2.5">
                <Sparkles size={15} className="text-[#10B981] shrink-0" />
                <p className="text-xs font-sans font-medium text-[#059669] dark:text-[#10B981] leading-relaxed">
                  {data.actionTip}
                </p>
              </div>
            )}

            {/* Action Button */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FE385B] text-white hover:bg-[#FE385B]/90 font-display font-bold text-xs shadow-md transition-all active:scale-[0.98]"
              >
                <span>{isEs ? 'Entendido / Continuar' : 'Got it / Continue'}</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
