'use client';

import React from 'react';
import { InstructorNotes } from '@/data/academy/creator-lab/presentations/types';
import { HelpCircle, CheckSquare } from 'lucide-react';

interface PresenterScriptColumnProps {
  currentIndex: number;
  totalSlides: number;
  notes?: InstructorNotes;
  fontSize: 'sm' | 'base' | 'lg';
}

export default function PresenterScriptColumn({
  currentIndex,
  totalSlides,
  notes,
  fontSize,
}: PresenterScriptColumnProps) {
  const scriptTextSize =
    fontSize === 'sm'
      ? 'text-sm leading-relaxed'
      : fontSize === 'base'
      ? 'text-base leading-loose'
      : 'text-lg leading-loose font-medium';

  return (
    <section className="col-span-12 lg:col-span-7 flex flex-col h-full bg-[#0D0D11] rounded-3xl border border-white/[0.08] p-5 lg:p-6 overflow-hidden shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 shrink-0">
        <span className="font-mono text-xs font-bold text-[#FE385B] uppercase tracking-wider">
          // GUION PALABRA POR PALABRA · SLIDE {currentIndex + 1} DE {totalSlides}
        </span>
        <span className="font-mono text-xs text-[#10B981] bg-[#10B981]/15 px-2.5 py-0.5 rounded-xl border border-[#10B981]/25 font-bold">
          ⏱️ {notes?.duration || '0:00 - 0:45 min'}
        </span>
      </div>

      {/* Scrollable Script Body */}
      <div className="flex-1 min-h-0 overflow-y-auto space-y-4 pt-4 pr-1 custom-scrollbar">
        {/* Script Text */}
        <div
          className={`text-[#F4F4F5] ${scriptTextSize} whitespace-pre-line bg-white/[0.02] p-5 rounded-2xl border border-white/[0.04] shadow-inner`}
        >
          {notes?.script ||
            'Presenta la diapositiva destacando el título, la premisa y la aplicación práctica.'}
        </div>

        {/* Key Actions on Screen */}
        {notes?.keyActions && notes.keyActions.length > 0 && (
          <div className="space-y-2 pt-1">
            <span className="font-mono text-[11px] font-bold text-[#FF7F07] uppercase tracking-wider block">
              // ACCIÓN DEMOSTRATIVA EN CÁMARA
            </span>
            <div className="space-y-1.5">
              {notes.keyActions.map((action, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FF7F07]/10 border border-[#FF7F07]/20 text-xs text-[#FFA94D]"
                >
                  <CheckSquare size={14} className="shrink-0 mt-0.5 text-[#FF7F07]" />
                  <span>{action}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Student Q&A Cheat Sheet */}
        {notes?.studentQA && notes.studentQA.length > 0 && (
          <div className="space-y-2 pt-1">
            <span className="font-mono text-[11px] font-bold text-[#00F0FF] uppercase tracking-wider block">
              // PREGUNTAS FRECUENTES DE ALUMNOS (CHEAT SHEET)
            </span>
            <div className="space-y-2">
              {notes.studentQA.map((qa, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-3 space-y-1.5"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#D4D4D8]">
                    <HelpCircle size={13} className="text-[#00F0FF] shrink-0" />
                    <span>{qa.question}</span>
                  </div>
                  <p className="text-xs text-[#A1A1AA] bg-black/40 p-2.5 rounded-xl border border-white/[0.04] leading-relaxed">
                    <strong className="text-[#10B981] font-mono text-[10px]">RESPUESTA: </strong>
                    {qa.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
