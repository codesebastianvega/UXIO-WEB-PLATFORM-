'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { Locale } from '@/types';
import { getStoredQAMessages, saveQAMessage, QAMessage } from '@/lib/academy/qa-store';

interface LessonDiscussionProps {
  courseSlug?: string;
  lessonId?: string;
  lessonTitle: string;
  lang: Locale;
}

export default function LessonDiscussion({
  courseSlug = 'creator-lab',
  lessonId = 'm00-01-bienvenida-metodologia',
  lessonTitle,
  lang,
}: LessonDiscussionProps) {
  const isEs = lang === 'es';
  const [commentText, setCommentText] = useState('');
  const [messages, setMessages] = useState<QAMessage[]>([]);

  useEffect(() => {
    const loadMessages = () => {
      const all = getStoredQAMessages();
      // Filter for this lesson or show lesson-related queries
      const lessonMsgs = all.filter(m => m.lessonId === lessonId || m.lessonTitle === lessonTitle);
      setMessages(lessonMsgs);
    };

    loadMessages();
    window.addEventListener('uxio-qa-updated', loadMessages);
    return () => window.removeEventListener('uxio-qa-updated', loadMessages);
  }, [lessonId, lessonTitle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = commentText.trim();
    if (!clean) return;

    saveQAMessage({
      courseSlug,
      lessonId,
      lessonTitle,
      lessonWeekTag: 'Semana 0',
      studentName: 'Sebas Vega (Tú)',
      studentEmail: 'sebaschanvega@gmail.com',
      studentAvatarText: 'S',
      questionText: clean,
    });

    setCommentText('');
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.06] pb-4">
        <div className="flex items-center gap-2.5">
          <MessageSquare size={18} className="text-[#FE385B]" />
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white">
              {isEs ? 'Preguntas & Dudas de la Clase' : 'Lesson Discussion & Q&A'}
            </h3>
            <p className="text-xs text-[#8E8E93] font-sans">
              {isEs
                ? 'Espacio para resolver preguntas sobre esta lección con el docente y compañeros.'
                : 'Ask questions and discuss this lesson with instructors and peers.'}
            </p>
          </div>
        </div>

        <span className="font-mono text-xs text-[#8E8E93]">
          {messages.length} {isEs ? 'pregunta(s)' : 'question(s)'}
        </span>
      </div>

      {/* Comment Input */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <textarea
            rows={3}
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            placeholder={
              isEs
                ? '¿Tienes alguna duda sobre esta cápsula? Escríbela aquí...'
                : 'Have any questions about this lesson? Ask here...'
            }
            className="w-full p-4 rounded-2xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B] transition-colors resize-none"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!commentText.trim()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 disabled:opacity-40 text-white font-display font-bold text-xs transition-all shadow-sm shadow-[#FE385B]/20 active:scale-[0.98]"
          >
            <Send size={13} />
            <span>{isEs ? 'Publicar Pregunta' : 'Post Question'}</span>
          </button>
        </div>
      </form>

      {/* Discussion List */}
      <div className="space-y-4 pt-2">
        {messages.length === 0 ? (
          <p className="text-xs text-[#8E8E93] font-sans text-center py-4">
            {isEs
              ? 'No hay preguntas aún en esta cápsula. ¡Sé el primero en preguntar!'
              : 'No questions yet in this lesson. Be the first to ask!'}
          </p>
        ) : (
          messages.map(m => (
            <div
              key={m.id}
              className="p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02] space-y-3"
            >
              {/* Question */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center font-mono text-[11px] font-bold text-white bg-[#8E8E93]">
                    {m.studentAvatarText}
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#111111] dark:text-white">{m.studentName}</span>
                    <span className="text-[10px] text-[#8E8E93] ml-2 font-mono">({m.studentEmail})</span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-[#8E8E93]">{m.askedAt}</span>
              </div>

              <p className="text-xs sm:text-sm text-[#333333] dark:text-[#CCCCCC] leading-relaxed pl-9">
                "{m.questionText}"
              </p>

              {/* Official Instructor Reply */}
              {m.replyText ? (
                <div className="ml-9 p-4 rounded-xl bg-[#FE385B]/[0.05] border border-[#FE385B]/20 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-[#FE385B] font-bold flex items-center gap-1">
                      <CheckCircle2 size={12} />
                      // {isEs ? 'RESPUESTA OFICIAL (UXIO DOCENCIA)' : 'OFFICIAL INSTRUCTOR REPLY'}
                    </span>
                    <span className="text-[#8E8E93]">{m.repliedAt || (isEs ? 'Reciente' : 'Recent')}</span>
                  </div>
                  <p className="text-xs text-[#111111] dark:text-white font-sans leading-relaxed">
                    {m.replyText}
                  </p>
                </div>
              ) : (
                <div className="ml-9 text-[11px] font-mono text-[#FF7F07] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7F07] animate-pulse" />
                  <span>{isEs ? 'Esperando respuesta del equipo docente...' : 'Waiting for instructor reply...'}</span>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
