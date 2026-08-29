'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Locale } from '@/types';

export default function ContactForm({ lang }: { lang: Locale }) {
  const isEs = lang === 'es';
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-center space-y-3 animate-fadeIn">
        <div className="w-12 h-12 rounded-full bg-[#00F0FF]/20 flex items-center justify-center mx-auto text-[#00F0FF]">
          <CheckCircle2 size={24} />
        </div>
        <h3 className="font-display font-bold text-lg text-[#111111] dark:text-white">
          {isEs ? '¡Mensaje Enviado con Éxito!' : 'Message Sent Successfully!'}
        </h3>
        <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans max-w-sm mx-auto">
          {isEs 
            ? 'Nuestro equipo revisará tu mensaje y se pondrá en contacto contigo en menos de 24 horas.'
            : 'Our team will review your message and follow up within 24 hours.'
          }
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-mono text-xs text-[#8E8E93] mb-1.5">{isEs ? 'NOMBRE' : 'NAME'}</label>
          <input
            type="text"
            required
            placeholder={isEs ? 'Tu nombre' : 'Your name'}
            className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B]"
          />
        </div>
        <div>
          <label className="block font-mono text-xs text-[#8E8E93] mb-1.5">{isEs ? 'EMAIL' : 'EMAIL'}</label>
          <input
            type="email"
            required
            placeholder="email@company.com"
            className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B]"
          />
        </div>
      </div>

      <div>
        <label className="block font-mono text-xs text-[#8E8E93] mb-1.5">{isEs ? 'TIPO DE PROYECTO' : 'PROJECT TYPE'}</label>
        <select
          className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B]"
        >
          <option>{isEs ? 'Desarrollo Web o App (Next.js / Móvil)' : 'Web or Mobile App Development'}</option>
          <option>{isEs ? 'Diseño y Experiencia UI/UX' : 'UI/UX Design & Experience'}</option>
          <option>{isEs ? 'Identidad de Marca & Branding' : 'Brand Identity & Branding'}</option>
          <option>{isEs ? 'Marketing y Crecimiento' : 'Marketing & Growth'}</option>
          <option>{isEs ? 'Solución Digital a Medida' : 'Custom Digital Solution'}</option>
        </select>
      </div>

      <div>
        <label className="block font-mono text-xs text-[#8E8E93] mb-1.5">{isEs ? 'DESCRIPCIÓN DEL PROYECTO' : 'PROJECT BRIEF'}</label>
        <textarea
          rows={4}
          required
          placeholder={isEs ? 'Cuéntanos sobre los objetivos, alcance y plazos de tu proyecto...' : 'Tell us about your goals, scope, and estimated timeline...'}
          className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B]"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-[#FE385B] hover:bg-[#e02d4e] text-white font-display font-semibold text-xs tracking-wider uppercase transition-all shadow-accent-glow hover:shadow-lg active:scale-98 flex items-center justify-center gap-2"
      >
        <span>{isEs ? 'Enviar Mensaje' : 'Send Message'}</span>
        <Send size={13} />
      </button>
    </form>
  );
}
