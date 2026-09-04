'use client';

import React, { useState } from 'react';
import { X, MessageSquare, Copy, Check, FileEdit, Lightbulb } from 'lucide-react';
import { Locale } from '@/types';
import ObjectionMiningForm from './ObjectionMiningForm';

interface ObjectionMiningModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Locale;
  studentName?: string;
  courseSlug?: string;
  lessonId?: string;
  onSubmitted?: () => void;
}

export default function ObjectionMiningModal({
  isOpen,
  onClose,
  lang,
  studentName = 'Estudiante UXIO',
  courseSlug = 'creator-lab',
  lessonId = 'm01-02',
  onSubmitted,
}: ObjectionMiningModalProps) {
  const isEs = lang === 'es';
  const [activeTab, setActiveTab] = useState<'form' | 'examples'>('form');
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyHook = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const objectionExamples = [
    {
      faq: isEs ? '¿Por qué son más caros que la competencia?' : 'Why are you more expensive than competitors?',
      hook: isEs ? '"Un cliente me escribió diciendo: su servicio es caro, en la esquina cobran la mitad. Esta fue mi respuesta..."' : '"A customer said: you are expensive, across the street it costs half. Here was my reply..."',
    },
    {
      faq: isEs ? '¿Cuánto tiempo tardan en entregar el producto?' : 'How long does delivery take?',
      hook: isEs ? '"Por qué tardamos 4 días en entregar cuando otros lo hacen en 24 horas (y por qué te conviene):"' : '"Why we take 4 days to deliver while others do it in 24 hours (and why you benefit):"',
    },
    {
      faq: isEs ? '¿Esto me sirve si no tengo experiencia previa?' : 'Does this work if I have no experience?',
      hook: isEs ? '"La mentira de que necesitas saber de diseño antes de empezar: mira cómo lo hace alguien desde cero..."' : '"The myth that you need design experience to start: watch a complete beginner do it in 3 steps..."',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-[#0D0D0E] border border-black/[0.1] dark:border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden text-[#111111] dark:text-white">
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between gap-4 bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#FF7F07]/10 text-[#FF7F07] border border-[#FF7F07]/20">
              <MessageSquare size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-[#FF7F07] uppercase tracking-widest bg-[#FF7F07]/10 px-2 py-0.5 rounded">
                  RETO 1.2 · MINERÍA DE WHATSAPP
                </span>
                <span className="text-xs text-[#8E8E93] font-mono">Semana 1</span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg">
                {isEs ? 'Plantilla de Minería de Objeciones' : 'Objection Mining Worksheet'}
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

        {/* Tab Switcher */}
        <div className="px-6 py-2.5 border-b border-black/[0.04] dark:border-white/[0.04] flex items-center gap-2 bg-black/[0.01] dark:bg-white/[0.01]">
          <button
            type="button"
            onClick={() => setActiveTab('form')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'form'
                ? 'bg-[#FF7F07] text-white font-bold shadow-sm shadow-[#FF7F07]/20'
                : 'bg-black/[0.03] dark:bg-white/[0.04] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
            }`}
          >
            <FileEdit size={12} />
            <span>{isEs ? 'Ficha Interactiva del Reto' : 'Interactive Challenge Sheet'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('examples')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'examples'
                ? 'bg-[#FF7F07] text-white font-bold shadow-sm shadow-[#FF7F07]/20'
                : 'bg-black/[0.03] dark:bg-white/[0.04] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
            }`}
          >
            <Lightbulb size={12} />
            <span>{isEs ? 'Banco de Ejemplos & Circuito' : 'Examples & Framework'}</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'form' ? (
            <ObjectionMiningForm
              courseSlug={courseSlug}
              lessonId={lessonId}
              lang={lang}
              studentName={studentName}
              onSubmitted={onSubmitted}
            />
          ) : (
            <div className="space-y-6">
              {/* Framework Circuit */}
              <div className="p-4 rounded-2xl bg-[#FF7F07]/5 border border-[#FF7F07]/20 space-y-3">
                <span className="font-mono text-xs font-bold text-[#FF7F07] uppercase tracking-wider block">
                  // EL CIRCUITO DE 4 PASOS: DE DUDA A VENTA
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                  <div className="p-3 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.06] dark:border-white/[0.06]">
                    <span className="font-bold block text-[#111111] dark:text-white">1. Caza la Duda</span>
                    <span className="text-[11px] text-[#8E8E93]">Pregunta repetitiva en chat</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.06] dark:border-white/[0.06]">
                    <span className="font-bold block text-[#111111] dark:text-white">2. Gancho Incómodo</span>
                    <span className="text-[11px] text-[#8E8E93]">"Un cliente me dijo..."</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.06] dark:border-white/[0.06]">
                    <span className="font-bold block text-[#111111] dark:text-white">3. Respuesta Maestra</span>
                    <span className="text-[11px] text-[#8E8E93]">Explicación técnica en 30s</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.06] dark:border-white/[0.06]">
                    <span className="font-bold block text-[#111111] dark:text-white">4. Puente WhatsApp</span>
                    <span className="text-[11px] text-[#8E8E93]">"Comenta INFO para chat"</span>
                  </div>
                </div>
              </div>

              {/* Golden Objection Examples */}
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#8E8E93] uppercase tracking-wider block">
                  // 3 EJEMPLOS DE GANCHOS PARA COPIAR O ADAPTAR
                </span>
                <div className="space-y-2.5">
                  {objectionExamples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1 text-xs min-w-0 flex-1">
                        <span className="font-mono text-[10px] text-[#FF7F07] font-bold uppercase block">{ex.faq}</span>
                        <p className="text-[#111111] dark:text-white font-medium pt-0.5">{ex.hook}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => copyHook(ex.hook, idx)}
                        className="p-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#FF7F07]/10 hover:text-[#FF7F07] text-[#8E8E93] transition-colors shrink-0"
                        title={isEs ? 'Copiar Gancho' : 'Copy Hook'}
                      >
                        {copiedIdx === idx ? <Check size={14} className="text-[#10B981]" /> : <Copy size={14} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
