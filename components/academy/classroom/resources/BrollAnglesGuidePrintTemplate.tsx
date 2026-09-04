'use client';

import React from 'react';
import { Locale } from '@/types';

export interface BrollAngle {
  title: string;
  cameraSetup: string;
  psychology: string;
  useCase: string;
}

export const BROLL_ANGLES_DATA: BrollAngle[] = [
  {
    title: '1. Plano Detalle Macro de Manos',
    cameraSetup: 'Cámara a 15-20cm, enfoque bloqueado en los dedos manipulando el material.',
    psychology: 'Transmite maestría técnica y calidad artesanal sin necesidad de hablar a cámara.',
    useCase: 'Coser cuero, teclear código, mezclar ingredientes o aplicar producto.',
  },
  {
    title: '2. Plano Sobre el Hombro (POV Experto)',
    cameraSetup: 'Celular apoyado a la altura del hombro apuntando hacia el área de trabajo.',
    psychology: 'Hace que el espectador sienta que está sentado a tu lado aprendiendo el oficio.',
    useCase: 'Editar un archivo en pantalla, armar un paquete o atender un chat de cliente.',
  },
  {
    title: '3. Time-Lapse Acelerado de Proceso',
    cameraSetup: 'Modo Cámara Rápida (Time-lapse 10x-15x) sobre trípode fijo.',
    psychology: 'Condensa 45 minutos de trabajo en 8 segundos hipnóticos de alta retención.',
    useCase: 'Transformación de un espacio, ensamble de producto de principio a fin.',
  },
  {
    title: '4. Inspección de Calidad en Primer Plano',
    cameraSetup: 'Sostener el producto terminado frente al lente y girarlo despacio bajo luz natural.',
    psychology: 'Demuestra orgullo por el acabado final y elimina el miedo a defectos.',
    useCase: 'Mostrar la costura perfecta, el brillo del diseño o el empaque sellado.',
  },
  {
    title: '5. El "Detrás de Cámaras" Sin Filtros',
    cameraSetup: 'Plano abierto casual mostrando el movimiento real de tu equipo o taller.',
    psychology: 'Rompe la imagen corporativa fría; humaniza la marca al 100%.',
    useCase: 'Llegada de materia prima, risas del equipo o preparación de pedidos matutinos.',
  },
  {
    title: '6. Audio Ambiental ASMR (Sonido Real)',
    cameraSetup: 'Micrófono cerca de la herramienta (tijera, teclado, máquina, empaque).',
    psychology: 'Genera satisfacción sensorial que dispara el tiempo de visualización.',
    useCase: 'Corte de cinta de embalaje, click de interruptores, sonido de sellado térmico.',
  },
];

interface BrollAnglesGuidePrintTemplateProps {
  lang: Locale;
  studentName?: string;
}

export default function BrollAnglesGuidePrintTemplate({
  lang,
  studentName = 'Estudiante UXIO',
}: BrollAnglesGuidePrintTemplateProps) {
  const isEs = lang === 'es';

  return (
    <div
      className="pdf-export-document w-[794px] min-h-[1123px] p-10 bg-white text-[#111111] font-sans antialiased flex flex-col justify-between"
      style={{ boxSizing: 'border-box' }}
    >
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between border-b-2 border-[#FF7F07] pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-2xl tracking-tight text-[#111111]">
                uxio<span className="text-[#FF7F07]">.</span>
              </span>
              <span className="font-mono text-xs font-bold text-[#FF7F07] bg-[#FF7F07]/10 px-2 py-0.5 rounded border border-[#FF7F07]/20">
                GUÍA DE PRODUCCIÓN
              </span>
            </div>
            <h1 className="font-display font-bold text-lg text-[#111111] mt-0.5">
              {isEs
                ? 'Catálogo de Ángulos B-Roll & Grabación de Procesos'
                : 'B-Roll Angles & Process Filming Blueprint'}
            </h1>
            <p className="text-xs text-[#666666] font-mono">
              Semana 1 · Lección 1.2 · Cómo Grabar tu Negocio con Smartphone
            </p>
          </div>

          <div className="text-right">
            <span className="font-mono text-[10px] text-[#8E8E93] block uppercase">Estudiante</span>
            <span className="font-display font-bold text-sm text-[#111111]">{studentName}</span>
          </div>
        </div>

        {/* Angles Grid */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          {BROLL_ANGLES_DATA.map((angle, idx) => (
            <div key={idx} className="p-3.5 rounded-xl border border-gray-200 bg-gray-50/60 space-y-1.5">
              <div className="flex items-center justify-between border-b border-gray-200 pb-1">
                <span className="font-mono font-bold text-[11px] text-[#FF7F07]">{angle.title}</span>
                <span className="text-[9px] font-mono text-gray-400">Plano #{idx + 1}</span>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-gray-700">
                  <strong className="text-gray-900 font-mono">Encuadre:</strong> {angle.cameraSetup}
                </p>
                <p className="text-[10px] text-emerald-900 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                  <strong className="text-emerald-950 font-mono">Efecto Psicológico:</strong> {angle.psychology}
                </p>
                <p className="text-[10px] text-gray-600">
                  <strong className="text-gray-800 font-mono">Ejemplo:</strong> {angle.useCase}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-3 flex justify-between text-[9px] font-mono text-gray-400">
        <span>UXIO Creator Lab · Guía de Bolsillo de Ángulos B-Roll</span>
        <span>Página 1 de 1</span>
      </div>
    </div>
  );
}
