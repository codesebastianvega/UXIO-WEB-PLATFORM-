'use client';

import React from 'react';
import { Locale } from '@/types';

export interface MatrixRowItem {
  n: number;
  pilar: string;
  hook: string;
  friction: string;
  broll: string;
  cta: string;
}

export interface ContentMatrixFormData {
  studentName?: string;
  brandName?: string;
  rows?: MatrixRowItem[];
}

interface ContentMatrixPrintTemplateProps {
  data?: ContentMatrixFormData;
  lang: Locale;
}

export default function ContentMatrixPrintTemplate({
  data = {},
  lang,
}: ContentMatrixPrintTemplateProps) {
  const isEs = lang === 'es';
  const {
    studentName = 'Estudiante UXIO',
    brandName = '',
    rows = [],
  } = data;

  const displayRows = rows.length > 0 ? rows : Array.from({ length: 30 }, (_, i) => ({
    n: i + 1,
    pilar: i < 12 ? 'Educar (40%)' : i < 18 ? 'Proceso (20%)' : i < 24 ? 'Prueba Social (20%)' : i < 27 ? 'Desmitificar (10%)' : 'Venta Directa (10%)',
    hook: '',
    friction: '',
    broll: '',
    cta: '',
  }));

  return (
    <div
      className="pdf-export-document w-[794px] min-h-[1123px] p-8 bg-white text-[#111111] font-sans antialiased flex flex-col justify-between"
      style={{ boxSizing: 'border-box' }}
    >
      <div className="space-y-4">
        {/* Document Header */}
        <div className="flex items-start justify-between border-b-2 border-[#FE385B] pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-2xl tracking-tight text-[#111111]">
                uxio<span className="text-[#FE385B]">.</span>
              </span>
              <span className="font-mono text-xs font-bold text-[#FE385B] bg-[#FE385B]/10 px-2 py-0.5 rounded border border-[#FE385B]/20">
                RETO 1 OFICIAL
              </span>
            </div>
            <h1 className="font-display font-bold text-lg text-[#111111] mt-0.5">
              {isEs ? 'Matriz de 30 Ideas de Contenido Comercial' : '30-Day Commercial Content Matrix'}
            </h1>
            <p className="text-xs text-[#666666] font-mono">
              Semana 1 · Lección 1.3 · La Dieta 40/20/20/10/10 · Cohorte 01
            </p>
          </div>

          <div className="text-right">
            <span className="font-mono text-[10px] text-[#8E8E93] block uppercase">Estudiante / Marca</span>
            <span className="font-display font-bold text-sm text-[#111111]">{studentName}</span>
            {brandName && <span className="text-xs text-gray-500 block font-medium">{brandName}</span>}
          </div>
        </div>

        {/* 30 Rows Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-[9px] border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 font-mono uppercase text-left border-b border-gray-200">
                <th className="p-1.5 w-6 text-center">#</th>
                <th className="p-1.5 w-24">Pilar</th>
                <th className="p-1.5">Gancho de 3s (Hook)</th>
                <th className="p-1.5">Problema / Fricción</th>
                <th className="p-1.5 w-28">Toma B-Roll</th>
                <th className="p-1.5 w-24">CTA WhatsApp</th>
              </tr>
            </thead>
            <tbody>
              {displayRows.map((r, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <tr key={idx} className={`border-b border-gray-100 ${isEven ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="p-1 text-center font-mono font-bold text-gray-400">{String(r.n).padStart(2, '0')}</td>
                    <td className="p-1 font-mono font-bold text-[8px] text-gray-700 truncate">{r.pilar}</td>
                    <td className="p-1 font-medium text-gray-900">{r.hook || <span className="text-gray-300">...</span>}</td>
                    <td className="p-1 text-gray-600">{r.friction || <span className="text-gray-300">...</span>}</td>
                    <td className="p-1 text-gray-600">{r.broll || <span className="text-gray-300">...</span>}</td>
                    <td className="p-1 font-mono font-bold text-emerald-700">{r.cta || <span className="text-gray-300">...</span>}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-2 flex justify-between text-[9px] font-mono text-gray-400">
        <span>UXIO Creator Lab · Módulo 1 · Reto 1 Oficial · Matriz de 30 Días</span>
        <span>Página 1 de 1</span>
      </div>
    </div>
  );
}
