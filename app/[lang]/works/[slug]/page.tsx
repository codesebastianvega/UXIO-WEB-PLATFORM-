import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Terminal } from 'lucide-react';
import { getProjectsData } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import { Locale } from '@/types';

export async function generateStaticParams() {
  const slugs = ['websites', 'apps', 'branding', 'ux-ui', 'content', 'photography', 'video', 'campaigns', 'print'];
  const params: Array<{ lang: Locale; slug: string }> = [];
  for (const lang of ['es', 'en'] as Locale[]) {
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }
  return params;
}

export default async function WorksCategoryPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  const lang: Locale = rawLang === 'en' ? 'en' : 'es';
  const isEs = lang === 'es';
  const categorySlug = slug.toLowerCase();
  const allProjects = getProjectsData(lang);

  // Category metadata dictionary
  const categoryMeta: Record<string, { title: string; subtitle: string; desc: string; accent: string }> = {
    websites: {
      title: isEs ? 'Sitios Web & Plataformas' : 'Websites & Platforms',
      subtitle: isEs ? 'Experiencias web de alto rendimiento y arquitectura moderna.' : 'High-performance modern web experiences.',
      desc: isEs 
        ? 'Desarrollo full-stack en Next.js con diseño tipográfico bespoke, optimización extrema de Core Web Vitals y conversión continua.'
        : 'Full-stack Next.js engineering paired with bespoke typography, strict Core Web Vitals, and conversion pipelines.',
      accent: '#FFCC48'
    },
    apps: {
      title: isEs ? 'Aplicaciones Móviles & Web' : 'Mobile & Web Apps',
      subtitle: isEs ? 'Software fluido con micro-interacciones inmersivas.' : 'Fluid software powered by immersive micro-interactions.',
      desc: isEs
        ? 'Aplicaciones nativas e híbridas diseñadas con geometría suave y telemetría en tiempo real para startups y corporativos de vanguardia.'
        : 'Native and hybrid apps designed with soft geometry and real-time telemetry for high-growth ventures.',
      accent: '#00F0FF'
    },
    branding: {
      title: isEs ? 'Branding & Sistemas Visuales' : 'Branding & Visual Systems',
      subtitle: isEs ? 'Marcas vivas preparadas para ecosistemas digitales.' : 'Living brand systems engineered for digital ecosystems.',
      desc: isEs
        ? 'Identidades visuales contemporáneas, tipografía a medida y guías de estilo interactivas que proyectan autoridad técnica.'
        : 'Contemporary visual identities, bespoke typography, and interactive brand guidelines commanding market authority.',
      accent: '#FE385B'
    },
    'ux-ui': {
      title: 'UX/UI & Design Systems',
      subtitle: isEs ? 'Arquitectura de interfaces y diseño centrado en el usuario.' : 'Interface architecture and human-centric design.',
      desc: isEs
        ? 'Investigación de usuarios, prototipado interactivo de alta fidelidad y librerías de componentes escalables sin deuda de diseño.'
        : 'User research, high-fidelity interactive prototyping, and scalable design token libraries with zero drift.',
      accent: '#FE385B'
    },
    content: {
      title: isEs ? 'Contenido & Media Digital' : 'Content & Digital Media',
      subtitle: isEs ? 'Producción visual y narrativa de alto estándar.' : 'High-standard visual and narrative production.',
      desc: isEs
        ? 'Video comercial, reels cinemáticos, renders 3D y copywriting persuasivo de interfaz para lanzamientos globales.'
        : 'Commercial video, cinematic reels, 3D renders, and persuasive interface copywriting for global launches.',
      accent: '#F06C83'
    },
    photography: {
      title: isEs ? 'Fotografía de Producto & Editorial' : 'Product & Editorial Photography',
      subtitle: isEs ? 'Capturas de hardware, gastronomía y estilo de vida.' : 'Hardware, culinary, and lifestyle visual captures.',
      desc: isEs
        ? 'Dirección fotográfica de estudio y locación para elevar la percepción de valor de productos físicos y digitales.'
        : 'Studio and on-location photography direction elevating product value perception.',
      accent: '#FF7F07'
    },
    video: {
      title: isEs ? 'Video & Producción Audiovisual' : 'Video & Motion Production',
      subtitle: isEs ? 'Narrativas cinematográficas para lanzamientos.' : 'Cinematic narratives for venture launches.',
      desc: isEs
        ? 'Producción en 4K, motion graphics y trailers de producto diseñados para capturar la atención en redes.'
        : '4K production, motion graphics, and product trailers engineered to command attention.',
      accent: '#FE385B'
    },
    campaigns: {
      title: isEs ? 'Campañas & Go-to-Market' : 'Campaigns & Go-to-Market',
      subtitle: isEs ? 'Activaciones estratégicas de escala global.' : 'Strategic global launch activations.',
      desc: isEs
        ? 'Estrategias de adquisición omnicanal que combinan activos de marca, pauta digital y conversión acelerada.'
        : 'Omnichannel acquisition strategies merging brand assets, paid media, and accelerated conversion.',
      accent: '#FF7F07'
    },
    print: {
      title: isEs ? 'Diseño Editorial & Print' : 'Editorial & Print Design',
      subtitle: isEs ? 'Tangibilidad física de alto estándar.' : 'High-standard physical craftsmanship.',
      desc: isEs
        ? 'Packaging de producto, papelería institucional y publicaciones impresas con acabados y materiales premium.'
        : 'Product packaging, stationery systems, and editorial print artifacts with premium finishes.',
      accent: '#FFCC48'
    }
  };

  const currentMeta = categoryMeta[categorySlug] || {
    title: slug.replace('-', ' ').toUpperCase(),
    subtitle: isEs ? 'Proyectos seleccionados en esta disciplina.' : 'Selected projects in this discipline.',
    desc: isEs ? 'Explora los casos de estudio donde aplicamos esta especialidad.' : 'Explore case studies where we deployed this capability.',
    accent: '#FE385B'
  };

  // Filter projects strictly matching category slug or tags
  const matchedProjects = allProjects.filter((p) => {
    if (p.categories?.includes(categorySlug)) return true;
    if (p.category.toLowerCase() === categorySlug) return true;
    return p.tags.some(t => 
      t.label.toLowerCase() === categorySlug ||
      (categorySlug === 'websites' && (t.label.toLowerCase().includes('web') || t.label.toLowerCase().includes('plataforma'))) ||
      (categorySlug === 'apps' && (t.label.toLowerCase().includes('app') || t.label.toLowerCase().includes('móvil'))) ||
      (categorySlug === 'ux-ui' && t.label.toLowerCase().includes('ux')) ||
      (categorySlug === 'branding' && (t.label.toLowerCase().includes('brand') || t.label.toLowerCase().includes('marca'))) ||
      (categorySlug === 'content' && (t.label.toLowerCase().includes('content') || t.label.toLowerCase().includes('video')))
    );
  });

  return (
    <main className="flex-1 min-w-0 max-w-[1240px] w-full mx-auto p-6 md:p-8 lg:p-10 flex flex-col justify-between transition-colors">
      <div className="space-y-10 md:space-y-12">
        
        {/* Editorial Category Header */}
        <section className="space-y-4">
          <Link
            href={`/${lang}/works`}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors group"
          >
            <ArrowLeft size={12} className="transition-transform group-hover:-translate-x-1" />
            <span>{isEs ? 'Volver al Catálogo de Proyectos' : 'Back to Works Archive'}</span>
          </Link>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-medium tracking-tight" style={{ color: currentMeta.accent }}>
                // CATEGORY · {categorySlug.toUpperCase()}
              </span>
              <span className="h-px w-6" style={{ backgroundColor: `${currentMeta.accent}50` }}></span>
              <span className="font-mono text-[11px] text-[#8E8E93]">
                [{String(matchedProjects.length).padStart(2, '0')} {isEs ? 'CASOS ACTIVOS' : 'ACTIVE CASES'}]
              </span>
            </div>

            <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] leading-tight text-[#111111] dark:text-white tracking-tight">
              {currentMeta.title}
            </h1>

            <p className="font-mono text-xs sm:text-sm text-[#8E8E93] max-w-3xl">
              {currentMeta.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans max-w-3xl pt-1">
              {currentMeta.desc}
            </p>
          </div>
        </section>

        {/* Filtered Projects Grid or Empty State */}
        {matchedProjects.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fadeIn">
            {matchedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} lang={lang} />
            ))}
          </section>
        ) : (
          <section className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-sm text-center space-y-3 animate-fadeIn">
            <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] flex items-center justify-center mx-auto text-[#8E8E93]">
              <Terminal size={18} className="animate-pulse text-[#00F0FF]" />
            </div>

            <div className="space-y-1 font-mono">
              <div className="text-xs text-[#00F0FF] font-semibold tracking-wider">
                [ STATUS: COMPILING DATA... // ARCHIVO EN PREPARACIÓN ]
              </div>
              <p className="text-xs text-[#8E8E93] max-w-sm mx-auto font-sans">
                {isEs 
                  ? 'Actualmente estamos preparando nuevos casos de estudio y telemetría para esta sub-disciplina.'
                  : 'Currently compiling new venture case studies and production metrics for this sub-discipline.'
                }
              </p>
            </div>

            <div className="pt-2">
              <Link
                href={`/${lang}/works`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#111111] dark:bg-white text-white dark:text-black font-display font-semibold text-xs transition-all shadow-sm active:scale-95"
              >
                <span>{isEs ? 'Ver Catálogo Completo' : 'View Full Catalog'}</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </section>
        )}

      </div>
    </main>
  );
}
