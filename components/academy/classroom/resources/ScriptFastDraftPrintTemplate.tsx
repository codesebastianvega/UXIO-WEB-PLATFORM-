'use client';

import React from 'react';
import { Locale } from '@/types';

interface ScriptFastDraftPrintTemplateProps {
  studentName?: string;
  lang: Locale;
}

export default function ScriptFastDraftPrintTemplate({
  studentName = 'Estudiante UXIO',
  lang,
}: ScriptFastDraftPrintTemplateProps) {
  const isEs = lang === 'es';

  return (
    <div
      className="pdf-export-document w-[794px] min-h-[1123px] p-8 bg-white text-[#111111] font-sans antialiased flex flex-col justify-between"
      style={{ boxSizing: 'border-box' }}
    >
      <div className="space-y-4">
        {/* Document Header */}
        <div className="flex items-start justify-between border-b-2 border-[#10B981] pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-2xl tracking-tight text-[#111111]">
                uxio<span className="text-[#10B981]">.</span>
              </span>
              <span className="font-mono text-xs font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">
                PLANTILLA OFICIAL
              </span>
            </div>
            <h1 className="font-display font-bold text-lg text-[#111111] mt-0.5">
              {isEs ? 'Plantilla de Guion Rápido en 4 Bloques (45s)' : '4-Block Fast Scripting Template (45s)'}
            </h1>
            <p className="text-xs text-[#666666] font-mono">
              Semana 2 · Lección 2.3 · El Formato de Video Comercial con B-Roll · Cohorte 01
            </p>
          </div>

          <div className="text-right">
            <span className="font-mono text-[10px] text-[#8E8E93] block uppercase">Estudiante</span>
            <span className="font-display font-bold text-sm text-[#111111]">{studentName}</span>
          </div>
        </div>

        {/* 4 Acts Visual Blocks */}
        <div className="space-y-3 text-[10px]">
          {/* Acto 1 */}
          <div className="p-3.5 rounded-lg border border-gray-200 bg-gray-50/50 space-y-1.5">
            <div className="flex items-center justify-between border-b border-gray-200 pb-1">
              <span className="font-display font-bold text-xs text-red-600">
                Acto 1: Gancho de Fricción (0 a 3s)
              </span>
              <span className="font-mono text-[9px] text-gray-500 font-bold">PLANO MEDIO · OJOS AL LENTE</span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Fórmula:</strong> <em>"Si estás pagando de más por [Problema Común]..."</em> o <em>"El error al comprar [Producto] que te cuesta [Pérdida]..."</em>
            </p>
            <div className="p-2 rounded bg-white border border-gray-200 text-gray-400 font-mono">
              [Escribe tu gancho de 3 segundos aquí...]
            </div>
          </div>

          {/* Acto 2 */}
          <div className="p-3.5 rounded-lg border border-gray-200 bg-gray-50/50 space-y-1.5">
            <div className="flex items-center justify-between border-b border-gray-200 pb-1">
              <span className="font-display font-bold text-xs text-amber-600">
                Acto 2: El Dolor / Fricción (3 a 15s)
              </span>
              <span className="font-mono text-[9px] text-gray-500 font-bold">PLANO MEDIO CON CORTE</span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Fórmula:</strong> Explica la consecuencia real: <em>"La mayoría de opciones baratas usan pegamento industrial que se rompe a los 3 meses porque..."</em>
            </p>
            <div className="p-2 rounded bg-white border border-gray-200 text-gray-400 font-mono">
              [Describe el problema con palabras exactas del cliente...]
            </div>
          </div>

          {/* Acto 3 */}
          <div className="p-3.5 rounded-lg border border-gray-200 bg-gray-50/50 space-y-1.5">
            <div className="flex items-center justify-between border-b border-gray-200 pb-1">
              <span className="font-display font-bold text-xs text-emerald-600">
                Acto 3: La Solución & Prueba (15 a 35s)
              </span>
              <span className="font-mono text-[9px] text-gray-500 font-bold">TOMAS MACRO B-ROLL / MANOS POV</span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Fórmula:</strong> Muestra el trabajo en manos: <em>"Por eso nosotros cosemos a doble puntada con hilo encerado. Mira cómo resiste..."</em>
            </p>
            <div className="p-2 rounded bg-white border border-gray-200 text-gray-400 font-mono">
              [Describe las 2 tomas de B-roll que intercalarás en esta sección...]
            </div>
          </div>

          {/* Acto 4 */}
          <div className="p-3.5 rounded-lg border border-gray-200 bg-gray-50/50 space-y-1.5">
            <div className="flex items-center justify-between border-b border-gray-200 pb-1">
              <span className="font-display font-bold text-xs text-purple-600">
                Acto 4: Puente Directo a WhatsApp (35 a 45s)
              </span>
              <span className="font-mono text-[9px] text-gray-500 font-bold">PLANO MEDIO · SONRISA & CTA</span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>Fórmula:</strong> <em>"Comenta [PALABRA CLAVE] o escribe al enlace de WhatsApp y te envío el catálogo con envío asegurado hoy."</em>
            </p>
            <div className="p-2 rounded bg-white border border-gray-200 text-gray-400 font-mono">
              [Palabra clave y llamado directo a la acción...]
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-2 flex justify-between text-[9px] font-mono text-gray-400">
        <span>UXIO Creator Lab · Módulo 2 · Plantilla de Guion en 4 Bloques</span>
        <span>Página 1 de 1</span>
      </div>
    </div>
  );
}
