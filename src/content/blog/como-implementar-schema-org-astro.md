---
title: "Cómo Implementar Schema.org en Astro (JSON-LD) | Guía 2026"
h1text: "Cómo Implementar Schema.org (JSON-LD) en Astro: Guía Paso a Paso"
description: "Aprende a implementar Schema.org en Astro con JSON-LD: Organization, Article, FAQPage y más. Guía técnica paso a paso para mejorar tu SEO y GEO."
pubDate: 2026-09-15
author: "Sebastián Armijos"
image:
  url: "/assets/blog/implementar-schema-org-astro.webp"
  alt: "Cómo implementar Schema.org y JSON-LD en un proyecto Astro"
tags: ["SEO", "GEO", "Desarrollo Web", "Astro", "Datos Estructurados"]
draft: false
---

En mi artículo sobre [GEO y cómo aparecer en ChatGPT y otras IA](/blog/como-aparecer-en-chatgpt-y-otras-ia) prometí escribir la parte técnica: cómo implementar Schema.org de verdad, no solo explicar qué es. Varios lectores me escribieron pidiéndolo, así que aquí está.

Si trabajas con Astro —o estás pensando en migrar tu sitio a este framework— esta guía te muestra exactamente cómo estructurar tus datos para que Google, y también las IA generativas, entiendan sin ambigüedad quién eres, qué ofreces y qué contenido tienes. Con ejemplos de código reales, no solo teoría.

---

## Tabla de Contenidos

| Sr# | Encabezados                                                       |
| --- | ----------------------------------------------------------------- |
| 1   | ¿Qué es Schema.org y por qué importa en un sitio Astro?           |
| 2   | JSON-LD vs microdata vs RDFa: por qué Google recomienda JSON-LD   |
| 3   | Los tipos de Schema que necesita un sitio de servicios            |
| 4   | Dónde vive esta información: el frontmatter como fuente de verdad |
| 5   | Crear un componente `Schema.astro` reutilizable                   |
| 6   | Ejemplo real: Organization + LocalBusiness en el home             |
| 7   | Ejemplo real: Article + Author en cada post del blog              |
| 8   | Ejemplo real: FAQPage en tus páginas de servicio                  |
| 9   | Cómo validar que tu implementación es correcta                    |
| 10  | Errores comunes que invalidan tu Schema                           |
| 11  | Checklist final de implementación                                 |
| 12  | ¿Cuándo conviene contratar ayuda profesional?                     |

---

## 1. ¿Qué es Schema.org y por qué importa en un sitio Astro?

**Schema.org** es un vocabulario compartido —mantenido por Google, Microsoft, Yahoo y Yandex— que le permite a tu sitio describir su propio contenido en un formato que las máquinas pueden leer sin interpretar. En lugar de que Google "adivine" que esa página habla de un servicio de desarrollo web en Cuenca, tú se lo dices explícitamente en un bloque de datos estructurados.

En un stack como Astro esto tiene una ventaja enorme: cada página ya nace desde un archivo `.astro` o desde contenido en Markdown/MDX con frontmatter. Ese frontmatter es exactamente la fuente de datos que necesitas para generar el Schema de forma automática, sin escribirlo a mano en cada página.

---

## 2. JSON-LD vs microdata vs RDFa: por qué Google recomienda JSON-LD

Existen tres formas de implementar datos estructurados. Esta tabla resume por qué **JSON-LD** es, sin discusión, la que deberías usar en un proyecto nuevo:

| Formato       | Dónde vive                                                             | Mantenimiento                                     | Recomendado por Google     |
| ------------- | ---------------------------------------------------------------------- | ------------------------------------------------- | -------------------------- |
| **JSON-LD**   | Bloque `<script type="application/ld+json">` separado del HTML visible | Fácil de generar dinámicamente, no toca el markup | Sí, es su método preferido |
| **Microdata** | Atributos (`itemscope`, `itemprop`) mezclados directo en el HTML       | Frágil: cualquier cambio de diseño puede romperlo | Soportado, no preferido    |
| **RDFa**      | Atributos similares a microdata, sintaxis distinta                     | Poco usado en proyectos modernos                  | Soportado, casi en desuso  |

JSON-LD gana porque puedes generarlo con JavaScript/TypeScript a partir de tus datos (frontmatter, CMS, base de datos) sin tocar el HTML visible de la página. En Astro esto se traduce en un componente que recibe props y devuelve el script — nada de mezclar atributos por todo el markup.

