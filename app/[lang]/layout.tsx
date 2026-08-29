import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import '../globals.css';
import Sidebar from '@/components/Sidebar';
import DynamicTopBar from '@/components/DynamicTopBar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SidebarProvider } from '@/context/SidebarContext';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/types';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500', '600'],
  display: 'swap',
});

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const isEs = lang === 'es';
  return {
    title: isEs ? 'UXIO — Estudio de Producto y Experiencias Digitales' : 'UXIO — Digital Product & Experience House',
    description: isEs 
      ? 'Diseñamos, construimos y escalamos experiencias digitales. Casa de tecnología, diseño y productos de software.'
      : 'We design, build and grow digital experiences. A technology, design, and digital experience house.',
    icons: {
      icon: '/uxio-logo.svg',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const dictionary = await getDictionary(lang);

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#F7F7F5] dark:bg-[#0D0D0E] text-[#111111] dark:text-[#EDEDEE] font-sans antialiased selection:bg-[#FE385B] selection:text-white transition-colors duration-200">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <SidebarProvider>
            <div className="min-h-screen flex flex-col lg:flex-row w-full">
              {/* Persistent Collapsible Sidebar in Layout */}
              <Sidebar lang={lang} dictionary={dictionary} />

              {/* Main Canvas Area */}
              <div className="flex-1 min-w-0 flex flex-col min-h-screen bg-[#F7F7F5] dark:bg-[#0D0D0E] transition-colors duration-200">
                {/* Dynamic Top Bar */}
                <DynamicTopBar lang={lang} dictionary={dictionary} />

                {/* Page Content */}
                <div className="flex-1 flex flex-col justify-between">
                  {children}
                </div>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
