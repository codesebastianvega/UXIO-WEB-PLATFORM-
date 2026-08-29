'use client';

import React, { useState, useEffect } from 'react';
import { Locale } from '@/types';

interface SidebarLiveDispatchProps {
  currentLang: Locale;
  dictionary?: any;
}

export default function SidebarLiveDispatch({ currentLang, dictionary }: SidebarLiveDispatchProps) {
  const isEs = currentLang === 'es';
  const dispatches: string[] = dictionary?.dispatches || (isEs ? [
    "Construyendo nuevos productos digitales",
    "Diseñando una nueva experiencia digital",
    "Creando herramientas para nuestros clientes",
    "Trabajando en nuevos productos de UXIO"
  ] : [
    "Building new digital products",
    "Designing a new digital experience",
    "Creating tools for our clients",
    "Working on new in-house products"
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
      <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#FE385B] font-bold">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FE385B] animate-pulse" />
        <span>{isEs ? 'AHORA EN UXIO' : 'NOW AT UXIO'}</span>
      </div>
      <p className="font-sans text-[11px] text-[#555555] dark:text-[#A1A1AA] leading-relaxed transition-all duration-300">
        {dispatches[dispatchIndex]}
      </p>
    </div>
  );
}
