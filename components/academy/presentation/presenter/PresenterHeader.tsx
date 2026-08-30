'use client';

import React from 'react';
import { Mic, Radio, Clock, Pause, Play, RotateCcw, Sun, Moon, X } from 'lucide-react';

interface PresenterHeaderProps {
  title: string;
  timerSeconds: number;
  isTimerRunning: boolean;
  isOverTime: boolean;
  fontSize: 'sm' | 'base' | 'lg';
  theme: 'light' | 'dark';
  formatTime: (secs: number) => string;
  onToggleTimer: () => void;
  onResetTimer: () => void;
  onSetFontSize: (size: 'sm' | 'base' | 'lg') => void;
  onToggleTheme: () => void;
  onClose: () => void;
}

export default function PresenterHeader({
  title,
  timerSeconds,
  isTimerRunning,
  isOverTime,
  fontSize,
  theme,
  formatTime,
  onToggleTimer,
  onResetTimer,
  onSetFontSize,
  onToggleTheme,
  onClose,
}: PresenterHeaderProps) {
  return (
    <header className="px-5 py-3 border-b border-white/[0.08] bg-[#0D0D11] flex items-center justify-between z-20 shrink-0">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-[#FE385B]/15 text-[#FE385B] flex items-center justify-center border border-[#FE385B]/30">
          <Mic size={16} className="animate-pulse" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] font-bold text-[#FE385B] uppercase tracking-wider">
              // CONSOLA DEL DOCENTE · TELEPROMPTER
            </span>
            <span className="inline-flex items-center gap-1 font-mono text-[10px] text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded-full border border-[#10B981]/30">
              <Radio size={10} className="animate-pulse" />
              Sincronizado con OBS / Pantalla Principal
            </span>
          </div>
          <h1 className="text-xs sm:text-sm font-bold text-[#E4E4E7] truncate max-w-sm sm:max-w-md">
            {title}
          </h1>
        </div>
      </div>

      {/* Stopwatch, Font Controls & Theme */}
      <div className="flex items-center gap-3">
        {/* Live Recording Stopwatch */}
        <div className="flex items-center gap-2 bg-white/[0.04] px-3 py-1 rounded-xl border border-white/[0.08]">
          <Clock size={13} className={isOverTime ? 'text-[#FE385B] animate-bounce' : 'text-[#10B981]'} />
          <span className={`font-mono text-xs sm:text-sm font-bold ${isOverTime ? 'text-[#FE385B]' : 'text-white'}`}>
            {formatTime(timerSeconds)} <span className="text-[10px] text-[#8E8E93]">/ 05:00</span>
          </span>
          <button
            type="button"
            onClick={onToggleTimer}
            aria-label="Pausar o reanudar cronómetro"
            className="p-1 text-[#8E8E93] hover:text-white"
          >
            {isTimerRunning ? <Pause size={11} /> : <Play size={11} />}
          </button>
          <button
            type="button"
            onClick={onResetTimer}
            aria-label="Reiniciar cronómetro"
            className="p-1 text-[#8E8E93] hover:text-white"
          >
            <RotateCcw size={11} />
          </button>
        </div>

        {/* Font Size Adjuster */}
        <div className="flex items-center bg-white/[0.04] rounded-xl p-0.5 border border-white/[0.08]">
          <button
            type="button"
            onClick={() => onSetFontSize('sm')}
            className={`px-2 py-0.5 text-xs font-mono rounded-lg ${fontSize === 'sm' ? 'bg-[#FE385B] text-white font-bold' : 'text-[#8E8E93]'}`}
          >
            A-
          </button>
          <button
            type="button"
            onClick={() => onSetFontSize('base')}
            className={`px-2 py-0.5 text-xs font-mono rounded-lg ${fontSize === 'base' ? 'bg-[#FE385B] text-white font-bold' : 'text-[#8E8E93]'}`}
          >
            A
          </button>
          <button
            type="button"
            onClick={() => onSetFontSize('lg')}
            className={`px-2 py-0.5 text-xs font-mono rounded-lg ${fontSize === 'lg' ? 'bg-[#FE385B] text-white font-bold' : 'text-[#8E8E93]'}`}
          >
            A+
          </button>
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          aria-label="Cambiar tema"
          className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-[#FFCC48] border border-white/[0.08]"
        >
          {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
        </button>

        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar ventana de presentador"
          title="Cerrar ventana"
          className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20"
        >
          <X size={14} />
        </button>
      </div>
    </header>
  );
}
