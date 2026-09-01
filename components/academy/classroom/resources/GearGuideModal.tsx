'use client';

import React from 'react';
import {
  X,
  ShoppingBag,
  Mic,
  Smartphone,
  Sun,
  Video,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { Locale } from '@/types';

interface GearGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Locale;
}

export default function GearGuideModal({
  isOpen,
  onClose,
  lang,
}: GearGuideModalProps) {
  const isEs = lang === 'es';

  if (!isOpen) return null;

  const gearItems = [
    {
      category: isEs ? 'Audio Inalámbrico' : 'Wireless Audio',
      title: isEs ? 'Micrófono Solapero Inalámbrico K9 (Tipo C / Lightning)' : 'K9 Wireless Lavalier Microphone',
      price: '$55.000 COP (~$15 USD)',
      desc: isEs
        ? 'Plug and Play. Conéctalo directo al puerto de tu celular. Elimina el 95% del ruido ambiental y eco.'
        : 'Plug and play. Connects straight to your phone. Cancels 95% of room reverb.',
      icon: Mic,
      tag: isEs ? 'Imprescindible' : 'Essential',
      color: 'text-[#FE385B]',
      link: 'https://listado.mercadolibre.com.co/microfono-k9-inalambrico',
    },
    {
      category: isEs ? 'Estabilidad' : 'Stability',
      title: isEs ? 'Mini Trípode de Mesa con Cabezal Giratorio (Ulanzi o Genérico)' : 'Tabletop Mini Tripod with Phone Mount',
      price: '$35.000 COP (~$10 USD)',
      desc: isEs
        ? 'Permite nivelar el teléfono exactamente a la altura de tus ojos sobre tu escritorio o repisa.'
        : 'Allows eye-level leveling on desks and tables without camera shakes.',
      icon: Smartphone,
      tag: isEs ? 'Comodidad' : 'Comfort',
      color: 'text-[#FF7F07]',
      link: 'https://listado.mercadolibre.com.co/mini-tripode-ulanzi-celular',
    },
    {
      category: isEs ? 'Iluminación Accesible' : 'Budget Light',
      title: isEs ? 'Ventana Natural + Cartulina Blanca de Rebote' : 'Natural Window + White Foam Board',
      price: '$5.000 COP (~$1.5 USD)',
      desc: isEs
        ? 'Una cartulina blanca de papelería en el lado opuesto de la ventana rebota luz suave hacia las sombras de tu cara.'
        : 'A white foam board placed opposite the window bounces soft fill light into face shadows.',
      icon: Sun,
      tag: isEs ? 'Cero Gasto' : 'Zero Cost',
      color: 'text-[#10B981]',
      link: '#',
    },
    {
      category: isEs ? 'Software Gratuito' : 'Free Software',
      title: isEs ? 'Blackmagic Camera App + CapCut Mobile' : 'Blackmagic Camera App + CapCut',
      price: isEs ? 'Gratis (iOS / Android)' : 'Free (iOS / Android)',
      desc: isEs
        ? 'Control manual total de obturación, ISO y balance de blancos. Edición ágil y subtítulos en minutos.'
        : 'Pro camera manual controls plus 15-minute vertical video editing with auto-captions.',
      icon: Video,
      tag: isEs ? 'Software' : 'Software',
      color: 'text-[#00F0FF]',
      link: 'https://www.blackmagicdesign.com/products/blackmagiccamera',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-white dark:bg-[#0D0D0E] border border-black/[0.1] dark:border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden text-[#111111] dark:text-white">
        {/* Header Modal */}
        <div className="p-5 sm:p-6 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between gap-4 bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#FE385B]/10 text-[#FE385B] border border-[#FE385B]/20">
              <ShoppingBag size={20} />
            </div>
            <div>
              <span className="font-mono text-[10px] font-bold text-[#FE385B] uppercase tracking-widest bg-[#FE385B]/10 px-2 py-0.5 rounded">
                EQUIPO RECOMENDADO
              </span>
              <h3 className="font-display font-bold text-base sm:text-lg">
                {isEs ? 'Kit Accesible del Creador Móvil (< $100k COP)' : 'Budget Smartphone Creator Kit'}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm font-sans leading-relaxed">
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#FE385B]/10 via-[#FF7F07]/5 to-transparent border border-[#FE385B]/20 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#111111] dark:text-white text-xs font-medium">
              <Sparkles size={14} className="text-[#FE385B]" />
              <span>{isEs ? 'No compres cámaras caras. Este kit completo cuesta menos de $100.000 COP.' : 'Budget kit under $30 USD to start filming today.'}</span>
            </div>
          </div>

          <div className="space-y-3">
            {gearItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.04] text-[#FE385B]">
                        <Icon size={14} />
                      </div>
                      <span className="font-mono text-[10px] uppercase font-bold text-[#8E8E93]">
                        {item.category}
                      </span>
                    </div>

                    <span className="font-mono text-xs font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/25">
                      {item.price}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-xs sm:text-sm text-[#111111] dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#666666] dark:text-[#8E8E93] mt-1 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {item.link && item.link !== '#' && (
                    <div className="pt-1">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-[#FE385B] hover:underline"
                      >
                        <span>{isEs ? 'Ver referencia recomendada en tienda' : 'View store reference'}</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
