'use client';

import React, { useState, useEffect, useRef } from 'react';
import { FileSpreadsheet, FileDown, CheckCircle2, Loader2, Send, Filter, Plus, Sparkles } from 'lucide-react';
import { Locale } from '@/types';
import { exportA4DocumentToPdf } from '@/lib/academy/export-document-pdf';
import { saveLocalSubmission } from '@/lib/academy/submissions-store';
import ContentMatrixPrintTemplate, { ContentMatrixFormData, MatrixRowItem } from './ContentMatrixPrintTemplate';

interface ContentMatrixFormProps {
  courseSlug: string;
  lessonId: string;
  lang: Locale;
  studentName?: string;
  onSubmitted?: () => void;
}

const DEFAULT_PILLARS = [
  'Educar & Resolver (40%)',
  'Proceso & Artesanía (20%)',
  'Prueba Social (20%)',
  'Desmitificar (10%)',
  'Venta Directa (10%)',
];

export default function ContentMatrixForm({
  courseSlug,
  lessonId,
  lang,
  studentName = 'Estudiante UXIO',
  onSubmitted,
}: ContentMatrixFormProps) {
  const isEs = lang === 'es';
  const printRef = useRef<HTMLDivElement>(null);
  const storageKey = `uxio_content_matrix_${courseSlug}_${lessonId}`;

  const initialRows: MatrixRowItem[] = Array.from({ length: 30 }, (_, i) => ({
    n: i + 1,
    pilar:
      i < 12
        ? 'Educar & Resolver (40%)'
        : i < 18
        ? 'Proceso & Artesanía (20%)'
        : i < 24
        ? 'Prueba Social (20%)'
        : i < 27
        ? 'Desmitificar (10%)'
        : 'Venta Directa (10%)',
    hook: '',
    friction: '',
    broll: '',
    cta: '',
  }));

  const [form, setForm] = useState<ContentMatrixFormData>({
    studentName: studentName !== 'Estudiante UXIO' ? studentName : '',
    brandName: '',
    rows: initialRows,
  });

  const [selectedPillarFilter, setSelectedPillarFilter] = useState<string>('all');
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
            rows: parsed.rows && parsed.rows.length === 30 ? parsed.rows : prev.rows,
            studentName: parsed.studentName || prev.studentName || (studentName !== 'Estudiante UXIO' ? studentName : ''),
          }));
        } catch {}
      }
    }
  }, [storageKey, studentName]);

  const handleRowChange = (idx: number, field: keyof MatrixRowItem, value: string) => {
    const updatedRows = [...(form.rows || initialRows)];
    updatedRows[idx] = { ...updatedRows[idx], [field]: value };
    const updatedForm = { ...form, rows: updatedRows };
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
        fileName: isEs ? 'Matriz_30_Ideas_Contenido_UXIO' : 'UXIO_30_Day_Content_Matrix',
        studentName: form.studentName || studentName,
      });
    } catch (e) {
      console.error('Error exportando PDF:', e);
    } finally {
      setIsExporting(false);
    }
  };

  const completedCount = (form.rows || []).filter(r => r.hook.trim().length > 0).length;

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
        lessonTitle: isEs ? 'Reto 1 Oficial: Matriz de 30 Ideas de Contenido' : 'Official Challenge 1: 30-Day Content Matrix',
        moduleWeekTag: 'SEMANA 1',
        challengePrompt: isEs
          ? 'Completa tu matriz de 30 ideas categorizadas en los 5 pilares en el formulario interactivo.'
          : 'Complete your 30-day content matrix across 5 pillars in the interactive worksheet.',
        challengeDeliverable: isEs
          ? 'Matriz de 30 Ideas Completada en la Plataforma'
          : '30-Day Content Matrix completed in classroom',
        challengeCriteria: [
          isEs ? '30 ideas completas con gancho y CTA' : '30 complete ideas with hook and CTA',
          isEs ? 'Dieta 40/20/20/10/10 respetada' : '40/20/20/10/10 diet respected',
          isEs ? 'Ganchos de 0 a 3 segundos sin rodeos' : '0-3s hooks without slow intros',
          isEs ? 'Llamados a WhatsApp con palabra clave' : 'Keyword WhatsApp CTAs',
        ],
        submissionUrl: isEs
          ? `Matriz de 30 Ideas (${form.brandName || 'Mi Negocio'}) - ${completedCount}/30 Ideas Listas`
          : `30-Day Matrix (${form.brandName || 'My Brand'}) - ${completedCount}/30 Ideas Ready`,
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

  const rows = form.rows || initialRows;
  const filteredRows = selectedPillarFilter === 'all'
    ? rows
    : rows.filter(r => r.pilar.startsWith(selectedPillarFilter));

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Brand Name Input & Progress Bar */}
      <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1 flex-1">
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
              placeholder={isEs ? 'Ej: Calzado Artesanal Vega' : 'e.g., Vega Footwear'}
              className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FE385B]"
            />
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <span className="font-mono text-xs font-bold text-[#FE385B] bg-[#FE385B]/10 px-3 py-1.5 rounded-xl border border-[#FE385B]/20">
              Progreso: {completedCount} / 30 Ideas
            </span>
          </div>
        </div>

        {/* Pillar Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[10px] font-mono text-[#8E8E93] mr-1 uppercase">Filtrar por:</span>
          {[
            { id: 'all', label: 'Todos (30)' },
            { id: 'Educar', label: '1. Educar (12)' },
            { id: 'Proceso', label: '2. Proceso (6)' },
            { id: 'Prueba', label: '3. Prueba Social (6)' },
            { id: 'Desmitificar', label: '4. Mitos (3)' },
            { id: 'Venta', label: '5. Venta (3)' },
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedPillarFilter(tab.id)}
              className={`px-2.5 py-1 rounded-lg font-mono text-[11px] transition-all ${
                selectedPillarFilter === tab.id
                  ? 'bg-[#FE385B] text-white font-bold'
                  : 'bg-black/[0.03] dark:bg-white/[0.04] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* 30 Rows Interactive List */}
      <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
        {filteredRows.map(row => {
          const originalIdx = row.n - 1;
          return (
            <div
              key={row.n}
              className="p-3.5 rounded-xl bg-white dark:bg-[#141416] border border-black/[0.06] dark:border-white/[0.06] space-y-2 text-xs"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#FE385B]">
                    #{String(row.n).padStart(2, '0')}
                  </span>
                  <select
                    value={row.pilar}
                    onChange={e => handleRowChange(originalIdx, 'pilar', e.target.value)}
                    className="px-2 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.06] text-[10px] font-mono font-semibold text-gray-700 dark:text-gray-300 focus:outline-none"
                  >
                    {DEFAULT_PILLARS.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <span className="text-[10px] text-[#8E8E93] font-mono">
                  {row.hook ? <span className="text-[#10B981] font-bold">Completo ✓</span> : 'Pendiente'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                <input
                  type="text"
                  value={row.hook}
                  onChange={e => handleRowChange(originalIdx, 'hook', e.target.value)}
                  placeholder={isEs ? 'Gancho de 3s (Ej: "Por qué tus zapatos se despegan a los 3 meses...")' : '3s opening hook...'}
                  className="w-full px-3 py-1.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FE385B]"
                />
                <input
                  type="text"
                  value={row.friction}
                  onChange={e => handleRowChange(originalIdx, 'friction', e.target.value)}
                  placeholder={isEs ? 'Problema / Fricción que resuelve' : 'Friction / Problem solved'}
                  className="w-full px-3 py-1.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FE385B]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                <input
                  type="text"
                  value={row.broll}
                  onChange={e => handleRowChange(originalIdx, 'broll', e.target.value)}
                  placeholder={isEs ? 'Toma B-Roll (Ej: Manos cosiendo hilo encerado macro)' : 'B-Roll shot (e.g. macro hands)'}
                  className="w-full px-3 py-1.5 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FE385B]"
                />
                <input
                  type="text"
                  value={row.cta}
                  onChange={e => handleRowChange(originalIdx, 'cta', e.target.value)}
                  placeholder={isEs ? 'CTA WhatsApp (Ej: "Comenta BOTAS para catálogo")' : 'CTA WhatsApp (e.g. "Comment INFO")'}
                  className="w-full px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-950 dark:text-emerald-300 text-xs font-medium focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2 text-xs text-[#8E8E93]">
          {isSaved && <span className="flex items-center gap-1 text-[#10B981] font-mono"><CheckCircle2 size={13} /> Guardado</span>}
          {submittedSuccess && <span className="text-[#10B981] font-bold">¡Matriz enviada a la mesa docente con éxito! 🚀</span>}
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={isExporting}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] text-[#111111] dark:text-white font-display font-bold text-xs transition-all border border-black/[0.06] dark:border-white/[0.06]"
          >
            {isExporting ? <Loader2 size={13} className="animate-spin" /> : <FileDown size={13} />}
            <span>{isEs ? 'Descargar Matriz en PDF A4' : 'Download Matrix PDF'}</span>
          </button>

          <button
            type="submit"
            disabled={isSubmitting || completedCount < 5}
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
          <ContentMatrixPrintTemplate data={form} lang={lang} />
        </div>
      </div>
    </form>
  );
}
