'use client';

import React from 'react';
import { X, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PricingTier, SubService } from '@/data/services';
import { Locale } from '@/types';

interface SubServiceCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier: PricingTier | null;
  subService: SubService;
  formData: {
    name: string;
    email: string;
    company: string;
    startDate: string;
    notes: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    email: string;
    company: string;
    startDate: string;
    notes: string;
  }>>;
  isSuccess: boolean;
  onSubmit: (e: React.FormEvent) => void;
  lang: Locale;
}

export default function SubServiceCheckoutModal({
  isOpen,
  onClose,
  selectedTier,
  subService,
  formData,
  setFormData,
  isSuccess,
  onSubmit,
  lang,
}: SubServiceCheckoutModalProps) {
  const isEs = lang === 'es';

  if (!isOpen || !selectedTier) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.1] dark:border-white/[0.12] p-6 sm:p-8 shadow-2xl space-y-6 text-[#111111] dark:text-white">
        <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div>
            <span className="font-mono text-[10px] text-[#FE385B] font-bold uppercase">
              // RESERVA DE SPRINT
            </span>
            <h3 className="font-display font-bold text-lg text-[#111111] dark:text-white">
              {selectedTier.name}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.1] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white"
          >
            <X size={16} />
          </button>
        </div>

        {isSuccess ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center mx-auto">
              <CheckCircle2 size={24} />
            </div>
            <h4 className="font-display font-bold text-base">
              {isEs ? '¡Solicitud de Reserva Recibida!' : 'Sprint Request Received!'}
            </h4>
            <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans max-w-xs mx-auto">
              {isEs
                ? 'Nos pondremos en contacto en menos de 2 horas para coordinar la llamada técnica y el acuerdo formal.'
                : 'We will reach out in under 2 hours to coordinate the technical discovery call and formal agreement.'}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#111111] dark:bg-white text-white dark:text-black font-display font-bold text-xs"
            >
              {isEs ? 'Entendido' : 'Close'}
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="p-3.5 rounded-2xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between text-xs font-mono">
              <span className="text-[#8E8E93]">{isEs ? 'Abono de Reserva (50%):' : 'Deposit Required (50%):'}</span>
              <span className="font-bold text-[#FE385B] text-sm">{selectedTier.deposit}</span>
            </div>

            <div className="space-y-1">
              <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
                {isEs ? 'Nombre Completo:' : 'Full Name:'}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/10 dark:border-white/10 text-xs font-sans"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
                {isEs ? 'Correo Corporativo:' : 'Work Email:'}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/10 dark:border-white/10 text-xs font-sans"
              />
            </div>

            <div className="space-y-1">
              <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
                {isEs ? 'Empresa o Proyecto:' : 'Company or Project:'}
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/10 dark:border-white/10 text-xs font-sans"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#FE385B] hover:bg-[#e02d4e] text-white font-display font-semibold text-xs flex items-center justify-center gap-2 shadow-accent-glow cursor-pointer transition-all"
            >
              <Send size={13} />
              <span>{isEs ? 'Confirmar y Solicitar Factura Proforma' : 'Confirm & Request Proforma Invoice'}</span>
            </button>

            <p className="font-mono text-[9.5px] text-center text-[#8E8E93]">
              {isEs ? '🔒 100% Confidencial con NDA automático.' : '🔒 100% Confidential with automatic NDA.'}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
