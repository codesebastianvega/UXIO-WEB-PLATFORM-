'use client';

import React from 'react';
import { Locale } from '@/types';

interface CameraCalibrationPrintTemplateProps {
  studentName?: string;
  lang: Locale;
}

export default function CameraCalibrationPrintTemplate({
  studentName = 'Estudiante UXIO',
  lang,
}: CameraCalibrationPrintTemplateProps) {
  const isEs = lang === 'es';

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
                CHEAT SHEET DE ESTUDIO
              </span>
            </div>
            <h1 className="font-display font-bold text-lg text-[#111111] mt-0.5">
              {isEs ? 'Guía Rápida de Calibración de Cámara Móvil' : 'Mobile Camera Calibration Cheat Sheet'}
            </h1>
            <p className="text-xs text-[#666666] font-mono">
              Semana 2 · Lección 2.1 · Parámetros Óptimos iOS & Android · Cohorte 01
            </p>
          </div>

          <div className="text-right">
            <span className="font-mono text-[10px] text-[#8E8E93] block uppercase">Estudiante</span>
            <span className="font-display font-bold text-sm text-[#111111]">{studentName}</span>
          </div>
        </div>

        {/* 3 Columns Guide */}
        <div className="grid grid-cols-3 gap-3 text-[10px]">
          {/* Col 1: Ajustes de Cámara */}
          <div className="p-3.5 rounded-lg border border-gray-200 bg-gray-50/50 space-y-2">
            <div className="flex items-center gap-1.5 border-b border-gray-200 pb-1.5">
              <span className="font-mono font-bold text-red-600 text-xs">01</span>
              <h3 className="font-display font-bold text-xs text-gray-900">Configuración Base</h3>
            </div>
            <div className="space-y-1.5 text-gray-700 leading-relaxed">
              <p><strong>Resolución:</strong> 4K a 30 FPS (o 1080p a 30 FPS si tienes poco espacio).</p>
              <p><strong>Cuadrícula 3x3:</strong> Activa siempre en Ajustes &gt; Cámara.</p>
              <p><strong>FPS B-Roll:</strong> Usa 60 FPS solo para tomas que vayas a ralentizar.</p>
              <p><strong>Lente Limpio:</strong> Limpia el lente con microfibra antes de cada toma.</p>
            </div>
          </div>

          {/* Col 2: Control AF/AE Lock */}
          <div className="p-3.5 rounded-lg border border-gray-200 bg-gray-50/50 space-y-2">
            <div className="flex items-center gap-1.5 border-b border-gray-200 pb-1.5">
              <span className="font-mono font-bold text-amber-600 text-xs">02</span>
              <h3 className="font-display font-bold text-xs text-gray-900">Bloqueo AF/AE</h3>
            </div>
            <div className="space-y-1.5 text-gray-700 leading-relaxed">
              <p><strong>Bloquear:</strong> Mantén presionado 2 segundos sobre tu rostro o producto.</p>
              <p><strong>Subexponer:</strong> Desliza el icono del sol 1mm hacia abajo (-0.3 EV).</p>
              <p><strong>Beneficio:</strong> Evita el parpadeo de brillo y satura tonos de piel.</p>
              <p><strong>Estabilidad:</strong> La luz no cambia al mover las manos.</p>
            </div>
          </div>

          {/* Col 3: Encuadre 9:16 */}
          <div className="p-3.5 rounded-lg border border-gray-200 bg-gray-50/50 space-y-2">
            <div className="flex items-center gap-1.5 border-b border-gray-200 pb-1.5">
              <span className="font-mono font-bold text-emerald-600 text-xs">03</span>
              <h3 className="font-display font-bold text-xs text-gray-900">Encuadre & Ojos</h3>
            </div>
            <div className="space-y-1.5 text-gray-700 leading-relaxed">
              <p><strong>Línea de Ojos:</strong> Ojos alineados en la línea superior de tercios.</p>
              <p><strong>Altura de Cámara:</strong> Celular a la altura de tus pupilas (cero tomas de abajo).</p>
              <p><strong>Headroom:</strong> Deja solo 2 a 3 dedos sobre tu cabeza.</p>
              <p><strong>Safe Zones:</strong> Deja 20% libre a la derecha y 25% abajo para la interfaz.</p>
            </div>
          </div>
        </div>

        {/* Visual Reference Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden text-[9px]">
          <table className="w-full border-collapse text-left">
            <thead className="bg-gray-100 text-gray-700 font-mono uppercase border-b border-gray-200">
              <tr>
                <th className="p-2 w-28">Tipo de Toma</th>
                <th className="p-2 w-28">Distancia</th>
                <th className="p-2">Configuración Recomendada</th>
                <th className="p-2 w-32">Propósito Comercial</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-2 font-bold text-gray-900">Plano Medio Hablado</td>
                <td className="p-2 text-gray-600">60 - 80 cm</td>
                <td className="p-2 text-gray-700">4K / 30 FPS · AF/AE Lock en rostro · Lente 1x</td>
                <td className="p-2 font-mono text-red-600 font-bold">Autoridad & Confianza</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="p-2 font-bold text-gray-900">Plano Detalle Macro</td>
                <td className="p-2 text-gray-600">15 - 25 cm</td>
                <td className="p-2 text-gray-700">4K / 30 o 60 FPS · Lente 2x óptico · Luz lateral</td>
                <td className="p-2 font-mono text-amber-600 font-bold">Artesanía & Calidad</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-gray-900">Plano POV Primera Persona</td>
                <td className="p-2 text-gray-600">40 - 50 cm</td>
                <td className="p-2 text-gray-700">1080p / 30 FPS · Ángulo 90° o barbilla</td>
                <td className="p-2 font-mono text-emerald-600 font-bold">Inmersión & Tutorial</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-2 flex justify-between text-[9px] font-mono text-gray-400">
        <span>UXIO Creator Lab · Módulo 2 · Cheat Sheet de Cámara Móvil</span>
        <span>Página 1 de 1</span>
      </div>
    </div>
  );
}
