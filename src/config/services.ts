// src/config/services.ts
// Configuración centralizada de servicios para mantener consistencia

export interface Service {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  icono: string;
  url: string;
  color: string;
}

export const services: Service[] = [
  {
    id: "1",
    nombre: "Desarrollo Web Profesional",
    descripcion:
      "Creamos sitios web modernos, responsivos y optimizados para cualquier dispositivo, enfocados en la experiencia de usuario y la estética.",
    imagen: "/assets/desarrollo-web-profesional.webp",
    icono: "fas fa-laptop-code",
    url: "/servicios/desarrollo-web-profesional",
    color: "bg-blue-500",
  },
  {
    id: "2",
    nombre: "Optimización SEO",
    descripcion:
      "Mejoramos la visibilidad de tu sitio web en los motores de búsqueda para atraer más tráfico orgánico y clientes potenciales.",
    imagen: "/assets/optimizacion-motores-busqueda-seo.webp",
    icono: "fas fa-search",
    url: "/servicios/optimizacion-seo",
    color: "bg-green-500",
  },
  {
    id: "3",
    nombre: "Auditoría Técnica",
    descripcion:
      "Identificar y solucionar los problemas técnicos de SEO que afectan la visibilidad de un sitio web.",
    imagen: "/assets/servicio-de-auditoria-tecnica.webp",
    icono: "fa-solid fa-bug",
    url: "/servicios/auditoria-tecnica",
    color: "bg-purple-500",
  },
];

// Función helper para obtener servicios destacados
export const getFeaturedServices = (limit: number = 3): Service[] => {
  return services.slice(0, limit);
};

// Función helper para obtener un servicio por ID
export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};
