import React from 'react';
import { DevTechIcons } from './tech-icons/DevTechIcons';
import { CommerceTechIcons } from './tech-icons/CommerceTechIcons';
import { AITechIcons } from './tech-icons/AITechIcons';

export interface TechItem {
  name: string;
  icon: React.ReactNode;
  brandColor?: string;
}

export const TECH_LOGOS_MAP: Record<string, TechItem> = {
  // Core Web & Dev
  'HTML5': { name: 'HTML5', brandColor: '#E34F26', icon: DevTechIcons.HTML5 },
  'CSS3': { name: 'CSS3', brandColor: '#1572B6', icon: DevTechIcons.CSS3 },
  'JavaScript': { name: 'JavaScript', brandColor: '#F7DF1E', icon: DevTechIcons.JavaScript },
  'React Native': { name: 'React Native', brandColor: '#00D8FF', icon: DevTechIcons.ReactNative },
  'React': { name: 'React', brandColor: '#00D8FF', icon: DevTechIcons.React },
  'Flutter': { name: 'Flutter', brandColor: '#54C5F8', icon: DevTechIcons.Flutter },
  'Vue.js': { name: 'Vue.js', brandColor: '#4FC08D', icon: DevTechIcons.Vue },
  'TypeScript': { name: 'TypeScript', brandColor: '#3178C6', icon: DevTechIcons.TypeScript },
  'Vite': { name: 'Vite', brandColor: '#BD34FE', icon: DevTechIcons.Vite },
  'Next.js': { name: 'Next.js', brandColor: '#000000', icon: DevTechIcons.Next },
  'Tailwind': { name: 'Tailwind', brandColor: '#38BDF8', icon: DevTechIcons.Tailwind },
  'Supabase': { name: 'Supabase', brandColor: '#3ECF8E', icon: DevTechIcons.Supabase },
  'Node.js': { name: 'Node.js', brandColor: '#339933', icon: DevTechIcons.Node },
  'Python': { name: 'Python', brandColor: '#3776AB', icon: DevTechIcons.Python },
  'Vercel': { name: 'Vercel', brandColor: '#000000', icon: DevTechIcons.Vercel },
  'GitHub': { name: 'GitHub', brandColor: '#24292e', icon: DevTechIcons.GitHub },

  // Design, CMS, Commerce & Marketing
  'Figma': { name: 'Figma', brandColor: '#F24E1E', icon: CommerceTechIcons.Figma },
  'Canva': { name: 'Canva', brandColor: '#00C4CC', icon: CommerceTechIcons.Canva },
  'Stripe': { name: 'Stripe', brandColor: '#635BFF', icon: CommerceTechIcons.Stripe },
  'Wompi': { name: 'Wompi', brandColor: '#00C389', icon: CommerceTechIcons.Wompi },
  'Bold': { name: 'Bold', brandColor: '#FE385B', icon: CommerceTechIcons.Bold },
  'MercadoPago': { name: 'MercadoPago', brandColor: '#009EE3', icon: CommerceTechIcons.MercadoPago },
  'ManyChat': { name: 'ManyChat', brandColor: '#0084FF', icon: CommerceTechIcons.ManyChat },
  'WhatsApp': { name: 'WhatsApp Business', brandColor: '#25D366', icon: CommerceTechIcons.WhatsApp },
  'HubSpot': { name: 'HubSpot CRM', brandColor: '#FF7A59', icon: CommerceTechIcons.HubSpot },
  'Mailchimp': { name: 'Mailchimp', brandColor: '#FFE01B', icon: CommerceTechIcons.Mailchimp },
  'Metricool': { name: 'Metricool', brandColor: '#FF4B4B', icon: CommerceTechIcons.Metricool },
  'Meta Pixel': { name: 'Meta Pixel', brandColor: '#0668E1', icon: CommerceTechIcons.MetaPixel },
  'WordPress': { name: 'WordPress', brandColor: '#21759B', icon: CommerceTechIcons.WordPress },
  'Shopify': { name: 'Shopify', brandColor: '#95BF47', icon: CommerceTechIcons.Shopify },
  'WooCommerce': { name: 'WooCommerce', brandColor: '#96588A', icon: CommerceTechIcons.WooCommerce },
  'Liquid': { name: 'Liquid', brandColor: '#008060', icon: CommerceTechIcons.Liquid },
  'GA4': { name: 'GA4', brandColor: '#F9AB00', icon: CommerceTechIcons.GA4 },
  'Klaviyo': { name: 'Klaviyo', brandColor: '#25D366', icon: CommerceTechIcons.Klaviyo },
  'GraphQL': { name: 'GraphQL', brandColor: '#E10098', icon: CommerceTechIcons.GraphQL },

  // AI & Automation
  'Google Gemini': { name: 'Google Gemini', brandColor: '#1BA0E2', icon: AITechIcons.Gemini },
  'Gemini': { name: 'Google Gemini', brandColor: '#1BA0E2', icon: AITechIcons.Gemini },
  'OpenAI': { name: 'OpenAI (GPT-4o)', brandColor: '#10A37F', icon: CommerceTechIcons.OpenAI },
  'Claude': { name: 'Claude AI', brandColor: '#D97706', icon: CommerceTechIcons.Claude },
  'Groq': { name: 'Groq Inferencia', brandColor: '#F55036', icon: AITechIcons.Groq },
  'Make': { name: 'Make (Integromat)', brandColor: '#6D28D9', icon: AITechIcons.Make },
  'n8n': { name: 'n8n Workflow', brandColor: '#EA4B71', icon: AITechIcons.N8N },
  'Zapier': { name: 'Zapier', brandColor: '#FF4A00', icon: AITechIcons.Zapier },
  'FastAPI': { name: 'FastAPI', brandColor: '#009688', icon: AITechIcons.FastAPI },
  'Pinecone': { name: 'Pinecone Vector DB', brandColor: '#008080', icon: AITechIcons.Pinecone },
  'Webhooks': { name: 'Webhooks & REST', brandColor: '#00F0FF', icon: AITechIcons.Webhooks }
};

