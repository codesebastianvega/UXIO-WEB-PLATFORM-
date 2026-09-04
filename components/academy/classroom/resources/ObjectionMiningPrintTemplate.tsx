'use client';

import React from 'react';
import { Locale } from '@/types';

export interface ObjectionItemData {
  faq: string;
  hook: string;
}

export interface ObjectionMiningFormData {
  studentName?: string;
  brandName?: string;
  objections?: ObjectionItemData[];
}

interface ObjectionMiningPrintTemplateProps {
  data?: ObjectionMiningFormData;
  lang: Locale;
}

export default function ObjectionMiningPrintTemplate({
  data = {},
  lang,
}: ObjectionMiningPrintTemplateProps) {
  const isEs = lang === 'es';
  const {
    studentName = 'Estudiante UXIO',
    brandName = '',
    objections = [
      { faq: '', hook: '' },
      { faq: '', hook: '' },
      { faq: '', hook: '' },
      { faq: '', hook: '' },
      { faq: '', hook: '' },
    ],
  } = data;

  return (
    <div
      className="pdf-export-document w-[794px] min-h-[1123px] p-10 bg-white text-[#111111] font-sans antialiased flex flex-col justify-between"
      style={{ boxSizing: 'border-box' }}
    >
      <div className="space-y-5">
        {/* Document Header */}
        <div className="flex items-start justify-between border-b-2 border-[#FF7F07] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-2xl tracking-tight text-[#111111]">
                uxio<span className="text-[#FF7F07]">.</span>
              </span>
              <span className="font-mono text-xs font-bold text-[#FF7F07] bg-[#FF7F07]/10 px-2 py-0.5 rounded border border-[#FF7F07]/20">
                CREATOR LAB
              </span>
            </div>
            <h1 className="font-display font-bold text-lg text-[#111111] mt-1">
              {isEs
                ? 'Plantilla de Minería de Objeciones: De WhatsApp a Video'
                : 'Objection Mining Sheet: From WhatsApp to Video Script'}
            </h1>
            <p className="text-xs text-[#666666] font-mono mt-0.5">
              Semana 1 · Lección 1.2: Tu Marca Tiene Contenido Escondido · Cohorte 01
            </p>
          </div>

          <div className="text-right">
            <span className="font-mono text-[10px] text-[#8E8E93] block uppercase">Estudiante / Marca</span>
            <span className="font-display font-bold text-sm text-[#111111]">{studentName}</span>
            {brandName && <span className="text-xs text-gray-500 block font-medium">{brandName}</span>}
          </div>
        </div>

        {/* 4-Step Framework */}
        <div className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200/80 space-y-1.5">
          <span className="font-mono text-[10px] font-bold text-[#FF7F07] uppercase block">
            // EL CIRCUITO DE 4 PASOS PARA DESARMAR OBJECIONES EN PÚBLICO
          </span>
          <div className="grid grid-cols-4 gap-2 text-[10px]">
            <div className="p-2 rounded bg-white border border-amber-200">
              <span className="font-bold block text-gray-900">1. Caza la Duda</span>
              <span className="text-gray-600 text-[9px]">Pregunta real en chat</span>
            </div>
            <div className="p-2 rounded bg-white border border-amber-200">
              <span className="font-bold block text-gray-900">2. Gancho Incómodo</span>
              <span className="text-gray-600 text-[9px]">"Un cliente me dijo..."</span>
            </div>
            <div className="p-2 rounded bg-white border border-amber-200">
              <span className="font-bold block text-gray-900">3. Respuesta Maestra</span>
              <span className="text-gray-600 text-[9px]">Técnica y garantía</span>
            </div>
            <div className="p-2 rounded bg-white border border-amber-200">
              <span className="font-bold block text-gray-900">4. Puente WhatsApp</span>
              <span className="text-gray-600 text-[9px]">"Comenta INFO"</span>
            </div>
          </div>
        </div>

        {/* 5 Worksheets Rows */}
        <div className="space-y-2.5">
          <h2 className="font-display font-bold text-xs text-[#111111]">
            {isEs ? 'Tus 5 Objeciones de Oro para Grabar:' : 'Your 5 Golden Objections to Film:'}
          </h2>

          {[0, 1, 2, 3, 4].map(idx => {
            const item = objections[idx] || { faq: '', hook: '' };
            return (
              <div key={idx} className="p-3 rounded-xl border border-gray-200 bg-gray-50/40 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-[10px] text-[#FF7F07]">OBJECIÓN #{idx + 1}</span>
                  <span className="text-[9px] text-gray-400 font-mono">Pilar: Educar / Desmentir</span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <span className="text-[9px] text-gray-500 font-mono uppercase block">Duda / Objeción Real:</span>
                    <p className="p-2 mt-0.5 rounded bg-white border border-gray-200 text-gray-800 text-[11px] min-h-[34px]">
                      {item.faq || (isEs ? `Ej: "¿Por qué cobran más que en la otra tienda?"` : 'FAQ question')}
                    </p>
                  </div>
                  <div>
                    <span className="text-[9px] text-emerald-700 font-mono font-bold uppercase block">Gancho de Apertura (0-3s):</span>
                    <p className="p-2 mt-0.5 rounded bg-emerald-50 border border-emerald-300 text-emerald-950 font-medium text-[11px] min-h-[34px]">
                      {item.hook || (isEs ? `Ej: "Un cliente me dijo que cobramos caro; esta fue mi respuesta..."` : 'Hook text')}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-3 flex justify-between text-[9px] font-mono text-gray-400">
        <span>UXIO Creator Lab · Módulo 1 · Lección 1.2 · Minería de Objeciones</span>
        <span>Página 1 de 1</span>
      </div>
    </div>
  );
}
