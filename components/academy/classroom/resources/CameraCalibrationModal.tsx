'use client';

import React, { useState, useRef } from 'react';
import { X, FileDown, Loader2, Camera, Sparkles, CheckCircle2 } from 'lucide-react';
import { Locale } from '@/types';
import { exportA4DocumentToPdf } from '@/lib/academy/export-document-pdf';
import CameraCalibrationPrintTemplate from './CameraCalibrationPrintTemplate';

interface CameraCalibrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Locale;
  studentName?: string;
}

export default function CameraCalibrationModal({
  isOpen,
  onClose,
  lang,
  studentName = 'Estudiante UXIO',
}: CameraCalibrationModalProps) {
  const isEs = lang === 'es';
  const printRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPdf = async () => {
    if (!printRef.current || isExporting) return;
    try {
      setIsExporting(true);
      await exportA4DocumentToPdf(printRef.current, {
        fileName: isEs ? 'Guia_Calibracion_Camara_UXIO' : 'UXIO_Camera_Calibration_Guide',
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
            <div className="p-2.5 rounded-xl bg-[#FE385B]/10 text-[#FE385B] border border-[#FE385B]/20">
              <Camera size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-[#FE385B] uppercase tracking-widest bg-[#FE385B]/10 px-2 py-0.5 rounded border border-[#FE385B]/20">
                  CHEAT SHEET EXCLUSIVO
                </span>
                <span className="text-xs text-[#8E8E93] font-mono">Semana 2 · Lección 2.1</span>
              </div>
              <h3 className="font-display font-bold text-base sm:text-lg">
                {isEs ? 'Guía Rápida de Calibración de Cámara' : 'Mobile Camera Calibration Guide'}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={isExporting}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-xs shadow-md shadow-[#FE385B]/20 transition-all active:scale-95 disabled:opacity-50"
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
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-2">
              <h4 className="font-display font-bold text-xs text-[#FE385B]">1. Resolución & FPS</h4>
              <p className="text-[#666666] dark:text-[#8E8E93] leading-relaxed">
                4K a 30 FPS para hablar a cámara (permite reencuadrar con zoom digital al 120%). 60 FPS solo para B-roll a cámara lenta.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-2">
              <h4 className="font-display font-bold text-xs text-[#FF7F07]">2. AF/AE Lock (-0.3 EV)</h4>
              <p className="text-[#666666] dark:text-[#8E8E93] leading-relaxed">
                Mantén presionado 2s sobre la piel y baja el sol 1mm. Elimina el parpadeo de brillo y enriquece los tonos de piel.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-2">
              <h4 className="font-display font-bold text-xs text-[#10B981]">3. Ojos & Cuadrícula</h4>
              <p className="text-[#666666] dark:text-[#8E8E93] leading-relaxed">
                Cuadrícula 3x3 activa. Ojos en la línea horizontal superior con 2-3 dedos de margen (headroom) sobre la cabeza.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Offscreen Print Render */}
      <div className="absolute left-[-9999px] top-[-9999px]">
        <div ref={printRef}>
          <CameraCalibrationPrintTemplate studentName={studentName} lang={lang} />
        </div>
      </div>
    </div>
  );
}
