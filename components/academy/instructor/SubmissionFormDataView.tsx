'use client';

import React, { useRef, useState } from 'react';
import { FileText, FileDown, ExternalLink, Loader2 } from 'lucide-react';
import { exportA4DocumentToPdf } from '@/lib/academy/export-document-pdf';
import BrandDiagnosisPrintTemplate, { DiagnosisFormData } from '../classroom/resources/BrandDiagnosisPrintTemplate';
import { capitalizeFirst, capitalizeWords, formatCurrencyValue } from '@/lib/academy/formatters';

interface SubmissionFormDataViewProps {
  formData: any;
  studentName: string;
  isEs: boolean;
}

export default function SubmissionFormDataView({
  formData,
  studentName,
  isEs,
}: SubmissionFormDataViewProps) {
  const printRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  if (!formData) return null;

  const data: DiagnosisFormData = {
    studentName: formData.studentName || studentName,
    businessName: formData.businessName || '',
    mainOffer: formData.mainOffer || '',
    pricePoint: formData.pricePoint || '',
    targetAudience: formData.targetAudience || '',
    painPoints: formData.painPoints || ['', '', ''],
    transformation: formData.transformation || '',
    goal5Weeks: formData.goal5Weeks || '',
    previousObstacle: formData.previousObstacle || '',
  };

  const links: string[] = Array.isArray(formData.links)
    ? formData.links.filter((l: string) => l && l.trim().length > 0)
    : [];

  const handleDownloadPdf = async () => {
    if (!printRef.current || isExporting) return;
    try {
      setIsExporting(true);
      await exportA4DocumentToPdf(printRef.current, {
        fileName: `Ficha_Diagnostico_${data.businessName || 'Estudiante'}`,
        studentName: data.studentName,
      });
    } catch (err) {
      console.error('Error generando PDF:', err);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="p-4 rounded-2xl bg-[#FE385B]/[0.03] border border-[#FE385B]/20 space-y-4">
      <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
        <div className="flex items-center gap-2">
          <FileText size={16} className="text-[#FE385B]" />
          <span className="font-mono text-xs font-bold text-[#FE385B] uppercase">
            // {isEs ? 'RESPUESTAS DE LA FICHA DE DIAGNÓSTICO' : 'BRAND DIAGNOSIS ANSWERS'}
          </span>
        </div>

        <button
          type="button"
          onClick={handleDownloadPdf}
          disabled={isExporting}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-mono text-xs font-bold transition-all shadow-sm disabled:opacity-50"
        >
          {isExporting ? <Loader2 size={12} className="animate-spin" /> : <FileDown size={12} />}
          <span>{isEs ? 'Descargar PDF A4' : 'Download A4 PDF'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="p-3 rounded-xl bg-white dark:bg-[#121214] border border-black/[0.06] dark:border-white/[0.06] space-y-1">
          <span className="font-mono text-[10px] font-bold text-[#FE385B] uppercase">
            1. Negocio & Oferta
          </span>
          <p><strong>Marca:</strong> {capitalizeWords(data.businessName) || 'Sin especificar'}</p>
          <p><strong>Oferta:</strong> {capitalizeFirst(data.mainOffer) || 'Sin especificar'}</p>
          <p><strong>Ticket:</strong> {formatCurrencyValue(data.pricePoint, isEs) || 'Sin especificar'}</p>
        </div>

        <div className="p-3 rounded-xl bg-white dark:bg-[#121214] border border-black/[0.06] dark:border-white/[0.06] space-y-1">
          <span className="font-mono text-[10px] font-bold text-[#10B981] uppercase">
            3. Meta a 5 Semanas
          </span>
          <p><strong>Objetivo:</strong> {capitalizeFirst(data.goal5Weeks) || 'Sin especificar'}</p>
          <p><strong>Obstáculo previo:</strong> {capitalizeFirst(data.previousObstacle) || 'Sin especificar'}</p>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-white dark:bg-[#121214] border border-black/[0.06] dark:border-white/[0.06] space-y-1.5 text-xs">
        <span className="font-mono text-[10px] font-bold text-[#FF7F07] uppercase">
          2. Cliente Ideal & 3 Dolores Clave
        </span>
        <p><strong>A quién le vende:</strong> {capitalizeFirst(data.targetAudience) || 'Sin especificar'}</p>
        <div className="space-y-1 pt-1">
          {data.painPoints.map((p, i) => (
            <div key={i} className="flex items-start gap-1.5 text-[11px] text-[#52525B] dark:text-[#A1A1AA]">
              <span className="font-mono font-bold text-[#FF7F07]">{i + 1}.</span>
              <span>{capitalizeFirst(p) || 'Sin especificar'}</span>
            </div>
          ))}
        </div>
      </div>

      {links.length > 0 && (
        <div className="space-y-1.5 pt-1">
          <span className="font-mono text-[10px] font-bold text-[#8E8E93] uppercase">
            // {isEs ? 'Enlaces adicionales adjuntos' : 'Attached Links'}
          </span>
          <div className="space-y-1">
            {links.map((link, i) => (
              <a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-black/[0.02] dark:bg-white/[0.03] text-xs font-mono hover:text-[#FE385B] transition-colors"
              >
                <span className="truncate">{link}</span>
                <ExternalLink size={12} className="shrink-0 ml-2" />
              </a>
            ))}
          </div>
        </div>
      )}

      <BrandDiagnosisPrintTemplate form={data} studentName={data.studentName} forwardedRef={printRef} />
    </div>
  );
}
