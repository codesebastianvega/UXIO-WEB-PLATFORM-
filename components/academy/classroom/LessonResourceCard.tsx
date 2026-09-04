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
  if (url === '#quickstart-guide') {
    return {
      icon: Sparkles,
      badge: isEs ? 'Guía Rápida' : 'Quickstart',
      cta: isEs ? 'Ver Guía Rápida ➔' : 'View Quickstart ➔',
      colorClass: 'bg-[#FE385B] hover:bg-[#FE385B]/90 text-white shadow-md shadow-[#FE385B]/20',
    };
  }
  if (url === '#commercial-vs-native') {
    return {
      icon: FileSpreadsheet,
      badge: isEs ? 'Ficha UGC' : 'UGC Worksheet',
      cta: isEs ? 'Ver Ficha UGC ➔' : 'View UGC Sheet ➔',
      colorClass: 'bg-[#FE385B] hover:bg-[#FE385B]/90 text-white shadow-md shadow-[#FE385B]/20',
    };
  }
  if (url === '#objection-mining') {
    return {
      icon: FileSpreadsheet,
      badge: isEs ? 'Minería Objeciones' : 'Objection Mining',
      cta: isEs ? 'Ver Minería ➔' : 'View Mining ➔',
      colorClass: 'bg-[#FF7F07] hover:bg-[#FF7F07]/90 text-white shadow-md shadow-[#FF7F07]/20',
    };
  }
  if (url === '#content-matrix') {
    return {
      icon: FileSpreadsheet,
      badge: isEs ? 'Matriz 30 Ideas' : '30-Day Matrix',
      cta: isEs ? 'Ver Matriz 30 Ideas ➔' : 'View 30-Day Matrix ➔',
      colorClass: 'bg-[#10B981] hover:bg-[#10B981]/90 text-white shadow-md shadow-[#10B981]/20',
    };
  }
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
  if (url === '#hook-formulas') {
    return {
      icon: Sparkles,
      badge: isEs ? 'Swipe File' : 'Swipe File',
      cta: isEs ? 'Ver 15 Ganchos ➔' : 'View 15 Hooks ➔',
      colorClass: 'bg-[#FE385B] hover:bg-[#FE385B]/90 text-white shadow-md shadow-[#FE385B]/20',
    };
  }
  if (url === '#broll-angles-guide') {
    return {
      icon: FileText,
      badge: isEs ? 'Guía B-Roll' : 'B-Roll Guide',
      cta: isEs ? 'Ver 6 Ángulos ➔' : 'View 6 Angles ➔',
      colorClass: 'bg-[#FF7F07] hover:bg-[#FF7F07]/90 text-white shadow-md shadow-[#FF7F07]/20',
    };
  }
  if (url === '#camera-calibration') {
    return {
      icon: Sparkles,
      badge: isEs ? 'Cheat Sheet' : 'Cheat Sheet',
      cta: isEs ? 'Ver Calibración ➔' : 'View Calibration ➔',
      colorClass: 'bg-[#FE385B] hover:bg-[#FE385B]/90 text-white shadow-md shadow-[#FE385B]/20',
    };
  }
  if (url === '#broll-30-checklist') {
    return {
      icon: FileText,
      badge: isEs ? 'Checklist B-Roll' : 'B-Roll Checklist',
      cta: isEs ? 'Ver 30 Clips ➔' : 'View 30 Clips ➔',
      colorClass: 'bg-[#FF7F07] hover:bg-[#FF7F07]/90 text-white shadow-md shadow-[#FF7F07]/20',
    };
  }
  if (url === '#script-4-blocks') {
    return {
      icon: FileSpreadsheet,
      badge: isEs ? 'Plantilla Guion' : 'Script Template',
      cta: isEs ? 'Ver 4 Bloques ➔' : 'View 4 Blocks ➔',
      colorClass: 'bg-[#10B981] hover:bg-[#10B981]/90 text-white shadow-md shadow-[#10B981]/20',
    };
  }
  if (url === '#hook-master-swipefile') {
    return {
      icon: Sparkles,
      badge: isEs ? 'Bóveda Ganchos' : 'Hooks Vault',
      cta: isEs ? 'Ver 30 Ganchos ➔' : 'View 30 Hooks ➔',
      colorClass: 'bg-[#FE385B] hover:bg-[#FE385B]/90 text-white shadow-md shadow-[#FE385B]/20',
    };
  }
  if (url === '#script-frameworks-vault') {
    return {
      icon: FileSpreadsheet,
      badge: isEs ? 'Frameworks Guion' : 'Script Frameworks',
      cta: isEs ? 'Ver Frameworks ➔' : 'View Frameworks ➔',
      colorClass: 'bg-[#FF7F07] hover:bg-[#FF7F07]/90 text-white shadow-md shadow-[#FF7F07]/20',
    };
  }
  if (url === '#multiformat-pack-template') {
    return {
      icon: Sparkles,
      badge: isEs ? 'Kit Multiformato' : 'Multiformat Pack',
      cta: isEs ? 'Ver Kit 1x3 ➔' : 'View 1x3 Pack ➔',
      colorClass: 'bg-[#10B981] hover:bg-[#10B981]/90 text-white shadow-md shadow-[#10B981]/20',
    };
  }
  if (url === '#capcut-shortcuts-cheat-sheet') {
    return {
      icon: Sparkles,
      badge: isEs ? 'Cheat Sheet' : 'Cheat Sheet',
      cta: isEs ? 'Ver Atajos CapCut ➔' : 'View CapCut Shortcuts ➔',
      colorClass: 'bg-[#FE385B] hover:bg-[#FE385B]/90 text-white shadow-md shadow-[#FE385B]/20',
    };
  }
  if (url === '#sound-design-vault') {
    return {
      icon: FileSpreadsheet,
      badge: isEs ? 'Bóveda SFX' : 'SFX Vault',
      cta: isEs ? 'Ver Mezcla Audio ➔' : 'View Audio Mix ➔',
      colorClass: 'bg-[#FF7F07] hover:bg-[#FF7F07]/90 text-white shadow-md shadow-[#FF7F07]/20',
    };
  }
  if (url === '#ai-creator-prompt-pack') {
    return {
      icon: Terminal,
      badge: isEs ? 'Prompts IA' : 'AI Prompts',
      cta: isEs ? 'Ver Prompts IA ➔' : 'View AI Prompts ➔',
      colorClass: 'bg-[#10B981] hover:bg-[#10B981]/90 text-white shadow-md shadow-[#10B981]/20',
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
    case 'guide':
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
