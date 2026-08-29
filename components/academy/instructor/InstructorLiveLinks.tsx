'use client';

import React, { useState } from 'react';
import {
  Video,
  Radio,
  MessageCircle,
  Link2,
  Save,
  CheckCircle2,
  ExternalLink,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { Locale } from '@/types';
import AuroraSpotlightCard from '@/components/ui/AuroraSpotlightCard';

interface LiveLinksState {
  liveSessionUrl: string;
  liveSessionDate: string;
  recordingUrl: string;
  recordingTitle: string;
  whatsappGroupUrl: string;
  whatsappGroupName: string;
}

const DEFAULT_LINKS: LiveLinksState = {
  liveSessionUrl: 'https://meet.google.com/uxio-creator-lab-live',
  liveSessionDate: 'Cada Jueves · 7:00 PM (Hora Colombia)',
  recordingUrl: 'https://youtube.com/watch?v=live-recording-demo',
  recordingTitle: 'Grabación Sesión 0: Feedback de Inducción y Setup',
  whatsappGroupUrl: 'https://chat.whatsapp.com/CreatorLabCohorte01',
  whatsappGroupName: 'UXIO Creator Lab · Cohorte 01',
};

interface InstructorLiveLinksProps {
  lang: Locale;
}

export default function InstructorLiveLinks({
  lang,
}: InstructorLiveLinksProps) {
  const isEs = lang === 'es';
  const [links, setLinks] = useState<LiveLinksState>(DEFAULT_LINKS);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <form onSubmit={handleSave} className="space-y-6">
      {/* Header Spotlight */}
      <AuroraSpotlightCard
        primaryColor="#00F0FF"
        spotlightRadius={280}
        spotlightOpacity={0.08}
        className="rounded-3xl shadow-soft"
      >
        <div className="p-6 sm:p-8 space-y-2">
          <div className="flex items-center gap-2">
            <Radio size={18} className="text-[#0284C7] dark:text-[#00F0FF]" />
            <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white">
              {isEs ? 'Gestor de Clases en Vivo & Enlaces de Comunidad' : 'Live Classes & Community Links Manager'}
            </h3>
          </div>
          <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans leading-relaxed">
            {isEs
              ? 'Configura el enlace de la videollamada para la sesión semanal de feedback, el link de la grabación en YouTube y el enlace del grupo de WhatsApp.'
              : 'Set the video call link for the weekly feedback session, the YouTube recording link, and the official WhatsApp group.'}
          </p>
        </div>
      </AuroraSpotlightCard>

      {/* Grid of Settings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. Live Call Config */}
        <div className="p-6 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-4">
          <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
            <div className="flex items-center gap-2">
              <Video size={16} className="text-[#FE385B]" />
              <h4 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                {isEs ? 'Sesión en Vivo Semanal (Zoom / Meet)' : 'Weekly Live Session (Zoom / Meet)'}
              </h4>
            </div>
            <span className="font-mono text-[10px] text-[#FE385B] bg-[#FE385B]/10 px-2 py-0.5 rounded border border-[#FE385B]/20">
              60 min
            </span>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#8E8E93] block">
                // {isEs ? 'ENLACE DE LA SALA VIRTUAL' : 'MEETING ROOM URL'}
              </label>
              <input
                type="url"
                value={links.liveSessionUrl}
                onChange={e => setLinks({ ...links, liveSessionUrl: e.target.value })}
                placeholder="https://zoom.us/j/... o https://meet.google.com/..."
                className="w-full p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#8E8E93] block">
                // {isEs ? 'HORARIO DE LA SESIÓN' : 'SESSION SCHEDULE'}
              </label>
              <input
                type="text"
                value={links.liveSessionDate}
                onChange={e => setLinks({ ...links, liveSessionDate: e.target.value })}
                placeholder="Ej. Cada Jueves · 7:00 PM (Hora Colombia)"
                className="w-full p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B]"
              />
            </div>
          </div>
        </div>

        {/* 2. Recording YouTube Config */}
        <div className="p-6 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-4">
          <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
            <div className="flex items-center gap-2">
              <Radio size={16} className="text-[#0284C7] dark:text-[#00F0FF]" />
              <h4 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                {isEs ? 'Grabación de la Última Sesión (YouTube)' : 'Last Session Recording (YouTube)'}
              </h4>
            </div>
            <span className="font-mono text-[10px] text-[#0284C7] dark:text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded border border-[#00F0FF]/20">
              {isEs ? 'En Diferido' : 'On Demand'}
            </span>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#8E8E93] block">
                // {isEs ? 'ENLACE DEL VIDEO EN YOUTUBE' : 'YOUTUBE VIDEO URL'}
              </label>
              <input
                type="url"
                value={links.recordingUrl}
                onChange={e => setLinks({ ...links, recordingUrl: e.target.value })}
                placeholder="https://youtube.com/watch?v=..."
                className="w-full p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#8E8E93] block">
                // {isEs ? 'TÍTULO DE LA GRABACIÓN' : 'RECORDING TITLE'}
              </label>
              <input
                type="text"
                value={links.recordingTitle}
                onChange={e => setLinks({ ...links, recordingTitle: e.target.value })}
                placeholder="Ej. Grabación Sesión 1: Feedback Estrategia..."
                className="w-full p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B]"
              />
            </div>
          </div>
        </div>

        {/* 3. WhatsApp Group Config */}
        <div className="p-6 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-4 md:col-span-2">
          <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
            <div className="flex items-center gap-2">
              <MessageCircle size={16} className="text-[#10B981]" />
              <h4 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                {isEs ? 'Canal de Entrega & Comunidad Oficial (WhatsApp)' : 'Community & Challenge Channel (WhatsApp)'}
              </h4>
            </div>
            <span className="font-mono text-[10px] text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">
              WhatsApp
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#8E8E93] block">
                // {isEs ? 'ENLACE DE INVITACIÓN AL GRUPO' : 'WHATSAPP INVITE LINK'}
              </label>
              <input
                type="url"
                value={links.whatsappGroupUrl}
                onChange={e => setLinks({ ...links, whatsappGroupUrl: e.target.value })}
                placeholder="https://chat.whatsapp.com/..."
                className="w-full p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#8E8E93] block">
                // {isEs ? 'NOMBRE DE LA COHORTE / GRUPO' : 'COHORT / GROUP NAME'}
              </label>
              <input
                type="text"
                value={links.whatsappGroupName}
                onChange={e => setLinks({ ...links, whatsappGroupName: e.target.value })}
                placeholder="Ej. UXIO Creator Lab · Cohorte 01"
                className="w-full p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft">
        <span className="font-mono text-xs text-[#8E8E93]">
          {saved
            ? (isEs ? '✓ Enlaces actualizados en la plataforma' : '✓ Links updated across platform')
            : (isEs ? 'Los alumnos verán estos enlaces automáticamente' : 'Students will see these links automatically')}
        </span>

        <button
          type="submit"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-xs transition-all shadow-sm"
        >
          <Save size={14} />
          <span>{isEs ? 'Guardar Enlaces Oficiales' : 'Save Official Links'}</span>
        </button>
      </div>
    </form>
  );
}
