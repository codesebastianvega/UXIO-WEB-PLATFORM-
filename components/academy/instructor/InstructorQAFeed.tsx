'use client';

import React, { useState } from 'react';
import {
  MessageSquare,
  Send,
  CheckCircle2,
  Clock,
  Search,
  Sparkles,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { Locale } from '@/types';

interface QAMessage {
  id: string;
  studentName: string;
  studentEmail: string;
  lessonTitle: string;
  lessonWeekTag: string;
  questionText: string;
  askedAt: string;
  replyText?: string | null;
  repliedAt?: string | null;
}

const INITIAL_QA_ITEMS: QAMessage[] = [
  {
    id: 'qa-1',
    studentName: 'Carlos Mendoza',
    studentEmail: 'carlos@empresa.com',
    lessonTitle: 'Clase 0 — Bienvenida a UXIO Creator Lab',
    lessonWeekTag: 'Semana 0',
    questionText: '¿Es indispensable tener un trípode especial para la clase de grabación o puedo apoyar el celular en libros?',
    askedAt: 'Hace 3 horas',
    replyText: '¡Hola Carlos! Para las primeras 2 semanas puedes apoyarlo en libros a la altura de tus ojos. En la semana 2 te enseñaremos qué trípode económico recomendamos.',
    repliedAt: 'Hace 1 hora',
  },
  {
    id: 'qa-2',
    studentName: 'Mariana Gómez',
    studentEmail: 'mariana.g@gmail.com',
    lessonTitle: 'Clase 0.1 — Tu kit de creación accesible',
    lessonWeekTag: 'Semana 0',
    questionText: '¿Recomiendan grabar con la app nativa de la cámara del iPhone o con una app externa como Blackmagic Cam?',
    askedAt: 'Hace 45 minutos',
    replyText: null,
  },
];

interface InstructorQAFeedProps {
  lang: Locale;
}

export default function InstructorQAFeed({ lang }: InstructorQAFeedProps) {
  const isEs = lang === 'es';
  const [messages, setMessages] = useState<QAMessage[]>(INITIAL_QA_ITEMS);
  const [filter, setFilter] = useState<'all' | 'pending' | 'answered'>('all');
  const [replyInput, setReplyInput] = useState<Record<string, string>>({});
  const [searchQuery, setSearchQuery] = useState('');

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

    setMessages(prev =>
      prev.map(m =>
        m.id === msgId
          ? {
              ...m,
              replyText: text,
              repliedAt: isEs ? 'Justo ahora' : 'Just now',
            }
          : m
      )
    );

    setReplyInput(prev => ({ ...prev, [msgId]: '' }));
  };

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
            {isEs ? 'Sin Responder' : 'Pending'} (
            {messages.filter(m => !m.replyText).length})
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
            {isEs ? 'Respondidas' : 'Answered'} (
            {messages.filter(m => Boolean(m.replyText)).length})
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={isEs ? 'Buscar por alumno o lección...' : 'Search student or lesson...'}
            className="w-full sm:w-64 pl-8 pr-3 py-1.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B]"
          />
          <Search size={13} className="absolute left-2.5 top-2 text-[#8E8E93]" />
        </div>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {filteredMessages.map(msg => {
          const isAnswered = Boolean(msg.replyText);

          return (
            <div
              key={msg.id}
              className="p-6 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-4"
            >
              {/* Question Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-[#FE385B] bg-[#FE385B]/10 px-2 py-0.5 rounded border border-[#FE385B]/20 font-bold">
                      {msg.lessonWeekTag}
                    </span>
                    <span className="font-display font-bold text-xs text-[#111111] dark:text-white">
                      {msg.studentName}
                    </span>
                    <span className="font-mono text-[11px] text-[#8E8E93]">
                      ({msg.studentEmail})
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-[#8E8E93]">
                    {msg.lessonTitle} · {msg.askedAt}
                  </p>
                </div>

                <span
                  className={`inline-flex items-center gap-1 font-mono text-[10px] font-bold px-2.5 py-1 rounded-full border self-start sm:self-auto ${
                    isAnswered
                      ? 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30'
                      : 'bg-[#FF7F07]/15 text-[#FF7F07] border-[#FF7F07]/30'
                  }`}
                >
                  {isAnswered ? <CheckCircle2 size={11} /> : <Clock size={11} />}
                  <span>{isAnswered ? (isEs ? 'Respondida' : 'Answered') : (isEs ? 'Pendiente' : 'Pending')}</span>
                </span>
              </div>

              {/* Student Question Text */}
              <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] text-xs sm:text-sm text-[#111111] dark:text-white font-sans leading-relaxed">
                "{msg.questionText}"
              </div>

              {/* Existing Reply or Reply Input Form */}
              {isAnswered ? (
                <div className="p-4 rounded-2xl bg-[#FE385B]/[0.04] border border-[#FE385B]/20 space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#FE385B] font-bold uppercase">
                      // {isEs ? 'RESPUESTA OFICIAL (UXIO DOCENCIA)' : 'OFFICIAL INSTRUCTOR REPLY'}
                    </span>
                    <span className="text-[#8E8E93]">{msg.repliedAt}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#222222] dark:text-[#E5E5E7] font-sans leading-relaxed">
                    {msg.replyText}
                  </p>
                </div>
              ) : (
                <div className="space-y-3 pt-1">
                  <textarea
                    rows={2}
                    value={replyInput[msg.id] || ''}
                    onChange={e =>
                      setReplyInput({ ...replyInput, [msg.id]: e.target.value })
                    }
                    placeholder={
                      isEs
                        ? 'Escribe tu respuesta como UXIO Docencia...'
                        : 'Write official instructor reply...'
                    }
                    className="w-full p-3.5 rounded-2xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B] transition-colors resize-none"
                  />
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleSendReply(msg.id)}
                      disabled={!replyInput[msg.id]?.trim()}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 disabled:opacity-40 text-white font-display font-bold text-xs transition-all shadow-sm"
                    >
                      <Send size={13} />
                      <span>{isEs ? 'Enviar Respuesta Oficial' : 'Send Official Reply'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
