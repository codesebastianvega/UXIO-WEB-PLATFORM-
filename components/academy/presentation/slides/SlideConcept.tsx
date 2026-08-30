import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { Sparkles, Maximize2, Smartphone, Radio, ArrowUpRight } from 'lucide-react';
import { CardDetailData } from '../SlideDetailModal';

interface SlideConceptProps {
  slide: SlideData;
  theme?: 'light' | 'dark';
  onOpenDetail?: (data: CardDetailData) => void;
}

export default function SlideConcept({
  slide,
  theme = 'light',
  onOpenDetail,
}: SlideConceptProps) {
  const isDark = theme === 'dark';

  const conceptImages = [
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&auto=format&fit=crop&q=80',
  ];

  const conceptHighlights = [
    [
      'Cámara 4K en el bolsillo lista para grabar 24/7.',
      'Luz natural de ventana + micrófono solapero accesible.',
      'Elimina la fricción de armar equipos pesados.',
    ],
    [
      'La audiencia salta los anuncios pero ama descubrir historias reales.',
      'Formato storytelling en primera persona genera 4.2x más retención.',
      'Resuelve 1 dolor concreto por cada video de 45 segundos.',
    ],
    [
      'Llamado a la acción (CTA) directo al final de cada pieza.',
      'Ruta directa hacia WhatsApp Business o catálogo web.',
      'Métricas de conversión y leads en vez de vanidad o likes.',
    ],
  ];

  const conceptTips = [
    'Comienza hoy grabando 3 tomas de 10 segundos en vertical mostrando lo que haces en tu día a día.',
    'No anuncies características técnicas; cuenta la transformación y el resultado que obtiene tu cliente.',
    'Agrega siempre una palabra clave de activación (ej: "Comenta PROTOCOLO para enviarte los detalles").',
  ];

  const icons = [
    <Smartphone key="1" size={18} className="text-[#FE385B]" />,
    <Radio key="2" size={18} className="text-[#FF7F07]" />,
    <ArrowUpRight key="3" size={18} className="text-[#10B981]" />,
  ];

  const tints = [
    'hover:border-[#FE385B]/40',
    'hover:border-[#FF7F07]/40',
    'hover:border-[#10B981]/40',
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center p-8 sm:p-12 lg:p-14 select-none space-y-6 overflow-hidden">
      {/* Top Header Group */}
      <div className="space-y-2 max-w-3xl">
        {slide.tag && (
          <span className="font-mono text-xs text-[#FE385B] uppercase tracking-widest font-bold bg-[#FE385B]/10 px-3.5 py-1.5 rounded-xl border border-[#FE385B]/20 inline-block shadow-2xs">
            {slide.tag}
          </span>
        )}
        <h2
          className={`font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight ${
            isDark ? 'text-white' : 'text-[#09090B]'
          }`}
        >
          {slide.title}
        </h2>
        {slide.subtitle && (
          <p
            className={`font-sans text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-[#A1A1AA]' : 'text-[#52525B]'
            }`}
          >
            {slide.subtitle}
          </p>
        )}
      </div>

      {/* Points Grid */}
      {slide.points && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {slide.points.map((pt, idx) => (
            <div
              key={idx}
              onClick={() =>
                onOpenDetail?.({
                  tag: `0${idx + 1} // ${slide.tag || 'PRINCIPIO'}`,
                  title: pt.label,
                  description: pt.text,
                  image: conceptImages[idx % conceptImages.length],
                  imageCaption: `Estrategia Visual · Principio 0${idx + 1}`,
                  highlights: conceptHighlights[idx % conceptHighlights.length],
                  actionTip: conceptTips[idx % conceptTips.length],
                })
              }
              className={`group relative p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 min-h-[220px] ${
                isDark
                  ? 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1.5 hover:shadow-2xl'
                  : 'bg-white hover:bg-white/95 border-black/[0.08] text-[#111111] shadow-[0_12px_35px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-2xl'
              } ${tints[idx % tints.length]}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.06] flex items-center justify-center">
                    {icons[idx % icons.length]}
                  </div>
                  <span className="font-mono text-xs text-[#8E8E93] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <Maximize2 size={13} className="text-[#8E8E93] opacity-50 group-hover:opacity-100 group-hover:text-[#FE385B] transition-all" />
              </div>

              <div className="space-y-1.5">
                <h3
                  className={`font-display font-bold text-base sm:text-lg ${
                    isDark ? 'text-white' : 'text-[#09090B]'
                  }`}
                >
                  {pt.label}
                </h3>
                <p
                  className={`font-sans text-xs sm:text-sm leading-relaxed ${
                    isDark ? 'text-[#A1A1AA]' : 'text-[#666666]'
                  }`}
                >
                  {pt.text}
                </p>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-black/[0.04] dark:border-white/[0.04] text-[11px] font-mono text-[#FE385B]">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver con imagen & tips ↗
                </span>
                <Sparkles size={12} className="opacity-40 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