---

## 3. Los tipos de Schema que necesita un sitio de servicios

No necesitas implementar los más de 800 tipos que existen en Schema.org. Para un sitio de desarrollo web, agencia o freelance, estos cinco cubren el 90% de los casos:

- **`Organization` o `Person`** — quién eres, tu logo, tus redes sociales. Va en el home.
- **`LocalBusiness` / `ProfessionalService`** — tu ciudad, área de servicio, horario. Va en el home y/o en la página de contacto.
- **`Service`** — qué servicio específico ofreces, para cada página de `/servicios/*`.
- **`Article`** — autor, fecha de publicación y actualización, para cada post del blog.
- **`FAQPage`** — cada bloque de preguntas frecuentes, tanto en servicios como en artículos.

---

## 4. Dónde vive esta información: el frontmatter como fuente de verdad

La clave para no repetir información (y no generar inconsistencias, algo que ya vimos que penaliza tanto al SEO como al GEO) es tratar el frontmatter como la única fuente de verdad. Por ejemplo, para un post de blog:

```yaml
---
title: "Cómo elegir palabras clave para mi negocio"
description: "Aprende cómo elegir palabras clave para tu negocio..."
pubDate: 2026-04-22
updatedDate: 2026-04-22
author: "Sebastián Armijos"
image: "/assets/blog/como-elegir-palabras-clave.webp"
categories: ["SEO", "Marketing Digital"]
---
```

Con estos campos ya tienes todo lo necesario para generar un `Article` Schema completo, sin escribir nada adicional a mano en cada archivo.

---

## 5. Crear un componente `Schema.astro` reutilizable

Este es el componente central. Recibe un objeto de datos y devuelve el `<script>` con el JSON-LD ya serializado:

```astro
---
// src/components/Schema.astro
interface Props {
  schema: Record<string, any>;
}

const { schema } = Astro.props;
---

<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

Con esto resuelto una sola vez, cada layout o página solo necesita construir el objeto `schema` correspondiente e importarlo.

---

## 6. Ejemplo real: Organization + LocalBusiness en el home

```astro
---
// src/pages/index.astro
import Schema from "../components/Schema.astro";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Sebastián Armijos | Desarrollador Web",
  "image": "https://sebasarmijos.dev/assets/logo-sebastian-armijos-dev-transparente.png",
  "url": "https://sebasarmijos.dev",
  "telephone": "+593964085651",
  "email": "contacto@sebasarmijos.dev",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cuenca",
    "addressRegion": "Azuay",
    "addressCountry": "EC"
  },
  "areaServed": "EC",
  "sameAs": [
    "https://www.linkedin.com/in/sebastian-armijos-467b171b2/",
    "https://github.com/sebastian8080",
    "https://www.instagram.com/sebastian.armijos/"
  ]
};
---

<Schema schema={organizationSchema} />
```

Nota el campo `areaServed`: si trabajas de forma remota en varias ciudades (como mencionas en tu propia página de servicios: Quito, Guayaquil, Cuenca, Ambato, Loja, Machala), puedes convertirlo en un arreglo de objetos `City` en lugar de un solo string "EC". Eso refuerza tu relevancia local en cada una de esas búsquedas.

---

## 7. Ejemplo real: Article + Author en cada post del blog

Este bloque se construye dinámicamente a partir del frontmatter del artículo, así que se genera solo, sin tocarlo artículo por artículo:

```astro
---
// src/layouts/BlogPost.astro
import Schema from "../components/Schema.astro";

const { title, description, pubDate, updatedDate, author, image } = Astro.props;

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "image": image,
  "author": {
    "@type": "Person",
    "name": author
  },
  "datePublished": pubDate,
  "dateModified": updatedDate ?? pubDate,
  "publisher": {
    "@type": "Organization",
    "name": "Sebastián Armijos",
    "logo": {
      "@type": "ImageObject",
      "url": "https://sebasarmijos.dev/assets/logo-sebastian-armijos-dev-transparente.png"
    }
  }
};
---

<Schema schema={articleSchema} />
```

El campo `dateModified` es importante: como vimos en la guía de GEO, las IA generativas priorizan contenido con señales de actualización recientes. Cada vez que edites un artículo viejo para mantenerlo al día, actualiza `updatedDate` en el frontmatter y el Schema se actualiza solo.

---

## 8. Ejemplo real: FAQPage en tus páginas de servicio

Aquí es donde más valor rápido vas a obtener, porque tus páginas de servicio actuales no tienen FAQ propio todavía. La estructura es un arreglo simple de preguntas y respuestas:

```astro
---
import Schema from "../components/Schema.astro";

