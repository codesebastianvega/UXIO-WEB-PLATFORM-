'use client';

import React from 'react';
import { Plus, Trash2, Link as LinkIcon } from 'lucide-react';
import { DiagnosisFormData } from './BrandDiagnosisPrintTemplate';
import { capitalizeFirst, capitalizeWords, formatCurrencyValue } from '@/lib/academy/formatters';

interface FormState extends DiagnosisFormData {
  links: string[];
}

interface BrandDiagnosisFormFieldsProps {
  form: FormState;
  isEs: boolean;
  onChange: (field: keyof FormState, value: any) => void;
  onPainPointChange: (index: number, val: string) => void;
  onLinkChange: (index: number, val: string) => void;
  onAddLink: () => void;
  onRemoveLink: (index: number) => void;
}

export default function BrandDiagnosisFormFields({
  form,
  isEs,
  onChange,
  onPainPointChange,
  onLinkChange,
  onAddLink,
  onRemoveLink,
}: BrandDiagnosisFormFieldsProps) {
  return (
    <div className="space-y-6">
      {/* Section 1: Oferta */}
      <div className="space-y-4">
        <span className="font-mono text-xs font-bold text-[#FE385B] block uppercase tracking-wider">
          // {isEs ? '1. Tu Identidad & Oferta' : '1. Identity & Core Offer'}
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-[#52525B] dark:text-[#A1A1AA]">
              {isEs ? 'Nombre del Creador / Alumno' : 'Creator / Student Name'}
            </label>
            <input
              type="text"
              autoCapitalize="words"
              value={form.studentName || ''}
              onChange={e => onChange('studentName', capitalizeWords(e.target.value))}
              placeholder={isEs ? 'Ej: Sebas Vega' : 'e.g., Alex Smith'}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FE385B]"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-[#52525B] dark:text-[#A1A1AA]">
              {isEs ? 'Nombre de la Marca' : 'Brand Name'}
            </label>
            <input
              type="text"
              autoCapitalize="words"
              value={form.businessName}
              onChange={e => onChange('businessName', capitalizeWords(e.target.value))}
              placeholder={isEs ? 'Ej: UXIO Agency' : 'e.g., UXIO Studio'}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FE385B]"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-[#52525B] dark:text-[#A1A1AA]">
              {isEs ? 'Ticket Promedio ($ COP)' : 'Average Ticket ($ USD)'}
            </label>
            <input
              type="text"
              value={form.pricePoint}
              onChange={e => onChange('pricePoint', e.target.value)}
              onBlur={() => onChange('pricePoint', formatCurrencyValue(form.pricePoint, isEs))}
              placeholder={isEs ? 'Ej: $ 90.000 COP' : 'e.g., $ 90 USD'}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FE385B]"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-[#52525B] dark:text-[#A1A1AA]">
            {isEs ? 'Producto o Servicio Estrella' : 'Hero Product or Service'}
          </label>
          <input
            type="text"
            autoCapitalize="sentences"
            value={form.mainOffer}
            onChange={e => onChange('mainOffer', capitalizeFirst(e.target.value))}
            placeholder={isEs ? 'Ej: Asesoría de 1 hora / Paquete de 10 sesiones' : 'e.g., 1-on-1 coaching'}
            className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FE385B]"
          />
        </div>
      </div>

      {/* Section 2: Cliente Ideal */}
      <div className="space-y-4 pt-2">
        <span className="font-mono text-xs font-bold text-[#FF7F07] block uppercase tracking-wider">
          // {isEs ? '2. Cliente Ideal & Los 3 Dolores Clave' : '2. Ideal Customer & 3 Pain Points'}
        </span>
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-[#52525B] dark:text-[#A1A1AA]">
            {isEs ? '¿A quién le vendes exactamente?' : 'Who is your ideal client?'}
          </label>
          <textarea
            rows={2}
            autoCapitalize="sentences"
            value={form.targetAudience}
            onChange={e => onChange('targetAudience', capitalizeFirst(e.target.value))}
            placeholder={isEs ? 'Ej: Dueños de negocios y marcas personales que quieren vender con video vertical.' : 'e.g., Business owners who want to scale with video.'}
            className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FF7F07] resize-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-[#52525B] dark:text-[#A1A1AA]">
            {isEs ? 'Los 3 Dolores más Urgentes de tu Cliente' : '3 Urgent Customer Pain Points'}
          </label>
          {[0, 1, 2].map(idx => (
            <div key={idx} className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#FF7F07] w-4">{idx + 1}.</span>
              <input
                type="text"
                autoCapitalize="sentences"
                value={form.painPoints[idx]}
                onChange={e => onPainPointChange(idx, capitalizeFirst(e.target.value))}
                placeholder={
                  idx === 0
                    ? (isEs ? 'Dolor 1: Tienen miedo a la cámara y no saben qué decir' : 'Pain 1: Camera shyness')
                    : idx === 1
                    ? (isEs ? 'Dolor 2: Pasan horas editando y nadie les compra' : 'Pain 2: High editing time, zero sales')
                    : (isEs ? 'Dolor 3: No tienen un sistema para llevar visitas a WhatsApp' : 'Pain 3: No WhatsApp conversion pipeline')
                }
                className="w-full px-3.5 py-2 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#FF7F07]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Meta a 5 Semanas */}
      <div className="space-y-4 pt-2">
        <span className="font-mono text-xs font-bold text-[#10B981] block uppercase tracking-wider">
          // {isEs ? '3. Meta Comercial a 5 Semanas' : '3. 5-Week Milestone Goal'}
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-[#52525B] dark:text-[#A1A1AA]">
              {isEs ? 'Meta Medible (Ventas o Leads en WhatsApp)' : 'Measurable Goal'}
            </label>
            <input
              type="text"
              autoCapitalize="sentences"
              value={form.goal5Weeks}
              onChange={e => onChange('goal5Weeks', capitalizeFirst(e.target.value))}
              placeholder={isEs ? 'Ej: 15 clientes nuevos por WhatsApp / $3M COP' : 'e.g., 10 new clients / $2,000 USD'}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#10B981]"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-[#52525B] dark:text-[#A1A1AA]">
              {isEs ? 'Mayor obstáculo que te frenaba antes' : 'Previous Roadblock'}
            </label>
            <input
              type="text"
              autoCapitalize="sentences"
              value={form.previousObstacle}
              onChange={e => onChange('previousObstacle', capitalizeFirst(e.target.value))}
              placeholder={isEs ? 'Ej: Parálisis por perfeccionismo y falta de constancia' : 'e.g., Perfectionism'}
              className="w-full px-3.5 py-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-xs focus:outline-none focus:border-[#10B981]"
            />
          </div>
        </div>
      </div>

      {/* Section 4: Enlaces Opcionales */}
      <div className="space-y-3 pt-2">
        <span className="font-mono text-xs font-bold text-[#8E8E93] block uppercase tracking-wider">
          // {isEs ? '4. Enlaces de Apoyo Opcionales (Drive, Loom, etc.)' : '4. Optional Supporting Links'}
        </span>
        <div className="space-y-2">
          {form.links.map((link, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="url"
                  value={link}
                  onChange={e => onLinkChange(idx, e.target.value)}
                  placeholder="https://drive.google.com/... o https://loom.com/..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono focus:outline-none focus:border-[#FE385B]"
                />
                <LinkIcon size={13} className="absolute left-3 top-2.5 text-[#8E8E93]" />
              </div>
              {form.links.length > 1 && (
                <button
                  type="button"
                  onClick={() => onRemoveLink(idx)}
                  className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={onAddLink}
          className="inline-flex items-center gap-1 font-mono text-xs text-[#FE385B] hover:underline"
        >
          <Plus size={13} />
          <span>{isEs ? '+ Agregar otro enlace' : '+ Add another link'}</span>
        </button>
      </div>
    </div>
  );
}
