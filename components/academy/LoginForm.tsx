'use client';

import React, { useActionState, useState } from 'react';
import { Lock, Mail, User, ArrowRight, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { createBrowserClient } from '@supabase/ssr';
import { Locale } from '@/types';
import { signInAction, signUpAction, AuthActionResult } from '@/app/[lang]/academy/actions';

interface LoginFormProps {
  lang: Locale;
  redirectTo?: string;
}

export default function LoginForm({ lang, redirectTo }: LoginFormProps) {
  const isEs = lang === 'es';
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const boundSignIn = signInAction.bind(null, lang);
  const boundSignUp = signUpAction.bind(null, lang);

  const [signInState, signInFormAction, isSignInPending] = useActionState<AuthActionResult, FormData>(
    boundSignIn,
    {}
  );

  const [signUpState, signUpFormAction, isSignUpPending] = useActionState<AuthActionResult, FormData>(
    boundSignUp,
    {}
  );

  const activeState = mode === 'signin' ? signInState : signUpState;
  const isPending = mode === 'signin' ? isSignInPending : isSignUpPending;
  const currentAction = mode === 'signin' ? signInFormAction : signUpFormAction;

  const handleGoogleSignIn = async () => {
    try {
      setIsGoogleLoading(true);
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-project.supabase.co',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key'
      );

      const targetRedirect = redirectTo || `/${lang}/academy/classroom`;
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(targetRedirect)}`,
        },
      });
    } catch {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-lg space-y-5">
      {/* Header */}
      <div className="space-y-1.5 text-center">
        <span className="font-mono text-[11px] text-[#FE385B] uppercase tracking-wider font-semibold">
          // UXIO ACADEMY · ACCESO ALUMNO
        </span>
        <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white">
          {mode === 'signin'
            ? (isEs ? 'Ingresar a mi Aula' : 'Sign in to Classroom')
            : (isEs ? 'Crear Cuenta de Alumno' : 'Create Student Account')
          }
        </h1>
        <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans">
          {isEs ? 'Accede a tus cursos y materiales de Creator Lab.' : 'Access your Creator Lab materials and cohort sessions.'}
        </p>
      </div>

      {/* Mode Tabs */}
      <div className="grid grid-cols-2 gap-1 p-1 rounded-xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.04] dark:border-white/[0.06]">
        <button
          type="button"
          onClick={() => setMode('signin')}
          className={`py-2 text-xs font-display font-semibold rounded-lg transition-all ${
            mode === 'signin'
              ? 'bg-white dark:bg-[#202024] text-[#111111] dark:text-white shadow-2xs'
              : 'text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
          }`}
        >
          {isEs ? 'Iniciar Sesión' : 'Sign In'}
        </button>
        <button
          type="button"
          onClick={() => setMode('signup')}
          className={`py-2 text-xs font-display font-semibold rounded-lg transition-all ${
            mode === 'signup'
              ? 'bg-white dark:bg-[#202024] text-[#111111] dark:text-white shadow-2xs'
              : 'text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
          }`}
        >
          {isEs ? 'Registrarse' : 'Sign Up'}
        </button>
      </div>

      {/* Google OAuth Button */}
      <div>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={isGoogleLoading}
          className="w-full inline-flex items-center justify-center gap-2.5 py-3 rounded-xl bg-white dark:bg-[#202024] hover:bg-black/[0.03] dark:hover:bg-white/[0.06] border border-black/[0.1] dark:border-white/[0.1] text-xs font-display font-semibold text-[#111111] dark:text-white transition-all active:scale-[0.98] shadow-2xs disabled:opacity-60"
        >
          {isGoogleLoading ? (
            <Loader2 size={15} className="animate-spin text-[#8E8E93]" />
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
          )}
          <span>{isEs ? 'Continuar con Google' : 'Continue with Google'}</span>
        </button>

        <div className="flex items-center gap-3 my-4">
          <div className="h-px flex-1 bg-black/[0.06] dark:bg-white/[0.08]" />
          <span className="font-mono text-[10px] text-[#8E8E93] uppercase">
            {isEs ? 'O con tu correo' : 'Or with email'}
          </span>
          <div className="h-px flex-1 bg-black/[0.06] dark:bg-white/[0.08]" />
        </div>
      </div>

      {/* Messages */}
      {activeState?.error && (
        <div className="p-3.5 rounded-xl bg-[#FE385B]/10 border border-[#FE385B]/20 text-xs font-sans text-[#FE385B] flex items-start gap-2.5 animate-fadeIn">
          <AlertCircle size={16} className="shrink-0 mt-0.5" />
          <p className="leading-snug">{activeState.error}</p>
        </div>
      )}

      {activeState?.message && (
        <div className="p-3.5 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 text-xs font-sans text-[#10B981] flex items-start gap-2.5 animate-fadeIn">
          <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
          <p className="leading-snug">{activeState.message}</p>
        </div>
      )}

      {/* Form */}
      <form action={currentAction} className="space-y-3.5">
        <input type="hidden" name="redirectTo" value={redirectTo || `/${lang}/academy/classroom`} />

        {mode === 'signup' && (
          <div>
            <label className="block font-mono text-[11px] text-[#8E8E93] mb-1">
              {isEs ? 'NOMBRE COMPLETO *' : 'FULL NAME *'}
            </label>
            <div className="relative">
              <input
                type="text"
                name="fullName"
                required
                placeholder={isEs ? 'Tu nombre y apellido' : 'Your full name'}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B] transition-colors"
              />
              <User size={15} className="absolute left-3.5 top-3 text-[#8E8E93]" />
            </div>
          </div>
        )}

        <div>
          <label className="block font-mono text-[11px] text-[#8E8E93] mb-1">
            {isEs ? 'CORREO ELECTRÓNICO *' : 'EMAIL ADDRESS *'}
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              placeholder="alumno@ejemplo.com"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B] transition-colors"
            />
            <Mail size={15} className="absolute left-3.5 top-3 text-[#8E8E93]" />
          </div>
        </div>

        <div>
          <label className="block font-mono text-[11px] text-[#8E8E93] mb-1">
            {isEs ? 'CONTRASEÑA *' : 'PASSWORD *'}
          </label>
          <div className="relative">
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white focus:outline-none focus:border-[#FE385B] transition-colors"
            />
            <Lock size={15} className="absolute left-3.5 top-3 text-[#8E8E93]" />
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
                <span>{isEs ? 'Procesando...' : 'Processing...'}</span>
              </>
            ) : (
              <>
                <span>{mode === 'signin' ? (isEs ? 'Entrar a mi Aula' : 'Sign in to Classroom') : (isEs ? 'Crear mi Cuenta' : 'Create Account')}</span>
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
            ? '¿Aún no estás matriculado? ' 
            : 'Not enrolled yet? '}
          <a href={`/${lang}/academy/creator-lab`} className="text-[#FE385B] hover:underline font-medium">
            {isEs ? 'Ver Creator Lab ($99.000 COP)' : 'View Creator Lab ($99.000 COP)'}
          </a>
        </p>
      </div>
    </div>
  );
}
