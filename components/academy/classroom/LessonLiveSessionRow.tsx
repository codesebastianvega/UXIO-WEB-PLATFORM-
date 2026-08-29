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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Live Session */}
        <div className="p-5 rounded-2xl bg-white/60 dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] hover:border-[#FE385B]/40 backdrop-blur-xl flex flex-col justify-between space-y-4 transition-all duration-150 hover:shadow-soft">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-[#FE385B] bg-[#FE385B]/10 px-2.5 py-0.5 rounded-lg border border-[#FE385B]/25 backdrop-blur-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FE385B] animate-pulse" />
                <span>{isEs ? 'Sesión en Vivo' : 'Live Session'}</span>
              </span>
              <Video size={15} className="text-[#FE385B]" />
            </div>
            <h5 className="font-display font-bold text-xs sm:text-sm text-[#111111] dark:text-white">
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
              className="group w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FE385B]/15 hover:bg-[#FE385B] text-[#FE385B] hover:text-white border border-[#FE385B]/35 hover:border-[#FE385B] text-xs font-mono font-bold transition-all duration-150 shadow-[0_4px_15px_rgba(254,56,91,0.15)] hover:shadow-[0_6px_20px_rgba(254,56,91,0.35)] backdrop-blur-xl active:scale-[0.97] hover:scale-[1.02]"
            >
              <Video size={13} className="transition-transform duration-150 group-hover:scale-110" />
              <span>{isEs ? 'Unirme a la Sala Virtual' : 'Join Live Room'}</span>
              <ExternalLink size={11} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-150" />
            </a>
          ) : (
            <div className="w-full py-2.5 px-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] text-xs font-mono text-[#8E8E93] text-center border border-dashed border-black/[0.08] dark:border-white/[0.08]">
              {isEs ? 'Enlace pendiente por programar' : 'Link pending to be scheduled'}
            </div>
          )}
        </div>

        {/* Recording */}
        <div className="p-5 rounded-2xl bg-white/60 dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] hover:border-[#0284C7]/40 dark:hover:border-[#00F0FF]/40 backdrop-blur-xl flex flex-col justify-between space-y-4 transition-all duration-150 hover:shadow-soft">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold text-[#0284C7] dark:text-[#00F0FF] bg-[#00F0FF]/10 px-2.5 py-0.5 rounded-lg border border-[#00F0FF]/25 backdrop-blur-sm">
                {isEs ? 'Grabación' : 'Recording'}
              </span>
              <Radio size={15} className="text-[#0284C7] dark:text-[#00F0FF]" />
            </div>
            <h5 className="font-display font-bold text-xs sm:text-sm text-[#111111] dark:text-white truncate">
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
              className="group w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#00F0FF]/15 hover:bg-[#0284C7] dark:hover:bg-[#00F0FF] text-[#0284C7] dark:text-[#00F0FF] hover:text-white dark:hover:text-black border border-[#00F0FF]/35 hover:border-[#00F0FF] text-xs font-mono font-bold transition-all duration-150 shadow-[0_4px_15px_rgba(0,240,255,0.15)] hover:shadow-[0_6px_20px_rgba(0,240,255,0.35)] backdrop-blur-xl active:scale-[0.97] hover:scale-[1.02]"
            >
              <Radio size={13} className="transition-transform duration-150 group-hover:rotate-12" />
              <span>{isEs ? 'Ver Grabación en YouTube' : 'Watch Replay'}</span>
              <ExternalLink size={11} className="opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-150" />
            </a>
          ) : (
            <div className="w-full py-2.5 px-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] text-xs font-mono text-[#8E8E93] text-center border border-dashed border-black/[0.08] dark:border-white/[0.08]">
              {isEs ? 'Grabación disponible tras el en vivo' : 'Replay available after live'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
