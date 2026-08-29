'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';
import { Project, Locale } from '@/types';

interface HomeCaseModalProps {
  project: Project | null;
  onClose: () => void;
  lang: Locale;
}

export default function HomeCaseModal({ project, onClose, lang }: HomeCaseModalProps) {
  if (!project) return null;
  const isEs = lang === 'es';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-[#171719] rounded-2xl max-w-lg w-full p-6 border border-black/[0.1] dark:border-white/[0.1] shadow-2xl relative text-[#111111] dark:text-[#EDEDEE]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-[#F7F7F5] dark:bg-white/[0.08] hover:bg-black/[0.08] dark:hover:bg-white/[0.15] text-[#111111] dark:text-white transition-colors"
        >
          <X size={15} />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span 
            className="w-2.5 h-2.5 rounded-full"
            style={{ 
              backgroundColor: project.accentColor,
              boxShadow: `0 0 6px ${project.accentColor}` 
            }}
          />
          <span className="font-mono text-xs text-[#8E8E93]">{project.category}</span>
          <span className="font-mono text-xs text-[#8E8E93]">· {project.year}</span>
        </div>

        <h2 className="font-display font-bold text-xl text-[#111111] dark:text-white mb-1">
          {project.title}
        </h2>
        <p className="font-mono text-xs text-[#8E8E93] mb-3">
          {project.tagline}
        </p>

        <div className="p-3.5 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.06] dark:border-white/[0.08] mb-4 space-y-1.5">
          <div className="font-mono text-[10px] text-[#8E8E93]">
            {isEs ? 'RESUMEN DEL CASO DE ESTUDIO' : 'CASE STUDY OVERVIEW'}
          </div>
          <p className="text-xs text-[#111111] dark:text-[#EDEDEE] leading-relaxed font-sans">
            {project.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-black/[0.08] dark:border-white/[0.08]">
          <Link
            href={`/${lang}/works/project/${project.id}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FE385B] text-white font-display text-xs font-semibold hover:bg-[#e02d4e] transition-colors"
          >
            <span>{isEs ? 'Ver Caso de Estudio' : 'View Case Study'}</span>
            <ArrowRight size={12} />
          </Link>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-black/[0.05] dark:bg-white/[0.08] text-[#666666] dark:text-[#8E8E93] font-display text-xs font-semibold hover:text-[#111111] dark:hover:text-white transition-colors"
          >
            {isEs ? 'Cerrar' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
