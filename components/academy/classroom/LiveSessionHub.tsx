'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Video,
  Radio,
  Calendar,
  Clock,
  ExternalLink,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Presentation,
  ShieldCheck,
} from 'lucide-react';
import { Locale } from '@/types';
import { Lesson, Module } from '@/data/academy/types';
import { getStoredLiveLinks } from '@/lib/academy/live-links-store';
import AuroraSpotlightCard from '@/components/ui/AuroraSpotlightCard';
import LiveReplayStage from './LiveReplayStage';

interface LiveSessionHubProps {
  lesson: Lesson;
  moduleItem: Module;
  courseSlug: string;
  lang: Locale;
  onOpenPresentation?: () => void;
}

export default function LiveSessionHub({
  lesson,
  moduleItem,
  courseSlug,
  lang,
}: LiveSessionHubProps) {
  const isEs = lang === 'es';
  const [meetUrl, setMeetUrl] = useState('https://meet.google.com/uxio-creator-lab-live');
  const [whatsappUrl, setWhatsappUrl] = useState('https://chat.whatsapp.com/CreatorLabCohorte01');
  const [recordingUrl, setRecordingUrl] = useState('');
  const [recordingTitle, setRecordingTitle] = useState('');

  useEffect(() => {
    const liveLinks = getStoredLiveLinks();
    if (liveLinks.liveSessionUrl) setMeetUrl(liveLinks.liveSessionUrl);
    if (liveLinks.whatsappGroupUrl) setWhatsappUrl(liveLinks.whatsappGroupUrl);
    if (liveLinks.recordingUrl) setRecordingUrl(liveLinks.recordingUrl);
    if (liveLinks.recordingTitle) setRecordingTitle(liveLinks.recordingTitle);
  }, []);

  const agreements = isEs
    ? [
        { t: 'Cámara Encendida', d: 'Conecta con tus compañeros y mentores para mayor inmersión.' },
        { t: 'Micrófono Silenciado', d: 'Se abre durante las rondas de preguntas y desmontaje en directo.' },
        { t: 'Cuaderno / Notion Listo', d: 'Anota los aprendizajes aplicables de los casos de tus compañeros.' },
      ]
    : [
        { t: 'Camera On', d: 'Engage actively with your mentors and cohort peers.' },
        { t: 'Microphone Muted', d: 'Unmute during live Q&A teardowns and questions.' },
        { t: 'Notes Ready', d: 'Write down takeaways from live student breakdowns.' },
      ];

  return (
    <div className="space-y-6">
      {/* 1. Main Live Stage Banner */}
      <AuroraSpotlightCard
        primaryColor="#FE385B"
        spotlightRadius={350}
        spotlightOpacity={0.1}
        className="rounded-3xl shadow-soft backdrop-blur-2xl bg-white/90 dark:bg-[#121214]/90 border border-black/[0.08] dark:border-white/[0.08] p-6 sm:p-8"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FE385B]/15 text-[#FE385B] border border-[#FE385B]/30 font-mono text-[10px] font-bold uppercase tracking-wider">
                <Radio size={12} className="animate-pulse text-[#FE385B]" />
                <span>{isEs ? 'SESIÓN EN VIVO · JUEVES 8:00 PM' : 'LIVE LAB · THURSDAY 8:00 PM'}</span>
              </span>
              <span className="font-mono text-xs text-[#8E8E93] font-bold">
                GMT-5 (Colombia / Bogotá)
              </span>
            </div>

            <div>
              <h2 className="font-display font-black text-xl sm:text-2xl text-[#111111] dark:text-white leading-tight">
                {lesson.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A1A1AA] font-sans mt-1.5 leading-relaxed">
                {lesson.objective}
              </p>
            </div>

            {/* Quick Timing Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-[#52525B] dark:text-[#A1A1AA]">
              <div className="flex items-center gap-1.5 bg-black/[0.03] dark:bg-white/[0.04] px-3 py-1.5 rounded-xl border border-black/[0.06] dark:border-white/[0.06]">
                <Calendar size={13} className="text-[#FE385B]" />
                <span>{isEs ? 'Todos los Jueves' : 'Every Thursday'}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/[0.03] dark:bg-white/[0.04] px-3 py-1.5 rounded-xl border border-black/[0.06] dark:border-white/[0.06]">
                <Clock size={13} className="text-[#10B981]" />
                <span>8:00 PM — 9:30 PM</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <a
              href={meetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-xs transition-all shadow-md shadow-[#FE385B]/25 active:scale-[0.98]"
            >
              <Video size={16} />
              <span>{isEs ? 'Unirse a la Sesión (Google Meet) ➔' : 'Join Live Session (Google Meet) ➔'}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/25 font-mono text-xs font-bold transition-all"
            >
              <MessageSquare size={14} />
              <span>{isEs ? 'Alertas en WhatsApp VIP' : 'WhatsApp VIP Alerts'}</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </AuroraSpotlightCard>

      {/* 2. Magnetic Replay Stage (With Xiaomi Quantum Processing copy) */}
      <LiveReplayStage
        recordingUrl={recordingUrl}
        recordingTitle={recordingTitle}
        lang={lang}
      />

      {/* 3. Protocol & Slide Deck Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Live Lab Agreements Card */}
        <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#10B981] uppercase">
            <ShieldCheck size={16} />
            <span>// {isEs ? 'ACUERDOS DE LA SESIÓN EN VIVO' : 'LIVE LAB PROTOCOL'}</span>
          </div>

          <div className="space-y-2.5 text-xs">
            {agreements.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]"
              >
                <CheckCircle2 size={15} className="text-[#10B981] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#111111] dark:text-white">{item.t}</span>
                  <p className="text-[11px] text-[#71717A] mt-0.5 font-sans">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Master Slide Deck Card */}
        <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft flex flex-col justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FE385B] uppercase">
              <Presentation size={16} />
              <span>// {isEs ? 'DIAPOSITIVAS DE LA SESIÓN' : 'SESSION SLIDES'}</span>
            </div>
            <h4 className="font-display font-bold text-sm text-[#111111] dark:text-white">
              {isEs ? 'Presentación Maestra del Kickoff' : 'Kickoff Master Slide Deck'}
            </h4>
            <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans leading-relaxed">
              {isEs
                ? 'Repasa los acuerdos comunitarios, calendario de entregas y el manifiesto.'
                : 'Review agreements, weekly schedule, and creator manifesto.'}
            </p>
          </div>

          {lesson.presentationSlug ? (
            <Link
              href={`/${lang}/academy/classroom/${courseSlug}/presentation/${lesson.presentationSlug}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white text-xs font-display font-bold transition-all shadow-md shadow-[#FE385B]/20 active:scale-95 hover:scale-[1.02]"
            >
              <Sparkles size={14} />
              <span>{isEs ? 'Ver Presentación ➔' : 'View Presentation ➔'}</span>
            </Link>
          ) : (
            <div className="py-2.5 px-4 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] text-xs font-mono text-[#8E8E93] text-center opacity-50">
              {isEs ? 'Sin Diapositivas' : 'No Slides'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
