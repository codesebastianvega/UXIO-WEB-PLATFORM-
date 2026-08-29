'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-10 lg:p-12 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <div className="p-4 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-lg max-w-lg w-full space-y-6">
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 rounded-2xl bg-[#FE385B]/10 border border-[#FE385B]/20 flex items-center justify-center text-[#FE385B]">
            <Compass size={32} />
          </div>
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-[#FE385B] tracking-tight">// 404 · RUTA NO ENCONTRADA</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] dark:text-white">
            Página en Construcción
          </h1>
          <p className="text-sm text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans max-w-sm mx-auto">
            Esta sección o experimento está siendo calibrado en el estudio. Vuelve al canvas principal para continuar explorando.
          </p>
        </div>

        <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center gap-3">
          <Link
            href="/es"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111111] dark:bg-white text-white dark:text-black font-display font-semibold text-xs transition-all shadow-md active:scale-95"
          >
            <Home size={14} />
            <span>Volver al Inicio</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
