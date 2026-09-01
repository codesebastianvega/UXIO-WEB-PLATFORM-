'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  FileText,
  FileDown,
  CheckCircle2,
  Loader2,
  Send,
} from 'lucide-react';
import { Locale } from '@/types';
import { exportA4DocumentToPdf } from '@/lib/academy/export-document-pdf';
import { saveLocalSubmission } from '@/lib/academy/submissions-store';
import BrandDiagnosisPrintTemplate, { DiagnosisFormData } from './BrandDiagnosisPrintTemplate';
import BrandDiagnosisFormFields from './BrandDiagnosisFormFields';

interface BrandDiagnosisFormProps {
  courseSlug: string;
  lessonId: string;
  lang: Locale;
  studentName?: string;
  onSubmitted?: () => void;
}

interface FormState extends DiagnosisFormData {
  links: string[];
}

export default function BrandDiagnosisForm({
  courseSlug,
  lessonId,
  lang,
  studentName = 'Estudiante UXIO',
  onSubmitted,
}: BrandDiagnosisFormProps) {
  const isEs = lang === 'es';
  const printRef = useRef<HTMLDivElement>(null);
  const storageKey = `uxio_diagnosis_${courseSlug}_${lessonId}`;

  const [form, setForm] = useState<FormState>({
    studentName: studentName !== 'Estudiante UXIO' ? studentName : '',
    businessName: '',
    mainOffer: '',
    pricePoint: '',
    targetAudience: '',
    painPoints: ['', '', ''],
    transformation: '',
    goal5Weeks: '',
    previousObstacle: '',
    links: [''],
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
        } catch {
          // ignore
        }
      }
    }
  }, [storageKey, studentName]);

  const handleChange = (field: keyof FormState, value: any) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    setIsSaved(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, JSON.stringify(updated));
      setIsSaved(true);
    }
  };

  const handlePainPointChange = (index: number, val: string) => {
    const updatedPoints = [...form.painPoints] as [string, string, string];
    updatedPoints[index] = val;
    handleChange('painPoints', updatedPoints);
  };

  const handleLinkChange = (index: number, val: string) => {
    const updated = [...form.links];
    updated[index] = val;
    handleChange('links', updated);
  };

  const handleAddLink = () => {
    handleChange('links', [...form.links, '']);
  };

  const handleRemoveLink = (index: number) => {
    const updated = form.links.filter((_, i) => i !== index);
    handleChange('links', updated.length ? updated : ['']);
  };

  const effectiveStudentName = form.studentName?.trim() || (studentName !== 'Estudiante UXIO' ? studentName : 'Sebas Vega');

  const handleSubmitTask = async () => {
    setIsSubmitting(true);
    try {
      const validLinks = form.links.filter(l => l.trim().length > 0 && (l.startsWith('http://') || l.startsWith('https://')));
      const summaryUrl = validLinks.join('\n');

      saveLocalSubmission({
        userId: 'current_user',
        studentName: effectiveStudentName,
        studentEmail: 'alumno@uxio.agency',
        courseSlug,
        lessonId,
        lessonTitle: isEs ? 'Clase 0.1 — Ficha de Diagnóstico de Marca' : 'Lesson 0.1 — Brand Diagnosis Sheet',
        moduleWeekTag: 'SEMANA 0',
        challengePrompt: isEs ? 'Llenar la Ficha de Diagnóstico de Marca' : 'Complete Brand Diagnosis Sheet',
        challengeDeliverable: isEs ? 'Ficha de Diagnóstico completada' : 'Completed Brand Diagnosis',
        challengeCriteria: [
          'Oferta principal y precio definido',
          'Cliente ideal con 3 dolores claros',
          'Meta comercial a 5 semanas',
        ],
        submissionUrl: summaryUrl,
        submissionType: 'document',
        status: 'submitted',
        feedbackText: null,
        formData: {
          ...form,
          studentName: effectiveStudentName,
        },
      });

      setSubmittedSuccess(true);
      onSubmitted?.();
    } catch (err) {
      console.error('Error enviando tarea:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadPdf = async () => {
    if (!printRef.current || isExporting) return;
    try {
      setIsExporting(true);
      await exportA4DocumentToPdf(printRef.current, {
        fileName: `Ficha_Diagnostico_${form.businessName || 'Marca'}`,
        studentName: effectiveStudentName,
      });
    } catch (err) {
      console.error('Error generando PDF:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#121214] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#FE385B]/10 text-[#FE385B] border border-[#FE385B]/20">
              <FileText size={20} />
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white">
                {isEs ? 'Ficha de Diagnóstico de Marca (Reto 0.1)' : 'Brand Diagnosis Sheet (Challenge 0.1)'}
              </h3>
              <p className="text-xs text-[#8E8E93] font-sans">
                {isEs
                  ? 'Llena tu diagnóstico aquí. Se autoguarda y puedes descargarlo en PDF A4.'
                  : 'Fill in your diagnosis here. It autosaves and downloads as A4 PDF.'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isSaved && (
              <span className="text-[10px] font-mono text-[#10B981] flex items-center gap-1">
                <CheckCircle2 size={12} />
                <span>Autoguardado</span>
              </span>
            )}
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={isExporting}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#FE385B] hover:text-white font-mono text-xs transition-colors disabled:opacity-50"
            >
              {isExporting ? <Loader2 size={13} className="animate-spin" /> : <FileDown size={13} />}
              <span>{isEs ? 'Descargar PDF A4' : 'Download A4 PDF'}</span>
            </button>
          </div>
        </div>

        {/* Dynamic Form Content */}
        <BrandDiagnosisFormFields
          form={form}
          isEs={isEs}
          onChange={handleChange}
          onPainPointChange={handlePainPointChange}
          onLinkChange={handleLinkChange}
          onAddLink={handleAddLink}
          onRemoveLink={handleRemoveLink}
        />

        {/* Action Button */}
        <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-xs text-[#8E8E93] font-sans">
            {submittedSuccess
              ? (isEs ? '✅ Tarea enviada exitosamente para revisión docente.' : '✅ Submission delivered successfully.')
              : (isEs ? 'Recuerda que puedes actualizar tus respuestas en cualquier momento.' : 'You can update anytime.')}
          </span>
          <button
            type="button"
            onClick={handleSubmitTask}
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-xs transition-all shadow-md shadow-[#FE385B]/20 active:scale-95 disabled:opacity-50"
          >
            {isSubmitting ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
            <span>{isSubmitting ? (isEs ? 'Enviando...' : 'Submitting...') : (isEs ? 'Enviar Tarea para Revisión 🚀' : 'Submit Challenge 🚀')}</span>
          </button>
        </div>
      </div>

      <BrandDiagnosisPrintTemplate form={form} studentName={effectiveStudentName} forwardedRef={printRef} />
    </div>
  );
}
