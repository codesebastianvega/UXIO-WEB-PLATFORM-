'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Locale } from '@/types';

export interface AuthActionResult {
  error?: string;
  success?: boolean;
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

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseUrl || supabaseUrl.includes('placeholder-project')) {
    return {
      error: lang === 'es' 
        ? 'Las credenciales de Supabase no están configuradas en el entorno (.env.local). Configura NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY para autenticarte.'
        : 'Supabase credentials are not configured in .env.local. Please provide NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.',
    };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
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

export async function signOutAction(lang: Locale = 'es') {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect(`/${lang}/academy/login`);
}
