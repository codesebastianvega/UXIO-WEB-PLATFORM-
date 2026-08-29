'use client';

import React from 'react';
import { CheckSquare, Square } from 'lucide-react';
import { MicroService, CurrencyCode, formatCurrency } from '@/data/services';
import { Locale } from '@/types';

interface DrawerMicroservicesProps {
  allMicroServices: MicroService[];
  selectedMicroIds: string[];
  toggleMicroService: (id: string) => void;
  currency: CurrencyCode;
  microTotal: number;
  microDeposit: number;
  selectedMicros: MicroService[];
  lang: Locale;
}

export default function DrawerMicroservices({
  allMicroServices,
  selectedMicroIds,
  toggleMicroService,
  currency,
  microTotal,
  microDeposit,
  selectedMicros,
  lang,
}: DrawerMicroservicesProps) {
  const isEs = lang === 'es';

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h3 className="font-display font-bold text-base text-[#111111] dark:text-white">
          {isEs ? 'Configura tu Paquete de Soporte & Setup' : 'Configure your Setup & Support Package'}
        </h3>
        <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans">
          {isEs 
            ? 'Selecciona los micro-servicios que necesitas para optimizar, migrar o configurar tu infraestructura técnica.'
            : 'Select the exact micro-services required to audit, migrate, or provision your technical ecosystem.'
          }
        </p>
      </div>

      {/* Interactive Checklist */}
      <div className="space-y-2.5 pt-1">
        {allMicroServices.map((micro) => {
          if (!micro.id) return null;
          const isChecked = selectedMicroIds.includes(micro.id);
          const priceFormatted = micro.price ? formatCurrency(micro.price[currency], currency) : '';

          return (
            <div
              key={micro.id}
              onClick={() => toggleMicroService(micro.id!)}
              className={`
                p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3
                ${isChecked
                  ? 'border-[#0284C7] dark:border-[#00F0FF] bg-[#0284C7]/[0.05] dark:bg-[#00F0FF]/[0.08] shadow-2xs ring-1 ring-[#0284C7]/30 dark:ring-[#00F0FF]/30'
                  : 'border-black/[0.06] dark:border-white/[0.08] bg-[#F7F7F5] dark:bg-[#0D0D0E] hover:border-black/[0.15] dark:hover:border-white/[0.15]'
                }
              `}
            >
              <div className="flex items-center gap-3 min-w-0">
                <button
                  type="button"
                  className="flex-shrink-0 text-[#0284C7] dark:text-[#00F0FF] cursor-pointer"
                  aria-label={isChecked ? 'Deseleccionar' : 'Seleccionar'}
                >
                  {isChecked ? (
                    <CheckSquare size={18} className="text-[#0284C7] dark:text-[#00F0FF]" />
                  ) : (
                    <Square size={18} className="text-[#8E8E93]" />
                  )}
                </button>

                <div className="min-w-0">
                  <h4 className="font-display font-bold text-xs sm:text-sm text-[#111111] dark:text-white truncate">
                    {micro.title}
                  </h4>
                  {micro.description && (
                    <p className="text-[11px] text-[#666666] dark:text-[#8E8E93] truncate font-sans">
                      {micro.description}
                    </p>
                  )}
                </div>
              </div>

              <div className="font-mono font-bold text-xs sm:text-sm text-[#111111] dark:text-white flex-shrink-0 text-right">
                {priceFormatted}
              </div>
            </div>
          );
        })}
      </div>

      {/* Estimated Total Box */}
      <div className="p-4 rounded-2xl bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] space-y-1.5 mt-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-[#8E8E93] uppercase">
            {isEs ? 'TOTAL ESTIMADO' : 'ESTIMATED TOTAL'} ({selectedMicros.length} {isEs ? 'servicios' : 'items'})
          </span>
          <span className="font-display font-extrabold text-xl text-[#111111] dark:text-white">
            {formatCurrency(microTotal, currency)}
          </span>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-black/[0.04] dark:border-white/[0.06] font-mono text-[11px]">
          <span className="text-[#0284C7] dark:text-[#00F0FF] font-semibold">
            {isEs ? 'Abono Inicial Requerido (50%):' : 'Required Deposit (50%):'}
          </span>
          <span className="font-bold text-[#FE385B]">
            {formatCurrency(microDeposit, currency)}
          </span>
        </div>
      </div>
    </div>
  );
}