const faqs = [
  {
    question: "¿Cuánto cuesta el desarrollo de una página web profesional?",
    answer: "El costo depende del alcance del proyecto: una landing page sencilla, un sitio corporativo o una plataforma a medida tienen precios distintos. Te doy una cotización transparente después de conocer tu caso."
  },
  {
    question: "¿Cuánto tiempo toma desarrollar un sitio web?",
    answer: "Un sitio web a medida suele tomar entre 2 y 6 semanas, dependiendo de su complejidad y del número de revisiones."
  }
  // ... más preguntas
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
---

<Schema schema={faqSchema} />
```

Con este mismo arreglo `faqs` puedes renderizar el acordeón visual en la página **y** el Schema al mismo tiempo, sin duplicar el contenido en dos lugares distintos del código.

---

## 9. Cómo validar que tu implementación es correcta

Antes de dar por hecho que funciona, valida siempre con estas dos herramientas gratuitas de Google:

1. **[Rich Results Test](https://search.google.com/test/rich-results)** — pega la URL de tu página en producción o pega el código HTML directamente. Te dice si el Schema es válido y si es elegible para resultados enriquecidos.
2. **Search Console → Mejoras** — una vez que Google indexó tus páginas con Schema, este informe te muestra errores y advertencias a nivel de todo el sitio, no solo página por página.

Valida cada tipo de Schema por separado la primera vez (Organization, Article, FAQPage), y luego revisa una muestra cada vez que agregues contenido nuevo.

---

## 10. Errores comunes que invalidan tu Schema

- **Datos que no coinciden con lo visible en la página.** Si tu FAQPage dice una cosa en el Schema y otra distinta en el texto visible, Google puede ignorar o penalizar el marcado.
- **Un solo `@type` intentando cubrir demasiado.** Es mejor tener varios bloques de Schema específicos (Organization + Article + FAQPage) que uno solo mezclando todo.
- **Fechas mal formateadas.** `datePublished` y `dateModified` deben ir en formato ISO 8601 (`2026-09-15`), no en texto libre como "15 de septiembre".
- **Olvidar `dateModified` al editar contenido viejo.** Si actualizas un artículo pero no tocas este campo, pierdes la señal de "contenido fresco" que buscan tanto Google como las IA generativas.
- **Repetir el mismo `FAQPage` en varias páginas con contenido distinto.** Cada página debe tener el Schema que corresponde a su propio contenido visible, no uno genérico copiado de otra parte del sitio.

---

## 11. Checklist final de implementación

- [ ] Crear el componente reutilizable `Schema.astro`
- [ ] Implementar `Organization`/`ProfessionalService` en el home
- [ ] Implementar `Article` dinámico en el layout del blog, usando el frontmatter existente
- [ ] Agregar `FAQPage` a cada página de servicio, reutilizando el mismo arreglo de datos para el acordeón visual
- [ ] Validar cada tipo con Rich Results Test
- [ ] Revisar el informe de Search Console dos semanas después de publicar
- [ ] Confirmar que `dateModified` se actualiza cada vez que editas un artículo

---

## 12. ¿Cuándo conviene contratar ayuda profesional?

Si ya tienes conocimientos de Astro, puedes implementar todo lo anterior en una tarde. Donde sí conviene apoyo profesional es cuando:

- Tu sitio tiene decenas o cientos de páginas y necesitas automatizar el Schema desde una base de datos o CMS headless, no solo desde frontmatter estático.
- Quieres combinar esto con una estrategia más amplia de [posicionamiento SEO](/servicios/posicionamiento-seo/) que vaya más allá de lo técnico.
- Prefieres partir de una [auditoría técnica](/servicios/auditoria-tecnica/) que te diga exactamente qué Schema falta o está mal implementado en tu sitio actual, antes de tocar código.

Schema.org no es la parte más vistosa del SEO, pero es de las que más impacto tiene por el tiempo que toma implementarla. Si ya tienes un sitio en Astro, no hay excusa para no tenerlo hecho esta semana.

¿Tienes dudas sobre cómo aplicarlo a tu proyecto? [Conversemos](/contacto) y lo revisamos juntos.

---