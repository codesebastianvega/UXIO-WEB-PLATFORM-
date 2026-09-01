'use client';

import React, { useState, useRef } from 'react';
import {
  Film,
  Sparkles,
  Play,
  Cpu,
  Clock,
  Radio,
  ExternalLink,
} from 'lucide-react';
import { Locale } from '@/types';
import VideoPlayer from './VideoPlayer';

interface LiveReplayStageProps {
  recordingUrl?: string;
  recordingTitle?: string;
  lang: Locale;
}

export default function LiveReplayStage({
  recordingUrl,
  recordingTitle,
  lang,
}: LiveReplayStageProps) {
  const isEs = lang === 'es';
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  // If a valid live recording is uploaded (not empty and not placeholder)
  const hasRealRecording =
    Boolean(recordingUrl) &&
    recordingUrl !== 'https://youtube.com/watch?v=live-recording-demo' &&
    recordingUrl !== '#';

  if (hasRealRecording && recordingUrl) {
    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-0.5 rounded border border-[#10B981]/25 uppercase flex items-center gap-1.5">
              <Film size={12} />
              <span>{isEs ? 'Grabación Disponible' : 'Replay Available'}</span>
            </span>
            <span className="text-xs font-display font-bold text-[#111111] dark:text-white">
              {recordingTitle || (isEs ? 'Grabación de la Sesión en Vivo' : 'Live Session Recording')}
            </span>
          </div>
        </div>

        <VideoPlayer
          provider="youtube"
          videoUrl={recordingUrl}
          title={recordingTitle || lessonTitleFallback(isEs)}
          duration="90 min"
        />
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-6 sm:p-8 rounded-3xl overflow-hidden border border-black/[0.08] dark:border-white/[0.08] bg-[#0C0C0E] text-white shadow-2xl transition-all duration-300 group"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(254, 56, 91, ${
          isHovered ? '0.18' : '0.08'
        }), rgba(0, 240, 255, ${isHovered ? '0.12' : '0.04'}), transparent 70%)`,
      }}
    >
      {/* Decorative Cybernetic Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FE385B]/15 text-[#FE385B] border border-[#FE385B]/30 font-mono text-[10px] font-bold uppercase tracking-wider">
              <Film size={12} className="text-[#FE385B]" />
              <span>{isEs ? '// GRABACIÓN EN DIFERIDO' : '// RECORDED REPLAY'}</span>
            </span>
            <span className="font-mono text-[10px] text-[#8E8E93] bg-white/[0.05] px-2.5 py-0.5 rounded border border-white/[0.08] font-bold">
              {isEs ? 'PRÓXIMAMENTE' : 'COMING SOON'}
            </span>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight">
              {isEs
                ? 'La grabación estará disponible aquí'
                : 'The replay will be available here'}
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1AA] font-sans mt-1.5 leading-relaxed">
              {isEs
                ? 'La sesión en vivo se publica unas horas después de finalizar la clase. Si no pudiste conectarte a las 8:00 PM, podrás ver la repetición completa en este espacio.'
                : 'The live recording is uploaded a few hours after the session ends. If you missed the live lab at 8:00 PM, you can watch the full replay right here.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] font-mono text-[#71717A]">
            <div className="flex items-center gap-1.5 bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/[0.06]">
              <Clock size={12} className="text-[#FF7F07]" />
              <span>{isEs ? 'Disponible tras finalizar el directo' : 'Available after live session'}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/[0.06]">
              <Sparkles size={12} className="text-[#10B981]" />
              <span>{isEs ? 'Repetición completa' : 'Full recording'}</span>
            </div>
          </div>
        </div>

        {/* Magnetic Visual Reel Icon */}
        <div className="flex items-center justify-center shrink-0">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 group-hover:border-[#FE385B]/40 transition-all duration-300 shadow-inner">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FE385B]/10 to-[#00F0FF]/10 opacity-50 blur-sm" />
            <Film size={36} className="text-[#FE385B] relative z-10 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

function lessonTitleFallback(isEs: boolean) {
  return isEs ? 'Sesión en Vivo: Kickoff Oficial' : 'Live Kickoff Session';
}
