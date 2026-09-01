'use client';

import React, { useState, useRef } from 'react';
import {
  X,
  FileDown,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  Loader2,
  BookOpen,
} from 'lucide-react';
import { Locale } from '@/types';
import { exportA4DocumentToPdf } from '@/lib/academy/export-document-pdf';
import QuickstartGuidePrintTemplate from './QuickstartGuidePrintTemplate';

interface QuickstartGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Locale;
  studentName?: string;
}

export default function QuickstartGuideModal({
  isOpen,
  onClose,
  lang,
  studentName = 'Estudiante UXIO',
}: QuickstartGuideModalProps) {
  const isEs = lang === 'es';
  const printRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPdf = async () => {
    if (!printRef.current || isExporting) return;
    try {
      setIsExporting(true);
      await exportA4DocumentToPdf(printRef.current, {
        fileName: isEs ? 'Guia_Inicio_Rapido_Creator_Lab' : 'Creator_Lab_Quickstart_Guide',
        studentName,
      });
    } catch (error) {
      console.error('Error exportando PDF:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const roadmapItems = [
    { s: 'Semana 1', t: 'Estrategia Comercial', d: 'Encontrar el valor de tu marca y crear 30 ideas.' },
    { s: 'Semana 2', t: 'Grabación con Smartphone', d: 'Luz natural, audio nítido y planos B-roll.' },
    { s: 'Semana 3', t: 'Creación de Guiones', d: 'Hooks en 3 segundos y retención vertical.' },
    { s: 'Semana 4', t: 'Edición Ágil & IA', d: 'Edición en 15 minutos con CapCut y prompts.' },
    { s: 'Semana 5', t: 'Ventas por WhatsApp', d: 'De visualizaciones a conversaciones comerciales.' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-[#0D0D0E] border border-black/[0.1] dark:border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden text-[#111111] dark:text-white">
        {/* Header Modal Bar */}
        <div className="p-5 sm:p-6 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between gap-4 bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#FE385B]/10 text-[#FE385B] border border-[#FE385B]/20">
              <BookOpen size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-[#FE385B] uppercase tracking-widest bg-[#FE385B]/10 px-2 py-0.5 rounded">
                  UXIO ACADEMY
                </span>
                <span className="text-xs text-[#8E8E93] font-mono">Cohorte 01</span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg">
                {isEs ? 'Guía Rápida de Inicio & Hoja de Ruta' : 'Creator Lab Quickstart Guide'}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={isExporting}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-xs shadow-md shadow-[#FE385B]/20 transition-all active:scale-95 disabled:opacity-50"
            >
              {isExporting ? <Loader2 size={13} className="animate-spin" /> : <FileDown size={13} />}
              <span>{isEs ? 'Descargar PDF A4' : 'Download A4 PDF'}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm font-sans leading-relaxed">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-[#FE385B]/10 via-[#FF7F07]/5 to-transparent border border-[#FE385B]/20 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Sparkles size={16} className="text-[#FE385B]" />
              <span className="font-medium text-[#111111] dark:text-white">
                {isEs ? `Guía oficial preparada para: ${studentName}` : `Official guide prepared for: ${studentName}`}
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#FE385B] font-bold">5 Semanas</span>
          </div>

          {/* Cadence */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-[#111111] dark:text-white flex items-center gap-2">
              <Calendar size={15} className="text-[#10B981]" />
              <span>{isEs ? 'El Ritmo Semanal de Trabajo' : 'Weekly Operating Rhythm'}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-1">
                <span className="text-[#FE385B] font-bold">Lunes</span>
                <p className="font-sans text-[11px] text-[#666666] dark:text-[#A1A1AA]">
                  {isEs ? 'Desbloqueo de microclases en video (menos de 15 min).' : 'Lesson unlock (< 15 min).'}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-1">
                <span className="text-[#FF7F07] font-bold">Miércoles</span>
                <p className="font-sans text-[11px] text-[#666666] dark:text-[#A1A1AA]">
                  {isEs ? 'Consultas rápidas y feedback en el grupo de WhatsApp.' : 'Live chat Q&A.'}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-1">
                <span className="text-[#10B981] font-bold">Viernes</span>
                <p className="font-sans text-[11px] text-[#666666] dark:text-[#A1A1AA]">
                  {isEs ? 'Grabación y edición rápida con CapCut en tu celular.' : 'Filming & editing.'}
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-1">
                <span className="text-[#00F0FF] font-bold">Domingo (11:59 PM)</span>
                <p className="font-sans text-[11px] text-[#666666] dark:text-[#A1A1AA]">
                  {isEs ? 'Cierre de entrega de reto para revisión del mentor.' : 'Weekly milestone submission.'}
                </p>
              </div>
            </div>
          </div>

          {/* Roadmap */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-[#111111] dark:text-white flex items-center gap-2">
              <Layers size={15} className="text-[#FE385B]" />
              <span>{isEs ? 'Hoja de Ruta de 5 Semanas' : '5-Week Roadmap'}</span>
            </h4>
            <div className="space-y-2 text-xs">
              {roadmapItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02]">
                  <CheckCircle2 size={15} className="text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111111] dark:text-white">{item.s}: {item.t}</span>
                    <p className="text-[#71717A] text-[11px]">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Printable A4 Container */}
      <QuickstartGuidePrintTemplate studentName={studentName} forwardedRef={printRef} />
    </div>
  );
}
