'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, ShieldCheck, CreditCard, Smartphone } from 'lucide-react';
import { CourseProgram } from '@/data/academy/types';
import { getCohortStatusInfo } from '@/data/academy';
import { Locale } from '@/types';

interface Props {
  course: CourseProgram;
  lang: Locale;
}

export default function AcademyEnrollmentForm({ course, lang }: Props) {
  const isEs = lang === 'es';
  const statusInfo = getCohortStatusInfo(course.cohortCapacity, lang);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    industry: isEs ? 'Negocio Local / Retail' : 'Local Business / Retail',
    paymentMethod: 'nequi_bancolombia',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappCheckoutMessage = encodeURIComponent(
    isEs
      ? `¡Hola UXIO Studio! He completado el formulario de inscripción para ${course.title} (${course.cohortName}).\n\n` +
        `👤 Nombre: ${formData.name}\n` +
        `📱 WhatsApp: ${formData.phone}\n` +
        `📧 Email: ${formData.email}\n` +
        `🏢 Negocio: ${formData.business} (${formData.industry})\n` +
        `💳 Método de pago preferido: ${formData.paymentMethod === 'nequi_bancolombia' ? 'Transferencia (Bancolombia/Nequi)' : 'Tarjeta de Crédito / Débito'}\n` +
        `💰 Inversión: $${course.priceCOP.toLocaleString()} COP\n\n` +
        `Quedo atento a las instrucciones para confirmar mi cupo.`
      : `Hi UXIO Studio! I filled the enrollment form for ${course.title} (${course.cohortName}).\n\n` +
        `👤 Name: ${formData.name}\n` +
        `📱 WhatsApp: ${formData.phone}\n` +
        `📧 Email: ${formData.email}\n` +
        `🏢 Brand: ${formData.business} (${formData.industry})\n` +
        `💰 Amount: $${course.priceCOP.toLocaleString()} COP\n\n` +
        `Ready to complete my payment and confirm my spot.`
  );

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#171719] border border-[#10B981]/30 shadow-soft-lg text-center space-y-6 animate-fadeIn">
        <div className="w-14 h-14 rounded-2xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center mx-auto">
          <CheckCircle2 size={28} />
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          <span className="font-mono text-xs text-[#10B981] uppercase tracking-wider font-semibold">
            {isEs ? '// PRE-REGISTRO EXITOSO' : '// PRE-REGISTRATION COMPLETE'}
          </span>
          <h3 className="font-display font-extrabold text-2xl text-[#111111] dark:text-white">
            {isEs ? '¡Tu cupo está pre-reservado!' : 'Your spot is pre-reserved!'}
          </h3>
          <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans leading-relaxed">
            {isEs
              ? `Hola ${formData.name}, para asegurar tu lugar en la ${course.cohortName} y enviarte los datos de acceso a la comunidad, confirma tu registro por WhatsApp.`
              : `Hi ${formData.name}, to finalize your enrollment for ${course.cohortName} and receive community onboarding, please confirm via WhatsApp.`}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] max-w-sm mx-auto text-left text-xs font-sans space-y-1.5">
          <div className="flex justify-between text-[#8E8E93]">
            <span>{isEs ? 'Programa:' : 'Program:'}</span>
            <span className="font-semibold text-[#111111] dark:text-white">{course.title}</span>
          </div>
          <div className="flex justify-between text-[#8E8E93]">
            <span>{isEs ? 'Total a transferir:' : 'Total due:'}</span>
            <span className="font-semibold text-[#10B981]">${course.priceCOP.toLocaleString()} COP</span>
          </div>
        </div>

        <div>
          <a
            href={`https://wa.me/573000000000?text=${whatsappCheckoutMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#10B981]/90 text-white font-display font-bold text-sm transition-all shadow-lg shadow-[#10B981]/20 active:scale-[0.98]"
          >
            <MessageCircle size={16} />
            <span>{isEs ? 'Confirmar Cupo por WhatsApp' : 'Confirm Spot via WhatsApp'}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div id="inscripcion" className="scroll-mt-20">
      <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-lg space-y-6">
        <div className="border-b border-black/[0.06] dark:border-white/[0.06] pb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="font-mono text-[11px] text-[#FE385B] uppercase tracking-wider font-semibold block mb-1">
              // {isEs ? 'FORMULARIO DE ADMISIÓN' : 'ENROLLMENT APPLICATION'}
            </span>
            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white">
              {isEs ? 'Inscríbete en la Cohorte 01' : 'Enroll in Cohort 01'}
            </h3>
          </div>

          <div className={`px-3 py-1 rounded-full text-xs font-mono border ${statusInfo.bg}`}>
            <span>{statusInfo.label}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-[11px] text-[#8E8E93] mb-1.5">
                {isEs ? 'NOMBRE COMPLETO *' : 'FULL NAME *'}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                placeholder={isEs ? 'Ej. Mateo Silva' : 'e.g. Alex Morgan'}
                className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B]"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] text-[#8E8E93] mb-1.5">
                {isEs ? 'WHATSAPP DE CONTACTO *' : 'WHATSAPP NUMBER *'}
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+57 300 000 0000"
                className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-[11px] text-[#8E8E93] mb-1.5">
                {isEs ? 'CORREO ELECTRÓNICO *' : 'EMAIL ADDRESS *'}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                placeholder="contacto@tuempresa.com"
                className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B]"
              />
            </div>

            <div>
              <label className="block font-mono text-[11px] text-[#8E8E93] mb-1.5">
                {isEs ? 'NEGOCIO, MARCA O PROYECTO *' : 'BUSINESS OR BRAND *'}
              </label>
              <input
                type="text"
                required
                value={formData.business}
                onChange={e => setFormData({ ...formData, business: e.target.value })}
                placeholder={isEs ? 'Nombre de tu negocio o marca' : 'Brand or project name'}
                className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B]"
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-[11px] text-[#8E8E93] mb-1.5">
              {isEs ? 'INDUSTRIA O SECTOR' : 'INDUSTRY'}
            </label>
            <select
              value={formData.industry}
              onChange={e => setFormData({ ...formData, industry: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B]"
            >
              <option>{isEs ? 'Negocio Local / Tienda / Retail' : 'Local Business / Retail'}</option>
              <option>{isEs ? 'Turismo / Hotelería / Experiencias' : 'Tourism / Hospitality / Travel'}</option>
              <option>{isEs ? 'Gastronomía / Café / Restaurante' : 'Gastronomy / Cafe / Food'}</option>
              <option>{isEs ? 'Servicios Profesionales / Consultoría' : 'Professional Services / Consulting'}</option>
              <option>{isEs ? 'Salud / Estética / Bienestar' : 'Health / Wellness / Beauty'}</option>
              <option>{isEs ? 'Aspirante a Creador UGC / Freelance' : 'Aspiring UGC Creator / Freelancer'}</option>
              <option>{isEs ? 'Otro sector' : 'Other'}</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 text-white font-display font-bold text-sm transition-all shadow-lg shadow-[#FE385B]/20 active:scale-[0.98]"
            >
              <Send size={15} />
              <span>{isEs ? `Reservar Cupo · $${course.priceCOP.toLocaleString()} COP` : `Reserve Seat · $${course.priceCOP.toLocaleString()} COP`}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
