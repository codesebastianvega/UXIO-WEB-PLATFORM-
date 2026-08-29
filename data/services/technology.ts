import { ServiceItem } from './types';
import { technologyCapabilities, technologyMicroServices } from './technology-capabilities';
import { technologySubServices } from './technology-subservices';

export { technologySubServices } from './technology-subservices';

export const technologyServiceBase = {
  slug: "technology",
  title: "Desarrollo & Tecnología",
  subtitle: "Ingeniería para la imaginación.",
  approach: "Creemos que todos merecemos productos digitales espectaculares y a la vanguardia. En UXIO no solo escribimos código; somos el motor técnico que hace tangibles tus sueños. Tú pones la imaginación sin límites, y nosotros construimos herramientas hermosas y excepcionalmente útiles.",
  accent: "#00F0FF",
  capabilities: technologyCapabilities,
  microServices: technologyMicroServices,
};

export const technologyService: ServiceItem = {
  ...technologyServiceBase,
  subServices: technologySubServices
};
