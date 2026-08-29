'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { Locale } from '@/types';

interface SidebarLiveDispatchProps {
  currentLang: Locale;
  dictionary?: any;
}

export default function SidebarLiveDispatch({ currentLang, dictionary }: SidebarLiveDispatchProps) {
  const dispatches: string[] = dictionary?.dispatches || (currentLang === 'es' ? [
    "Diseñando app nativa para smartwatch · SIE Travel",
    "Explorando terminal POS autónomo · Boku Bento",
    "Optimizando motor de inteligencia · Aluna",
    "Publicando biblioteca de componentes React · Recursos"
  ] : [
    "Designing native smartwatch app · SIE Travel",
    "Exploring autonomous POS terminal · Boku Bento",
    "Optimizing intelligence engine · Aluna",
    "Publishing React component library · Resources"
  ]);

  const [dispatchIndex, setDispatchIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDispatchIndex(prev => (prev + 1) % dispatches.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [dispatches.length]);

  return (
    <div className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06] space-y-1.5 transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#FE385B] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FE385B] animate-pulse" />
          <span>{currentLang === 'es' ? 'DISPATCH EN VIVO' : 'LIVE DISPATCH'}</span>
        </div>
        <span className="font-mono text-[9px] text-[#8E8E93]">08:30 UTC</span>
      </div>
      <p className="font-sans text-[11px] text-[#555555] dark:text-[#A1A1AA] leading-relaxed transition-all duration-300">
        {dispatches[dispatchIndex]}
      </p>
    </div>
  );
}
