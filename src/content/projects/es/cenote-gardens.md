---
id: "cenote-gardens"
title: "Cenote Gardens: landing inmobiliaria visual"
description: "Landing inmobiliaria en Astro para un proyecto residencial en Tulum, con cambio de idioma, mapas SVG interactivos, componentes React/Vue y View Transitions."
publishDate: 2024-03-27
cover: "@assets/coversProjects/sitios-web/cenote-gardens-cover.png"
screenshots:
  - "@assets/coversProjects/sitios-web/cenote-gardens-detail.png"
screenshotCaptions:
  - "Mapa y secciones visuales de Cenote Gardens para presentar propiedades residenciales."
techs:
  - Astro.js
  - React
  - Vue
  - Tailwind CSS
  - Sass
  - SVG
  - View Transitions
  - Netlify
category: ["web"]
url: "https://dulcet-arithmetic-4f11b2.netlify.app/"
author: "jonathan-bello"
isRelevant: false
---

Cenote Gardens fue una landing inmobiliaria para presentar propiedades residenciales en Tulum. El diseño fue entregado por el equipo de diseño, pero el proyecto me permitió experimentar con una de las capacidades que más me gusta de Astro: combinar distintas tecnologías dentro de un mismo sitio sin que todo tenga que convertirse en una aplicación pesada.

También fue un proyecto que usé para enseñar Astro a personas cercanas a mí. La idea era mostrar que alguien que venía de Vue podía aportar un componente en Vue, alguien que conocía React podía trabajar en React, y quien no usaba frameworks podía resolver partes con HTML, CSS o Sass dentro del mismo proyecto.

## Desarrollo y reto técnico

Construí la landing con secciones visuales, cambio de idioma entre español e inglés, animaciones, carruseles y componentes interactivos. El idioma principal era inglés, pero el sitio debía poder cambiar de idioma de forma fluida. Para eso usé View Transitions y conservé el scroll entre versiones equivalentes de la misma página, haciendo que el cambio se sintiera más natural.

El reto más importante estuvo en los mapas y planos interactivos. El cliente quería que ciertas imágenes funcionaran como mapas dinámicos: al seleccionar zonas específicas debía aparecer información relacionada. Para resolverlo convertí los mapas a SVG y usé IDs dentro del propio gráfico para agregar interactividad mediante scripts. No era una solución perfecta, pero permitió convertir imágenes estáticas en elementos navegables.

Ese trabajo también trajo problemas de compatibilidad, especialmente en Safari. Como no tenía un dispositivo Apple para probar directamente, dependí de revisiones externas para saber qué se veía mal y corregir casi a ciegas. Finalmente el problema se resolvió ajustando la forma en que se integraban y manipulaban los SVG.

Cenote Gardens reforzó mi confianza en Astro porque el proyecto combinó trabajo visual, componentes React, componentes Vue, scripts, animaciones, cambio de idioma y colaboración técnica. Fue una buena muestra de cómo un framework puede adaptarse al equipo, no al revés.

## Tecnologías utilizadas

1. Astro.js
2. React
3. Vue
4. Tailwind CSS
5. Sass
6. SVG interactivo
7. View Transitions
8. Swiper
9. Netlify

## Resultado

El sitio presentó la propuesta inmobiliaria con una experiencia visual, bilingüe e interactiva. Aunque el cliente después dejó de mantener esta versión con nosotros, Cenote Gardens quedó como uno de los proyectos a los que más cariño le tengo por el reto de mapas SVG, el trabajo con varias tecnologías y la oportunidad de usarlo como caso práctico para enseñar Astro.
