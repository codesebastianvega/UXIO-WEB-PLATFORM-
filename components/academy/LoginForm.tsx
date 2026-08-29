'use client';

import React, { useActionState, useState } from 'react';
import { Lock, Mail, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import { Locale } from '@/types';
import { signInAction, AuthActionResult } from '@/app/[lang]/academy/actions';

interface LoginFormProps {
  lang: Locale;
  redirectTo?: string;
}

export default function LoginForm({ lang, redirectTo }: LoginFormProps) {
  const isEs = lang === 'es';
  const boundAction = signInAction.bind(null, lang);
  const [state, formAction, isPending] = useActionState<AuthActionResult, FormData>(
    boundAction,
    {}
  );

  return (
    <div className="w-full max-w-md mx-auto p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-lg space-y-6">
      {/* Header */}
      <div className="space-y-1.5 text-center">
        <span className="font-mono text-[11px] text-[#FE385B] uppercase tracking-wider font-semibold">
          // UXIO ACADEMY · ACCESO ALUMNO
        </span>
        <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white">
          {isEs ? 'Ingresar a mi Aula' : 'Sign in to Classroom'}
        </h1>
        <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans">
          {isEs ? 'Accede a tus cursos y materiales de Creator Lab.' : 'Access your Creator Lab materials and cohort sessions.'}
        </p>
      </div>

      {/* Error Message */}
      {state?.error && (
        <div className="p-3.5 rounded-xl bg-[#FE385B]/10 border border-[#FE385B]/20 text-xs font-sans text-[#FE385B] flex items-start gap-2.5">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <p className="leading-snug">{state.error}</p>
        </div>
      )}

      {/* Form */}
      <form action={formAction} className="space-y-4">
        <input type="hidden" name="redirectTo" value={redirectTo || `/${lang}/academy/classroom`} />

        <div>
          <label className="block font-mono text-[11px] text-[#8E8E93] mb-1.5">
            {isEs ? 'CORREO ELECTRÓNICO *' : 'EMAIL ADDRESS *'}
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              placeholder="alumno@ejemplo.com"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B] transition-colors"
            />
            <Mail size={15} className="absolute left-3.5 top-3.5 text-[#8E8E93]" />
          </div>
        </div>

        <div>
          <label className="block font-mono text-[11px] text-[#8E8E93] mb-1.5">
            {isEs ? 'CONTRASEÑA *' : 'PASSWORD *'}
          </label>
          <div className="relative">
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B] transition-colors"
            />
            <Lock size={15} className="absolute left-3.5 top-3.5 text-[#8E8E93]" />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isPending}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FE385B] hover:bg-[#FE385B]/90 disabled:opacity-50 text-white font-display font-bold text-xs transition-all shadow-md shadow-[#FE385B]/20 active:scale-[0.98]"
          >
            {isPending ? (
              <>
                <Loader2 size={14} className="animate-spin" />
                <span>{isEs ? 'Verificando credenciales...' : 'Authenticating...'}</span>
              </>
            ) : (
              <>
                <span>{isEs ? 'Entrar a mi Aula' : 'Sign in to Classroom'}</span>
                <ArrowRight size={14} />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Info Notice */}
      <div className="pt-2 border-t border-black/[0.04] dark:border-white/[0.04] text-center">
        <p className="text-[11px] font-sans text-[#8E8E93]">
          {isEs 
            ? '¿Aún no tienes acceso? Inscríbete en la ' 
            : 'Not enrolled yet? Register for '}
          <a href={`/${lang}/academy/creator-lab`} className="text-[#FE385B] hover:underline font-medium">
            Cohorte 01 de Creator Lab
          </a>.
        </p>
      </div>
    </div>
  );
}
