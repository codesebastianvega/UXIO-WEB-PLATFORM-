'use client';

import React from 'react';
import { EcosystemSchema } from '@/types/ecosystem';
import { Locale } from '@/types';
import { Layers } from 'lucide-react';

interface EcosystemLayersProps {
  ecosystem: EcosystemSchema;
  lang: Locale;
}

export default function EcosystemLayers({
  ecosystem,
  lang,
}: EcosystemLayersProps) {
  const isEs = lang === 'es';
  const { layers = [] } = ecosystem;

  if (layers.length === 0) return null;

  return (
    <section className="space-y-8 py-10 border-t border-black/[0.06] dark:border-white/[0.08]">
      <div className="flex items-end justify-between">
        <div className="space-y-2">
          <span className="font-mono text-xs text-[#FE385B] uppercase tracking-widest block font-semibold flex items-center gap-2">
            <Layers size={13} />
            <span>{isEs ? `// LAS ${layers.length} CAPAS DEL ECOSISTEMA` : `// THE ${layers.length} ECOSYSTEM LAYERS`}</span>
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#111111] dark:text-white tracking-tight">
            {isEs ? 'Infraestructura modular para operar y escalar.' : 'Modular infrastructure to operate and scale.'}
          </h3>
        </div>
        <span className="font-mono text-xs text-[#8E8E93] bg-black/[0.03] dark:bg-white/[0.05] px-3 py-1 rounded-full border border-black/[0.06] dark:border-white/[0.08]">
          [{layers.length} LAYERS]
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {layers.map((layer, lIdx) => (
          <div
            key={layer.id || lIdx}
            className="p-5 rounded-2xl bg-white dark:bg-[#151518] border border-black/[0.06] dark:border-white/[0.08] flex flex-col justify-between space-y-4 hover:border-[#FE385B] transition-all group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#FE385B] font-bold">
                  LAYER 0{lIdx + 1}
                </span>
                <span className="font-mono text-[9.5px] text-[#8E8E93]">
                  {layer.category}
                </span>
              </div>

              <h4 className="font-display font-bold text-base text-[#111111] dark:text-white group-hover:text-[#FE385B] transition-colors tracking-tight">
                {layer.title}
              </h4>

              <p className="font-sans text-xs text-[#555555] dark:text-[#A1A1AA] leading-relaxed">
                {layer.description}
              </p>
            </div>

            <div className="pt-3 border-t border-black/[0.04] dark:border-white/[0.06] space-y-1">
              <span className="font-mono text-[9px] text-[#8E8E93] uppercase tracking-wider block font-semibold">
                // COMPONENTES:
              </span>
              <ul className="space-y-1 text-[11px] text-[#444444] dark:text-[#CCCCCC] font-mono">
                {layer.items.slice(0, 4).map((item, i) => (
                  <li key={i} className="truncate">• {item}</li>
                ))}
                {layer.items.length > 4 && (
                  <li className="text-[#8E8E93] text-[10px]">
                    + {layer.items.length - 4} submódulos activos
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
