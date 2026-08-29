'use client';

import React from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { Locale } from '@/types';

interface SubServiceFaqProps {
  faqs: Array<{ question: string; answer: string }>;
  activeFaq: number | null;
  onToggleFaq: (index: number) => void;
  lang: Locale;
}

export default function SubServiceFaq({
  faqs,
  activeFaq,
  onToggleFaq,
  lang,
}: SubServiceFaqProps) {
  const isEs = lang === 'es';

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2 pb-2 border-b border-black/[0.06] dark:border-white/[0.08]">
        <HelpCircle size={15} className="text-[#0284C7] dark:text-[#00F0FF]" />
        <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white">
          {isEs ? 'Preguntas Frecuentes del Sprint' : 'Frequently Asked Questions'}
        </h3>
      </div>

      <div className="space-y-2">
        {faqs.map((faq, idx) => {
          const isOpen = activeFaq === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.06] dark:border-white/[0.08] overflow-hidden"
            >
              <button
                type="button"
                onClick={() => onToggleFaq(idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-4 font-display font-semibold text-xs sm:text-sm text-[#111111] dark:text-white cursor-pointer hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={14}
                  className={`text-[#8E8E93] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 text-xs font-sans text-[#666666] dark:text-[#8E8E93] leading-relaxed border-t border-black/[0.04] dark:border-white/[0.06] pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
