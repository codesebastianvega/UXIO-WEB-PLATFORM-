'use client';

import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  Send,
  CheckCircle2,
  Clock,
  Search,
  Sparkles,
} from 'lucide-react';
import { Locale } from '@/types';
import { getStoredQAMessages, replyQAMessage, QAMessage } from '@/lib/academy/qa-store';

interface InstructorQAFeedProps {
  lang: Locale;
}

export default function InstructorQAFeed({ lang }: InstructorQAFeedProps) {
  const isEs = lang === 'es';
  const [messages, setMessages] = useState<QAMessage[]>([]);
  const [filter, setFilter] = useState<'all' | 'pending' | 'answered'>('all');
  const [replyInput, setReplyInput] = useState<Record<string, string>>({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const load = () => setMessages(getStoredQAMessages());
    load();
    window.addEventListener('uxio-qa-updated', load);
    return () => window.removeEventListener('uxio-qa-updated', load);
  }, []);

  const filteredMessages = messages.filter(m => {
    if (filter === 'pending' && m.replyText) return false;
    if (filter === 'answered' && !m.replyText) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        m.studentName.toLowerCase().includes(q) ||
        m.questionText.toLowerCase().includes(q) ||
        m.lessonTitle.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleSendReply = (msgId: string) => {
    const text = replyInput[msgId]?.trim();
    if (!text) return;

    replyQAMessage(msgId, text);
    setReplyInput(prev => ({ ...prev, [msgId]: '' }));
  };

  const pendingCount = messages.filter(m => !m.replyText).length;
  const answeredCount = messages.filter(m => Boolean(m.replyText)).length;

  return (
    <div className="space-y-6">
      {/* Top Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-colors ${
              filter === 'all'
                ? 'bg-[#FE385B] text-white font-bold'
                : 'bg-black/[0.03] dark:bg-white/[0.04] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
            }`}
          >
            {isEs ? 'Todas' : 'All'} ({messages.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('pending')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-colors ${
              filter === 'pending'
                ? 'bg-[#FF7F07] text-white font-bold'
                : 'bg-black/[0.03] dark:bg-white/[0.04] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
            }`}
          >
            {isEs ? 'Sin Responder' : 'Pending'} ({pendingCount})
          </button>
          <button
            type="button"
            onClick={() => setFilter('answered')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-colors ${
              filter === 'answered'
                ? 'bg-[#10B981] text-white font-bold'
                : 'bg-black/[0.03] dark:bg-white/[0.04] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
            }`}
          >
            {isEs ? 'Respondidas' : 'Answered'} ({answeredCount})
          </button>
        </div>

        {/* Search */}
        <div className="relative min-w-[240px]">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={isEs ? 'Buscar por alumno o lección...' : 'Search student or lesson...'}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B]"
          />
          <Search size={14} className="absolute left-3 top-2.5 text-[#8E8E93]" />
        </div>
      </div>

      {/* Questions Feed */}
      <div className="space-y-4">
        {filteredMessages.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] space-y-2">
            <CheckCircle2 size={32} className="text-[#10B981] mx-auto" />
            <h4 className="font-display font-bold text-base text-[#111111] dark:text-white">
              {isEs ? '¡No hay preguntas en esta categoría!' : 'No questions in this category!'}
            </h4>
            <p className="text-xs text-[#8E8E93] font-sans">
              {isEs
                ? 'Todas las dudas de los estudiantes han sido atendidas.'
                : 'All student inquiries have been resolved.'}
            </p>
          </div>
        ) : (
          filteredMessages.map(m => (
            <div
              key={m.id}
              className="p-6 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-4"
            >
              {/* Question Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold text-[#FE385B] bg-[#FE385B]/10 px-2 py-0.5 rounded border border-[#FE385B]/20">
                      {m.lessonWeekTag || 'Semana 0'}
                    </span>
                    <h5 className="font-display font-bold text-sm text-[#111111] dark:text-white">
                      {m.studentName}
                    </h5>
                    <span className="text-xs text-[#8E8E93] font-mono">({m.studentEmail})</span>
                  </div>
                  <p className="text-xs text-[#8E8E93] font-mono">
                    {m.lessonTitle} · {m.askedAt}
                  </p>
                </div>

                <div>
                  {m.replyText ? (
                    <span className="font-mono text-[10px] font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-lg border border-[#10B981]/30 inline-flex items-center gap-1">
                      <CheckCircle2 size={12} />
                      <span>{isEs ? 'Respondida' : 'Answered'}</span>
                    </span>
                  ) : (
                    <span className="font-mono text-[10px] font-bold text-[#FF7F07] bg-[#FF7F07]/10 px-2.5 py-1 rounded-lg border border-[#FF7F07]/30 inline-flex items-center gap-1">
                      <Clock size={12} />
                      <span>{isEs ? 'Pendiente' : 'Pending'}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Student Question Text */}
              <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]">
                <p className="text-xs sm:text-sm text-[#222222] dark:text-[#CCCCCC] font-sans leading-relaxed">
                  "{m.questionText}"
                </p>
              </div>

              {/* Instructor Response / Input Form */}
              {m.replyText ? (
                <div className="p-4 rounded-2xl bg-[#FE385B]/[0.04] border border-[#FE385B]/20 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#FE385B] font-bold">
                      // {isEs ? 'RESPUESTA OFICIAL (UXIO DOCENCIA)' : 'OFFICIAL INSTRUCTOR RESPONSE'}
                    </span>
                    <span className="text-[#8E8E93]">{m.repliedAt || (isEs ? 'Hace 1 hora' : '1 hour ago')}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#111111] dark:text-white font-sans leading-relaxed">
                    {m.replyText}
                  </p>
                </div>
              ) : (
                <div className="space-y-3 pt-2">
                  <textarea
                    rows={2}
                    value={replyInput[m.id] || ''}
                    onChange={e =>
                      setReplyInput(prev => ({ ...prev, [m.id]: e.target.value }))
                    }
                    placeholder={
                      isEs
                        ? 'Escribe tu respuesta como UXIO Docencia...'
                        : 'Type official response as instructor...'
                    }
                    className="w-full p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B] transition-colors resize-none"
                  />
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleSendReply(m.id)}
                      disabled={!replyInput[m.id]?.trim()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 disabled:opacity-40 text-white font-mono font-bold text-xs transition-all shadow-sm active:scale-[0.98]"
                    >
                      <Send size={12} />
                      <span>{isEs ? 'Enviar Respuesta Oficial' : 'Send Official Response'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
