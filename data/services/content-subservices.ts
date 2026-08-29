import { SubService } from './types';
import { contentPlatforms } from './content-platforms';

export const contentSubServices: SubService[] = contentPlatforms.map((platform) => ({
  slug: platform.id,
  parentSlug: "content",
  title: platform.name,
  tagline: platform.tagline || platform.description,
  description: platform.description,
  approach: "Adaptamos el contenido a la psicología y lenguaje de cada plataforma para maximizar la retención y la conversión sin desperdiciar recursos.",
  startingPrice: `$${platform.startingPrice?.USD || 300} USD`,
  startingPriceCOP: `$${platform.startingPrice?.COP?.toLocaleString('es-CO') || '1.200.000'} COP`,
  startingPriceUSD: `$${platform.startingPrice?.USD || 300} USD`,
  estimatedTimeline: "1 a 2 Semanas",
  accent: "#F06C83",
  deliverables: platform.tiers.flatMap(t => t.features.slice(0, 2).map(f => typeof f === 'string' ? f : f.text)),
  pricingTiers: platform.tiers.map((t, idx) => ({
    id: `${platform.id}-${idx}`,
    name: t.name,
    price: `$${t.price.COP?.toLocaleString('es-CO')} COP`,
    deposit: `$${Math.round((t.price.COP || 0) * 0.5).toLocaleString('es-CO')} COP (50%)`,
    priceCOP: `$${t.price.COP?.toLocaleString('es-CO')} COP`,
    priceUSD: `$${t.price.USD?.toLocaleString('en-US')} USD`,
    depositCOP: `$${Math.round((t.price.COP || 0) * 0.5).toLocaleString('es-CO')} COP`,
    depositUSD: `$${Math.round((t.price.USD || 0) * 0.5).toLocaleString('en-US')} USD`,
    timeline: "1 a 2 Semanas",
    popular: t.isRecommended,
    isRecommended: t.isRecommended,
    description: t.description || '',
    features: t.features.map(f => typeof f === 'string' ? f : f.text)
  })),
  faqs: [
    {
      question: "¿Puedo combinar servicios de diferentes plataformas?",
      answer: "Sí, puedes elegir un plan base de una plataforma y añadir micro-servicios específicos de otras plataformas para armar un paquete a medida."
    },
    {
      question: "¿Quién proporciona el material en video o fotos?",
      answer: "Podemos trabajar con tus activos existentes o programar sesiones de grabación presenciales / creadores UGC según el plan seleccionado."
    }
  ]
}));
