'use client';

import React, { useState, useRef } from 'react';
import { X, FileDown, Loader2, FileText, Sparkles, BookOpen } from 'lucide-react';
import { Locale } from '@/types';
import { exportA4DocumentToPdf } from '@/lib/academy/export-document-pdf';
import ScriptFastDraftPrintTemplate from './ScriptFastDraftPrintTemplate';

interface ScriptFastDraftModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Locale;
  studentName?: string;
}

export default function ScriptFastDraftModal({
  isOpen,
  onClose,
  lang,
  studentName = 'Estudiante UXIO',
}: ScriptFastDraftModalProps) {
  const isEs = lang === 'es';
  const printRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPdf = async () => {
    if (!printRef.current || isExporting) return;
    try {
      setIsExporting(true);
      await exportA4DocumentToPdf(printRef.current, {
        fileName: isEs ? 'Plantilla_Guion_4_Bloques_UXIO' : 'UXIO_4_Block_Script_Template',
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
            <div className="p-2.5 rounded-xl bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
              <FileText size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-[#10B981] uppercase tracking-widest bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">
                  PLANTILLA OFICIAL
                </span>
                <span className="text-xs text-[#8E8E93] font-mono">Semana 2 · Lección 2.3</span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg">
                {isEs ? 'Plantilla de Guion en 4 Bloques (45s)' : '4-Block Fast Scripting Template (45s)'}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={isExporting}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#10B981] hover:bg-[#10B981]/90 text-white font-display font-bold text-xs shadow-md shadow-[#10B981]/20 transition-all active:scale-95 disabled:opacity-50"
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

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-3 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-1.5">
              <span className="font-mono text-[10px] font-bold text-[#FE385B] bg-[#FE385B]/10 px-2 py-0.5 rounded">
                ACTO 1 (0-3s)
              </span>
              <h4 className="font-display font-bold text-xs">Gancho de Fricción</h4>
              <p className="text-[#666666] dark:text-[#8E8E93] text-[11px]">
                Plano Medio mirando al lente. Ataca el dolor principal sin saludos ni logotipos.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-1.5">
              <span className="font-mono text-[10px] font-bold text-[#FF7F07] bg-[#FF7F07]/10 px-2 py-0.5 rounded">
                ACTO 2 (3-15s)
              </span>
              <h4 className="font-display font-bold text-xs">El Dolor / Problema</h4>
              <p className="text-[#666666] dark:text-[#8E8E93] text-[11px]">
                Explica la consecuencia real de no resolver este problema con palabras cotidianas del cliente.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-1.5">
              <span className="font-mono text-[10px] font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded">
                ACTO 3 (15-35s)
              </span>
              <h4 className="font-display font-bold text-xs">Demostración con B-Roll</h4>
              <p className="text-[#666666] dark:text-[#8E8E93] text-[11px]">
                Intercala 2 tomas macro de manos o producto mostrando cómo funciona tu solución.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-1.5">
              <span className="font-mono text-[10px] font-bold text-[#7928CA] bg-[#7928CA]/10 px-2 py-0.5 rounded">
                ACTO 4 (35-45s)
              </span>
              <h4 className="font-display font-bold text-xs">Puente a WhatsApp</h4>
              <p className="text-[#666666] dark:text-[#8E8E93] text-[11px]">
                Cierra con palabra clave para activar una conversación privada de venta en WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Offscreen Print Render */}
      <div className="absolute left-[-9999px] top-[-9999px]">
        <div ref={printRef}>
          <ScriptFastDraftPrintTemplate studentName={studentName} lang={lang} />
        </div>
      </div>
    </div>
  );
}
