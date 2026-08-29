'use client';

import React, { useState } from 'react';
import { MessageSquare, Send, User, Sparkles } from 'lucide-react';
import { Locale } from '@/types';

interface CommentItem {
  id: string;
  author: string;
  avatarText: string;
  role: 'student' | 'instructor';
  date: string;
  text: string;
}

interface LessonDiscussionProps {
  lessonTitle: string;
  lang: Locale;
}

export default function LessonDiscussion({ lessonTitle, lang }: LessonDiscussionProps) {
  const isEs = lang === 'es';
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: 'c1',
      author: 'UXIO Docencia',
      avatarText: 'U',
      role: 'instructor',
      date: isEs ? 'Hace 2 horas' : '2 hours ago',
      text: isEs
        ? '¡Bienvenidos a esta cápsula! Si tienes cualquier duda sobre la práctica o la configuración de tu celular, déjanos tu pregunta aquí.'
        : 'Welcome to this lesson! If you have any questions regarding gear setup or the exercise, drop your comment here.',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: CommentItem = {
      id: `c-${Date.now()}`,
      author: isEs ? 'Tú (Estudiante)' : 'You (Student)',
      avatarText: 'T',
      role: 'student',
      date: isEs ? 'Justo ahora' : 'Just now',
      text: commentText.trim(),
    };

    setComments(prev => [newComment, ...prev]);
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
          {comments.length} {isEs ? 'mensaje(s)' : 'comment(s)'}
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
      <div className="space-y-3 pt-2">
        {comments.map(c => (
          <div
            key={c.id}
            className={`p-4 rounded-2xl border text-xs font-sans space-y-2 ${
              c.role === 'instructor'
                ? 'bg-[#FE385B]/[0.03] border-[#FE385B]/20'
                : 'bg-black/[0.02] dark:bg-white/[0.02] border-black/[0.04] dark:border-white/[0.04]'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center font-mono text-[10px] font-bold text-white ${
                    c.role === 'instructor' ? 'bg-[#FE385B]' : 'bg-[#8E8E93]'
                  }`}
                >
                  {c.avatarText}
                </div>
                <span className="font-bold text-[#111111] dark:text-white">{c.author}</span>
                {c.role === 'instructor' && (
                  <span className="font-mono text-[9px] text-[#FE385B] bg-[#FE385B]/10 px-1.5 py-0.2 rounded border border-[#FE385B]/20 font-semibold">
                    INSTRUCTOR
                  </span>
                )}
              </div>
              <span className="font-mono text-[10px] text-[#8E8E93]">{c.date}</span>
            </div>

            <p className="text-[#444444] dark:text-[#CCCCCC] leading-relaxed pl-8">
              {c.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
