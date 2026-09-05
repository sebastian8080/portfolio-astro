import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Motor de animaciones global, dirigido por atributos `data-*`.
 *
 * En vez de escribir un <script> de GSAP en cada componente, cualquier
 * elemento del HTML puede "declarar" su propia animación:
 *
 *   <div data-animate="up">...</div>                     → fade-in individual
 *   <div data-animate-group="up" data-animate-stagger="0.1">
 *     <div data-animate-item>...</div>                    → hijos en cascada
 *     <div data-animate-item>...</div>
 *   </div>
 *   <h1 data-hero-step>...</h1>                           → intro inmediata (sin scroll)
 *
 * Esto mantiene los componentes .astro libres de lógica de animación:
 * solo agregan atributos, y este módulo (importado una vez en el layout)
 * se encarga de todo. Escalar a un componente nuevo = agregar el atributo.
 */

gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "down" | "left" | "right" | "zoom" | "fade";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
const SCROLL_START = "top 85%";
const DEFAULT_DURATION = 0.7;
const DEFAULT_STAGGER = 0.12;
const DEFAULT_OFFSET = 40;

// Debe coincidir con el CSS crítico de layout.astro que oculta estos
// elementos antes del primer paint (evita el parpadeo sin-efecto/con-efecto).
const ANIMATABLE_SELECTOR = "[data-animate], [data-hero-step], [data-animate-group] [data-animate-item]";

const HIDDEN_STATE_BY_DIRECTION: Record<Direction, gsap.TweenVars> = {
  up: { y: DEFAULT_OFFSET },
  down: { y: -DEFAULT_OFFSET },
  left: { x: DEFAULT_OFFSET },
  right: { x: -DEFAULT_OFFSET },
  zoom: { scale: 0.9 },
  fade: {},
};

function isDirection(value: string | undefined): value is Direction {
  return !!value && value in HIDDEN_STATE_BY_DIRECTION;
}

function hiddenState(direction: string | undefined): gsap.TweenVars {
  const resolved = isDirection(direction) ? direction : "up";
  return { ...HIDDEN_STATE_BY_DIRECTION[resolved], opacity: 0 };
}

function visibleState(duration: number, delay: number): gsap.TweenVars {
  return {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    duration,
    delay,
    ease: "power2.out",
  };
}

/** Elementos individuales: `data-animate="up|down|left|right|zoom|fade"`. */
function revealSingles(): void {
  document.querySelectorAll<HTMLElement>("[data-animate]").forEach((el) => {
    const duration = Number(el.dataset.animateDuration) || DEFAULT_DURATION;
    const delay = Number(el.dataset.animateDelay) || 0;

    gsap.fromTo(el, hiddenState(el.dataset.animate), {
      ...visibleState(duration, delay),
      scrollTrigger: { trigger: el, start: SCROLL_START, once: true },
    });
  });
}

/** Grupos con hijos en cascada: `data-animate-group` + `data-animate-item`. */
function revealGroups(): void {
  document.querySelectorAll<HTMLElement>("[data-animate-group]").forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>("[data-animate-item]");
    if (!items.length) return;

    const stagger = Number(group.dataset.animateStagger) || DEFAULT_STAGGER;

    gsap.fromTo(items, hiddenState(group.dataset.animateGroup), {
      ...visibleState(DEFAULT_DURATION, 0),
      stagger,
      scrollTrigger: { trigger: group, start: SCROLL_START, once: true },
    });
  });
}

/** Intro del hero: `data-hero-step`, se reproduce al cargar (sin scroll). */
function playHeroIntro(): void {
  const steps = document.querySelectorAll<HTMLElement>("[data-hero-step]");
  if (!steps.length) return;

  gsap.fromTo(
    steps,
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.15, delay: 0.15 }
  );
}

function runAnimations(): void {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

  if (window.matchMedia(REDUCED_MOTION_QUERY).matches) {
    // El CSS crítico los oculta por defecto; sin animación, hay que
    // revelarlos al instante en vez de dejarlos ocultos para siempre.
    gsap.set(document.querySelectorAll<HTMLElement>(ANIMATABLE_SELECTOR), {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    });
    return;
  }

  playHeroIntro();
  revealSingles();
  revealGroups();
  ScrollTrigger.refresh();
}

// Astro con ClientRouter (View Transitions) reutiliza el <script> del layout
// entre navegaciones, así que nos enganchamos a su ciclo de vida en vez de
// DOMContentLoaded: `astro:page-load` cubre tanto la carga inicial como cada
// swap, y limpiamos los ScrollTrigger anteriores antes de que el DOM cambie.
document.addEventListener("astro:page-load", runAnimations);
document.addEventListener("astro:before-swap", () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
