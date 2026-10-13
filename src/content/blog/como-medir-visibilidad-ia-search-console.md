---
title: "Cómo Medir tu Visibilidad en IA con Search Console"
h1text: "Cómo Saber si tu Web Aparece en las Respuestas de IA de Google"
description: "Descubre cómo saber si tu web aparece en las respuestas de IA de Google con el nuevo informe de Search Console, paso a paso y sin tecnicismos."
pubDate: 2026-10-13
author: "Sebastián Armijos"
image:
  url: "/assets/blog/como-medir-visibilidad-ia-search-console.webp"
  alt: "Tablet con gráficos de análisis web que representan la visibilidad de un sitio en respuestas de inteligencia artificial"
tags: ["SEO", "GEO", "Inteligencia Artificial", "Search Console", "Analítica Web"]
draft: false
---

Cuando alguien le hace una pregunta a Google y aparece una respuesta redactada por inteligencia artificial, tu sitio puede ser una de las fuentes que Google usó para armarla. Y puede pasar sin que nadie haga clic en tu página. Hasta hace poco no había forma de saber si eso te estaba ocurriendo.

Desde el 3 de junio de 2026, Google agregó a Search Console un informe pensado justo para eso. En esta guía te explico, con palabras simples, qué muestra ese informe, qué no te dice y cómo combinarlo con otras revisiones para saber si tu negocio está apareciendo en las respuestas de IA.

Si ya leíste mi guía sobre [cómo aparecer en ChatGPT y otras IA](/blog/como-aparecer-en-chatgpt-y-otras-ia), este artículo es el paso siguiente: pasar de aplicar mejoras a **comprobar si están funcionando**.

---

## Tabla de Contenidos

| Sr# | Encabezados                                                        |
| --- | ------------------------------------------------------------------ |
| 1   | ¿Qué es el nuevo informe de IA de Search Console?                  |
| 2   | Por qué conviene medir tu visibilidad en IA                        |
| 3   | Cómo encontrar el informe en tu cuenta                             |
| 4   | Qué te dice el informe (y qué no)                                  |
| 5   | Cómo leer los números sin confundirte                              |
| 6   | El "efecto cocodrilo": más impresiones, menos clics                |
| 7   | Cómo completar la medición: Analytics, pruebas manuales y clientes |
| 8   | Qué hacer según lo que veas en tus datos                           |
| 9   | Errores comunes al medir tu visibilidad en IA                      |
| 10  | Checklist para este mes                                            |
| 11  | ¿Cuándo conviene contratar ayuda profesional?                      |

---

## 1. ¿Qué es el nuevo informe de IA de Search Console?

**Google Search Console** es una herramienta gratuita de Google que te muestra cómo aparece tu sitio web en las búsquedas. Hasta ahora te decía cuántas veces apareció tu página y cuántos clics recibió, pero mezclaba todo en un solo informe.

El [informe de rendimiento de IA generativa](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) separa una parte de esa información. Te muestra cuántas veces tus páginas aparecieron dentro de las funciones de IA de Google:

- **AI Overviews:** los resúmenes con IA que a veces aparecen arriba de los resultados normales.
- **AI Mode (Modo IA):** una forma de buscar en la que conversas con Google y haces preguntas de seguimiento.
- **Discover:** el feed de contenido recomendado que ves en el celular, en su versión con funciones de IA.

Es decir, por primera vez tienes un dato oficial de Google sobre tu presencia en las respuestas de IA, sin depender de herramientas de terceros.

---

## 2. Por qué conviene medir tu visibilidad en IA

Hay tres razones prácticas:

**1. Cada vez más gente usa estas funciones.** Google informó en mayo de 2026 que el Modo IA ya supera los mil millones de usuarios al mes. Aunque en tu ciudad el uso sea menor, la tendencia va en esa dirección.

**2. Las preguntas son más largas y más completas.** Según datos que Google publicó en marzo de 2026, las consultas en Modo IA tienen en promedio el triple de longitud que una búsqueda tradicional. La gente ya no escribe "desarrollador web Cuenca": pregunta frases completas. Por eso el contenido que responde preguntas concretas tiene ventaja.

**3. Si solo miras clics, te pierdes parte de la historia.** Una página puede estar apareciendo en cientos de respuestas de IA y recibir pocas visitas. Sin medir las apariciones, no sabrías que tu contenido está funcionando.

Un detalle importante: este informe es una **mejora en la medición, no una nueva señal para posicionar mejor**. Te ayuda a ver qué pasa, pero lo que mejora tus resultados sigue siendo publicar contenido útil y bien explicado.

---

## 3. Cómo encontrar el informe en tu cuenta

Sigue estos pasos:

