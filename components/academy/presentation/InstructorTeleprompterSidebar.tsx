'use client';

import React, { useState } from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { Mic, Clock, HelpCircle, CheckSquare, X, ChevronDown, ChevronUp } from 'lucide-react';

interface InstructorTeleprompterSidebarProps {
  slide: SlideData;
  slideIndex: number;
  totalSlides: number;
  onClose: () => void;
}

export default function InstructorTeleprompterSidebar({
  slide,
  slideIndex,
  totalSlides,
  onClose,
}: InstructorTeleprompterSidebarProps) {
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg'>('base');
  const [expandedQA, setExpandedQA] = useState<number | null>(0);

  const notes = slide.instructorNotes;
  const script = notes?.script || 'Presenta la diapositiva enfatizando el título y los puntos clave.';
  const duration = notes?.duration || '0:00 - 0:45 min';
  const keyActions = notes?.keyActions || [];
  const studentQA = notes?.studentQA || [];

  const textSizeClass =
    fontSize === 'sm' ? 'text-xs leading-relaxed' : fontSize === 'base' ? 'text-sm leading-relaxed' : 'text-base leading-loose';

  return (
    <aside
      className="w-80 sm:w-96 h-full flex flex-col justify-between border-r border-white/[0.12] bg-[#0A0A0C]/95 backdrop-blur-2xl text-white select-none z-30 shrink-0 animate-in slide-in-from-left-6 duration-200"
    >
      {/* Top Header */}
      <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#FE385B]/20 text-[#FE385B] flex items-center justify-center border border-[#FE385B]/30">
            <Mic size={14} className="animate-pulse" />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase font-bold text-[#FE385B] tracking-wider block">
              // TELEPROMPTER DOCENTE
            </span>
            <span className="text-xs font-mono text-[#8E8E93]">
              Slide {slideIndex + 1} de {totalSlides}
            </span>
          </div>
        </div>

        {/* Font Size Adjuster & Close */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center bg-white/[0.06] rounded-lg p-0.5 border border-white/[0.08]">
            <button
              type="button"
              onClick={() => setFontSize('sm')}
              className={`px-1.5 py-0.5 text-[10px] font-mono rounded ${fontSize === 'sm' ? 'bg-[#FE385B] text-white' : 'text-[#8E8E93]'}`}
            >
              A-
            </button>
            <button
              type="button"
              onClick={() => setFontSize('base')}
              className={`px-1.5 py-0.5 text-[10px] font-mono rounded ${fontSize === 'base' ? 'bg-[#FE385B] text-white' : 'text-[#8E8E93]'}`}
            >
              A
            </button>
            <button
              type="button"
              onClick={() => setFontSize('lg')}
              className={`px-1.5 py-0.5 text-[10px] font-mono rounded ${fontSize === 'lg' ? 'bg-[#FE385B] text-white' : 'text-[#8E8E93]'}`}
            >
              A+
            </button>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar teleprompter"
            className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-[#8E8E93] hover:text-white transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Main Content Area (Scrollable) */}
      <div className="flex-1 p-4 sm:p-5 space-y-5 overflow-y-auto custom-scrollbar">
        {/* Timing Pill */}
        <div className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1 rounded-xl bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/25">
          <Clock size={12} />
          <span className="font-bold">Tiempo Estimado: {duration}</span>
        </div>

        {/* 1. Speech Script (What to say) */}
        <div className="space-y-2">
          <span className="font-mono text-[10px] uppercase font-bold text-[#FE385B] tracking-wider block">
            // QUÉ DECIR A CÁMARA (GUION)
          </span>
          <div className={`p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-[#E4E4E7] font-sans ${textSizeClass} whitespace-pre-line shadow-inner`}>
            {script}
          </div>
        </div>

        {/* 2. Key Actions on Screen */}
        {keyActions.length > 0 && (
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase font-bold text-[#FF7F07] tracking-wider block">
              // ACCIÓN EN PANTALLA
            </span>
            <div className="space-y-1.5">
              {keyActions.map((action, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 rounded-xl bg-[#FF7F07]/10 border border-[#FF7F07]/20 text-xs font-sans text-[#FFA94D]">
                  <CheckSquare size={13} className="shrink-0 mt-0.5 text-[#FF7F07]" />
                  <span>{action}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Student Q&A Cheat Sheet */}
        {studentQA.length > 0 && (
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase font-bold text-[#00F0FF] tracking-wider block">
              // POSIBLES PREGUNTAS Y RESPUESTAS
            </span>
            <div className="space-y-2">
              {studentQA.map((qa, idx) => {
                const isExpanded = expandedQA === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedQA(isExpanded ? null : idx)}
                      className="w-full p-3 flex items-center justify-between text-left text-xs font-sans font-semibold text-[#D4D4D8] hover:text-white"
                    >
                      <div className="flex items-center gap-2">
                        <HelpCircle size={13} className="text-[#00F0FF] shrink-0" />
                        <span>{qa.question}</span>
                      </div>
                      {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                    </button>
                    {isExpanded && (
                      <div className="p-3 pt-0 text-xs font-sans text-[#A1A1AA] border-t border-white/[0.04] bg-white/[0.01] leading-relaxed">
                        <p className="font-mono text-[10px] text-[#10B981] font-bold mb-1">RESPUESTA MAESTRA:</p>
                        {qa.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Footer Note */}
      <div className="p-3 border-t border-white/[0.08] text-center font-mono text-[10px] text-[#71717A]">
        [G: Alternar Guion] · [Espacio: Siguiente Slide]
      </div>
    </aside>
  );
}
