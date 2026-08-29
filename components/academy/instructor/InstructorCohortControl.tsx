'use client';

import React, { useState } from 'react';
import {
  Lock,
  Unlock,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Save,
  Layers,
  Sparkles,
} from 'lucide-react';
import { Locale } from '@/types';
import AuroraSpotlightCard from '@/components/ui/AuroraSpotlightCard';

interface WeekControlItem {
  id: string;
  weekNumber: number;
  tag: string;
  title: string;
  lessonsCount: number;
  isUnlocked: boolean;
  scheduledDate: string;
}

const INITIAL_WEEKS: WeekControlItem[] = [
  {
    id: 'w0',
    weekNumber: 0,
    tag: 'Semana 0',
    title: 'Inducción & Tu Kit de Creación',
    lessonsCount: 2,
    isUnlocked: true,
    scheduledDate: '24 Sep 2026',
  },
  {
    id: 'w1',
    weekNumber: 1,
    tag: 'Semana 1',
    title: 'Estrategia — De Negocio a Contenido',
    lessonsCount: 3,
    isUnlocked: true,
    scheduledDate: '1 Oct 2026',
  },
  {
    id: 'w2',
    weekNumber: 2,
    tag: 'Semana 2',
    title: 'Grabación Pro — Luz, Audio y Encuadre',
    lessonsCount: 3,
    isUnlocked: false,
    scheduledDate: '8 Oct 2026',
  },
  {
    id: 'w3',
    weekNumber: 3,
    tag: 'Semana 3',
    title: 'Creación Ágil — Guiones y Ganchos',
    lessonsCount: 3,
    isUnlocked: false,
    scheduledDate: '15 Oct 2026',
  },
  {
    id: 'w4',
    weekNumber: 4,
    tag: 'Semana 4',
    title: 'Edición Móvil & Herramientas de IA',
    lessonsCount: 3,
    isUnlocked: false,
    scheduledDate: '22 Oct 2026',
  },
  {
    id: 'w5',
    weekNumber: 5,
    tag: 'Semana 5',
    title: 'Contenido que Vende — Ofertas y Lanzamiento',
    lessonsCount: 3,
    isUnlocked: false,
    scheduledDate: '29 Oct 2026',
  },
];

interface InstructorCohortControlProps {
  lang: Locale;
}

export default function InstructorCohortControl({
  lang,
}: InstructorCohortControlProps) {
  const isEs = lang === 'es';
  const [weeks, setWeeks] = useState<WeekControlItem[]>(INITIAL_WEEKS);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const toggleWeekUnlock = (id: string) => {
    setWeeks(prev =>
      prev.map(w => (w.id === id ? { ...w, isUnlocked: !w.isUnlocked } : w))
    );
    setSavedSuccess(false);
  };

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Alert Header */}
      <AuroraSpotlightCard
        primaryColor="#FF7F07"
        spotlightRadius={260}
        spotlightOpacity={0.08}
        className="rounded-3xl shadow-soft"
      >
        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#FF7F07]/10 text-[#FF7F07] mt-0.5">
              <AlertCircle size={18} />
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white">
                {isEs ? 'Control de Desbloqueo Semanal (Ritmo de Cohorte)' : 'Weekly Pacing & Drip Content Control'}
              </h3>
              <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans mt-1 leading-relaxed">
                {isEs
                  ? 'Gestiona qué semanas están visibles y accesibles para los alumnos. Los estudiantes solo podrán ver el contenido de las semanas activas para garantizar que todos avancen al ritmo de las sesiones en vivo.'
                  : 'Manage which weeks are currently accessible to students. Students can only view content for active weeks to ensure everyone stays aligned with live feedback sessions.'}
              </p>
            </div>
          </div>
        </div>
      </AuroraSpotlightCard>

      {/* Weeks Control Cards */}
      <div className="space-y-3">
        {weeks.map(w => (
          <div
            key={w.id}
            className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              w.isUnlocked
                ? 'bg-white dark:bg-[#171719] border-black/[0.08] dark:border-white/[0.08] shadow-sm'
                : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/[0.04] dark:border-white/[0.04] opacity-75'
            }`}
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-[#FE385B] bg-[#FE385B]/10 px-2 py-0.5 rounded border border-[#FE385B]/20 font-bold">
                  {w.tag}
                </span>
                <span className="font-mono text-xs text-[#8E8E93] flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{w.scheduledDate}</span>
                </span>
              </div>
              <h4 className="font-display font-bold text-sm sm:text-base text-[#111111] dark:text-white">
                {w.title}
              </h4>
              <p className="text-xs text-[#8E8E93] font-mono">
                {w.lessonsCount} {isEs ? 'lecciones / cápsulas' : 'lessons / capsules'}
              </p>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center gap-3 self-end sm:self-center">
              <span
                className={`font-mono text-xs font-bold ${
                  w.isUnlocked ? 'text-[#10B981]' : 'text-[#8E8E93]'
                }`}
              >
                {w.isUnlocked ? (isEs ? 'Habilitada' : 'Active') : (isEs ? 'Bloqueada' : 'Locked')}
              </span>

              <button
                type="button"
                onClick={() => toggleWeekUnlock(w.id)}
                className={`p-2.5 rounded-xl border flex items-center gap-2 transition-all ${
                  w.isUnlocked
                    ? 'bg-[#10B981] hover:bg-[#10B981]/90 text-white border-transparent shadow-sm'
                    : 'bg-black/[0.05] dark:bg-white/[0.06] text-[#8E8E93] border-black/[0.08] dark:border-white/[0.08] hover:text-[#111111] dark:hover:text-white'
                }`}
              >
                {w.isUnlocked ? <Unlock size={14} /> : <Lock size={14} />}
                <span className="font-mono text-xs font-bold">
                  {w.isUnlocked ? (isEs ? 'Bloquear' : 'Lock') : (isEs ? 'Habilitar' : 'Unlock')}
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Save Action */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft">
        <span className="font-mono text-xs text-[#8E8E93]">
          {savedSuccess
            ? (isEs ? '✓ Cambios de disponibilidad guardados' : '✓ Availability changes saved')
            : (isEs ? 'Cambios pendientes por sincronizar' : 'Pending changes')}
        </span>

        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-xs transition-all shadow-sm"
        >
          <Save size={14} />
          <span>{isEs ? 'Guardar Disponibilidad' : 'Save Availability'}</span>
        </button>
      </div>
    </div>
  );
}
