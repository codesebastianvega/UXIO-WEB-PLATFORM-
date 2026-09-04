'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FileText, FileDown, CheckCircle2, Loader2, Send } from 'lucide-react';
import { Locale } from '@/types';
import { exportA4DocumentToPdf } from '@/lib/academy/export-document-pdf';
import { saveLocalSubmission } from '@/lib/academy/submissions-store';
import CommercialVsNativePrintTemplate, { CommercialVsNativeFormData } from './CommercialVsNativePrintTemplate';

interface CommercialVsNativeFormProps {
  courseSlug: string;
  lessonId: string;
  lang: Locale;
  studentName?: string;
  onSubmitted?: () => void;
}

export default function CommercialVsNativeForm({
  courseSlug,
  lessonId,
  lang,
  studentName = 'Estudiante UXIO',
  onSubmitted,
}: CommercialVsNativeFormProps) {
  const isEs = lang === 'es';
  const printRef = useRef<HTMLDivElement>(null);
  const storageKey = `uxio_commercial_native_${courseSlug}_${lessonId}`;

  const [form, setForm] = useState<CommercialVsNativeFormData>({
    studentName: studentName !== 'Estudiante UXIO' ? studentName : '',
    brandName: '',
    traditionalHeadline: '',
    frictionPoint: '',
    nativeHook3s: '',
    ugcFormat: isEs ? 'UGC de Creador Interno (Fundador)' : 'In-House Founder UGC',
    casualHook: '',
    realProblem: '',
    handsOnProof: '',
    whatsappCta: '',
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

  const handleChange = (field: keyof CommercialVsNativeFormData, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    setIsSaved(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, JSON.stringify(updated));
      setIsSaved(true);
    }
  };

  const handleDownloadPdf = async () => {
    if (!printRef.current || isExporting) return;
    try {
      setIsExporting(true);
      await exportA4DocumentToPdf(printRef.current, {
        fileName: isEs ? 'Ficha_Reescritura_Comercial_UGC' : 'Commercial_UGC_Worksheet',
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
        lessonTitle: isEs ? 'Reto 1.1: Reescritura Comercial & Guion UGC' : 'Challenge 1.1: Commercial Rewriting & UGC Script',
        moduleWeekTag: 'SEMANA 1',
        challengePrompt: isEs
          ? 'Reescribe tu anuncio tradicional en un gancho nativo y estructura tu guion UGC de 4 pasos.'
          : 'Rewrite traditional corporate headline into native hook and draft a 4-step UGC script.',
        challengeDeliverable: isEs
          ? 'Ficha de Reescritura & Guion UGC Completada en la Plataforma'
          : 'Commercial Rewriting & UGC Script Sheet completed in classroom',
        challengeCriteria: [
          isEs ? 'Gancho nativo de 3s sin saludos lentos' : '3-sec native hook with zero slow intro',
          isEs ? 'Guion UGC en 4 pasos con creador interno' : '4-step UGC script with in-house creator',
          isEs ? 'Llamado a WhatsApp con palabra clave' : 'WhatsApp keyword CTA',
        ],
        submissionUrl: isEs
          ? `Ficha UGC Completada (${form.brandName || 'Mi Negocio'}) - Gancho: "${form.nativeHook3s}"`
          : `Completed UGC Sheet (${form.brandName || 'My Brand'}) - Hook: "${form.nativeHook3s}"`,
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
      {/* Block 1: Microclase 1.1.1 */}
      <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20 space-y-4">
        <div className="flex items-center justify-between border-b border-red-500/20 pb-2">
          <span className="font-mono text-xs font-bold text-red-500 uppercase">
            1. Microclase 1.1.1 · De Anuncio Tradicional a Gancho Nativo
          </span>
          <span className="text-[11px] text-[#8E8E93] font-mono">0-3 Segundos</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#111111] dark:text-white">
              Nombre de tu Marca / Empresa:
            </label>
            <input
              type="text"
              value={form.brandName || ''}
              onChange={e => handleChange('brandName', e.target.value)}
              placeholder={isEs ? 'Ej: Calzado Artesanal Vega' : 'e.g., Vega Footwear'}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FE385B]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#111111] dark:text-white">
              Frase o Titular Corporativo Actual:
            </label>
            <input
              type="text"
              value={form.traditionalHeadline || ''}
              onChange={e => handleChange('traditionalHeadline', e.target.value)}
              placeholder={isEs ? 'Ej: "Somos líderes en fabricación de calzado con 10 años..."' : 'e.g., "We are #1 in footwear..."'}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FE385B]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#111111] dark:text-white">
              Dolor Específico del Comprador:
            </label>
            <input
              type="text"
              value={form.frictionPoint || ''}
              onChange={e => handleChange('frictionPoint', e.target.value)}
              placeholder={isEs ? 'Ej: "Zapatos que se despegan a los 3 meses y cansan la planta del pie"' : 'e.g., "Boots breaking after 3 months"'}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FE385B]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 font-bold">
              ✓ Nuevo Gancho Nativo de 3s (0-3s):
            </label>
            <input
              type="text"
              value={form.nativeHook3s || ''}
              onChange={e => handleChange('nativeHook3s', e.target.value)}
              placeholder={isEs ? 'Ej: "Por qué este par de zapatos dura 4 años sin romperse: te muestro la costura..."' : 'e.g., "Why this boots last 4 years..."'}
              className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-950 dark:text-emerald-300 font-medium focus:outline-none focus:border-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Block 2: Microclase 1.1.2 */}
      <div className="p-5 rounded-2xl bg-[#FF7F07]/5 border border-[#FF7F07]/20 space-y-4">
        <div className="flex items-center justify-between border-b border-[#FF7F07]/20 pb-2">
          <span className="font-mono text-xs font-bold text-[#FF7F07] uppercase">
            2. Microclase 1.1.2 · Guion UGC de Creador Interno en 4 Pasos
          </span>
          <span className="text-[11px] text-[#8E8E93] font-mono">Estructura Viral</span>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-[#111111] dark:text-white">
            Formato UGC Seleccionado:
          </label>
          <select
            value={form.ugcFormat || ''}
            onChange={e => handleChange('ugcFormat', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FF7F07]"
          >
            <option value={isEs ? 'UGC de Creador Interno (Fundador / Especialista)' : 'In-House Founder UGC'}>
              {isEs ? 'UGC de Creador Interno (Fundador / Técnico hablando a cámara)' : 'In-House Founder UGC'}
            </option>
            <option value={isEs ? 'UGC de Cliente Real (Testimonio / Unboxing)' : 'Customer UGC'}>
              {isEs ? 'UGC de Cliente Real (Testimonio / Unboxing)' : 'Customer UGC'}
            </option>
            <option value={isEs ? 'UGC Demostrativo POV (Manos en Acción / Proceso)' : 'POV Demo UGC'}>
              {isEs ? 'UGC Demostrativo POV (Manos en Acción / Proceso)' : 'POV Demo UGC'}
            </option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#111111] dark:text-white">
              Paso 1: Gancho Casual (0-3s)
            </label>
            <textarea
              rows={2}
              value={form.casualHook || ''}
              onChange={e => handleChange('casualHook', e.target.value)}
              placeholder={isEs ? 'Ej: "Si buscas calzado para trabajar todo el día sin dolor de espalda, mira esto:"' : 'Casual hook...'}
              className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FF7F07]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#111111] dark:text-white">
              Paso 2: Problema Real (3-15s)
            </label>
            <textarea
              rows={2}
              value={form.realProblem || ''}
              onChange={e => handleChange('realProblem', e.target.value)}
              placeholder={isEs ? 'Ej: "El error común es comprar suelas de plástico pegadas con pegamento barato."' : 'Real friction...'}
              className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FF7F07]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#111111] dark:text-white">
              Paso 3: Demostración en Manos / POV (15-35s)
            </label>
            <textarea
              rows={2}
              value={form.handsOnProof || ''}
              onChange={e => handleChange('handsOnProof', e.target.value)}
              placeholder={isEs ? 'Ej: "Aquí mostramos cómo cosemos a mano con hilo encerado triple y plantilla ergonómica."' : 'Hands-on proof...'}
              className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FF7F07]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 font-bold">
              Paso 4: Puente a WhatsApp con Palabra Clave (35-45s)
            </label>
            <textarea
              rows={2}
              value={form.whatsappCta || ''}
              onChange={e => handleChange('whatsappCta', e.target.value)}
              placeholder={isEs ? 'Ej: "Comenta BOTAS y te mando el catálogo con envío gratis a tu WhatsApp."' : 'WhatsApp CTA...'}
              className="w-full px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-950 dark:text-emerald-300 font-medium focus:outline-none focus:border-emerald-500"
            />
          </div>
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
            disabled={isSubmitting || !form.nativeHook3s || !form.whatsappCta}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-xs shadow-md shadow-[#FE385B]/20 transition-all active:scale-95 disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 size={13} className="animate-spin" /> : <Send size={13} />}
            <span>{isEs ? 'Enviar Reto para Revisión 🚀' : 'Submit Challenge for Review 🚀'}</span>
          </button>
        </div>
      </div>

      {/* Hidden Offscreen Print Render */}
      <div className="absolute left-[-9999px] top-[-9999px]">
        <div ref={printRef}>
          <CommercialVsNativePrintTemplate data={form} lang={lang} />
        </div>
      </div>
    </form>
  );
}
