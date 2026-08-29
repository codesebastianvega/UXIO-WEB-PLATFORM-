'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Locale } from '@/types';

export interface AuthActionResult {
  error?: string;
  success?: boolean;
  message?: string;
}

export async function signInAction(
  lang: Locale,
  prevState: AuthActionResult | null,
  formData: FormData
): Promise<AuthActionResult> {
  const email = (formData.get('email') as string)?.trim();
  const password = formData.get('password') as string;
  const redirectTo = (formData.get('redirectTo') as string) || `/${lang}/academy/classroom`;

  if (!email || !password) {
    return {
      error: lang === 'es' ? 'Por favor ingresa tu correo y contraseña.' : 'Please enter your email and password.',
    };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      error: lang === 'es'
        ? 'Credenciales inválidas o cuenta no registrada.'
        : 'Invalid credentials or user not registered.',
    };
  }

  redirect(redirectTo);
}

export async function signUpAction(
  lang: Locale,
  prevState: AuthActionResult | null,
  formData: FormData
): Promise<AuthActionResult> {
  const fullName = (formData.get('fullName') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();
  const password = formData.get('password') as string;
  const redirectTo = (formData.get('redirectTo') as string) || `/${lang}/academy/classroom`;

  if (!fullName || !email || !password) {
    return {
      error: lang === 'es' ? 'Por favor completa todos los campos requeridos.' : 'Please fill in all required fields.',
    };
  }

  if (password.length < 6) {
    return {
      error: lang === 'es' ? 'La contraseña debe tener al menos 6 caracteres.' : 'Password must be at least 6 characters long.',
    };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) {
    return {
      error: error.message || (lang === 'es' ? 'Error al registrar la cuenta.' : 'Failed to register account.'),
    };
  }

  // If user is immediately signed in (auto-confirm on)
  if (data.session) {
    redirect(redirectTo);
  }

  return {
    success: true,
    message: lang === 'es' 
      ? '¡Cuenta creada! Revisa tu correo electrónico para confirmar tu registro o inicia sesión.'
      : 'Account created! Please check your email to confirm your registration or sign in.',
  };
}

export async function signOutAction(lang: Locale = 'es') {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect(`/${lang}/academy/login`);
}
