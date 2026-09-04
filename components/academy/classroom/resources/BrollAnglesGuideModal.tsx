'use client';

import React, { useState, useRef } from 'react';
import { X, FileDown, Loader2, Video, Camera, Sparkles } from 'lucide-react';
import { Locale } from '@/types';
import { exportA4DocumentToPdf } from '@/lib/academy/export-document-pdf';
import BrollAnglesGuidePrintTemplate, { BROLL_ANGLES_DATA } from './BrollAnglesGuidePrintTemplate';

interface BrollAnglesGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Locale;
  studentName?: string;
}

export default function BrollAnglesGuideModal({
  isOpen,
  onClose,
  lang,
  studentName = 'Estudiante UXIO',
}: BrollAnglesGuideModalProps) {
  const isEs = lang === 'es';
  const printRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPdf = async () => {
    if (!printRef.current || isExporting) return;
    try {
      setIsExporting(true);
      await exportA4DocumentToPdf(printRef.current, {
        fileName: isEs ? 'Guia_Angulos_B_Roll_Procesos' : 'B_Roll_Angles_Process_Guide',
        studentName,
      });
    } catch (e) {
      console.error('Error exportando PDF:', e);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-[#0D0D0E] border border-black/[0.1] dark:border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden text-[#111111] dark:text-white">
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between gap-4 bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#FF7F07]/10 text-[#FF7F07] border border-[#FF7F07]/20">
              <Camera size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-[#FF7F07] uppercase tracking-widest bg-[#FF7F07]/10 px-2 py-0.5 rounded">
                  GUÍA DE PRODUCCIÓN
                </span>
                <span className="text-xs text-[#8E8E93] font-mono">Clase 1.2</span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg">
                {isEs ? 'Catálogo de Ángulos B-Roll & Procesos' : 'B-Roll & Process Filming Angles'}
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

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <p className="text-xs text-[#666666] dark:text-[#8E8E93]">
            {isEs
              ? 'No necesitas un equipo de producción de cine. Con estos 6 planos grabados con tu celular en mano o con un trípode de $10 USD puedes mostrar la calidad de tu trabajo y construir autoridad instantánea sin tener que hablar todo el tiempo.'
              : 'You do not need an expensive film crew. Use these 6 smartphone angles to showcase your craftsmanship.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BROLL_ANGLES_DATA.map((angle, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-2.5"
              >
                <div className="flex items-center justify-between border-b border-black/[0.04] dark:border-white/[0.04] pb-2">
                  <span className="font-mono text-xs font-bold text-[#FF7F07]">
                    {angle.title}
                  </span>
                  <span className="text-[10px] text-[#8E8E93] font-mono">
                    Plano #{idx + 1}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div>
                    <span className="font-mono text-[10px] text-[#8E8E93] uppercase block">Encuadre & Cámara:</span>
                    <p className="text-[#111111] dark:text-white font-medium">{angle.cameraSetup}</p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-950 dark:text-emerald-300">
                    <span className="font-mono text-[10px] uppercase font-bold block text-emerald-700 dark:text-emerald-400">
                      Por qué funciona:
                    </span>
                    <p className="text-[11px] mt-0.5">{angle.psychology}</p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] text-[#8E8E93] uppercase block">Ejemplo Práctico:</span>
                    <p className="text-[#666666] dark:text-[#A1A1AA] text-[11px]">{angle.useCase}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between gap-3 bg-black/[0.02] dark:bg-white/[0.02]">
          <span className="text-xs text-[#8E8E93] font-mono">
            {isEs ? 'PDF A4 listo para imprimir o enviar al equipo' : 'Printable A4 Reference Guide'}
          </span>

          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={isExporting}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#FF7F07] hover:bg-[#FF7F07]/90 text-white font-display font-bold text-xs shadow-md shadow-[#FF7F07]/20 transition-all active:scale-95"
          >
            {isExporting ? <Loader2 size={13} className="animate-spin" /> : <FileDown size={13} />}
            <span>{isEs ? 'Descargar Guía en PDF A4' : 'Download B-Roll Guide PDF'}</span>
          </button>
        </div>
      </div>

      {/* Hidden PDF Print Target */}
      <div className="absolute left-[-9999px] top-[-9999px]">
        <div ref={printRef}>
          <BrollAnglesGuidePrintTemplate lang={lang} studentName={studentName} />
        </div>
      </div>
    </div>
  );
}