export function getTechInfo(name: string): TechItem {
  if (TECH_LOGOS_MAP[name]) return TECH_LOGOS_MAP[name];
  const match = Object.keys(TECH_LOGOS_MAP).find(
    k => name.toLowerCase().trim() === k.toLowerCase().trim() ||
         name.toLowerCase().includes(k.toLowerCase()) || 
         k.toLowerCase().includes(name.toLowerCase())
  );
  if (match) return TECH_LOGOS_MAP[match];

  return {
    name,
    brandColor: '#8E8E93',
    icon: <span className="w-2 h-2 rounded-full bg-[#FE385B]" />
  };
}

export const TECH_SHOWCASE_SOFTWARE: TechItem[] = [
  TECH_LOGOS_MAP['Next.js'],
  TECH_LOGOS_MAP['React'],
  TECH_LOGOS_MAP['TypeScript'],
  TECH_LOGOS_MAP['Tailwind'],
  TECH_LOGOS_MAP['Supabase'],
  TECH_LOGOS_MAP['Node.js'],
  TECH_LOGOS_MAP['Python'],
  TECH_LOGOS_MAP['GitHub'],
  TECH_LOGOS_MAP['Vercel'],
].filter(Boolean);

export const TECH_SHOWCASE_CMS: TechItem[] = [
  TECH_LOGOS_MAP['Shopify'],
  TECH_LOGOS_MAP['WordPress'],
  TECH_LOGOS_MAP['WooCommerce'],
  TECH_LOGOS_MAP['Stripe'],
  TECH_LOGOS_MAP['Bold'],
  TECH_LOGOS_MAP['MercadoPago'],
  TECH_LOGOS_MAP['GA4'],
  TECH_LOGOS_MAP['Meta Pixel'],
].filter(Boolean);

