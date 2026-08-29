'use client';

import React, { useState } from 'react';
import { Code2, Lock, Sparkles, ArrowRight, Check, ShieldCheck } from 'lucide-react';
import CodeViewer from '@/components/ui/CodeViewer';
import ComponentCheckoutModal from './ComponentCheckoutModal';
import { ResourceItem } from '@/data/resources';
import { Locale } from '@/types';

interface ComponentCodeAndAiTabsProps {
  item: ResourceItem;
  sourceCode: string;
  usageCode: string;
  aiPrompt: string;
  activeCodeTab: 'component' | 'usage' | 'cli' | 'ai-prompt';
  setActiveCodeTab: (tab: 'component' | 'usage' | 'cli' | 'ai-prompt') => void;
  lang: Locale;
}

export default function ComponentCodeAndAiTabs({
  item,
  sourceCode,
  usageCode,
  aiPrompt,
  activeCodeTab,
  setActiveCodeTab,
  lang,
}: ComponentCodeAndAiTabsProps) {
  const isEs = lang === 'es';
  const isPro = !item.isOpenSource || item.tier === 'pro';
  const [isUnlocked, setIsUnlocked] = useState(!isPro);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  const tabs = [
    {
      id: 'component',
      label: `${item.slug}.tsx`,
      code: sourceCode,
      language: 'tsx',
    },
    {
      id: 'usage',
      label: 'Uso / Usage.tsx',
      code: usageCode,
      language: 'tsx',
    },
    {
      id: 'cli',
      label: 'CLI / Quick Add',
      code: item.installCommand || `npx @uxio/ui add ${item.slug}`,
      language: 'bash',
    },
    {
      id: 'ai-prompt',
      label: '🤖 Prompt para IA',
      code: aiPrompt,
      language: 'markdown',
    },
  ];

  return (
    <>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 size={16} className="text-[#FE385B]" />
            <span className="font-display font-bold text-sm text-[#111111] dark:text-white uppercase tracking-tight">
              {isEs ? 'DISTRIBUCIÓN & CÓDIGO FUENTE (CERO DEPENDENCIAS)' : 'SOURCE CODE & ONE-CLICK INSTALLATION'}
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#8E8E93]">
            {isEs ? 'Listo para copiar en tu proyecto Next.js' : 'Copy-paste ready for Next.js'}
          </span>
        </div>

        {/* Code Container with Pro Paywall Protection */}
        <div className="relative rounded-2xl overflow-hidden">
          <CodeViewer
            tabs={tabs}
            activeTab={activeCodeTab}
            onTabChange={(id) => setActiveCodeTab(id as 'component' | 'usage' | 'cli' | 'ai-prompt')}
            aiPromptText={aiPrompt}
          />

          {/* Pro Blur Paywall Overlay if Locked */}
          {isPro && !isUnlocked && (
            <div className="absolute inset-0 z-30 bg-[#0E0E10]/85 backdrop-blur-md flex items-center justify-center p-6 text-center animate-fadeIn">
              <div className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-[#171719] border border-white/[0.12] shadow-2xl space-y-5">
                {/* Lock Badge */}
                <div className="w-12 h-12 rounded-2xl bg-[#FE385B]/15 border border-[#FE385B]/30 text-[#FE385B] flex items-center justify-center mx-auto shadow-lg shadow-[#FE385B]/10">
                  <Lock size={22} />
                </div>

                <div className="space-y-1.5">
                  <span className="font-mono text-[10px] font-bold text-[#FE385B] tracking-wider uppercase">
                    PRO COMPONENT · LICENCIA ILIMITADA
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">
                    {isEs ? `Desbloquea ${item.name}` : `Unlock ${item.name}`}
                  </h3>
                  <p className="text-xs text-[#8E8E93] font-sans leading-relaxed">
                    {isEs
                      ? 'Obtén acceso inmediato al código fuente TSX completo, actualizaciones de por vida y comando CLI autenticado.'
                      : 'Get instant access to clean TSX source code, lifetime updates, and authenticated CLI command.'
                    }
                  </p>
                </div>

                {/* Price Display */}
                <div className="p-3 rounded-2xl bg-black/40 border border-white/10 font-mono text-xs text-white flex items-center justify-between">
                  <span className="text-[#8E8E93]">{isEs ? 'Pago único:' : 'One-time:'}</span>
                  <span className="font-bold text-base text-[#00F0FF]">{item.priceText || '$3 USD · $12K COP'}</span>
                </div>

                {/* Unlock CTA Button */}
                <button
                  type="button"
                  onClick={() => setCheckoutModalOpen(true)}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#FF7F07] to-[#FE385B] hover:opacity-95 text-white font-display font-bold text-xs tracking-wide shadow-lg shadow-[#FE385B]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{isEs ? 'Desbloquear Código Fuente Pro ($3 USD) →' : 'Unlock Pro Source Code ($3 USD) →'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Modal */}
      <ComponentCheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        item={item}
        lang={lang}
        onUnlockSuccess={() => {
          setIsUnlocked(true);
        }}
      />
    </>
  );
}
