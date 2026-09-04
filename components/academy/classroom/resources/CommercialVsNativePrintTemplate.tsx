'use client';

import React from 'react';
import { Locale } from '@/types';

export interface CommercialVsNativeFormData {
  studentName?: string;
  brandName?: string;
  traditionalHeadline?: string;
  frictionPoint?: string;
  nativeHook3s?: string;
  ugcFormat?: string;
  casualHook?: string;
  realProblem?: string;
  handsOnProof?: string;
  whatsappCta?: string;
}

interface CommercialVsNativePrintTemplateProps {
  data?: CommercialVsNativeFormData;
  lang: Locale;
}

export default function CommercialVsNativePrintTemplate({
  data = {},
  lang,
}: CommercialVsNativePrintTemplateProps) {
  const isEs = lang === 'es';
  const {
    studentName = 'Estudiante UXIO',
    brandName = '',
    traditionalHeadline = '',
    frictionPoint = '',
    nativeHook3s = '',
    ugcFormat = isEs ? 'UGC de Creador Interno (Fundador)' : 'In-House Founder UGC',
    casualHook = '',
    realProblem = '',
    handsOnProof = '',
    whatsappCta = '',
  } = data;

  return (
    <div
      className="pdf-export-document w-[794px] min-h-[1123px] p-10 bg-white text-[#111111] font-sans antialiased flex flex-col justify-between"
      style={{ boxSizing: 'border-box' }}
    >
      <div className="space-y-5">
        {/* Document Header */}
        <div className="flex items-start justify-between border-b-2 border-[#FE385B] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-2xl tracking-tight text-[#111111]">
                uxio<span className="text-[#FE385B]">.</span>
              </span>
              <span className="font-mono text-xs font-bold text-[#FE385B] bg-[#FE385B]/10 px-2 py-0.5 rounded border border-[#FE385B]/20">
                CREATOR LAB
              </span>
            </div>
            <h1 className="font-display font-bold text-lg text-[#111111] mt-1">
              {isEs
                ? 'Ficha de Reescritura Comercial & Guion UGC'
                : 'Native Commercial Rewriting & UGC Script Sheet'}
            </h1>
            <p className="text-xs text-[#666666] font-mono mt-0.5">
              Semana 1 · Lección 1.1 (Microclases 1.1.1 & 1.1.2) · Cohorte 01
            </p>
          </div>

          <div className="text-right">
            <span className="font-mono text-[10px] text-[#8E8E93] block uppercase">Estudiante / Marca</span>
            <span className="font-display font-bold text-sm text-[#111111]">{studentName}</span>
            {brandName && <span className="text-xs text-gray-500 block font-medium">{brandName}</span>}
          </div>
        </div>

        {/* 1. Bloque Microclase 1.1.1: Reescritura Tradicional a Nativo */}
        <div className="p-4 rounded-xl border border-red-200 bg-red-50/30 space-y-3">
          <div className="flex items-center justify-between border-b border-red-200 pb-1.5">
            <span className="font-mono text-[11px] font-bold text-red-600 uppercase">
              1. Microclase 1.1.1 · De Anuncio Tradicional a Gancho de Dolor
            </span>
            <span className="text-[10px] font-mono text-gray-500">Muerte del Anuncio</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div>
              <span className="font-mono text-[10px] text-gray-500 uppercase block">Frase o Titular Corporativo Actual:</span>
              <p className="p-2.5 mt-1 rounded bg-white border border-gray-200 text-gray-700 min-h-[44px]">
                {traditionalHeadline || (isEs ? 'Ej: "Somos líderes en consultoría de negocios con 10 años de experiencia."' : 'e.g., "We are leaders in consulting."')}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] text-gray-500 uppercase block">Fricción o Dolor Real del Comprador:</span>
              <p className="p-2.5 mt-1 rounded bg-white border border-gray-200 text-gray-700 min-h-[44px]">
                {frictionPoint || (isEs ? 'Ej: "Pagar de más en impuestos por no saber cómo deducir legalmente."' : 'e.g., "Overpaying in taxes."')}
              </p>
            </div>
          </div>

          <div>
            <span className="font-mono text-[10px] text-emerald-700 font-bold uppercase block">
              ✓ Nuevo Gancho Nativo de 3 Segundos (0-3s):
            </span>
            <p className="p-2.5 mt-1 rounded bg-emerald-50 border border-emerald-300 text-emerald-950 font-semibold text-xs min-h-[38px]">
              {nativeHook3s || (isEs ? 'Ej: "Si estás pagando de más en impuestos por no saber esto, mira este truco en 30s..."' : 'e.g., "If you are overpaying in taxes..."')}
            </p>
          </div>
        </div>

        {/* 2. Bloque Microclase 1.1.2: Estructura del Guion UGC en 4 Pasos */}
        <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/30 space-y-3">
          <div className="flex items-center justify-between border-b border-amber-200 pb-1.5">
            <span className="font-mono text-[11px] font-bold text-[#FF7F07] uppercase">
              2. Microclase 1.1.2 · Guion UGC de Creador Interno en 4 Pasos
            </span>
            <span className="text-[10px] font-mono text-[#FF7F07] font-semibold bg-amber-100 px-2 py-0.5 rounded">
              Formato: {ugcFormat}
            </span>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded bg-white border border-amber-200">
                <span className="font-mono text-[9px] font-bold text-[#FF7F07] block uppercase">Paso 1: Gancho Casual (0-3s)</span>
                <p className="text-gray-800 mt-0.5 font-medium">{casualHook || (isEs ? 'Ej: "¿Quieres cambiar de contador pero te da pereza el papeleo?"' : 'Casual opening hook.')}</p>
              </div>
              <div className="p-2.5 rounded bg-white border border-amber-200">
                <span className="font-mono text-[9px] font-bold text-[#FF7F07] block uppercase">Paso 2: Problema Real (3-15s)</span>
                <p className="text-gray-800 mt-0.5">{realProblem || (isEs ? 'Ej: "El 90% de personas pierden $400 USD al año por no revisar esta casilla."' : 'Real buyer friction.')}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded bg-white border border-amber-200">
                <span className="font-mono text-[9px] font-bold text-[#FF7F07] block uppercase">Paso 3: Demostración en Manos / POV (15-35s)</span>
                <p className="text-gray-800 mt-0.5">{handsOnProof || (isEs ? 'Ej: "Muestro en pantalla el formulario exacto y cómo se llena en 2 minutos."' : 'Hands-on visual proof.')}</p>
              </div>
              <div className="p-2.5 rounded bg-emerald-50 border border-emerald-300">
                <span className="font-mono text-[9px] font-bold text-emerald-700 block uppercase">Paso 4: Puente a WhatsApp (35-45s)</span>
                <p className="text-emerald-950 mt-0.5 font-semibold">{whatsappCta || (isEs ? 'Ej: "Comenta GUIA y te paso la plantilla editable por WhatsApp."' : 'Keyword CTA.')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-3 flex justify-between text-[9px] font-mono text-gray-400">
        <span>UXIO Creator Lab · Módulo 1 · Lección 1.1 · Reto de Reescritura & UGC</span>
        <span>Página 1 de 1</span>
      </div>
    </div>
  );
}
