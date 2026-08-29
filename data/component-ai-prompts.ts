import { getComponentSourceCode } from './component-code-templates';

/**
 * AI Prompt Generator per Component
 * Formats optimized prompts for ChatGPT, Claude, Cursor, v0, Gemini, Antigravity.
 */
export function getComponentAiPrompt(slug: string, usageCode: string, extraParams: Record<string, any> = {}): string {
  const sourceCode = getComponentSourceCode(slug);

  switch (slug) {
    case 'spotlight-card':
      return `# Prompt de Integración para IA (Cursor, v0, ChatGPT, Claude)

Actúa como un desarrollador Frontend Senior experto en Next.js, React 18/19 y Tailwind CSS.
Necesito que implementes el componente interactivo "FluidSpotlightCard" diseñado por UXIO Studio & Labs.

### 🎯 ESPECIFICACIONES CALIBRADAS:
- **Color de Halo**: "${extraParams.color || '#FE385B'}"
- **Radio del Halo**: ${extraParams.spotlightRadius || 220}px
- **Desenfoque Gaussiano**: ${extraParams.blurIntensity || 30}px
- **Viscosidad LERP**: ${extraParams.viscosity || 0.075}
- **Opacidad del Brillo**: ${extraParams.spotlightOpacity || 0.11}
- **Física Fluida**: Amortiguación no newtoniana con requestAnimationFrame.

### 📦 01 · Archivo: "components/ui/FluidSpotlightCard.tsx"
\`\`\`tsx
${sourceCode}
\`\`\`

### 🚀 02 · Ejemplo de integración:
\`\`\`tsx
${usageCode}
\`\`\`

Por favor, crea el archivo en mi proyecto y verifica que las animaciones sean totalmente fluidas a 120 FPS.`;

    case 'hover-link-preview':
      return `# Prompt de Integración para IA (Cursor, v0, ChatGPT, Claude)

Actúa como un desarrollador Frontend Senior experto en Next.js, React 18/19 y Tailwind CSS.
Necesito que implementes el componente interactivo "HoverLinkPreview" diseñado por UXIO Studio & Labs.

### 🎯 ESPECIFICACIONES CALIBRADAS:
- **Título**: "${extraParams.title || 'SaaS Dashboard Pro'}"
- **Descripción**: "${extraParams.description || 'Panel de analítica en tiempo real.'}"
- **Badge**: "${extraParams.badge || 'Live Preview'}"
- **Color de Acento**: "${extraParams.accentColor || '#00F0FF'}"
- **Posición**: "${extraParams.placement || 'top'}"
- **Ancho del Popover**: ${extraParams.cardWidth || 280}px
- **Hover Bridge**: Puente invisible continuo para evitar cierres accidentales al mover el mouse.

### 📦 01 · Archivo: "components/ui/HoverLinkPreview.tsx"
\`\`\`tsx
${sourceCode}
\`\`\`

### 🚀 02 · Ejemplo de uso:
\`\`\`tsx
${usageCode}
\`\`\`

Por favor, crea el archivo en mi proyecto y verifica que el puente de eventos sea interactivo y reactivo.`;

    case 'magnetic-button':
      return `# Prompt de Integración para IA (Cursor, v0, ChatGPT, Claude)

Actúa como un desarrollador Frontend Senior experto en Next.js, React 18/19 y física en Canvas/DOM.
Necesito que implementes el componente interactivo "MagneticPillButton" diseñado por UXIO Studio & Labs.

### 🎯 ESPECIFICACIONES CALIBRADAS:
- **Texto**: "${extraParams.text || 'Lanzar Proyecto'}"
- **Fuerza de Gravedad (Strength)**: ${extraParams.strength || 0.35}
- **Radio de Proximidad (Trigger Radius)**: ${extraParams.triggerRadius || 120}px
- **Color de Acento & Pulso**: "${extraParams.accentColor || '#10B981'}"
- **Variante**: "${extraParams.variant || 'obsidian'}"
- **Tamaño**: "${extraParams.size || 'md'}"
- **Física 3D**: Atracción magnética elástica por distancia + desplazamiento sub-paralaje interno para profundidad.

### 📦 01 · Archivo: "components/ui/MagneticPillButton.tsx"
\`\`\`tsx
${sourceCode}
\`\`\`

### 🚀 02 · Ejemplo de integración:
\`\`\`tsx
${usageCode}
\`\`\`

Por favor, crea el archivo en mi proyecto y verifica la gravedad magnética del cursor a 120 FPS.`;

    case 'noise-mesh-bg':
    case 'noise-mesh':
      return `# Prompt de Integración para IA (Cursor, v0, ChatGPT, Claude)

Actúa como un desarrollador Frontend Senior experto en Next.js, HTML5 Canvas 2D y WebGL.
Necesito que implementes el componente de fondo procedural "NoiseMeshCanvas" diseñado por UXIO Studio & Labs.

### 🎯 ESPECIFICACIONES CALIBRADAS:
- **Colores de la Malla**: ${JSON.stringify(extraParams.noiseMeshColors || ['#7928CA', '#00F0FF', '#FE385B'])}
- **Velocidad Orbital**: ${extraParams.noiseMeshSpeed || 1.0}x
- **Densidad de Ruido Analógico**: ${extraParams.noiseMeshOpacity || 0.12}
- **Difuminado de Malla (Blur)**: ${extraParams.noiseMeshBlur || 70}px
- **Influencia del Mouse (Reactivity)**: ${extraParams.noiseMeshMouse || 0.4}
- **Rendimiento**: Canvas 2D acelerado por GPU con textura de grano procedural y movimiento armónico.

### 📦 01 · Archivo: "components/ui/NoiseMeshCanvas.tsx"
\`\`\`tsx
${sourceCode}
\`\`\`

### 🚀 02 · Ejemplo de integración:
\`\`\`tsx
${usageCode}
\`\`\`

Por favor, crea el archivo en mi proyecto y comprueba la interactividad fluida con el cursor.`;

    case 'craft-bento-grid':
    case 'bento-grid':
      return `# Prompt de Integración para IA (Cursor, v0, ChatGPT, Claude)

Actúa como un desarrollador Frontend Senior experto en Next.js 15, Tailwind CSS y arquitecturas Bento Grid.
Necesito que implementes el componente interactivo "BentoCraftGrid" diseñado por UXIO Studio & Labs.

### 🎯 ESPECIFICACIONES CALIBRADAS:
- **Variante de Layout**: "${extraParams.bentoVariant || 'saas'}"
- **Color de Acento & Glow**: "${extraParams.bentoColor || '#FE385B'}"
- **Radio de Bordes**: ${extraParams.bentoRadius || 20}px
- **Espaciado entre Celdas (Gap)**: ${extraParams.bentoGap || 12}px
- **Glow Reactivo al Hover**: ${extraParams.bentoGlow !== false}
- **Diseño**: Asimétrico, adaptativo, tarjetas con telemetría visual y cero dependencias pesadas.

### 📦 01 · Archivo: "components/ui/BentoCraftGrid.tsx"
\`\`\`tsx
${sourceCode}
\`\`\`

### 🚀 02 · Ejemplo de integración:
\`\`\`tsx
${usageCode}
\`\`\`

Por favor, crea el archivo en mi proyecto y comprueba la interactividad en desktop y mobile.`;

    case 'dock-navigator':
    case 'obsidian-dock':
      return `# Prompt de Integración para IA (Cursor, v0, ChatGPT, Claude)

Actúa como un desarrollador Frontend Senior experto en Next.js, interfaces macOS y física de UI.
Necesito que implementes el componente de navegación "ObsidianDockNav" diseñado por UXIO Studio & Labs.

### 🎯 ESPECIFICACIONES CALIBRADAS:
- **Variante Visual**: "${extraParams.dockVariant || 'obsidian'}"
- **Color de Acento & LED**: "${extraParams.dockColor || '#00F0FF'}"
- **Tamaño Base del Icono**: ${extraParams.dockBaseSize || 44}px
- **Magnificación Máxima**: ${extraParams.dockMaxScale || 1.8}x
- **Distancia de Proximidad**: ${extraParams.dockDistance || 110}px
- **Espaciado entre Iconos (Gap)**: ${extraParams.dockGap || 10}px
- **Física Sin Solapamiento**: Expansión dinámica en el flujo flex con alineación inferior para empujar vecinos con holgura.

### 📦 01 · Archivo: "components/ui/ObsidianDockNav.tsx"
\`\`\`tsx
${sourceCode}
\`\`\`

### 🚀 02 · Ejemplo de integración:
\`\`\`tsx
${usageCode}
\`\`\`

Por favor, crea el archivo en mi proyecto y comprueba la fluidez a 120 FPS.`;

    case 'kinetic-slider':
    case 'kinetic-snap-slider':
      return `# Prompt de Integración para IA (Cursor, v0, ChatGPT, Claude)

Actúa como un desarrollador Frontend Senior experto en Next.js, Pointer Events y aceleración GPU.
Necesito que implementes el componente de carrusel cinético "KineticSnapSlider" diseñado por UXIO Studio & Labs.

### 🎯 ESPECIFICACIONES CALIBRADAS:
- **Color de Acento**: "${extraParams.kineticColor || '#FE385B'}"
- **Escala de Zoom Activo**: ${extraParams.kineticScale || 1.08}x
- **Espaciado entre Slides**: ${extraParams.kineticGap || 20}px
- **Autoplay**: ${extraParams.kineticAutoplay || false}
- **Física Inercial**: Arrastre suave con Pointer Events y centrado magnético al soltar.

### 📦 01 · Archivo: "components/ui/KineticSnapSlider.tsx"
\`\`\`tsx
${sourceCode}
\`\`\`

### 🚀 02 · Ejemplo de integración:
\`\`\`tsx
${usageCode}
\`\`\`

Por favor, crea el archivo en mi proyecto y comprueba el arrastre táctil y con mouse a 120 FPS.`;

    default:
      return `# Prompt de Integración de Componente UI para IA

Actúa como un desarrollador Frontend Senior experto en Next.js y Tailwind CSS.
Necesito que implementes el componente UI diseñado por UXIO Studio & Labs.

### 📦 01 · Código del componente:
\`\`\`tsx
${sourceCode}
\`\`\`

### 🚀 02 · Ejemplo de uso:
\`\`\`tsx
${usageCode}
\`\`\``;
  }
}
