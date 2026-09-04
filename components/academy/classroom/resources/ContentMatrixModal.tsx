'use client';

import React, { useState } from 'react';
import { X, Table, ExternalLink, Sparkles, BookOpen } from 'lucide-react';
import { Locale } from '@/types';
import ContentMatrixForm from './ContentMatrixForm';

interface ContentMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Locale;
  studentName?: string;
  courseSlug?: string;
  lessonId?: string;
  onSubmitted?: () => void;
}

export default function ContentMatrixModal({
  isOpen,
  onClose,
  lang,
  studentName = 'Estudiante UXIO',
  courseSlug = 'creator-lab',
  lessonId = 'm01-03',
  onSubmitted,
}: ContentMatrixModalProps) {
  const isEs = lang === 'es';
  const [activeTab, setActiveTab] = useState<'form' | 'guide'>('form');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0D0D0E] border border-black/[0.1] dark:border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden text-[#111111] dark:text-white">
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between gap-4 bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#FE385B]/10 text-[#FE385B] border border-[#FE385B]/20">
              <Table size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-[#FE385B] uppercase tracking-widest bg-[#FE385B]/10 px-2 py-0.5 rounded border border-[#FE385B]/20">
                  RETO 1 OFICIAL
                </span>
                <span className="text-xs text-[#8E8E93] font-mono">Semana 1 · Lección 1.3</span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg">
                {isEs ? 'Matriz de 30 Ideas de Contenido Comercial' : '30-Day Commercial Content Matrix'}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="px-6 py-2.5 border-b border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between gap-2 bg-black/[0.01] dark:bg-white/[0.01]">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('form')}
              className={`px-3 py-1.5 rounded-xl font-mono text-xs flex items-center gap-1.5 transition-all ${
                activeTab === 'form'
                  ? 'bg-[#FE385B] text-white font-bold shadow-xs'
                  : 'bg-black/[0.03] dark:bg-white/[0.04] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
              }`}
            >
              <Sparkles size={12} />
              <span>{isEs ? 'Llenar Matriz en Vivo (30 Ideas)' : 'Live Interactive Matrix'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('guide')}
              className={`px-3 py-1.5 rounded-xl font-mono text-xs flex items-center gap-1.5 transition-all ${
                activeTab === 'guide'
                  ? 'bg-black/[0.08] dark:bg-white/[0.1] text-[#111111] dark:text-white font-bold'
                  : 'bg-black/[0.03] dark:bg-white/[0.04] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
              }`}
            >
              <BookOpen size={12} />
              <span>{isEs ? 'Instrucciones & Notion' : 'Instructions & Notion'}</span>
            </button>
          </div>

          <span className="hidden sm:inline font-mono text-[11px] text-[#8E8E93]">
            Auto-guardado local activo
          </span>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {activeTab === 'form' ? (
            <ContentMatrixForm
              courseSlug={courseSlug}
              lessonId={lessonId}
              lang={lang}
              studentName={studentName}
              onSubmitted={() => {
                if (onSubmitted) onSubmitted();
                setTimeout(() => onClose(), 1200);
              }}
            />
          ) : (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-2">
                <h4 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                  {isEs ? 'Instrucciones de la Dieta 40/20/20/10/10' : '40/20/20/10/10 Ratio Guide'}
                </h4>
                <p className="text-[#666666] dark:text-[#8E8E93] leading-relaxed">
                  {isEs
                    ? 'La matriz contiene 30 filas pre-distribuidas en los 5 pilares: 12 Educar (40%), 6 Proceso (20%), 6 Prueba Social (20%), 3 Desmitificar (10%) y 3 Venta Directa (10%). Completa los campos directamente en el formulario o copia la plantilla en tu Notion personal.'
                    : 'The matrix contains 30 rows pre-assigned across 5 pillars: 12 Educate, 6 Process, 6 Social Proof, 3 Debunk, 3 Direct Pitch. Fill in-app or copy to your Notion.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-[#FE385B]/20 bg-[#FE385B]/[0.03] space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-display font-bold text-xs text-[#FE385B]">
                      {isEs ? 'Plantilla Oficial en Notion' : 'Official Notion Template'}
                    </h5>
                    <p className="text-[11px] text-[#8E8E93]">
                      {isEs ? 'Duplica la tabla en tu espacio de trabajo de Notion.' : 'Duplicate the database into your personal Notion.'}
                    </p>
                  </div>
                  <a
                    href="https://notion.so"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FE385B] text-white font-display font-bold text-xs hover:bg-[#FE385B]/90 transition-all"
                  >
                    <span>{isEs ? 'Abrir en Notion' : 'Open in Notion'}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
