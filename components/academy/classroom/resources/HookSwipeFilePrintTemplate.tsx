'use client';

import React from 'react';
import { Locale } from '@/types';

export interface HookCategory {
  category: string;
  color: string;
  hooks: { formula: string; example: string }[];
}

export const HOOK_CATEGORIES_DATA: HookCategory[] = [
  {
    category: '1. Ganchos de Dolor & Fricción Inmediata',
    color: '#FE385B',
    hooks: [
      {
        formula: 'Si estás cometiendo el error de [X], mira esto antes de [Y]:',
        example: '"Si estás pagando de más en impuestos por no saber esto, mira este truco en 30s..."',
      },
      {
        formula: 'La verdadera razón por la que tu [Producto/Servicio] falla a los [Tiempo]:',
        example: '"Por qué este par de zapatos dura 4 años sin despegarse: te muestro la costura..."',
      },
      {
        formula: 'Deja de hacer [Acción Inútil] si lo que buscas es [Resultado Deseado]:',
        example: '"Deja de subir fotos de stock si lo que quieres es vender por WhatsApp."',
      },
    ],
  },
  {
    category: '2. Ganchos de Secreto de Industria / Desmentir Mitos',
    color: '#FF7F07',
    hooks: [
      {
        formula: 'Lo que las agencias tradicionales no quieren que sepas sobre [Tema]:',
        example: '"Lo que las agencias no te dicen: un video grabado con celular convierte 4x más que un comercial."',
      },
      {
        formula: 'Un cliente me dijo que [Objeción/Mito]. Esta fue mi respuesta honesta:',
        example: '"Un cliente me dijo que cobramos caro; le mostré el proceso de 4 días y entendió todo."',
      },
      {
        formula: 'El mito de que necesitas [Recurso Caro] para lograr [Resultado]:',
        example: '"La mentira de que necesitas una cámara de $2.000 USD para vender tus servicios."',
      },
    ],
  },
  {
    category: '3. Ganchos de Curiosidad & Demostración POV',
    color: '#10B981',
    hooks: [
      {
        formula: 'Mira lo que pasa cuando abres/pruebas este [Producto] por primera vez:',
        example: '"Mira la diferencia de textura entre un cuero sintético y este cuero curtido al vegetal:"',
      },
      {
        formula: '3 cosas que jamás deberías tolerar al contratar [Servicio]:',
        example: '"3 banderas rojas al contratar un dentista que te van a ahorrar miles de dólares:"',
      },
      {
        formula: 'Cómo logramos [Resultado Específico] en solo [Tiempo] sin [Dolor Común]:',
        example: '"Cómo duplicamos los pedidos de este taller en 14 días con 3 videos en primera persona:"',
      },
    ],
  },
];

interface HookSwipeFilePrintTemplateProps {
  lang: Locale;
  studentName?: string;
}

export default function HookSwipeFilePrintTemplate({
  lang,
  studentName = 'Estudiante UXIO',
}: HookSwipeFilePrintTemplateProps) {
  const isEs = lang === 'es';

  return (
    <div
      className="pdf-export-document w-[794px] min-h-[1123px] p-10 bg-white text-[#111111] font-sans antialiased flex flex-col justify-between"
      style={{ boxSizing: 'border-box' }}
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between border-b-2 border-[#FE385B] pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-2xl tracking-tight text-[#111111]">
                uxio<span className="text-[#FE385B]">.</span>
              </span>
              <span className="font-mono text-xs font-bold text-[#FE385B] bg-[#FE385B]/10 px-2 py-0.5 rounded border border-[#FE385B]/20">
                SWIPE FILE OFICIAL
              </span>
            </div>
            <h1 className="font-display font-bold text-lg text-[#111111] mt-0.5">
              {isEs
                ? 'Cheat Sheet: 15 Fórmulas de Ganchos de Alta Conversión (0-3s)'
                : 'Cheat Sheet: 15 High-Converting Hook Formulas (0-3s)'}
            </h1>
            <p className="text-xs text-[#666666] font-mono">
              Semana 1 · Creator Lab · Guía de Bolsillo para TikTok & Reels
            </p>
          </div>

          <div className="text-right">
            <span className="font-mono text-[10px] text-[#8E8E93] block uppercase">Estudiante</span>
            <span className="font-display font-bold text-sm text-[#111111]">{studentName}</span>
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-3.5">
          {HOOK_CATEGORIES_DATA.map((cat, idx) => (
            <div key={idx} className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/50 space-y-2">
              <div className="flex items-center justify-between border-b border-gray-200 pb-1.5">
                <span className="font-mono text-xs font-bold uppercase" style={{ color: cat.color }}>
                  {cat.category}
                </span>
                <span className="text-[9px] font-mono text-gray-400">Retención 0-3 Segundos</span>
              </div>

              <div className="space-y-2 text-xs">
                {cat.hooks.map((item, hIdx) => (
                  <div key={hIdx} className="p-2 rounded bg-white border border-gray-200 space-y-0.5">
                    <span className="font-mono text-[10px] font-bold text-gray-800 block">
                      Fórmula: <span className="font-semibold text-gray-600">{item.formula}</span>
                    </span>
                    <p className="text-emerald-950 bg-emerald-50/80 px-2 py-1 rounded text-[11px] font-medium border border-emerald-200">
                      Ej: {item.example}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-3 flex justify-between text-[9px] font-mono text-gray-400">
        <span>UXIO Creator Lab · Swipe File de Ganchos de Bolsillo</span>
        <span>Página 1 de 1</span>
      </div>
    </div>
  );
}
