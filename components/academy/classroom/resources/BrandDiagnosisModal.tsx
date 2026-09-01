'use client';

import React from 'react';
import { X, FileText } from 'lucide-react';
import { Locale } from '@/types';
import BrandDiagnosisForm from './BrandDiagnosisForm';

interface BrandDiagnosisModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseSlug: string;
  lessonId: string;
  lang: Locale;
  studentName?: string;
  onSubmitted?: () => void;
}

export default function BrandDiagnosisModal({
  isOpen,
  onClose,
  courseSlug,
  lessonId,
  lang,
  studentName = 'Estudiante UXIO',
  onSubmitted,
}: BrandDiagnosisModalProps) {
  const isEs = lang === 'es';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white dark:bg-[#0D0D0E] border border-black/[0.1] dark:border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden text-[#111111] dark:text-white">
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between gap-4 bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#FE385B]/10 text-[#FE385B] border border-[#FE385B]/20">
              <FileText size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-[#FE385B] uppercase tracking-widest bg-[#FE385B]/10 px-2 py-0.5 rounded">
                  RETO 0.1 · ESTRATEGIA
                </span>
                <span className="text-xs text-[#8E8E93] font-mono">Semana 0</span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg">
                {isEs ? 'Ficha de Diagnóstico de Marca' : 'Brand Diagnosis Sheet'}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          <BrandDiagnosisForm
            courseSlug={courseSlug}
            lessonId={lessonId}
            lang={lang}
            studentName={studentName}
            onSubmitted={() => {
              onSubmitted?.();
            }}
          />
        </div>
      </div>
    </div>
  );
}
