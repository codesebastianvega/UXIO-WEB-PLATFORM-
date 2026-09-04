'use client';

import React from 'react';
import { Locale } from '@/types';

interface Broll30ChecklistPrintTemplateProps {
  studentName?: string;
  lang: Locale;
}

export default function Broll30ChecklistPrintTemplate({
  studentName = 'Estudiante UXIO',
  lang,
}: Broll30ChecklistPrintTemplateProps) {
  const isEs = lang === 'es';

  const brollCategories = [
    {
      category: isEs ? 'Categoría 1: Manos en Acción (10 Clips · 5s c/u)' : 'Category 1: Hands in Action (10 Clips · 5s each)',
      color: '#FE385B',
      items: [
        '01. Manos escribiendo en libreta o tecleando en laptop (Macro estático)',
        '02. Manos manipulando la herramienta principal de tu oficio',
        '03. Manos ensamblando o preparando el producto/servicio',
        '04. Push-in lento hacia las manos trabajando',
        '05. Plano cenital (desde arriba) de las manos sobre la mesa',
        '06. Manos doblando, cortando o midiendo materiales',
        '07. Manos abriendo un paquete o caja de envío',
        '08. Manos aplicando sello, firma o detalle final',
        '09. Manos sosteniendo el producto y mostrándolo al lente',
        '10. Manos guardando herramientas en su lugar al terminar',
      ],
    },
    {
      category: isEs ? 'Categoría 2: Espacio, Rutina & Ambiente (10 Clips · 5s c/u)' : 'Category 2: Workspace & Routine (10 Clips · 5s each)',
      color: '#FF7F07',
      items: [
        '11. Barrido lateral lento de tu mesa de trabajo ordenada',
        '12. Luz de ventana entrando sobre el escritorio/taller',
        '13. Taza de café o agua humeante al lado de tu libreta',
        '14. Laptop abriéndose o pantalla con gráficos/documento',
        '15. Time-lapse de 10s trabajando concentrado en el set',
        '16. Estantería con materiales, libros o stock organizado',
        '17. Cartel o detalle visual con el logo de tu marca',
        '18. Primer plano de tus ojos mirando la pantalla/mesa',
        '19. Puerta abriéndose o llegada al espacio de trabajo',
        '20. Teléfono recibiendo un mensaje de WhatsApp (POV)',
      ],
    },
    {
      category: isEs ? 'Categoría 3: Resultados, Prueba & Detalle Final (10 Clips · 5s c/u)' : 'Category 3: Results, Proof & Final Detail (10 Clips · 5s each)',
      color: '#10B981',
      items: [
        '21. Giro de 360° alrededor del producto terminado',
        '22. Desempaque en primera persona (POV) con audio ASMR',
        '23. Prueba de resistencia, costura o durabilidad en vivo',
        '24. Captura de pantalla de métricas o reseña positiva de cliente',
        '25. Paquete cerrado con etiqueta de envío listo para despachar',
        '26. Producto puesto en uso en su entorno real',
        '27. Comparativa lado a lado de calidad',
        '28. Plano detalle macro a 10 cm con lente 2x óptico',
        '29. Entrega en mano del producto o saludo de cliente',
        '30. El creador sonriendo y asintiendo con aprobación al resultado',
      ],
    },
  ];

  return (
    <div
      className="pdf-export-document w-[794px] min-h-[1123px] p-8 bg-white text-[#111111] font-sans antialiased flex flex-col justify-between"
      style={{ boxSizing: 'border-box' }}
    >
      <div className="space-y-4">
        {/* Document Header */}
        <div className="flex items-start justify-between border-b-2 border-[#FF7F07] pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-2xl tracking-tight text-[#111111]">
                uxio<span className="text-[#FF7F07]">.</span>
              </span>
              <span className="font-mono text-xs font-bold text-[#FF7F07] bg-[#FF7F07]/10 px-2 py-0.5 rounded border border-[#FF7F07]/20">
                CHECKLIST OFICIAL
              </span>
            </div>
            <h1 className="font-display font-bold text-lg text-[#111111] mt-0.5">
              {isEs ? 'Checklist del Banco de 30 Clips de B-Roll' : '30-Clip B-Roll Library Checklist'}
            </h1>
            <p className="text-xs text-[#666666] font-mono">
              Semana 2 · Lección 2.2 · El Menú de Tomas de 5 Segundos · Cohorte 01
            </p>
          </div>

          <div className="text-right">
            <span className="font-mono text-[10px] text-[#8E8E93] block uppercase">Estudiante</span>
            <span className="font-display font-bold text-sm text-[#111111]">{studentName}</span>
          </div>
        </div>

        {/* 3 Categories Grid */}
        <div className="space-y-3 text-[10px]">
          {brollCategories.map((cat, idx) => (
            <div key={idx} className="p-3.5 rounded-lg border border-gray-200 bg-gray-50/50 space-y-2">
              <div className="flex items-center justify-between border-b border-gray-200 pb-1.5">
                <h3 className="font-display font-bold text-xs" style={{ color: cat.color }}>
                  {cat.category}
                </h3>
                <span className="font-mono text-[9px] text-gray-500 font-bold">10 CLIPS</span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-gray-700">
                {cat.items.map((item, iIdx) => (
                  <div key={iIdx} className="flex items-start gap-1.5">
                    <span className="font-mono text-gray-400">☐</span>
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-2 flex justify-between text-[9px] font-mono text-gray-400">
        <span>UXIO Creator Lab · Módulo 2 · Checklist de B-Roll Móvil</span>
        <span>Página 1 de 1</span>
      </div>
    </div>
  );
}
