# Plantilla para entradas de proyectos

Esta guía define la estructura editorial para crear entradas de proyectos dentro del portafolio. La intención es que cada entrada explique con claridad qué se hizo, qué resolvía, qué tecnologías se usaron y qué reto técnico demuestra.

## Ubicación del contenido

Entradas en español:

```txt
src/content/projects/es/nombre-del-proyecto.md
```

Entradas en inglés:

```txt
src/content/projects/en/project-name.md
```

Imágenes por tipo de proyecto:

```txt
src/assets/coversProjects/sitios-web/
src/assets/coversProjects/backend/
src/assets/coversProjects/ia/
src/assets/coversProjects/videojuegos/
src/assets/coversProjects/cursos/
src/assets/coversProjects/academicos/
```

Para sitios web, usa dos imágenes cuando sea posible:

```txt
nombre-del-proyecto-cover.png
nombre-del-proyecto-detail.png
```

## Frontmatter

```md
---
id: "nombre-del-proyecto"
title: "Nombre del proyecto: idea principal"
description: "Resumen breve de una o dos líneas sobre qué es el proyecto y qué demuestra."
publishDate: 2026-06-26
cover: "@assets/coversProjects/sitios-web/nombre-del-proyecto-cover.png"
screenshots:
  - "@assets/coversProjects/sitios-web/nombre-del-proyecto-detail.png"
techs:
  - Astro.js
  - React
  - Tailwind CSS
category: ["web"]
url: "https://sitio-publicado.com/"
author: "jonathan-bello"
isRelevant: false
---
```

## Estructura editorial

La vista de detalle debe leerse en este orden:

1. Imagen principal.
2. Título.
3. Fecha.
4. Descripción corta.
5. Link al sitio publicado, cuando exista.
6. Texto introductorio sin heading de `Contexto`.
7. `Desarrollo y reto técnico`.
8. `Tecnologías utilizadas`.
9. `Resultado`.
10. Imágenes adicionales del proyecto, sin heading de `Capturas del proyecto`.

La entrada no debe iniciar con el título `Contexto`. Después del frontmatter, abre directamente con un párrafo introductorio:

```md
Este proyecto fue un sitio web para una clínica especializada. La página debía comunicar servicios médicos, generar confianza y facilitar el contacto desde dispositivos móviles.

## Desarrollo y reto técnico

En este proyecto me encargué de maquetar la interfaz, estructurar las secciones y preparar el despliegue. Aunque visualmente era una página sencilla, el reto estuvo en ordenar servicios reutilizables mediante Content Collections para mantener la información clara y fácil de actualizar.

## Tecnologías utilizadas

- Astro.js
- React
- Tailwind CSS
- Content Collections
- Despliegue estático

## Resultado

El sitio quedó como una presencia institucional clara, con servicios organizados, contacto visible y una experiencia responsive pensada para pacientes.
```

## Criterio de redacción

- Escribir en primera persona cuando se hable de decisiones propias.
- No inflar el proyecto: si fue una maqueta sencilla, decirlo y explicar dónde estuvo el valor técnico.
- Diferenciar diseño de implementación: si el diseño fue entregado por cliente/equipo, decir que el trabajo fue maquetación, estructura, integración, performance, responsive o despliegue.
- El bloque `Desarrollo y reto técnico` debe combinar lo que hice con el reto principal.
- El bloque `Tecnologías utilizadas` debe listar las tecnologías reales usadas en el proyecto. Normalmente salen del README del repositorio.
- El bloque `Resultado` debe explicar qué quedó funcionando y qué valor aporta.
- Evitar headings genéricos como `Contexto` o `Mi rol`.

## Categorías

Usar categorías con intención:

- `web`: sitios web, landings, maquetación, páginas corporativas, catálogos.
- `backend`: APIs, formularios serverless, pagos, automatizaciones, servicios.
- `ai`: proyectos con inteligencia artificial, asistentes, evaluadores o investigación aplicada.
- `education`: cursos, materiales didácticos, proyectos de enseñanza.
- `games`: videojuegos, prototipos interactivos o experiencias lúdicas.
- `ui`: usar solo cuando haya diseño de interfaz propio, no solo maquetación.

Para los sitios web desarrollados en Astro donde el diseño ya fue dado y el trabajo principal fue maquetación/desarrollo, usar solo:

```md
category: ["web"]
```

## Proyectos destacados

La home muestra proyectos con:

```md
isRelevant: true
```

Usar pocos destacados. Actualmente deben destacar:

- `gdd-css`
- `cursos-astro-edteam`
- `cssgame-tesis-ia`
- `css-evaluator-api`

Entradas de experiencia amplia, como dirección de sitios web en YGU, deben vivir mejor como blog o reflexión profesional, no como proyecto destacado.
