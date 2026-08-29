import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { Maximize2, Award } from 'lucide-react';
import { CardDetailData } from '../SlideDetailModal';

interface SlideStepsProps {
  slide: SlideData;
  theme?: 'light' | 'dark';
  onOpenDetail?: (data: CardDetailData) => void;
}

export default function SlideSteps({
  slide,
  theme = 'light',
  onOpenDetail,
}: SlideStepsProps) {
  const isDark = theme === 'dark';
  const steps = slide.steps || [];

  const roadmapImages = [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&auto=format&fit=crop&q=80',
  ];

  const roadmapHighlights = [
    [
      'Auditoría profunda de propuesta de valor y dolores del cliente.',
      'Definición de 5 pilares de contenido innegociables.',
      'Estructuración del calendario editorial de 30 días.',
    ],
    [
      'Setup de iluminación natural y encuadres con cuadrícula activada.',
      'Grabación de 30 clips B-roll sin hablar a cámara.',
      'Configuración del audio y eliminación de reverberación acústica.',
    ],
    [
      'Estructura de hooks magnéticos en los primeros 3 segundos.',
      'Guiones probados de 45 segundos con ritmo rápido.',
      'Adaptación para TikTok, Instagram Reels y YouTube Shorts.',
    ],
    [
      'Cortes de ritmo y subtitulado dinámico en CapCut.',
      'Generación de ideas y multiplicación de scripts con IA.',
      'Efectos sonoros y transiciones sin saturar el video.',
    ],
    [
      'Embudos de mensajería directa a WhatsApp Business.',
      'Guiones de cierre de ventas y preguntas de cualificación.',
      'Métricas de costo por conversación y retorno de inversión.',
    ],
  ];

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
          <h2
            className={`font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight ${
              isDark ? 'text-white' : 'text-[#09090B]'
            }`}
          >
            {slide.title}
          </h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#10B981] bg-[#10B981]/10 px-3.5 py-2 rounded-2xl border border-[#10B981]/20">
          <Award size={15} />
          <span>Certificación al Finalizar</span>
        </div>
      </div>

      {/* Steps 5-Column Grid with Rich Proportions */}
      {steps.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((st, idx) => (
            <div
              key={idx}
              onClick={() =>
                onOpenDetail?.({
                  tag: `SEMANA ${st.number || `0${idx + 1}`} // ${st.title.toUpperCase()}`,
                  title: st.title,
                  subtitle: `Fase ${idx + 1} de la metodología Creator Lab`,
                  description: st.desc,
                  image: roadmapImages[idx % roadmapImages.length],
                  imageCaption: `Módulo Práctico · Semana 0${idx + 1}`,
                  highlights: roadmapHighlights[idx % roadmapHighlights.length],
                  actionTip: `Dedica esta semana a completar las 2 microclases y entregar el reto práctico en el aula.`,
                })
              }
              className={`group p-5 rounded-3xl border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 min-h-[220px] ${
                isDark
                  ? 'bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] hover:border-[#FE385B]/40 text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                  : 'bg-white hover:bg-white/95 border-black/[0.08] hover:border-[#FE385B]/40 text-[#111111] shadow-[0_12px_35px_rgba(0,0,0,0.04)]'
              } hover:-translate-y-1.5 hover:shadow-2xl`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#FE385B] bg-[#FE385B]/10 px-2.5 py-0.5 rounded-lg">
                  {st.number || `0${idx + 1}`}
                </span>
                <Maximize2 size={12} className="text-[#8E8E93] opacity-50 group-hover:opacity-100 group-hover:text-[#FE385B]" />
              </div>

              <div className="space-y-1.5">
                <h3
                  className={`font-display font-bold text-sm sm:text-base ${
                    isDark ? 'text-white' : 'text-[#09090B]'
                  }`}
                >
                  {st.title}
                </h3>
                <p
                  className={`font-sans text-xs leading-relaxed line-clamp-3 ${
                    isDark ? 'text-[#A1A1AA]' : 'text-[#666666]'
                  }`}
                >
                  {st.desc}
                </p>
              </div>

              <div className="text-[10px] font-mono text-[#FE385B] opacity-0 group-hover:opacity-100 transition-opacity border-t border-black/[0.04] dark:border-white/[0.04] pt-1">
                <span>Ver módulo & foto ↗</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
