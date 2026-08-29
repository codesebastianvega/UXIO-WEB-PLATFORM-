import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Locale } from '@/types';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ClassroomBreadcrumbsProps {
  items: BreadcrumbItem[];
  lang: Locale;
}

export default function ClassroomBreadcrumbs({ items, lang }: ClassroomBreadcrumbsProps) {
  const isEs = lang === 'es';

  return (
    <nav className="flex items-center flex-wrap gap-2 text-xs font-mono text-[#8E8E93] py-2">
      <Link
        href={`/${lang}/academy/classroom`}
        className="inline-flex items-center gap-1.5 hover:text-[#FE385B] transition-colors"
      >
        <Home size={13} />
        <span>{isEs ? 'Mi Aula' : 'Classroom'}</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight size={12} className="text-[#8E8E93]/60 shrink-0" />
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-[#FE385B] transition-colors truncate max-w-[160px] sm:max-w-none">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#111111] dark:text-white font-medium truncate max-w-[200px] sm:max-w-none">
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
