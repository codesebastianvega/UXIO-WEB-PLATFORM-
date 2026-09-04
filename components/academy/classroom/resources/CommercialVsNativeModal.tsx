'use client';

import React, { useState } from 'react';
import { X, BookOpen, Copy, Check, Sparkles, FileEdit, Lightbulb } from 'lucide-react';
import { Locale } from '@/types';
import CommercialVsNativeForm from './CommercialVsNativeForm';

interface CommercialVsNativeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Locale;
  studentName?: string;
  courseSlug?: string;
  lessonId?: string;
  onSubmitted?: () => void;
}

export default function CommercialVsNativeModal({
  isOpen,
  onClose,
  lang,
  studentName = 'Estudiante UXIO',
  courseSlug = 'creator-lab',
  lessonId = 'm01-01',
  onSubmitted,
}: CommercialVsNativeModalProps) {
  const isEs = lang === 'es';
  const [activeTab, setActiveTab] = useState<'form' | 'examples'>('form');
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyHook = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const examples = [
    {
      before: isEs ? '"Ofrecemos servicios de asesoría contable para pymes."' : '"We offer accounting consulting for small businesses."',
      after: isEs ? '"Si estás pagando de más en impuestos por no saber esto, mira este truco..."' : '"If you are overpaying in taxes because of this hidden rule, watch this..."',
    },
    {
      before: isEs ? '"Visita nuestra tienda de calzado con 20% de descuento."' : '"Visit our footwear shop with 20% off."',
      after: isEs ? '"Por qué este par de zapatos dura 4 años sin despegarse: te muestro la costura..."' : '"Why this pair of boots lasts 4 years without breaking: let me show you the stitching..."',
    },
    {
      before: isEs ? '"Somos especialistas en odontología estética con tecnología avanzada."' : '"We are cosmetic dentistry specialists with advanced tech."',
      after: isEs ? '"El error que estás cometiendo al cepillarte que te mancha los dientes en 6 meses..."' : '"The #1 mistake you make when brushing that stains your teeth in 6 months..."',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-[#0D0D0E] border border-black/[0.1] dark:border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden text-[#111111] dark:text-white">
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between gap-4 bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#FE385B]/10 text-[#FE385B] border border-[#FE385B]/20">
              <BookOpen size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-[#FE385B] uppercase tracking-widest bg-[#FE385B]/10 px-2 py-0.5 rounded">
                  RETO 1.1 · MICROCLASES 1.1.1 + 1.1.2
                </span>
                <span className="text-xs text-[#8E8E93] font-mono">Semana 1</span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg">
                {isEs ? 'Ficha de Reescritura Comercial & Guion UGC' : 'Commercial Rewriting & UGC Script Sheet'}
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
                ? 'bg-[#FE385B] text-white font-bold shadow-sm shadow-[#FE385B]/20'
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
                ? 'bg-[#FE385B] text-white font-bold shadow-sm shadow-[#FE385B]/20'
                : 'bg-black/[0.03] dark:bg-white/[0.04] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
            }`}
          >
            <Lightbulb size={12} />
            <span>{isEs ? 'Banco de Ejemplos & Comparativa' : 'Examples & Comparison'}</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'form' ? (
            <CommercialVsNativeForm
              courseSlug={courseSlug}
              lessonId={lessonId}
              lang={lang}
              studentName={studentName}
              onSubmitted={onSubmitted}
            />
          ) : (
            <div className="space-y-6">
              {/* Contrast Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-red-500/5 border border-red-500/20 space-y-2">
                  <span className="font-mono text-xs font-bold text-red-500 uppercase block">
                    ❌ Anuncio Tradicional (Invasivo)
                  </span>
                  <ul className="text-xs space-y-1.5 text-[#666666] dark:text-[#A1A1AA] list-disc list-inside">
                    <li>Habla de la empresa y no del cliente.</li>
                    <li>Locución neutra y bancos de video staged.</li>
                    <li>Fuerza a formularios web con 80% de rebote.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/30 space-y-2">
                  <span className="font-mono text-xs font-bold text-[#10B981] uppercase block">
                    ✓ Contenido Comercial Nativo (UXIO)
                  </span>
                  <ul className="text-xs space-y-1.5 text-[#111111] dark:text-white font-medium list-disc list-inside">
                    <li>Ataca el dolor en 3 segundos con rostro real.</li>
                    <li>Muestra la solución práctica en pantalla.</li>
                    <li>Cierra con llamada directa hacia WhatsApp.</li>
                  </ul>
                </div>
              </div>

              {/* Hook Rewriting Bank */}
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#FE385B] uppercase tracking-wider font-semibold block">
                  // BANCO DE REESCRITURA DE GANCHOS
                </span>
                <div className="space-y-2.5">
                  {examples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1 text-xs min-w-0 flex-1">
                        <p className="text-red-500/80 font-mono text-[11px] line-through">{ex.before}</p>
                        <p className="text-[#111111] dark:text-white font-medium text-xs pt-0.5">{ex.after}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => copyHook(ex.after, idx)}
                        className="p-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#FE385B]/10 hover:text-[#FE385B] text-[#8E8E93] transition-colors shrink-0"
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
