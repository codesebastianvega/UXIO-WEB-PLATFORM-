'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { Locale } from '@/types';

interface LanguageSwitcherProps {
  currentLang: Locale;
  label?: string;
}

export default function LanguageSwitcher({
  currentLang,
  label = 'IDIOMA'
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLang: Locale) => {
    if (newLang === currentLang) return;

    // Replace locale prefix in the pathname
    const segments = pathname.split('/');
    if (segments[1] === 'es' || segments[1] === 'en') {
      segments[1] = newLang;
    } else {
      segments.splice(1, 0, newLang);
    }
    const newPath = segments.join('/') || `/${newLang}`;
    router.push(newPath);
  };

  return (
    <div className="p-2.5 rounded-2xl bg-[#171719] border border-white/[0.06] space-y-1.5">
      <div className="flex items-center justify-between font-mono text-[10px] text-[#8E8E93] px-1">
        <div className="flex items-center gap-1.5">
          <Globe size={11} className="text-[#8E8E93]" />
          <span>{label}</span>
        </div>
        <span className="uppercase text-white font-medium">{currentLang}</span>
      </div>

      <div className="grid grid-cols-2 gap-1 bg-[#0D0D0E] p-1 rounded-xl border border-white/[0.06]">
        <button
          onClick={() => handleLanguageChange('es')}
          className={`
            py-1 rounded-lg text-xs font-mono font-medium transition-all text-center
            ${currentLang === 'es'
              ? 'bg-white text-black font-semibold shadow-sm'
              : 'text-[#8E8E93] hover:text-[#EDEDEE]'
            }
          `}
        >
          ES
        </button>
        <button
          onClick={() => handleLanguageChange('en')}
          className={`
            py-1 rounded-lg text-xs font-mono font-medium transition-all text-center
            ${currentLang === 'en'
              ? 'bg-white text-black font-semibold shadow-sm'
              : 'text-[#8E8E93] hover:text-[#EDEDEE]'
            }
          `}
        >
          EN
        </button>
      </div>
    </div>
  );
}
