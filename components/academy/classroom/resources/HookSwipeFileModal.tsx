'use client';

import React, { useState, useRef } from 'react';
import { X, FileDown, Sparkles, Loader2, Copy, Check, Flame } from 'lucide-react';
import { Locale } from '@/types';
import { exportA4DocumentToPdf } from '@/lib/academy/export-document-pdf';
import HookSwipeFilePrintTemplate, { HOOK_CATEGORIES_DATA } from './HookSwipeFilePrintTemplate';

interface HookSwipeFileModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Locale;
  studentName?: string;
}

export default function HookSwipeFileModal({
  isOpen,
  onClose,
  lang,
  studentName = 'Estudiante UXIO',
}: HookSwipeFileModalProps) {
  const isEs = lang === 'es';
  const printRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownloadPdf = async () => {
    if (!printRef.current || isExporting) return;
    try {
      setIsExporting(true);
      await exportA4DocumentToPdf(printRef.current, {
        fileName: isEs ? 'Swipe_File_15_Ganchos_Virales' : 'Hook_Swipe_File_15_Formulas',
        studentName,
      });
    } catch (e) {
      console.error('Error exportando PDF:', e);
    } finally {
      setIsExporting(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-[#0D0D0E] border border-black/[0.1] dark:border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden text-[#111111] dark:text-white">
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between gap-4 bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#FE385B]/10 text-[#FE385B] border border-[#FE385B]/20">
              <Flame size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-[#FE385B] uppercase tracking-widest bg-[#FE385B]/10 px-2 py-0.5 rounded">
                  SWIPE FILE EXCLUSIVO
                </span>
                <span className="text-xs text-[#8E8E93] font-mono">15 Ganchos Virales</span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg">
                {isEs ? 'Banco de Fórmulas de Ganchos (0-3s)' : 'Viral Hook Formulas Swipe File (0-3s)'}
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
              ? 'Usa estas 15 estructuras probadas para abrir tus videos en TikTok y Reels sin saludar ni decir tu nombre. Copia la fórmula y reemplaza los corchetes con tu oferta.'
              : 'Use these 15 proven frameworks to start your vertical videos without slow intros. Copy and fill in the blanks.'}
          </p>

          <div className="space-y-4">
            {HOOK_CATEGORIES_DATA.map((cat, cIdx) => (
              <div
                key={cIdx}
                className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-3"
              >
                <span className="font-mono text-xs font-bold uppercase tracking-wider block" style={{ color: cat.color }}>
                  // {cat.category}
                </span>

                <div className="space-y-2.5">
                  {cat.hooks.map((item, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3.5 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.06] dark:border-white/[0.06] flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1 text-xs flex-1">
                        <span className="font-mono text-[11px] text-[#8E8E93] block">
                          Fórmula: <strong className="text-[#111111] dark:text-white font-medium">{item.formula}</strong>
                        </span>
                        <p className="text-emerald-600 dark:text-emerald-400 font-semibold pt-0.5">
                          {item.example}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => copyToClipboard(item.example)}
                        className="p-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#FE385B]/10 hover:text-[#FE385B] text-[#8E8E93] transition-colors shrink-0"
                        title={isEs ? 'Copiar Gancho' : 'Copy Hook'}
                      >
                        {copiedText === item.example ? <Check size={14} className="text-[#10B981]" /> : <Copy size={14} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between gap-3 bg-black/[0.02] dark:bg-white/[0.02]">
          <span className="text-xs text-[#8E8E93] font-mono">
            {isEs ? 'PDF A4 listo para imprimir o consultar' : 'Printable A4 Reference PDF'}
          </span>

          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={isExporting}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-xs shadow-md shadow-[#FE385B]/20 transition-all active:scale-95"
          >
            {isExporting ? <Loader2 size={13} className="animate-spin" /> : <FileDown size={13} />}
            <span>{isEs ? 'Descargar Swipe File en PDF A4' : 'Download Hook Swipe File PDF'}</span>
          </button>
        </div>
      </div>

      {/* Hidden PDF Print Target */}
      <div className="absolute left-[-9999px] top-[-9999px]">
        <div ref={printRef}>
          <HookSwipeFilePrintTemplate lang={lang} studentName={studentName} />
        </div>
      </div>
    </div>
  );
}
