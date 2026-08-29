import { ServiceItem } from './types';
import { contentPlatforms } from './content-platforms';
import { contentSubServices } from './content-subservices';

export const contentService: ServiceItem = {
  slug: "content",
  title: "Contenido & Media",
  subtitle: "Ecosistemas digitales que conectan y convierten.",
  approach: "Dominamos cada plataforma. Desde ecosistemas omnicanales hasta la gestión hiper-especializada de pauta publicitaria y contenido orgánico en Meta, Google y TikTok. Adaptamos tu contenido (Liquid Content) para exprimir cada recurso al máximo.",
  accent: "#F06C83",
  capabilities: contentPlatforms.map(p => ({
    id: p.id,
    slug: p.id,
    title: p.name,
    description: p.description,
    startingPrice: p.startingPrice,
    tiers: p.tiers,
  })),
  platforms: contentPlatforms,
  microServices: contentPlatforms.flatMap(p => p.microServices || []),
  subServices: contentSubServices,
  relatedProjectIds: ['kinetic-motion', 'sie-travel', 'boku-bento']
};
