import React from 'react';
import { Mail } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { Locale } from '@/types';

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const isEs = lang === 'es';

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-8 lg:p-10 flex flex-col justify-between transition-colors">
      <div className="space-y-10 md:space-y-12">
        
        {/* Header */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] font-medium text-[#FE385B] tracking-tight">
              // {isEs ? 'CONTACTO' : 'CONTACT'}
            </span>
            <span className="h-px w-6 bg-[#FE385B]/40"></span>
            <span className="font-mono text-[11px] text-[#8E8E93]">{isEs ? 'CONVERSA CON NOSOTROS' : 'GET IN TOUCH'}</span>
          </div>

          <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] leading-tight tracking-tight text-[#111111] dark:text-white max-w-3xl">
            {isEs 
              ? 'Hablemos de tu próximo producto digital.' 
              : 'Let’s talk about your next digital venture.'
            }
          </h1>

          <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans max-w-2xl">
            {isEs
              ? 'Estamos agendando nuevos proyectos y sprints de producto. Cuéntanos sobre tu idea y te responderemos en menos de 24 horas.'
              : 'Booking product launch sprints and design systems. Tell us about your vision and we will reply within 24 hours.'
            }
          </p>
        </section>

        {/* Contact Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Intake Form Component */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-sm space-y-4">
            <h2 className="font-display font-bold text-base sm:text-lg text-[#111111] dark:text-white">
              {isEs ? 'Cuéntanos sobre tu proyecto' : 'Tell us about your project'}
            </h2>

            <ContactForm lang={lang} />
          </div>

          {/* Direct Dispatch Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-sm space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] shadow-[0_0_6px_#00F0FF] animate-pulse"></span>
                <span className="font-mono text-xs font-semibold text-[#111111] dark:text-white">CANAL DIRECTO</span>
              </div>
              <p className="text-xs text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans">
                {isEs 
                  ? 'Para alianzas estratégicas, consultas de prensa o inversores, contáctanos directamente a nuestro correo de dispatch general.'
                  : 'For strategic partnerships, press inquiries, or investor relations, contact our general dispatch mailbox directly.'
                }
              </p>
              <a
                href="mailto:hello@uxio.studio"
                className="inline-flex items-center gap-2 font-mono text-xs text-[#FE385B] font-semibold hover:underline"
              >
                <Mail size={13} />
                <span>hello@uxio.studio</span>
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-sm space-y-2.5 font-mono text-xs text-[#8E8E93]">
              <div className="flex items-center justify-between">
                <span>ESTUDIO CDMX:</span>
                <span className="text-[#111111] dark:text-white">Roma Norte · CDMX</span>
              </div>
              <div className="flex items-center justify-between">
                <span>DISPATCH HORAS:</span>
                <span className="text-[#111111] dark:text-white">09:00 - 18:00 CST</span>
              </div>
              <div className="flex items-center justify-between">
                <span>RESPUESTA SLA:</span>
                <span className="text-[#00F0FF] font-semibold">&lt; 24 HORAS</span>
              </div>
            </div>
          </div>

        </section>

      </div>
    </main>
  );
}
