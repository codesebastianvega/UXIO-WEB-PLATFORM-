'use client';

import React from 'react';
import { TelestratorTool } from '@/lib/academy/presentation-channel';
import { MousePointer, Sparkles, Highlighter, Circle, Trash2 } from 'lucide-react';

interface TelestratorToolbarProps {
  activeTool: TelestratorTool;
  onSelectTool: (tool: TelestratorTool) => void;
  onClear: () => void;
  hasStrokes?: boolean;
}

export default function TelestratorToolbar({
  activeTool,
  onSelectTool,
  onClear,
  hasStrokes = false,
}: TelestratorToolbarProps) {
  const tools: Array<{ id: TelestratorTool; label: string; icon: React.ReactNode; color: string; title: string }> = [
    {
      id: 'none',
      label: 'Cursor',
      icon: <MousePointer size={13} />,
      color: '#8E8E93',
      title: 'Puntero normal (Esc / V)',
    },
    {
      id: 'laser',
      label: 'Láser',
      icon: <Sparkles size={13} />,
      color: '#FE385B',
      title: 'Láser temporal con desvanecimiento (L)',
    },
    {
      id: 'highlighter',
      label: 'Resaltador',
      icon: <Highlighter size={13} />,
      color: '#FFCC48',
      title: 'Resaltador permanente (H)',
    },
    {
      id: 'circle',
      label: 'Círculo',
      icon: <Circle size={13} />,
      color: '#00F0FF',
      title: 'Encerrar elemento con círculo (O)',
    },
  ];

  return (
    <div className="flex items-center gap-1 bg-[#121216]/90 backdrop-blur-xl p-1 rounded-2xl border border-white/[0.12] shadow-2xl z-30 select-none">
      {tools.map(t => {
        const isActive = activeTool === t.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => onSelectTool(isActive && t.id !== 'none' ? 'none' : t.id)}
            title={t.title}
            aria-label={t.label}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl font-mono text-[11px] font-bold transition-all active:scale-95 ${
              isActive
                ? 'bg-white/15 shadow-sm text-white border border-white/20'
                : 'text-[#8E8E93] hover:text-white hover:bg-white/[0.06] border border-transparent'
            }`}
            style={{ color: isActive ? t.color : undefined }}
          >
            {t.icon}
            <span className="hidden sm:inline">{t.label}</span>
          </button>
        );
      })}

      {hasStrokes && (
        <button
          type="button"
          onClick={onClear}
          title="Borrar todas las anotaciones de esta slide (C)"
          aria-label="Borrar trazos"
          className="p-1.5 rounded-xl text-red-400 hover:text-white hover:bg-red-500/20 border border-transparent transition-all ml-0.5"
        >
          <Trash2 size={13} />
        </button>
      )}
    </div>
  );
}
