import { ServiceItem } from './types';
import { 
  experienceCapabilities, 
  experienceMicroServices 
} from './experience-capabilities';
import { experienceSubServices } from './experience-subservices';

export const experienceService: ServiceItem = {
  slug: "experience",
  title: "Estrategia UX & Service Design",
  subtitle: "Diagnóstico y lógica operativa.",
  approach: "No dibujamos pantallas; resolvemos cuellos de botella. Analizamos cómo interactúan tus usuarios y empleados con tus sistemas (físicos o digitales) para diseñar flujos eficientes, eliminar la fricción y optimizar tus márgenes de operación.",
  accent: "#FFCC48",
  capabilities: experienceCapabilities,
  microServices: experienceMicroServices,
  subServices: experienceSubServices,
};
