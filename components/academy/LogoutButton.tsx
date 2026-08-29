'use client';

import React, { useTransition } from 'react';
import { LogOut, Loader2 } from 'lucide-react';
import { Locale } from '@/types';
import { signOutAction } from '@/app/[lang]/academy/actions';

export default function LogoutButton({ lang }: { lang: Locale }) {
  const [isPending, startTransition] = useTransition();
  const isEs = lang === 'es';

  return (
    <button
      type="button"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await signOutAction(lang);
        });
      }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] hover:bg-[#FE385B]/10 text-xs font-mono text-[#8E8E93] hover:text-[#FE385B] transition-all border border-black/[0.06] dark:border-white/[0.06]"
    >
      {isPending ? <Loader2 size={13} className="animate-spin" /> : <LogOut size={13} />}
      <span>{isEs ? 'Cerrar Sesión' : 'Sign Out'}</span>
    </button>
  );
}
