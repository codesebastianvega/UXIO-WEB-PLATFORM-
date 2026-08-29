'use client';

import React from 'react';
import { Video, Radio, ExternalLink } from 'lucide-react';
import { Locale } from '@/types';
import { AcademyLiveLinks } from '@/lib/academy/live-links-store';

interface LessonLiveSessionRowProps {
  liveLinks: AcademyLiveLinks;
  lang: Locale;
}

export default function LessonLiveSessionRow({
  liveLinks,
  lang,
}: LessonLiveSessionRowProps) {
  const isEs = lang === 'es';

  return (
    <div className="pt-2 space-y-3">
      <span className="font-mono text-xs text-[#8E8E93] block">
        // {isEs ? 'SESIÓN SEMANAL & GRABACIÓN EN VIVO' : 'WEEKLY LIVE SESSION & RECORDING'}
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {/* Live Session */}
        <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex flex-col justify-between space-y-3">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-[#FE385B] bg-[#FE385B]/10 px-2 py-0.5 rounded border border-[#FE385B]/20">
                {isEs ? 'Sesión en Vivo' : 'Live Session'}
              </span>
              <Video size={14} className="text-[#FE385B]" />
            </div>
            <h5 className="font-display font-bold text-xs text-[#111111] dark:text-white">
              {liveLinks.liveSessionDate || (isEs ? 'Cada Jueves · 7:00 PM (COT)' : 'Every Thursday · 7:00 PM')}
            </h5>
            <p className="text-[11px] text-[#8E8E93] font-sans">
              {isEs ? 'Masterclass y feedback grupal con el instructor.' : 'Cohort masterclass & live feedback.'}
            </p>
          </div>

          {liveLinks.liveSessionUrl ? (
            <a
              href={liveLinks.liveSessionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white text-xs font-mono font-bold transition-all shadow-sm"
            >
              <Video size={12} />
              <span>{isEs ? 'Unirme a la Sala Virtual' : 'Join Live Room'}</span>
              <ExternalLink size={11} />
            </a>
          ) : (
            <div className="w-full py-2 px-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] text-[11px] font-mono text-[#8E8E93] text-center border border-dashed border-black/[0.08] dark:border-white/[0.08]">
              {isEs ? 'Enlace pendiente por programar' : 'Link pending to be scheduled'}
            </div>
          )}
        </div>

        {/* Recording */}
        <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex flex-col justify-between space-y-3">
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-[#0284C7] dark:text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded border border-[#00F0FF]/20">
                {isEs ? 'Grabación' : 'Recording'}
              </span>
              <Radio size={14} className="text-[#0284C7] dark:text-[#00F0FF]" />
            </div>
            <h5 className="font-display font-bold text-xs text-[#111111] dark:text-white truncate">
              {liveLinks.recordingTitle || (isEs ? 'Grabación de la Sesión' : 'Session Recording')}
            </h5>
            <p className="text-[11px] text-[#8E8E93] font-sans">
              {isEs ? 'Repasa la sesión completa en YouTube.' : 'Watch full replay on YouTube.'}
            </p>
          </div>

          {liveLinks.recordingUrl ? (
            <a
              href={liveLinks.recordingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white dark:bg-black/[0.4] border border-black/[0.08] dark:border-white/[0.08] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] text-xs font-mono font-bold text-[#111111] dark:text-white transition-colors"
            >
              <Radio size={12} className="text-[#0284C7] dark:text-[#00F0FF]" />
              <span>{isEs ? 'Ver Grabación en YouTube' : 'Watch Replay'}</span>
              <ExternalLink size={11} className="text-[#8E8E93]" />
            </a>
          ) : (
            <div className="w-full py-2 px-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] text-[11px] font-mono text-[#8E8E93] text-center border border-dashed border-black/[0.08] dark:border-white/[0.08]">
              {isEs ? 'Grabación disponible tras el en vivo' : 'Replay available after live'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