1. Entra a [Search Console](https://search.google.com/search-console) con la cuenta de Google que usaste para verificar tu sitio.
2. Selecciona tu sitio web (lo que Google llama "propiedad").
3. Busca en el menú el informe de **IA generativa** (Generative AI).

Dos aclaraciones que te ahorran frustraciones:

- **El informe está en fase beta y se está activando poco a poco.** Si todavía no aparece en tu cuenta, no hiciste nada mal: vuelve a revisar en unas semanas.
- **Si aún no tienes Search Console, configúralo hoy.** Es gratis y toma pocos minutos. Los datos empiezan a acumularse desde que verificas el sitio, así que mientras antes lo hagas, más historial tendrás para comparar.

---

## 4. Qué te dice el informe (y qué no)

Antes de abrirlo, conviene saber qué puedes esperar de él:

| Lo que quieres saber                                        | ¿Lo muestra el informe?                            |
| ----------------------------------------------------------- | -------------------------------------------------- |
| ¿Cuántas veces aparecieron mis páginas en respuestas de IA? | Sí (se llaman impresiones)                         |
| ¿Cuáles de mis páginas aparecen?                            | Sí                                                 |
| ¿Desde qué países?                                          | Sí                                                 |
| ¿Cómo cambió con el tiempo?                                 | Sí, por fechas                                     |
| ¿Desde qué tipo de dispositivo?                             | Sí, en el informe de Search (celular o computador) |
| ¿Cuántos clics recibí desde la IA?                          | No por separado: se mezclan con el informe normal  |
| ¿Con qué preguntas aparecí?                                 | No por ahora                                       |
| ¿Aparezco en ChatGPT, Perplexity o Claude?                  | No, el informe solo cubre las funciones de Google  |

Google ha dicho que irá agregando más datos con el tiempo. Por ahora, piensa en este informe como un **termómetro de apariciones**, no como un reporte completo.

---

## 5. Cómo leer los números sin confundirte

Algunas ideas simples para interpretar lo que veas:

**Una impresión no es una visita.** Significa que tu página apareció como fuente dentro de una respuesta de IA. No quiere decir que la persona haya entrado a tu sitio.

**Mira la tendencia, no un día suelto.** Compara semanas o meses. Un día con muchas apariciones y otro con pocas es normal.

**Fíjate en cuáles son tus páginas más mostradas.** Anota las tres primeras y pregúntate qué tienen en común: ¿responden una pregunta concreta? ¿tienen datos claros, como precios o pasos? Eso te dice qué tipo de contenido está funcionando y cuál conviene repetir.

**Si ves cifras muy bajas o ceros, no entres en pánico.** Puede ser que tu tema todavía genere pocas respuestas de IA, o que tu sitio aún tenga poco contenido que responda preguntas directas. Es un punto de partida, y lo valioso es compararlo dentro de uno o dos meses.

---

## 6. El "efecto cocodrilo": más impresiones, menos clics

Algunos especialistas en SEO llaman así a un patrón que se está volviendo común: en Search Console, **las impresiones suben y los clics bajan**. Si dibujas las dos líneas en un gráfico, se abren como la boca de un cocodrilo.

¿Por qué pasa? Porque Google muestra tu contenido, pero la persona obtiene la respuesta sin entrar a tu página. Un estudio de Ahrefs, por ejemplo, calculó que los resúmenes de IA reducen los clics en alrededor de un 34 %, aunque las cifras cambian según el estudio y el tipo de búsqueda.

Esto no siempre es malo. Significa que tu marca está siendo vista. Lo importante es no medir solo visitas, sino también lo que realmente te da dinero:

- Llamadas.
- Mensajes de WhatsApp.
- Formularios enviados.
- Solicitudes de cotización.

A veces recibes menos visitas, pero las que llegan son de personas más decididas.

---

## 7. Cómo completar la medición: Analytics, pruebas manuales y clientes

El informe de Search Console solo cubre Google. Para ver el panorama completo, combina tres revisiones sencillas:

### a) Revisa Google Analytics

Entra al informe de fuentes de tráfico y busca visitas que lleguen desde sitios de IA, por ejemplo **chatgpt.com** o **perplexity.ai**. Ten en cuenta que las visitas que vienen de los AI Overviews y del Modo IA de Google se mezclan con el tráfico normal de Google, así que ahí no se distinguen.

### b) Haz una prueba manual cada mes

Es el mismo ejercicio que te expliqué en la [guía de GEO](/blog/como-aparecer-en-chatgpt-y-otras-ia): abres ChatGPT, Perplexity y Gemini, haces las preguntas que haría un cliente real y anotas si apareces. Usa una tabla como esta:

| Fecha | Pregunta que hice | Herramienta | ¿Aparecí? | Fuente que citaron |
| ----- | ----------------- | ----------- | --------- | ------------------ |
|       |                   |             |           |                    |

Con cinco preguntas al mes es suficiente. Lo importante es repetir **las mismas preguntas** para poder comparar.

### c) Pregunta a tus clientes cómo te encontraron

Es gratis y muy efectivo. Agrega una pregunta al formulario de contacto, o dila en tu primera conversación por WhatsApp: *"¿Cómo nos conociste?"*. Muchas veces la respuesta incluye "le pregunté a ChatGPT" o "me salió en Google", y ese dato no aparece en ninguna herramienta.

También existen herramientas de pago que prometen seguir tu visibilidad en IA, pero sus datos todavía son aproximados. Para un negocio pequeño o mediano, con lo anterior es suficiente.

---

## 8. Qué hacer según lo que veas en tus datos

| Lo que ves                                 | Qué puede significar                                               | Qué hacer                                                                                                                                           |
| ------------------------------------------ | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Casi no hay impresiones                    | Tu sitio aún tiene poco contenido que responda preguntas concretas | Publica páginas que respondan una pregunta real en las primeras líneas, como explico en la [guía de GEO](/blog/como-aparecer-en-chatgpt-y-otras-ia) |
| Las impresiones suben pero los clics bajan | Es el efecto cocodrilo: la respuesta ya le basta a muchas personas | Mide llamadas y mensajes, y ofrece en tu página algo que la respuesta no da: precios, ejemplos, casos reales                                        |
| Una página aparece mucho                   | Ese contenido le gusta a Google y a la IA                          | Actualízala con frecuencia, agrega datos claros y enlaza desde ella a tus servicios                                                                 |
| Tus páginas de servicios casi no aparecen  | Falta información clara y bien ordenada                            | Reescribe la introducción como pregunta y respuesta, y agrega [datos estructurados](/blog/como-implementar-schema-org-astro)                        |
| Las impresiones caen de golpe              | Puede ser un cambio de Google o un problema técnico de tu sitio    | Revisa en Search Console si hay errores de indexación y espera antes de sacar conclusiones                                                          |

Sobre la última fila: Google ha tenido varias actualizaciones este año (una grande que terminó el 2 de junio y una contra el spam en septiembre). Cuando hay una actualización, Google recomienda esperar al menos una semana después de que termine antes de analizar tus datos. Si tras ese tiempo la caída sigue, conviene hacer una [auditoría técnica](/servicios/auditoria-tecnica) para encontrar la causa.

---

## 9. Errores comunes al medir tu visibilidad en IA

- **Confundir una impresión con una visita.** Son cosas distintas, y mezclarlas lleva a conclusiones equivocadas.
- **Mirar un solo día o una sola semana.** Los datos de IA se mueven mucho; lo útil es la tendencia de varias semanas.
- **Esperar datos que el informe todavía no ofrece**, como las preguntas exactas o los clics separados.
- **Medir solo Google.** Si tus clientes usan ChatGPT o Perplexity, también necesitas la prueba manual.
- **Cambiar muchas cosas a la vez.** Si reescribes diez páginas el mismo día, no sabrás cuál mejoró tus resultados.
- **No guardar un punto de partida.** Sin una cifra inicial, no puedes saber si estás mejorando.

---

## 10. Checklist para este mes

- [ ] Verificar tu sitio en Search Console (si aún no lo hiciste)
- [ ] Buscar el informe de IA generativa y anotar las impresiones del último mes como punto de partida
- [ ] Anotar tus tres páginas con más apariciones
- [ ] Revisar en Google Analytics si llegan visitas desde sitios de IA
- [ ] Hacer cinco preguntas reales en ChatGPT, Perplexity y Gemini y registrar los resultados en una tabla
- [ ] Agregar la pregunta "¿Cómo nos conociste?" a tu formulario o primera conversación con clientes
- [ ] Repetir todo el mes siguiente y comparar

---

## 11. ¿Cuándo conviene contratar ayuda profesional?

Puedes hacer todo lo anterior por tu cuenta con un par de horas al mes. Tiene sentido buscar apoyo cuando:

- No tienes Search Console o Analytics configurados correctamente y no sabes si tus datos son confiables.
- Ves los números pero no sabes qué decisión tomar con ellos.
- Quieres un plan de [posicionamiento SEO](/servicios/posicionamiento-seo) que combine el posicionamiento clásico con la visibilidad en respuestas de IA, basado en datos reales de tu sitio.
- Sospechas que hay un problema técnico que impide que tu contenido aparezca y necesitas una [auditoría técnica](/servicios/auditoria-tecnica) que lo encuentre.

Medir tu visibilidad en IA todavía es algo nuevo, y las herramientas irán mejorando. Pero la idea de fondo es la misma de siempre en SEO: **mide, aprende qué funciona y repite lo bueno**. Quien empiece a medir hoy tendrá meses de ventaja cuando estos datos sean más completos.

¿Quieres que revisemos juntos cómo está apareciendo tu sitio? [Conversemos](/contacto) y lo vemos.

---