'use client';

import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Sparkles, 
  CreditCard, 
  Zap, 
  MessageCircle, 
  Check, 
  ArrowRight,
  Lock,
  Terminal,
  Download
} from 'lucide-react';
import { ResourceItem } from '@/data/resources';
import { Locale } from '@/types';

interface ComponentCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: ResourceItem;
  lang: Locale;
  onUnlockSuccess: () => void;
}

export default function ComponentCheckoutModal({
  isOpen,
  onClose,
  item,
  lang,
  onUnlockSuccess,
}: ComponentCheckoutModalProps) {
  const isEs = lang === 'es';
  const [currency, setCurrency] = useState<'USD' | 'COP'>('USD');
  const [email, setEmail] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const priceUSD = '3.00';
  const priceCOP = '12.000';

  const handleSimulatePayment = (method: 'stripe' | 'mercadopago' | 'whatsapp') => {
    if (method === 'whatsapp') {
      const msg = encodeURIComponent(
        `Hola UXIO! Quiero adquirir la licencia Pro del componente ${item.name} (${currency === 'USD' ? `$${priceUSD} USD` : `$${priceCOP} COP`}). Mi email es: ${email || 'por definir'}`
      );
      window.open(`https://wa.me/573000000000?text=${msg}`, '_blank');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      onUnlockSuccess();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg rounded-3xl bg-[#111113] border border-white/[0.12] p-6 sm:p-8 text-white shadow-2xl z-10 space-y-6 overflow-hidden">
        {/* Top Glow Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-gradient-to-b from-[#FE385B]/20 to-transparent blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] relative z-10">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#FE385B]/20 text-[#FE385B]">
              <Lock size={15} />
            </span>
            <div>
              <h3 className="font-display font-bold text-base text-white">
                {isEs ? 'Licencia Pro Individual' : 'Single Pro License'}
              </h3>
              <p className="font-mono text-[10px] text-[#8E8E93]">{item.name}.tsx</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-[#8E8E93] hover:text-white transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {!isSuccess ? (
          <div className="space-y-6 relative z-10">
            {/* Price & Currency Switcher */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-between">
              <div>
                <span className="font-mono text-[10px] text-[#8E8E93] uppercase block">
                  {isEs ? 'Inversión Pago Único:' : 'One-Time Investment:'}
                </span>
                <div className="font-display font-extrabold text-2xl text-white flex items-baseline gap-1">
                  <span>{currency === 'USD' ? `$${priceUSD}` : `$${priceCOP}`}</span>
                  <span className="font-mono text-xs text-[#8E8E93] font-normal">{currency}</span>
                </div>
              </div>

              {/* Currency Switcher */}
              <div className="flex items-center p-1 rounded-xl bg-black/40 border border-white/10 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    currency === 'USD' ? 'bg-[#FE385B] text-white font-bold' : 'text-[#8E8E93]'
                  }`}
                >
                  USD ($3)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('COP')}
                  className={`px-2.5 py-1 rounded-lg transition-all ${
                    currency === 'COP' ? 'bg-[#FE385B] text-white font-bold' : 'text-[#8E8E93]'
                  }`}
                >
                  COP ($12k)
                </button>
              </div>
            </div>

            {/* License Features */}
            <div className="space-y-2.5 font-sans text-xs text-[#EDEDEE]">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#10B981] flex-shrink-0" />
                <span>{isEs ? 'Código fuente TSX completo sin dependencias pesadas' : 'Full TSX source code zero heavy deps'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#10B981] flex-shrink-0" />
                <span>{isEs ? 'Uso comercial ilimitado en proyectos personales y de clientes' : 'Unlimited commercial license for clients & SaaS'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#10B981] flex-shrink-0" />
                <span>{isEs ? 'Comando CLI autenticado directo a tu repositorio' : 'Authenticated CLI command for Next.js repos'}</span>
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="font-mono text-[10px] text-[#8E8E93] uppercase block">
                {isEs ? 'Tu Correo Electrónico (para token y recibo):' : 'Your Email (for token & receipt):'}
              </label>
              <input
                type="email"
                placeholder="tu@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder:text-[#666666] focus:outline-none focus:border-[#FE385B]"
              />
            </div>

            {/* Payment Options */}
            <div className="space-y-2.5 pt-2">
              {/* Primary Stripe Button */}
              <button
                type="button"
                onClick={() => handleSimulatePayment('stripe')}
                disabled={isProcessing}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#FF7F07] to-[#FE385B] hover:opacity-95 text-white font-display font-bold text-xs tracking-wide shadow-lg shadow-[#FE385B]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isProcessing ? (
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <CreditCard size={15} />
                    <span>{isEs ? `Pagar con Tarjeta / Apple Pay (${currency === 'USD' ? '$3 USD' : '$12K COP'})` : `Pay with Card / Apple Pay ($3 USD)`}</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>

              {/* Secondary Methods: PSE & WhatsApp */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleSimulatePayment('mercadopago')}
                  className="py-2.5 px-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-mono text-[#EDEDEE] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Zap size={13} className="text-[#00F0FF]" />
                  <span>{isEs ? 'PSE / Nequi' : 'Instant PSE'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSimulatePayment('whatsapp')}
                  className="py-2.5 px-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-mono text-[#EDEDEE] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle size={13} className="text-[#10B981]" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Payment Success State */
          <div className="space-y-5 text-center py-4 relative z-10 animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] mx-auto flex items-center justify-center">
              <Check size={24} />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">
                {isEs ? '¡Componente Desbloqueado!' : 'Component Unlocked!'}
              </h4>
              <p className="text-xs text-[#8E8E93] font-sans mt-1">
                {isEs ? 'Ya tienes acceso completo al código fuente y comando CLI.' : 'Full source code & CLI access is now active.'}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-[#00F0FF] flex items-center justify-between">
              <code>npx @uxio/pro add {item.slug} --key=UXIO_PRO_ACTIVE</code>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl bg-[#FE385B] text-white font-display font-bold text-xs hover:bg-[#FE385B]/90 transition-all cursor-pointer"
            >
              {isEs ? 'Ver Código Fuente Ahora →' : 'View Source Code Now →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
