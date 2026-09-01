'use client';

import React from 'react';
import {
  FileSpreadsheet,
  FileText,
  Terminal,
  ExternalLink,
  Lock,
  Sparkles,
} from 'lucide-react';
import { LessonResource, ResourceType } from '@/data/academy/types';

interface LessonResourceCardProps {
  resource: LessonResource;
  isUnlocked: boolean;
  isEs: boolean;
  onActionClick: (url: string) => void;
}

function getResourceMeta(resource: LessonResource, isEs: boolean) {
  const url = resource.url || '';
  if (url === '#setup-checklist') {
    return {
      icon: FileText,
      badge: isEs ? 'Checklist' : 'Checklist',
      cta: isEs ? 'Ver Checklist ➔' : 'View Checklist ➔',
      colorClass: 'bg-[#0070F3] hover:bg-[#0070F3]/90 text-white shadow-md shadow-[#0070F3]/20',
    };
  }
  if (url === '#gear-guide') {
    return {
      icon: ExternalLink,
      badge: isEs ? 'Accesorios' : 'Gear Guide',
      cta: isEs ? 'Ver Accesorios ➔' : 'View Gear ➔',
      colorClass: 'bg-[#7928CA] hover:bg-[#7928CA]/90 text-white shadow-md shadow-[#7928CA]/20',
    };
  }

  switch (resource.type) {
    case 'template':
      return {
        icon: FileSpreadsheet,
        badge: isEs ? 'Plantilla' : 'Template',
        cta: isEs ? 'Abrir Plantilla ➔' : 'Open Template ➔',
        colorClass: 'bg-[#10B981] hover:bg-[#10B981]/90 text-white shadow-md shadow-[#10B981]/20',
      };
    case 'pdf':
      return {
        icon: FileText,
        badge: isEs ? 'Guía en PDF' : 'PDF Guide',
        cta: isEs ? 'Ver Guía ➔' : 'View Guide ➔',
        colorClass: 'bg-[#0070F3] hover:bg-[#0070F3]/90 text-white shadow-md shadow-[#0070F3]/20',
      };
    case 'prompt_pack':
      return {
        icon: Terminal,
        badge: isEs ? 'Prompts IA' : 'AI Prompts',
        cta: isEs ? 'Ver Prompts ➔' : 'View Prompts ➔',
        colorClass: 'bg-[#FF7F07] hover:bg-[#FF7F07]/90 text-white shadow-md shadow-[#FF7F07]/20',
      };
    case 'link':
    default:
      return {
        icon: ExternalLink,
        badge: isEs ? 'Enlace' : 'Link',
        cta: isEs ? 'Ver Enlace ➔' : 'Open Link ➔',
        colorClass: 'bg-[#7928CA] hover:bg-[#7928CA]/90 text-white shadow-md shadow-[#7928CA]/20',
      };
  }
}

export default function LessonResourceCard({
  resource,
  isUnlocked,
  isEs,
  onActionClick,
}: LessonResourceCardProps) {
  const meta = getResourceMeta(resource, isEs);
  const IconComponent = meta.icon;
  const isInternalAction = resource.url.startsWith('#');

  return (
    <div
      className={`p-4 rounded-2xl border flex flex-col justify-between space-y-3 transition-all ${
        isUnlocked
          ? 'bg-black/[0.02] dark:bg-white/[0.02] border-black/[0.06] dark:border-white/[0.06] hover:border-black/[0.12] dark:hover:border-white/[0.12]'
          : 'bg-black/[0.01] dark:bg-white/[0.01] border-black/[0.04] dark:border-white/[0.04] opacity-50 select-none'
      }`}
    >
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-[#8E8E93] bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded uppercase font-bold">
            {meta.badge}
          </span>
          <IconComponent size={13} className="text-[#8E8E93]" />
        </div>
        <h5 className="font-display font-bold text-xs text-[#111111] dark:text-white pt-1 truncate">
          {resource.title}
        </h5>
        {resource.description && (
          <p className="text-[11px] text-[#8E8E93] font-sans line-clamp-2 leading-relaxed">
            {resource.description}
          </p>
        )}
      </div>

      {isUnlocked ? (
        isInternalAction ? (
          <button
            type="button"
            onClick={() => onActionClick(resource.url)}
            className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-display font-bold text-xs transition-all active:scale-95 hover:scale-[1.02] ${meta.colorClass}`}
          >
            <span>{meta.cta}</span>
          </button>
        ) : (
          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-display font-bold text-xs transition-all active:scale-95 hover:scale-[1.02] ${meta.colorClass}`}
          >
            <span>{meta.cta}</span>
            <ExternalLink size={11} />
          </a>
        )
      ) : (
        <div className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] text-xs font-mono text-[#8E8E93] cursor-not-allowed">
          <Lock size={11} />
          <span>{isEs ? 'Bloqueada (Aprueba Test)' : 'Locked'}</span>
        </div>
      )}
    </div>
  );
}
