import { Locale } from '@/types';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'Leadership' | 'Engineering' | 'Design' | 'Academy';
  bio: string;
  avatarUrl: string;
  accent: string;
  location: string;
  specialties: string[];
  socials: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
  isLead?: boolean;
}

export function getPeopleData(lang: Locale = 'es') {
  const isEs = lang === 'es';

  const members: TeamMember[] = [
    {
      id: 'sebastian-vega',
      name: 'Juan Sebastián Vega',
      role: isEs ? 'Fundador & Principal Architect' : 'Founder & Principal Architect',
      department: 'Leadership',
      bio: isEs
        ? 'Arquitecto de software, diseñador de interfaces y creador de UXIO. Especializado en ingeniería de frontend a 120 FPS, diseño no newtoniano, sistemas de inteligencia artificial y dirección pedagógica en UXIO Academy.'
        : 'Software architect, interaction designer, and creator of UXIO. Focused on 120 FPS frontend engineering, non-Newtonian design, AI workflows, and curriculum direction for UXIO Academy.',
      avatarUrl: '/team/sebastian-vega.jpg',
      accent: '#FE385B',
      location: 'Bogotá / CDMX · Remoto',
      specialties: ['Next.js 16 Edge', 'UI Systems & Motion', 'Supabase Cloud', 'AI Automation', 'Creator Lab'],
      socials: {
        github: 'https://github.com/codesebastianvega',
        linkedin: 'https://linkedin.com',
        email: 'sebastian@uxio.io',
      },
      isLead: true,
    },
    {
      id: 'creative-direction',
      name: 'Studio Creative Lab',
      role: isEs ? 'Dirección de Arte & Brand Systems' : 'Art Direction & Brand Systems',
      department: 'Design',
      bio: isEs
        ? 'Equipo interdisciplinario dedicado al diseño de identidad visual, micro-interacciones cinematográficas, modelado tipográfico y consistencia estética entre producto y marketing.'
        : 'Multidisciplinary unit focused on visual identity, cinematic micro-interactions, editorial typography, and visual synergy across digital surfaces.',
      avatarUrl: '/team/creative-lab.jpg',
      accent: '#FF7F07',
      location: 'LATAM Network',
      specialties: ['Brand Identity', '3D / Canvas Shaders', 'Figma Tokens', 'Motion Graphics'],
      socials: {
        github: 'https://github.com/codesebastianvega',
        email: 'design@uxio.io',
      },
      isLead: false,
    },
    {
      id: 'academy-mentors',
      name: 'Academy Mentorship Core',
      role: isEs ? 'Docencia & Revisión de Desafíos' : 'Mentorship & Challenge Review',
      department: 'Academy',
      bio: isEs
        ? 'Mentores activos que evalúan los desafíos semanales de Creator Lab, dirigen las sesiones de evaluación y calibran las piezas comerciales de cada alumno.'
        : 'Active practitioners grading weekly Creator Lab submissions, leading live feedback stages, and calibrating student commercial video assets.',
      avatarUrl: '/team/academy-core.jpg',
      accent: '#00F0FF',
      location: 'Cohorte 01 · Live',
      specialties: ['Mobile UGC Video', 'CapCut & DaVinci AI', 'Storytelling', 'Teleprompter Sync'],
      socials: {
        email: 'academy@uxio.io',
      },
      isLead: false,
    },
  ];

  const culturePoints = [
    {
      title: isEs ? 'El Código como Obra de Arte' : 'Code as High Craft',
      desc: isEs
        ? 'No aceptamos plantillas genéricas. Cada componente se calibra en animaciones, tiempos de carga y accesibilidad como una pieza de relojería suiza.'
        : 'No generic templates. Every component is tuned for animation curves, render latency, and accessibility like fine horology.',
      accent: '#FE385B',
    },
    {
      title: isEs ? 'Remoto Primero & Global' : 'Remote-First & Sovereign',
      desc: isEs
        ? 'Operamos en red descentralizada en Latinoamérica. Creemos en la autonomía, el trabajo asíncrono y los resultados medibles sobre las horas en silla.'
        : 'Decentralized network across LATAM. We champion asynchronous execution, personal autonomy, and hard outcomes over clock-watching.',
      accent: '#00F0FF',
    },
    {
      title: isEs ? 'Enseñamos lo que Construimos' : 'We Teach What We Ship',
      desc: isEs
        ? 'El conocimiento de UXIO Academy proviene de resolver problemas reales en el Studio y validar productos en Labs, no de teoría desactualizada.'
        : 'Everything inside UXIO Academy is extracted from live production battles in Studio and product experiments in Labs, zero stale theory.',
      accent: '#10B981',
    },
  ];

  return { members, culturePoints };
}
