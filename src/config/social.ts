// src/config/social.ts
// Configuración centralizada de redes sociales

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/sebastian8080", // CAMBIAR POR TU URL
    icon: "fab fa-github",
    color: "hover:bg-gray-800",
    ariaLabel: "Visitar mi perfil de GitHub",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sebastian-armijos-467b171b2/", // CAMBIAR POR TU URL
    icon: "fab fa-linkedin",
    color: "hover:bg-blue-700",
    ariaLabel: "Visitar mi perfil de LinkedIn",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/sebastian.armijos", // CAMBIAR POR TU URL
    icon: "fab fa-instagram",
    color: "hover:bg-pink-600",
    ariaLabel: "Visitar mi perfil de Instagram",
  },
  // Puedes agregar más redes sociales aquí
  // {
  //   name: "YouTube",
  //   url: "https://youtube.com/@tu-canal",
  //   icon: "fab fa-youtube",
  //   color: "hover:bg-red-600",
  //   ariaLabel: "Visitar mi canal de YouTube",
  // },
];

// Función helper para filtrar redes sociales activas
export const getActiveSocialLinks = (): SocialLink[] => {
  // Puedes agregar lógica aquí para filtrar solo las que tienen URL válidas
  return socialLinks.filter((link) => !link.url.includes("tu-usuario"));
};