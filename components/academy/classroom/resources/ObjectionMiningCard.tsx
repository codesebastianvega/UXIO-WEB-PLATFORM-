'use client';

import React from 'react';
import Link from 'next/link';
import { MessageSquare, Sparkles } from 'lucide-react';
import { Locale } from '@/types';
import { LessonSubmission } from '@/lib/supabase/academy-submissions';

interface ObjectionMiningCardProps {
  submission: LessonSubmission | null;
  score5: string | null;
  courseSlug: string;
  lang: Locale;
  onOpenModal: () => void;
}

export default function ObjectionMiningCard({
  submission,
  score5,
  courseSlug,
  lang,
  onOpenModal,
}: ObjectionMiningCardProps) {
  const isEs = lang === 'es';
  const status = submission?.status;
  const isApproved = status === 'approved';
  const isNeedsRevision = status === 'needs_revision';
  const isSubmitted = status === 'submitted' || status === 'pending_review';

  return (
    <div
      className={`p-5 sm:p-6 rounded-2xl border transition-all duration-150 flex flex-col gap-4 backdrop-blur-xl ${
        isSubmitted || isApproved
          ? 'bg-[#10B981]/[0.06] dark:bg-[#10B981]/[0.08] border-[#10B981]/30 shadow-[0_4px_20px_-5px_rgba(16,185,129,0.15)]'
          : 'bg-[#FF7F07]/[0.04] dark:bg-[#FF7F07]/[0.06] border-[#FF7F07]/25 dark:border-[#FF7F07]/30 shadow-sm'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span
              className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-lg border backdrop-blur-md ${
                isApproved
                  ? 'bg-[#10B981]/20 text-[#047857] dark:text-[#10B981] border-[#10B981]/30'
                  : isNeedsRevision
                  ? 'bg-[#FF7F07]/20 text-[#FF7F07] border-[#FF7F07]/30'
                  : isSubmitted
                  ? 'bg-[#10B981]/20 text-[#047857] dark:text-[#10B981] border-[#10B981]/30'
                  : 'bg-[#FF7F07]/15 text-[#FF7F07] border-[#FF7F07]/30'
              }`}
            >
              {isApproved
                ? (score5 ? `Calificado: ${score5} / 5.0 ★` : 'Ficha Aprobada ✓')
                : isNeedsRevision
                ? (score5 ? `Calificado: ${score5} / 5.0 (Ajustes)` : 'Requiere Ajustes')
                : isSubmitted
                ? (isEs ? 'Ficha Guardada & Enviada ✓' : 'Sheet Saved & Submitted ✓')
                : (isEs ? 'Formulario Interactivo (5 Objeciones de WhatsApp)' : 'Interactive Worksheet')}
            </span>
            <MessageSquare
              size={14}
              className={
                isSubmitted || isApproved ? 'text-[#059669] dark:text-[#10B981]' : 'text-[#FF7F07]'
              }
            />
          </div>
          <h4 className="font-display font-bold text-sm text-[#111111] dark:text-white">
            {isEs ? 'Plantilla de Minería de Objeciones de WhatsApp' : 'WhatsApp Objection Mining Worksheet'}
          </h4>
          <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans">
            {isEs
              ? 'Abre el formulario para extraer 5 objeciones reales y estructurar los ganchos de venta.'
              : 'Open interactive worksheet to mine 5 buyer objections and structure your video hooks.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {(isApproved || isNeedsRevision) && (
            <Link
              href={`/${lang}/academy/classroom/${courseSlug}/calificaciones`}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#FF7F07] hover:text-white font-display font-bold text-xs text-[#111111] dark:text-white transition-all duration-150 shrink-0 border border-black/[0.06] dark:border-white/[0.06]"
            >
              <span>{isEs ? 'Ver Calificaciones 📊' : 'View Grades 📊'}</span>
            </Link>
          )}

          <button
            type="button"
            onClick={onOpenModal}
            className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-display font-bold text-xs transition-all duration-150 shrink-0 backdrop-blur-xl active:scale-[0.97] hover:scale-[1.02] ${
              isSubmitted || isApproved
                ? 'bg-[#10B981]/20 hover:bg-[#10B981] text-[#047857] dark:text-[#10B981] hover:text-white border border-[#10B981]/40 hover:border-[#10B981] shadow-[0_4px_15px_rgba(16,185,129,0.15)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.3)]'
                : 'bg-[#FF7F07] hover:bg-[#FF7F07]/90 text-white shadow-[0_4px_15px_rgba(255,127,7,0.3)] hover:shadow-[0_6px_20px_rgba(255,127,7,0.45)]'
            }`}
          >
            <Sparkles size={13} className="transition-transform duration-150 group-hover:rotate-12" />
            <span>
              {isSubmitted || isApproved
                ? isEs ? 'Ver / Editar Ficha' : 'View / Edit Sheet'
                : isEs ? 'Llenar Ficha Interactiva ➔' : 'Fill Interactive Sheet ➔'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
