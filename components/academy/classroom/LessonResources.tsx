import React from 'react';
import {
  FileText,
  FileSpreadsheet,
  Terminal,
  ExternalLink,
  Download,
  Sparkles,
  FolderDown,
} from 'lucide-react';
import { LessonResource, ResourceType } from '@/data/academy/types';
import { Locale } from '@/types';

interface LessonResourcesProps {
  resources: LessonResource[];
  lang: Locale;
}

function getResourceMeta(type: ResourceType, isEs: boolean) {
  switch (type) {
    case 'template':
      return {
        icon: FileSpreadsheet,
        badge: isEs ? 'Plantilla Editable' : 'Template',
        color: '#FFCC48',
        bg: 'bg-[#FFCC48]/10 border-[#FFCC48]/20 text-[#FFCC48]',
        cta: isEs ? 'Abrir Plantilla' : 'Open Template',
      };
    case 'pdf':
      return {
        icon: FileText,
        badge: 'PDF',
        color: '#FE385B',
        bg: 'bg-[#FE385B]/10 border-[#FE385B]/20 text-[#FE385B]',
        cta: isEs ? 'Descargar PDF' : 'Download PDF',
      };
    case 'prompt_pack':
      return {
        icon: Terminal,
        badge: isEs ? 'Pack de Prompts IA' : 'AI Prompt Pack',
        color: '#00F0FF',
        bg: 'bg-[#00F0FF]/10 border-[#00F0FF]/20 text-[#00F0FF]',
        cta: isEs ? 'Ver Prompts' : 'View Prompts',
      };
    case 'link':
    default:
      return {
        icon: ExternalLink,
        badge: isEs ? 'Enlace Útil' : 'External Link',
        color: '#10B981',
        bg: 'bg-[#10B981]/10 border-[#10B981]/20 text-[#10B981]',
        cta: isEs ? 'Abrir Enlace' : 'Open Link',
      };
  }
}

export default function LessonResources({ resources, lang }: LessonResourcesProps) {
  const isEs = lang === 'es';

  if (!resources || resources.length === 0) {
    return null;
  }

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
        <div className="flex items-center gap-2.5">
          <FolderDown size={18} className="text-[#FFCC48]" />
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white">
              {isEs ? 'Recursos, Plantillas y Descargables' : 'Resources, Templates & Downloads'}
            </h3>
            <p className="text-xs text-[#8E8E93] font-sans">
              {isEs
                ? 'Material complementario para aplicar lo aprendido en esta lección.'
                : 'Supplementary materials to apply what you learned in this lesson.'}
            </p>
          </div>
        </div>

        <span className="font-mono text-xs text-[#8E8E93] shrink-0">
          {resources.length} {isEs ? 'recurso(s)' : 'item(s)'}
        </span>
      </div>

      {/* Grid of Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map(res => {
          const meta = getResourceMeta(res.type, isEs);
          const IconComponent = meta.icon;

          return (
            <div
              key={res.id}
              className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] hover:border-black/[0.15] dark:hover:border-white/[0.15] transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-md border ${meta.bg}`}>
                    {meta.badge}
                  </span>
                  <IconComponent size={15} style={{ color: meta.color }} className="shrink-0" />
                </div>

                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-[#111111] dark:text-white leading-snug group-hover:text-[#FE385B] transition-colors">
                    {res.title}
                  </h4>
                  {res.description && (
                    <p className="text-[11px] text-[#666666] dark:text-[#8E8E93] font-sans mt-1 leading-relaxed line-clamp-2">
                      {res.description}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white dark:bg-black/[0.4] border border-black/[0.08] dark:border-white/[0.08] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] text-xs font-mono text-[#111111] dark:text-white transition-colors"
                >
                  <span>{meta.cta}</span>
                  <ExternalLink size={12} className="text-[#8E8E93]" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
