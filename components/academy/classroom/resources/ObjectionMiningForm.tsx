'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FileText, FileDown, CheckCircle2, Loader2, Send } from 'lucide-react';
import { Locale } from '@/types';
import { exportA4DocumentToPdf } from '@/lib/academy/export-document-pdf';
import { saveLocalSubmission } from '@/lib/academy/submissions-store';
import ObjectionMiningPrintTemplate, { ObjectionMiningFormData, ObjectionItemData } from './ObjectionMiningPrintTemplate';

interface ObjectionMiningFormProps {
  courseSlug: string;
  lessonId: string;
  lang: Locale;
  studentName?: string;
  onSubmitted?: () => void;
}

export default function ObjectionMiningForm({
  courseSlug,
  lessonId,
  lang,
  studentName = 'Estudiante UXIO',
  onSubmitted,
}: ObjectionMiningFormProps) {
  const isEs = lang === 'es';
  const printRef = useRef<HTMLDivElement>(null);
  const storageKey = `uxio_objection_mining_${courseSlug}_${lessonId}`;

  const [form, setForm] = useState<ObjectionMiningFormData>({
    studentName: studentName !== 'Estudiante UXIO' ? studentName : '',
    brandName: '',
    objections: [
      { faq: '', hook: '' },
      { faq: '', hook: '' },
      { faq: '', hook: '' },
      { faq: '', hook: '' },
      { faq: '', hook: '' },
    ],
  });

  const [isSaved, setIsSaved] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setForm(prev => ({
            ...prev,
            ...parsed,
            studentName: parsed.studentName || prev.studentName || (studentName !== 'Estudiante UXIO' ? studentName : ''),
          }));
        } catch {}
      }
    }
  }, [storageKey, studentName]);

  const handleFieldChange = (idx: number, field: keyof ObjectionItemData, value: string) => {
    const updated = [...(form.objections || [])];
    updated[idx] = { ...updated[idx], [field]: value };
    const updatedForm = { ...form, objections: updated };
    setForm(updatedForm);
    setIsSaved(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, JSON.stringify(updatedForm));
      setIsSaved(true);
    }
  };

  const handleDownloadPdf = async () => {
    if (!printRef.current || isExporting) return;
    try {
      setIsExporting(true);
      await exportA4DocumentToPdf(printRef.current, {
        fileName: isEs ? 'Ficha_Mineria_Objeciones' : 'Objection_Mining_Worksheet',
        studentName: form.studentName || studentName,
      });
    } catch (e) {
      console.error('Error exportando PDF:', e);
    } finally {
      setIsExporting(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      saveLocalSubmission({
        userId: 'current_user',
        studentName: form.studentName || studentName,
        studentEmail: 'alumno@uxio.agency',
        courseSlug,
        lessonId,
        lessonTitle: isEs ? 'Reto 1.2: Minería de 5 Objeciones de WhatsApp' : 'Challenge 1.2: 5 WhatsApp Objections Mining',
        moduleWeekTag: 'SEMANA 1',
        challengePrompt: isEs
          ? 'Extrae 5 dudas u objeciones recurrentes de WhatsApp y redacta el gancho y respuesta maestra.'
          : 'Extract 5 recurring WhatsApp objections and draft opening hooks and master answers.',
        challengeDeliverable: isEs
          ? 'Ficha de Minería de Objeciones Completada en Plataforma'
          : 'Objection Mining Sheet completed in classroom',
        challengeCriteria: [
          isEs ? '5 objeciones reales de WhatsApp mapeadas' : '5 real WhatsApp objections mapped',
          isEs ? 'Ganchos citando la duda en primera persona' : 'First-person hooks citing friction',
          isEs ? 'Respuestas técnicas con llamado a WhatsApp' : 'Technical answers with WhatsApp CTA',
        ],
        submissionUrl: isEs
          ? `5 Objeciones Mapeadas (${form.brandName || 'Mi Negocio'}) - 1a Objeción: "${form.objections?.[0]?.faq}"`
          : `5 Objections Mapped (${form.brandName || 'My Brand'}) - 1st FAQ: "${form.objections?.[0]?.faq}"`,
        submissionType: 'text',
        status: 'submitted',
        feedbackText: null,
      });

      window.dispatchEvent(new Event('uxio-submissions-updated'));
      setSubmittedSuccess(true);
      if (onSubmitted) onSubmitted();
    } catch (err) {
      console.error('Error enviando formulario:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-[#111111] dark:text-white">
            Nombre de tu Marca / Empresa:
          </label>
          <input
            type="text"
            value={form.brandName || ''}
            onChange={e => {
              const updated = { ...form, brandName: e.target.value };
              setForm(updated);
              if (typeof window !== 'undefined') localStorage.setItem(storageKey, JSON.stringify(updated));
            }}
            placeholder={isEs ? 'Ej: Estudio Contable Vega' : 'e.g., Vega Accounting'}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FF7F07]"
          />
        </div>

        {/* 5 Objections Rows */}
        <div className="space-y-3 pt-1">
          <span className="font-mono text-xs font-bold text-[#FF7F07] uppercase tracking-wider block">
            // TUS 5 OBJECIONES DE WHATSAPP PARA TRANSFORMAR EN VIDEO
          </span>

          {[0, 1, 2, 3, 4].map(idx => {
            const item = form.objections?.[idx] || { faq: '', hook: '' };
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#FF7F07]">
                    OBJECIÓN #{idx + 1}
                  </span>
                  <span className="text-[10px] text-[#8E8E93] font-mono">Pilar: Educar / Desmentir</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[11px] font-medium text-[#666666] dark:text-[#8E8E93]">
                      Duda / Objeción Real del Cliente:
                    </label>
                    <input
                      type="text"
                      value={item.faq}
                      onChange={e => handleFieldChange(idx, 'faq', e.target.value)}
                      placeholder={isEs ? `Ej: "¿Por qué tardan 4 días en entregar?"` : 'e.g., Turnaround time FAQ'}
                      className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FF7F07]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                      ✓ Gancho Incómodo de 3s (0-3s):
                    </label>
                    <input
                      type="text"
                      value={item.hook}
                      onChange={e => handleFieldChange(idx, 'hook', e.target.value)}
                      placeholder={isEs ? `Ej: "Por qué tardamos 4 días cuando otros lo hacen en 24h (y por qué te conviene):"` : 'e.g., Opening hook'}
                      className="w-full px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-950 dark:text-emerald-300 font-medium focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2 text-xs text-[#8E8E93]">
          {isSaved && <span className="flex items-center gap-1 text-[#10B981] font-mono"><CheckCircle2 size={13} /> Guardado</span>}
          {submittedSuccess && <span className="text-[#10B981] font-bold">¡Ficha enviada a la mesa docente con éxito! 🚀</span>}
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={isExporting}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] text-[#111111] dark:text-white font-display font-bold text-xs transition-all border border-black/[0.06] dark:border-white/[0.06]"
          >
            {isExporting ? <Loader2 size={13} className="animate-spin" /> : <FileDown size={13} />}
            <span>{isEs ? 'Descargar Ficha en PDF A4' : 'Download A4 PDF'}</span>
          </button>

          <button
            type="submit"
            disabled={isSubmitting || !form.objections?.[0]?.faq || !form.objections?.[0]?.hook}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#FF7F07] hover:bg-[#FF7F07]/90 text-white font-display font-bold text-xs shadow-md shadow-[#FF7F07]/20 transition-all active:scale-95 disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 size={13} className="animate-spin" /> : <Send size={13} />}
            <span>{isEs ? 'Enviar Reto para Revisión 🚀' : 'Submit Challenge for Review 🚀'}</span>
          </button>
        </div>
      </div>

      {/* Hidden Offscreen Print Render */}
      <div className="absolute left-[-9999px] top-[-9999px]">
        <div ref={printRef}>
          <ObjectionMiningPrintTemplate data={form} lang={lang} />
        </div>
      </div>
    </form>
  );
}
