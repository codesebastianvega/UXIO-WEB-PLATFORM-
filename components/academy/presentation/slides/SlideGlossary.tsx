import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { BookOpen, Maximize2, Sparkles } from 'lucide-react';
import { CardDetailData } from '../SlideDetailModal';
import MagicDustHeading from '@/components/ui/MagicDustHeading';

interface SlideGlossaryProps {
  slide: SlideData;
  theme?: 'light' | 'dark';
  onOpenDetail?: (data: CardDetailData) => void;
}

export default function SlideGlossary({
  slide,
  theme = 'light',
  onOpenDetail,
}: SlideGlossaryProps) {
  const isDark = theme === 'dark';
  const terms = slide.glossaryTerms || [];

  return (
    <div className="w-full h-full flex flex-col justify-center p-8 sm:p-12 lg:p-14 select-none space-y-6 overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2 max-w-3xl">
          {slide.tag && (
            <span className="font-mono text-xs text-[#FE385B] uppercase tracking-widest font-bold bg-[#FE385B]/10 px-3.5 py-1.5 rounded-xl border border-[#FE385B]/20 inline-block shadow-2xs">
              {slide.tag}
            </span>
          )}
          <MagicDustHeading
            text={slide.title}
            as="h2"
            keyTrigger={slide.id}
            staggerMs={12}
            initialDelayMs={60}
            glowColor={isDark ? 'rgba(254, 56, 91, 0.9)' : 'rgba(254, 56, 91, 0.4)'}
            className={`font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight ${
              isDark ? 'text-white' : 'text-[#09090B]'
            }`}
          />
          {slide.subtitle && (
            <p
              className={`font-sans text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-[#A1A1AA]' : 'text-[#52525B]'
              }`}
            >
              {slide.subtitle}
            </p>
          )}
        </div>

        <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#FE385B] bg-[#FE385B]/10 px-3.5 py-2 rounded-2xl border border-[#FE385B]/20">
          <BookOpen size={15} />
          <span>Diccionario del Gremio</span>
        </div>
      </div>

      {/* Glossary Grid */}
      {terms.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {terms.map((item, idx) => (
            <div
              key={idx}
              onClick={() =>
                onOpenDetail?.({
                  tag: item.category || 'GLOSARIO TÉCNICO',
                  title: item.term,
                  subtitle: item.phonetic ? `Pronunciación: ${item.phonetic}` : undefined,
                  description: item.definition,
                  image: item.image,
                  imageCaption: `Concepto Clave · ${item.term}`,
                  highlights: [
                    `Ejemplo de aplicación: "${item.example}"`,
                    item.avoidTip ? `Error a evitar: ${item.avoidTip}` : 'Aplica este estándar en cada entrega.',
                  ],
                  actionTip: 'Domina este término técnico para comunicarte como un creador profesional.',
                })
              }
              className={`group p-5 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-3 min-h-[220px] ${
                isDark
                  ? 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] hover:border-[#FE385B]/40 text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 hover:shadow-2xl'
                  : 'bg-white hover:bg-white/95 border-black/[0.08] hover:border-[#FE385B]/40 text-[#111111] shadow-[0_12px_35px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-2xl'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-[#FE385B] bg-[#FE385B]/10 px-2.5 py-0.5 rounded-lg uppercase">
                  {item.category || 'Gremio'}
                </span>
                <Maximize2 size={12} className="text-[#8E8E93] opacity-50 group-hover:opacity-100 group-hover:text-[#FE385B]" />
              </div>

              <div className="space-y-1.5">
                <h3
                  className={`font-display font-bold text-sm sm:text-base ${
                    isDark ? 'text-white' : 'text-[#09090B]'
                  }`}
                >
                  {item.term}
                </h3>
                <p
                  className={`font-sans text-xs leading-relaxed line-clamp-3 ${
                    isDark ? 'text-[#A1A1AA]' : 'text-[#666666]'
                  }`}
                >
                  {item.definition}
                </p>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[#FE385B] opacity-0 group-hover:opacity-100 transition-opacity border-t border-black/[0.04] dark:border-white/[0.04] pt-1">
                <span>Ver ejemplo ↗</span>
                <Sparkles size={11} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
