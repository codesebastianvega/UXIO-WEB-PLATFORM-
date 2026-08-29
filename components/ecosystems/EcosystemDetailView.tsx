'use client';

import React from 'react';
import { EcosystemSchema } from '@/types/ecosystem';
import { Locale } from '@/types';
import EcosystemHero from './EcosystemHero';
import EcosystemMetadata from './EcosystemMetadata';
import EcosystemTransformation from './EcosystemTransformation';
import EcosystemFlowAndOverview from './EcosystemFlowAndOverview';
import EcosystemArchitectureDiagram from './EcosystemArchitectureDiagram';
import EcosystemLayers from './EcosystemLayers';
import EcosystemJourneyAndTiers from './EcosystemJourneyAndTiers';
import EcosystemResilienceAndTech from './EcosystemResilienceAndTech';
import EcosystemWorksList from './EcosystemWorksList';
import EcosystemFutureRoadmap from './EcosystemFutureRoadmap';

interface EcosystemDetailViewProps {
  ecosystem: EcosystemSchema;
  lang: Locale;
}

export default function EcosystemDetailView({
  ecosystem,
  lang,
}: EcosystemDetailViewProps) {
  return (
    <article className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-20 space-y-16 sm:space-y-24 animate-fadeIn">
      {/* 1. Hero Inmersivo (La Portada de Revista con Acciones) */}
      <EcosystemHero ecosystem={ecosystem} lang={lang} />

      {/* 2. Metadatos (Layout Flotante con Pastillas) */}
      <EcosystemMetadata ecosystem={ecosystem} lang={lang} />

      {/* 3. Transformación del Negocio & Framework UXIO (Think, Design, Build, Operate, Scale) */}
      <EcosystemTransformation ecosystem={ecosystem} lang={lang} />

      {/* 4. Narrativa Editorial Asimétrica (Desafío, Solución y Flujo) */}
      <EcosystemFlowAndOverview ecosystem={ecosystem} lang={lang} />

      {/* 5. Arquitectura Conceptual Dinámica */}
      <EcosystemArchitectureDiagram ecosystem={ecosystem} lang={lang} />

      {/* 6. Las 8 Capas del Ecosistema */}
      <EcosystemLayers ecosystem={ecosystem} lang={lang} />

      {/* 7. User Journey (8 Etapas) & Tiers de Producto (Core, Signature, Elite) */}
      <EcosystemJourneyAndTiers ecosystem={ecosystem} lang={lang} />

      {/* 8. Resiliencia & Stack Tecnológico Confirmado (Next.js 16 + Supabase + Bold) */}
      <EcosystemResilienceAndTech ecosystem={ecosystem} lang={lang} />

      {/* 9. Índice Editorial de Entregables (16 Piezas de Ecosistema) */}
      <EcosystemWorksList ecosystem={ecosystem} lang={lang} />

      {/* 10. Ecosistema Futuro & Roles Integrales de UXIO */}
      <EcosystemFutureRoadmap ecosystem={ecosystem} lang={lang} />
    </article>
  );
}
