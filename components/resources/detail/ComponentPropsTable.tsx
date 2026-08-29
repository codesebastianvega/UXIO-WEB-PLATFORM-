'use client';

import React from 'react';
import { Code2 } from 'lucide-react';
import { Locale } from '@/types';

interface PropItem {
  prop: string;
  type: string;
  defaultVal: string;
  descriptionEs: string;
  descriptionEn: string;
}

interface ComponentPropsTableProps {
  slug: string;
  lang: Locale;
}

const PROPS_REGISTRY: Record<string, PropItem[]> = {
  'spotlight-card': [
    { prop: 'children', type: 'ReactNode', defaultVal: '-', descriptionEs: 'Contenido interno a renderizar dentro de la tarjeta.', descriptionEn: 'Inner content inside the spotlight card.' },
    { prop: 'color', type: 'string?', defaultVal: "'#FE385B'", descriptionEs: 'Color HEX del halo luminoso interactivo.', descriptionEn: 'Hex color of the spotlight halo.' },
    { prop: 'spotlightRadius', type: 'number?', defaultVal: '220', descriptionEs: 'Radio en píxeles del halo de luz.', descriptionEn: 'Spotlight halo radius in px.' },
    { prop: 'viscosity', type: 'number?', defaultVal: '0.075', descriptionEs: 'Coeficiente de viscosidad física no newtoniana (LERP).', descriptionEn: 'Fluid viscosity coefficient for LERP damping.' },
    { prop: 'blurIntensity', type: 'number?', defaultVal: '30', descriptionEs: 'Intensidad de desenfoque gaussiano en píxeles.', descriptionEn: 'Gaussian blur filter intensity.' },
    { prop: 'spotlightOpacity', type: 'number?', defaultVal: '0.11', descriptionEs: 'Opacidad del resplandor (0.03 a 0.35).', descriptionEn: 'Spotlight halo opacity (0.03 to 0.35).' },
  ],
  'hover-link-preview': [
    { prop: 'href', type: 'string', defaultVal: '-', descriptionEs: 'URL de destino del enlace.', descriptionEn: 'Target URL of the anchor link.' },
    { prop: 'title', type: 'string', defaultVal: '-', descriptionEs: 'Título principal dentro de la tarjeta flotante.', descriptionEn: 'Heading text shown inside the floating card.' },
    { prop: 'description', type: 'string?', defaultVal: 'undefined', descriptionEs: 'Texto descriptivo secundario del destino.', descriptionEn: 'Secondary paragraph text inside the card.' },
    { prop: 'badge', type: 'string?', defaultVal: "'Component'", descriptionEs: 'Píldora de estado superior (ej. Live Preview, Pro).', descriptionEn: 'Top right pill badge text.' },
    { prop: 'accentColor', type: 'string?', defaultVal: "'#00F0FF'", descriptionEs: 'Color hexadecimal del pulso y del badge.', descriptionEn: 'Hex color of the pulsing dot and badge.' },
    { prop: 'placement', type: "'top' | 'bottom'", defaultVal: "'top'", descriptionEs: 'Posición donde emerge la ventana flotante.', descriptionEn: 'Placement of the floating popover card.' },
    { prop: 'cardWidth', type: 'number?', defaultVal: '280', descriptionEs: 'Ancho de la tarjeta flotante en píxeles.', descriptionEn: 'Width of the popover card in px.' },
    { prop: 'showImage', type: 'boolean?', defaultVal: 'false', descriptionEs: 'Activa miniatura mockup visual en la cabecera.', descriptionEn: 'Enables thumbnail visual mockup in header.' },
  ],
  'magnetic-button': [
    { prop: 'children', type: 'ReactNode', defaultVal: "'Lanzar Proyecto'", descriptionEs: 'Texto o contenido interno del botón.', descriptionEn: 'Inner text or JSX content of the button.' },
    { prop: 'strength', type: 'number?', defaultVal: '0.35', descriptionEs: 'Fuerza de atracción gravitacional al cursor (0.1 a 0.8).', descriptionEn: 'Magnetic gravity intensity (range 0.1 to 0.8).' },
    { prop: 'triggerRadius', type: 'number?', defaultVal: '120', descriptionEs: 'Distancia en píxeles donde inicia la atracción.', descriptionEn: 'Proximity distance in pixels for attraction.' },
    { prop: 'accentColor', type: 'string?', defaultVal: "'#10B981'", descriptionEs: 'Color hexadecimal del punto de pulso y resplandor.', descriptionEn: 'Hex color of pulsing dot and glow.' },
    { prop: 'variant', type: "'obsidian' | 'glow' | 'glass'", defaultVal: "'obsidian'", descriptionEs: 'Estilo visual del contenedor del botón.', descriptionEn: 'Visual presentation style of the button.' },
    { prop: 'size', type: "'sm' | 'md' | 'lg'", defaultVal: "'md'", descriptionEs: 'Escala y padding dimensional del botón.', descriptionEn: 'Size scale and padding of the button.' },
    { prop: 'activeGlow', type: 'boolean?', defaultVal: 'true', descriptionEs: 'Activa el halo de desenfoque dinámico.', descriptionEn: 'Enables dynamic ambient glow halo.' },
  ],
  'shimmer-text': [
    { prop: 'text', type: 'string', defaultVal: "'Experiencias...'", descriptionEs: 'Texto a renderizar con efecto shimmer.', descriptionEn: 'Text to render with shimmer animation.' },
    { prop: 'fromColor', type: 'string?', defaultVal: "'#7928CA'", descriptionEs: 'Color inicial del gradiente.', descriptionEn: 'Starting gradient hex color.' },
    { prop: 'viaColor', type: 'string?', defaultVal: "'#00F0FF'", descriptionEs: 'Color intermedio del gradiente.', descriptionEn: 'Middle gradient hex color.' },
    { prop: 'toColor', type: 'string?', defaultVal: "'#FE385B'", descriptionEs: 'Color final del gradiente.', descriptionEn: 'Ending gradient hex color.' },
    { prop: 'duration', type: 'number?', defaultVal: '3.5', descriptionEs: 'Duración en segundos de un ciclo de barrido shimmer.', descriptionEn: 'Sweep duration in seconds.' },
    { prop: 'glow', type: 'boolean?', defaultVal: 'false', descriptionEs: 'Activa el resplandor difuso ambiental.', descriptionEn: 'Enables ambient luminescent glow.' },
  ],
  'noise-mesh-bg': [
    { prop: 'colors', type: 'string[]?', defaultVal: "['#7928CA', '#00F0FF', '#FE385B']", descriptionEs: 'Array de colores HEX para los orbes de la malla.', descriptionEn: 'Array of hex colors for the gradient mesh orbs.' },
    { prop: 'speed', type: 'number?', defaultVal: '1.0', descriptionEs: 'Velocidad de rotación y órbita de los nodos.', descriptionEn: 'Orbital rotation speed multiplier.' },
    { prop: 'noiseOpacity', type: 'number?', defaultVal: '0.12', descriptionEs: 'Opacidad de la capa de grano/ruido analógico (0 a 0.35).', descriptionEn: 'Analog film grain noise opacity (0 to 0.35).' },
    { prop: 'blurIntensity', type: 'number?', defaultVal: '70', descriptionEs: 'Difuminado en píxeles para suavizar la mezcla de orbes.', descriptionEn: 'Mesh blur filter intensity in px.' },
    { prop: 'mouseInfluence', type: 'number?', defaultVal: '0.4', descriptionEs: 'Fuerza de atracción/deformación interactiva al cursor.', descriptionEn: 'Mouse interaction attraction coefficient.' },
  ],
  'noise-mesh': [
    { prop: 'colors', type: 'string[]?', defaultVal: "['#7928CA', '#00F0FF', '#FE385B']", descriptionEs: 'Array de colores HEX para los orbes de la malla.', descriptionEn: 'Array of hex colors for the gradient mesh orbs.' },
    { prop: 'speed', type: 'number?', defaultVal: '1.0', descriptionEs: 'Velocidad de rotación y órbita de los nodos.', descriptionEn: 'Orbital rotation speed multiplier.' },
    { prop: 'noiseOpacity', type: 'number?', defaultVal: '0.12', descriptionEs: 'Opacidad de la capa de grano/ruido analógico (0 a 0.35).', descriptionEn: 'Analog film grain noise opacity (0 to 0.35).' },
    { prop: 'blurIntensity', type: 'number?', defaultVal: '70', descriptionEs: 'Difuminado en píxeles para suavizar la mezcla de orbes.', descriptionEn: 'Mesh blur filter intensity in px.' },
    { prop: 'mouseInfluence', type: 'number?', defaultVal: '0.4', descriptionEs: 'Fuerza de atracción/deformación interactiva al cursor.', descriptionEn: 'Mouse interaction attraction coefficient.' },
  ],
  'craft-bento-grid': [
    { prop: 'variant', type: "'saas' | 'studio' | 'analytics'", defaultVal: "'saas'", descriptionEs: 'Estructura semántica y temática de contenido de las tarjetas.', descriptionEn: 'Grid semantic theme and card content layout.' },
    { prop: 'accentColor', type: 'string?', defaultVal: "'#FE385B'", descriptionEs: 'Color de acento para glows, badges y micro-medidores.', descriptionEn: 'Accent color for glows, indicators and meters.' },
    { prop: 'borderRadius', type: 'number?', defaultVal: '20', descriptionEs: 'Radio de curvatura de las celdas en píxeles.', descriptionEn: 'Corner radius of bento cells in px.' },
    { prop: 'gap', type: 'number?', defaultVal: '12', descriptionEs: 'Espaciado interno entre celdas en píxeles.', descriptionEn: 'Grid gap spacing between cells in px.' },
    { prop: 'hoverGlow', type: 'boolean?', defaultVal: 'true', descriptionEs: 'Activa el halo de borde interactivo al hover.', descriptionEn: 'Enables interactive border glow on hover.' },
  ],
  'bento-grid': [
    { prop: 'variant', type: "'saas' | 'studio' | 'analytics'", defaultVal: "'saas'", descriptionEs: 'Estructura semántica y temática de contenido de las tarjetas.', descriptionEn: 'Grid semantic theme and card content layout.' },
    { prop: 'accentColor', type: 'string?', defaultVal: "'#FE385B'", descriptionEs: 'Color de acento para glows, badges y micro-medidores.', descriptionEn: 'Accent color for glows, indicators and meters.' },
    { prop: 'borderRadius', type: 'number?', defaultVal: '20', descriptionEs: 'Radio de curvatura de las celdas en píxeles.', descriptionEn: 'Corner radius of bento cells in px.' },
    { prop: 'gap', type: 'number?', defaultVal: '12', descriptionEs: 'Espaciado interno entre celdas en píxeles.', descriptionEn: 'Grid gap spacing between cells in px.' },
    { prop: 'hoverGlow', type: 'boolean?', defaultVal: 'true', descriptionEs: 'Activa el halo de borde interactivo al hover.', descriptionEn: 'Enables interactive border glow on hover.' },
  ],
  'dock-navigator': [
    { prop: 'items', type: 'DockItemConfig[]?', defaultVal: 'DEFAULT_ITEMS', descriptionEs: 'Array de objetos de configuración para los iconos del dock.', descriptionEn: 'Array of dock item configurations.' },
    { prop: 'variant', type: "'obsidian' | 'glass' | 'frosted'", defaultVal: "'obsidian'", descriptionEs: 'Estilo de acabado y material del fondo.', descriptionEn: 'Surface background material finish.' },
    { prop: 'accentColor', type: 'string?', defaultVal: "'#00F0FF'", descriptionEs: 'Color HEX para halos, LEDs de apps y resplandores.', descriptionEn: 'Accent color for halos, LED indicators and glow.' },
    { prop: 'baseSize', type: 'number?', defaultVal: '44', descriptionEs: 'Tamaño base en píxeles de cada icono en reposo.', descriptionEn: 'Base icon size in resting state.' },
    { prop: 'maxScale', type: 'number?', defaultVal: '1.8', descriptionEs: 'Multiplicador de escala máxima bajo el cursor.', descriptionEn: 'Peak scale magnification multiplier.' },
    { prop: 'distance', type: 'number?', defaultVal: '110', descriptionEs: 'Radio de influencia horizontal en píxeles.', descriptionEn: 'Horizontal influence radius in px.' },
    { prop: 'gap', type: 'number?', defaultVal: '10', descriptionEs: 'Espaciado entre iconos para evitar solapamientos.', descriptionEn: 'Spacing between dock items.' },
  ],
  'obsidian-dock': [
    { prop: 'items', type: 'DockItemConfig[]?', defaultVal: 'DEFAULT_ITEMS', descriptionEs: 'Array de objetos de configuración para los iconos del dock.', descriptionEn: 'Array of dock item configurations.' },
    { prop: 'variant', type: "'obsidian' | 'glass' | 'frosted'", defaultVal: "'obsidian'", descriptionEs: 'Estilo de acabado y material del fondo.', descriptionEn: 'Surface background material finish.' },
    { prop: 'accentColor', type: 'string?', defaultVal: "'#00F0FF'", descriptionEs: 'Color HEX para halos, LEDs de apps y resplandores.', descriptionEn: 'Accent color for halos, LED indicators and glow.' },
    { prop: 'baseSize', type: 'number?', defaultVal: '44', descriptionEs: 'Tamaño base en píxeles de cada icono en reposo.', descriptionEn: 'Base icon size in resting state.' },
    { prop: 'maxScale', type: 'number?', defaultVal: '1.8', descriptionEs: 'Multiplicador de escala máxima bajo el cursor.', descriptionEn: 'Peak scale magnification multiplier.' },
    { prop: 'distance', type: 'number?', defaultVal: '110', descriptionEs: 'Radio de influencia horizontal en píxeles.', descriptionEn: 'Horizontal influence radius in px.' },
    { prop: 'gap', type: 'number?', defaultVal: '10', descriptionEs: 'Espaciado entre iconos para evitar solapamientos.', descriptionEn: 'Spacing between dock items.' },
  ],
  'kinetic-slider': [
    { prop: 'slides', type: 'KineticSlideItem[]?', defaultVal: 'DEFAULT_SLIDES', descriptionEs: 'Colección de tarjetas interactivas con gradientes y métricas.', descriptionEn: 'Collection of interactive cards with gradients and metrics.' },
    { prop: 'accentColor', type: 'string?', defaultVal: "'#FE385B'", descriptionEs: 'Color para badges, bordes activos y dots de progreso.', descriptionEn: 'Accent color for badges, active borders and progress dots.' },
    { prop: 'activeScale', type: 'number?', defaultVal: '1.08', descriptionEs: 'Multiplicador de escala / zoom para la tarjeta central activa.', descriptionEn: 'Scale / zoom multiplier for the active center card.' },
    { prop: 'gap', type: 'number?', defaultVal: '20', descriptionEs: 'Espaciado horizontal entre slides en píxeles.', descriptionEn: 'Horizontal spacing between slides in px.' },
    { prop: 'autoplay', type: 'boolean?', defaultVal: 'false', descriptionEs: 'Transición automática inercial en bucle continuo.', descriptionEn: 'Continuous inertial auto-slide loop.' },
  ],
  'kinetic-snap-slider': [
    { prop: 'slides', type: 'KineticSlideItem[]?', defaultVal: 'DEFAULT_SLIDES', descriptionEs: 'Colección de tarjetas interactivas con gradientes y métricas.', descriptionEn: 'Collection of interactive cards with gradients and metrics.' },
    { prop: 'accentColor', type: 'string?', defaultVal: "'#FE385B'", descriptionEs: 'Color para badges, bordes activos y dots de progreso.', descriptionEn: 'Accent color for badges, active borders and progress dots.' },
    { prop: 'activeScale', type: 'number?', defaultVal: '1.08', descriptionEs: 'Multiplicador de escala / zoom para la tarjeta central activa.', descriptionEn: 'Scale / zoom multiplier for the active center card.' },
    { prop: 'gap', type: 'number?', defaultVal: '20', descriptionEs: 'Espaciado horizontal entre slides en píxeles.', descriptionEn: 'Horizontal spacing between slides in px.' },
    { prop: 'autoplay', type: 'boolean?', defaultVal: 'false', descriptionEs: 'Transición automática inercial en bucle continuo.', descriptionEn: 'Continuous inertial auto-slide loop.' },
  ],
};

