'use client';

import React, { useState, useRef } from 'react';
import {
  X,
  FileDown,
  CheckCircle2,
  Sparkles,
  Loader2,
  CheckSquare,
  Smartphone,
  Sun,
  Volume2,
  Camera,
} from 'lucide-react';
import { Locale } from '@/types';
import { exportA4DocumentToPdf } from '@/lib/academy/export-document-pdf';
import SetupChecklistPrintTemplate from './SetupChecklistPrintTemplate';

interface SetupChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Locale;
  studentName?: string;
}

export default function SetupChecklistModal({
  isOpen,
  onClose,
  lang,
  studentName = 'Estudiante UXIO',
}: SetupChecklistModalProps) {
  const isEs = lang === 'es';
  const printRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [checkedItems, setCheckedItems] = useState<number[]>([0]);

  if (!isOpen) return null;

  const toggleCheck = (idx: number) => {
    setCheckedItems(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  const handleDownloadPdf = async () => {
    if (!printRef.current || isExporting) return;
    try {
      setIsExporting(true);
      await exportA4DocumentToPdf(printRef.current, {
        fileName: 'Checklist_Grabacion_60_Segundos_UXIO',
        studentName,
      });
    } catch (err) {
      console.error('Error exportando PDF:', err);
    } finally {
      setIsExporting(false);
    }
  };

  const steps = [
    {
      title: isEs ? '1. Limpieza de Lente Inmediata' : '1. Clean Camera Lens',
      desc: isEs
        ? 'Pasa un paño de microfibra. La grasa de las manos causa el 80% de videos borrosos y con reflejos.'
        : 'Wipe camera with microfiber cloth to eliminate blurry finger smudges.',
      icon: Camera,
      color: 'text-[#FE385B]',
      badge: 'Cero Grasa',
    },
    {
      title: isEs ? '2. Activa la Cuadrícula (Grid 3x3)' : '2. Enable 3x3 Camera Grid',
      desc: isEs
        ? 'Alinea tus ojos con la línea horizontal superior para mantener contacto visual natural.'
        : 'Align your eyes with the top third horizontal grid line for natural eye-level framing.',
      icon: Smartphone,
      color: 'text-[#FF7F07]',
      badge: 'Encuadre Pro',
    },
    {
      title: isEs ? '3. Luz Natural a 45° (Ventana)' : '3. 45° Natural Window Light',
      desc: isEs
        ? 'Párate frente a la ventana en ángulo diagonal de 45° para iluminar tu rostro con volumen y sombra suave.'
        : 'Stand at a 45° diagonal angle facing a natural light window.',
      icon: Sun,
      color: 'text-[#10B981]',
      badge: 'Iluminación',
    },
    {
      title: isEs ? '4. Modo Avión & Bloqueo AE/AF' : '4. Airplane Mode & AE/AF Lock',
      desc: isEs
        ? 'Evita llamadas durante la toma. Mantén presionado sobre tu rostro para fijar el enfoque y la luz.'
        : 'Turn on Airplane Mode to prevent interruptions. Long-press on face to lock exposure & focus.',
      icon: Volume2,
      color: 'text-[#00F0FF]',
      badge: 'Sin Cortes',
    },
  ];

  const allChecked = checkedItems.length === steps.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-white dark:bg-[#0D0D0E] border border-black/[0.1] dark:border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden text-[#111111] dark:text-white">
        {/* Header Modal */}
        <div className="p-5 sm:p-6 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between gap-4 bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#FE385B]/10 text-[#FE385B] border border-[#FE385B]/20">
              <CheckSquare size={20} />
            </div>
            <div>
              <span className="font-mono text-[10px] font-bold text-[#FE385B] uppercase tracking-widest bg-[#FE385B]/10 px-2 py-0.5 rounded">
                CHECKLIST TÉCNICO
              </span>
              <h3 className="font-display font-bold text-base sm:text-lg">
                {isEs ? 'Protocolo de Grabación en 60 Segundos' : '60-Second Filming Checklist'}
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
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm font-sans leading-relaxed">
          <div className="p-3.5 rounded-2xl bg-[#10B981]/10 border border-[#10B981]/25 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#047857] dark:text-[#10B981] font-medium text-xs">
              <Sparkles size={14} />
              <span>{isEs ? `Progreso del checklist: ${checkedItems.length} de ${steps.length} verificados` : `Progress: ${checkedItems.length} of ${steps.length} verified`}</span>
            </div>
            {allChecked && (
              <span className="font-mono text-[10px] font-bold text-[#10B981] uppercase bg-[#10B981]/20 px-2 py-0.5 rounded">
                {isEs ? '¡Listo para Grabar!' : 'Ready to Shoot!'}
              </span>
            )}
          </div>

          <div className="space-y-2.5">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isChecked = checkedItems.includes(idx);

              return (
                <div
                  key={idx}
                  onClick={() => toggleCheck(idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    isChecked
                      ? 'bg-[#10B981]/[0.05] border-[#10B981]/30 shadow-2xs'
                      : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/[0.06] dark:border-white/[0.06] hover:border-black/[0.15]'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    <CheckCircle2
                      size={18}
                      className={isChecked ? 'text-[#10B981]' : 'text-[#8E8E93]/40'}
                    />
                  </div>

                  <div className="flex-1 space-y-0.5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-bold text-xs sm:text-sm text-[#111111] dark:text-white">
                        {step.title}
                      </h4>
                      <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.06] text-[#8E8E93]">
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <SetupChecklistPrintTemplate studentName={studentName} forwardedRef={printRef} />
    </div>
  );
}
