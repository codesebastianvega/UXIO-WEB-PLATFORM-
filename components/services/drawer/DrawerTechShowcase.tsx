import React from 'react';
import { Sparkles } from 'lucide-react';
import { TECH_SHOWCASE_SOFTWARE, TECH_SHOWCASE_CMS } from './TechLogos';
import { Locale } from '@/types';

interface DrawerTechShowcaseProps {
  isCms: boolean;
  isAi: boolean;
  lang: Locale;
}

export default function DrawerTechShowcase({ isCms, isAi, lang }: DrawerTechShowcaseProps) {
  const isEs = lang === 'es';
  const activeTechShowcase = isCms ? TECH_SHOWCASE_CMS : TECH_SHOWCASE_SOFTWARE;

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] space-y-3">
      <div className="flex items-center justify-between gap-1.5 pb-2 border-b border-black/[0.06] dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-[#FE385B]" />
          <span className="font-mono text-[11px] font-bold text-[#111111] dark:text-white uppercase tracking-tight">
            {isCms
              ? (isEs ? '// HERRAMIENTAS DE COMERCIO & CMS' : '// CMS & E-COMMERCE STACK')
              : isAi
                ? (isEs ? '// STACK DE INTEGRACIÓN & MODELOS IA' : '// AI & API INTEGRATION STACK')
                : (isEs ? '// TECNOLOGÍAS & HERRAMIENTAS QUE DOMINAMOS' : '// TECH STACK & TOOLS WE MASTER')
            }
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#0284C7] dark:text-[#00F0FF] font-semibold">
          {activeTechShowcase.length} {isEs ? 'herramientas' : 'technologies'}
        </span>
      </div>

      <p className="text-[11.5px] text-[#666666] dark:text-[#8E8E93] font-sans leading-relaxed">
        {isCms
          ? (isEs
            ? 'Implementamos y configuramos sobre plataformas líderes optimizadas para conversión, velocidad y pasarelas de pago seguras:'
            : 'We configure and deploy production-grade stores and portals on industry-leading commerce platforms:'
          )
          : isAi
            ? (isEs
              ? 'Conectamos modelos de IA avanzados y pipelines de APIs para potenciar la productividad y automatización de tu empresa:'
              : 'We connect cutting-edge AI models and API data pipelines to automate operations and drive enterprise productivity:'
            )
            : (isEs
              ? 'Construimos productos sobre tecnologías sólidas y probadas en producción para garantizar velocidad, estética y escala sin límites:'
              : 'We engineer digital products on proven production-grade technologies to guarantee speed, aesthetics, and limitless scale:'
            )
        }
      </p>

      <div className="flex flex-wrap gap-1.5 pt-1">
        {activeTechShowcase.map((tech: { name: string; icon: React.ReactNode }, idx: number) => (
          <div
            key={idx}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white dark:bg-[#1A1A1D] border border-black/[0.08] dark:border-white/[0.08] shadow-2xs font-display font-medium text-[11px] text-[#111111] dark:text-[#E4E4E7] transition-all hover:scale-[1.03] hover:border-black/[0.2] dark:hover:border-white/[0.2]"
          >
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