export default function ComponentPropsTable({ slug, lang }: ComponentPropsTableProps) {
  const isEs = lang === 'es';
  const propsList = PROPS_REGISTRY[slug];

  if (!propsList || propsList.length === 0) return null;

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft-sm space-y-6">
      <div className="flex items-center gap-2 pb-2 border-b border-black/[0.06] dark:border-white/[0.06]">
        <Code2 size={16} className="text-[#00F0FF]" />
        <h2 className="font-display font-bold text-lg text-[#111111] dark:text-white">
          {isEs ? 'Especificación de Props & API' : 'Props & API Specification'}
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left font-sans text-xs">
          <thead>
            <tr className="border-b border-black/[0.08] dark:border-white/[0.08] font-mono text-[10.5px] text-[#8E8E93] uppercase">
              <th className="pb-3 pr-4">Prop</th>
              <th className="pb-3 pr-4">Type</th>
              <th className="pb-3 pr-4">Default</th>
              <th className="pb-3">{isEs ? 'Descripción' : 'Description'}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/[0.04] dark:divide-white/[0.06]">
            {propsList.map((item) => (
              <tr key={item.prop}>
                <td className="py-3 pr-4 font-mono font-bold text-[#FE385B]">{item.prop}</td>
                <td className="py-3 pr-4 font-mono text-[#8E8E93]">{item.type}</td>
                <td className="py-3 pr-4 font-mono text-[#111111] dark:text-white">{item.defaultVal}</td>
                <td className="py-3 text-[#666666] dark:text-[#8E8E93]">
                  {isEs ? item.descriptionEs : item.descriptionEn}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
