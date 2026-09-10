import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/types';
import { DisciplineCard } from '@/components/services/DisciplineCard';

export async function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const dictionary = await getDictionary(lang);
  const dict = dictionary?.home || {};
  const isEs = lang === 'es';

  const disciplines = [
    {
      id: "technology",
      title: isEs ? "Desarrollo & Tecnología" : "Development & Technology",
      badge: isEs ? "Web & Apps" : "Web & Apps",
      description: isEs ? "Construimos sitios web modernos, tiendas online y plataformas digitales a medida." : "We build modern websites, online stores, and bespoke digital platforms.",
      path: `/${lang}/services/technology`,
      image: "/services/cards/web-apps-platform.jpg",
      accent: "#00F0FF",
      auroraGradient: "from-[#00F0FF]/20 via-[#3B82F6]/10 to-transparent",
      chips: ["Next.js", "TypeScript", "APIs Reactivas", "Cloud Infrastructure", "IA Aplicada"]
    },
    {
      id: "experience",
      title: isEs ? "Diseño & Experiencia" : "Design & Experience",
      badge: isEs ? "UI / UX" : "UI / UX",
      description: isEs ? "Diseñamos interfaces claras, atractivas y fáciles de usar en Figma y código." : "We design clear, engaging, and easy-to-use interfaces in Figma and code.",
      path: `/${lang}/services/experience`,
      image: "/services/cards/experience-ui-ux.jpg",
      accent: "#FE385B",
      auroraGradient: "from-[#FE385B]/20 via-[#F06C83]/10 to-transparent",
      chips: ["Diseño de Interfaz", "Experiencia de Usuario", "Sistemas de Diseño", "UX Móvil", "Micro-Interacciones"]
    },
    {
      id: "brand",
      title: isEs ? "Marca & Identidad" : "Brand & Identity",
      badge: isEs ? "Identidad & Branding" : "Identity & Branding",
      description: isEs ? "Construimos identidades que hacen reconocible, prestigiosa y memorable una marca." : "We build brand identities that are memorable, prestigious, and distinct.",
      path: `/${lang}/services/brand`,
      image: "/services/cards/brand-identity.jpg",
      accent: "#FFCC48",
      auroraGradient: "from-[#FFCC48]/20 via-[#FF7F07]/10 to-transparent",
      chips: ["Identidad Visual", "Logotipos", "Tipografía", "Guías de Marca", "Dirección de Arte"]
    },
    {
      id: "growth",
      title: isEs ? "Marketing & Crecimiento" : "Marketing & Growth",
      badge: isEs ? "Conversión & Escala" : "Conversion & Scale",
      description: isEs ? "Ayudamos a convertir más visitas en clientes y hacer crecer las ventas de tu negocio." : "We help convert visitors into customers and scale your business revenue.",
      path: `/${lang}/services/growth`,
      image: "/services/cards/growth-analytics.jpg",
      accent: "#FF7F07",
      auroraGradient: "from-[#FF7F07]/20 via-[#FE385B]/10 to-transparent",
      chips: ["Optimización de Conversión", "Pruebas A/B", "Retención", "Analítica", "Estrategia"]
    },
    {
      id: "content",
      title: isEs ? "Contenido & Audiovisual" : "Content & Media",
      badge: isEs ? "Audiovisual & Media" : "Audiovisual & Media",
      description: isEs ? "Producimos contenido visual, videos verticales y piezas de alto impacto para vender." : "We produce visual content, vertical videos, and high-impact assets to sell.",
      path: `/${lang}/services/content`,
      image: "/services/cards/content-media.jpg",
      accent: "#10B981",
      auroraGradient: "from-[#10B981]/20 via-[#00F0FF]/10 to-transparent",
      chips: ["Video Móvil", "Guiones", "Fotografía", "Formatos Verticales", "Estrategia"]
    },
    {
      id: "solutions",
      title: isEs ? "Soluciones Digitales" : "Digital Solutions",
      badge: isEs ? "SaaS & Automatización" : "SaaS & Automation",
      description: isEs ? "Construimos herramientas digitales, portales y automatizaciones adaptadas a tu empresa." : "We build custom digital tools, portals, and automations tailored to your business.",
      path: `/${lang}/services/solutions`,
      image: "/services/cards/digital-solutions.jpg",
      accent: "#7928CA",
      auroraGradient: "from-[#7928CA]/20 via-[#FE385B]/10 to-transparent",
      chips: ["Plataformas Web", "Automatización", "Integraciones", "Portales", "SaaS"]
    }
  ];

  const sprintModels = isEs ? [
    {
      title: "Sprint de Lanzamiento de Producto",
      duration: "4 - 8 Semanas",
      desc: "De la conceptualización a la producción en Next.js con diseño de interfaz a medida y stack listo para escalar.",
      accent: "#FE385B"
    },
    {
      title: "Design System & UI Architecture",
      duration: "3 - 6 Semanas",
      desc: "Creación o modernización de librerías de componentes en React/Tailwind con tokens de diseño unificados.",
      accent: "#00F0FF"
    },
    {
      title: "Sprint de Conversión & Growth",
      duration: "2 - 4 Semanas",
      desc: "Optimización de funnels existentes, métricas de retención y rediseño de flujos clave de conversión.",
      accent: "#FF7F07"
    },
    {
      title: "Identidad Viva & Brand System",
      duration: "3 - 5 Semanas",
      desc: "Diseño de identidad visual, dirección de arte digital, tipografía y manuales de marca interactivos.",
      accent: "#FFCC48"
    }
  ] : [
    {
      title: "Product Launch Sprint",
      duration: "4 - 8 Weeks",
      desc: "From concept to Next.js production release with bespoke UI engineering and scalable cloud stack.",
      accent: "#FE385B"
    },
    {
      title: "Design System & UI Architecture",
      duration: "3 - 6 Weeks",
      desc: "Authoring or modernizing React/Tailwind component systems with unified semantic tokens.",
      accent: "#00F0FF"
    },
    {
      title: "Conversion & Growth Sprint",
      duration: "2 - 4 Weeks",
      desc: "Funnel optimization, activation instrumentation, and high-velocity conversion workflow redesigns.",
      accent: "#FF7F07"
    },
    {
      title: "Living Brand System",
      duration: "3 - 5 Weeks",
      desc: "Comprehensive visual identities, digital art direction, bespoke typography, and interactive guidelines.",
      accent: "#FFCC48"
    }
  ];

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-8 lg:p-10 flex flex-col justify-between transition-colors">
      <div className="space-y-10 md:space-y-12">
        
        {/* Header */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] font-medium text-[#FE385B] tracking-tight">
              // 01 · {isEs ? 'SERVICIOS' : 'SERVICES'}
            </span>
            <span className="h-px w-6 bg-[#FE385B]/40"></span>
            <span className="font-mono text-[11px] text-[#8E8E93]">{isEs ? 'LO QUE HACEMOS' : 'WHAT WE DO'}</span>
          </div>

          <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] leading-tight tracking-tight text-[#111111] dark:text-white max-w-3xl">
            {isEs 
              ? 'Lo que hacemos.' 
              : 'What we do.'
            }
          </h1>

          <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans max-w-2xl">
            {isEs
              ? 'Creamos, diseñamos y construimos las herramientas digitales que una marca necesita para avanzar.'
              : 'We create, design, and build the digital tools a brand needs to move forward.'
            }
          </p>
        </section>

        {/* Disciplines Aurora Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-black/[0.08] dark:border-white/[0.08]">
            <span className="font-mono text-[11px] text-[#8E8E93] uppercase tracking-wider">
              {isEs ? '[06 SERVICIOS]' : '[06 SERVICES]'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {disciplines.map((disc) => (
              <DisciplineCard
                key={disc.id}
                discipline={disc}
                isEs={isEs}
              />
            ))}
          </div>
        </section>

        {/* Sprint Delivery Models */}
        <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-sm space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[11px] font-medium text-[#FE385B] tracking-tight">
                // 02 · MODELOS DE TRABAJO
              </span>
            </div>
            <h2 className="font-display font-bold text-lg sm:text-xl text-[#111111] dark:text-white tracking-tight">
              {isEs ? 'Formatos de entrega ágiles y orientados a resultados.' : 'High-velocity sprint delivery formats.'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sprintModels.map((model, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#F7F7F5] dark:bg-[#0D0D0E] border border-black/[0.04] dark:border-white/[0.06] flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.08] text-[#8E8E93]">
                      [0{idx + 1}]
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#111111] dark:text-white flex items-center gap-1">
                      <Clock size={11} className="text-[#8E8E93]" />
                      {model.duration}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-sm text-[#111111] dark:text-white mb-1">
                    {model.title}
                  </h3>

                  <p className="text-xs text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans">
                    {model.desc}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between">
                  <span className="font-mono text-[9px] text-[#8E8E93]">SPRINT FORMAT</span>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: model.accent }}></span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <p className="text-xs text-[#8E8E93] font-mono">
              {isEs ? '¿Tienes un proyecto con requerimientos específicos?' : 'Have a project with custom requirements?'}
            </p>

            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FE385B] hover:bg-[#e02d4e] text-white font-display font-semibold text-xs transition-all shadow-accent-glow active:scale-95"
            >
              <span>{isEs ? 'Agendar un Sprint de Descubrimiento' : 'Schedule a Discovery Sprint'}</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
