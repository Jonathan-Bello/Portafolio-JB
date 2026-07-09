---
id: "tradeco"
title: "Tradeco Costa Rica: catálogo de pisos SPC y LVT"
description: "Primer sitio profesional que desarrollé con Astro y Tailwind, creado como catálogo comercial de pisos con rutas estáticas, PDFs, SEO técnico y transiciones entre productos."
publishDate: 2024-02-09
cover: "@assets/coversProjects/sitios-web/tradeco-cover.png"
screenshots:
  - "@assets/coversProjects/sitios-web/tradeco-detail.png"
screenshotCaptions:
  - "Catálogo de pisos de Tradeco, con navegación por líneas de producto y fichas descargables."
techs:
  - Astro.js
  - Tailwind CSS
  - TypeScript
  - View Transitions
  - Swiper
  - Formspree
  - Astro Sitemap
category: ["web"]
url: "https://tradeco506.com/"
author: "jonathan-bello"
isRelevant: false
---

Tradeco Costa Rica fue un punto de cambio en mi forma de trabajar sitios web. Venía de usar Gatsby en muchos proyectos, pero no me gustaba su experiencia de desarrollo, sus tiempos de arranque ni la forma en que se sentía para construir landings y sitios comerciales. Cuando tuve más libertad técnica para elegir framework, decidí usar Astro en un proyecto real de trabajo.

Este sitio fue el inicio de una nueva base para futuros proyectos en YGU: Astro, Tailwind CSS y una estructura más directa para construir páginas rápidas, estáticas, mantenibles y con mejor experiencia de desarrollo. También fue el proyecto que me obligó a aprender Tailwind en tiempo récord, después de dejar atrás EDgrid, una librería que había usado mucho pero que ya no tenía el mismo mantenimiento.

## Desarrollo y reto técnico

Tradeco es una empresa de Costa Rica enfocada en pisos y productos relacionados, con líneas como pisos vinílicos LVT, SPC, piedras y otros materiales. Desarrollé el sitio desde cero, estructurando páginas, catálogo, fichas técnicas, PDFs descargables, formularios, mapa, enlaces de contacto y configuración SEO.

Una de las partes que más me enorgullece es el catálogo. En vez de resolverlo como un componente de React, construí distintas páginas estáticas con Astro y usé View Transitions para que el cambio entre categorías se sintiera como una experiencia fluida. Si el usuario estaba viendo una sección de pisos LVT y cambiaba a SPC, el sitio conservaba el scroll adecuado para que pareciera una transición interna de componente, aunque técnicamente estaba navegando entre páginas distintas.

Ese reto me interesaba porque combinaba lo mejor de dos mundos: la velocidad y accesibilidad de páginas estáticas con una sensación visual más cercana a una SPA. Definí en qué rutas debía conservarse el scroll y en cuáles debía comportarse de forma normal, evitando que toda la navegación quedara forzada.

También fue de los primeros proyectos donde empecé a aplicar SEO técnico de forma más intencional: títulos, metadata, keywords, sitemap y estructura pública pensada para un catálogo comercial. Astro facilitó mucho esa parte porque el sitio generaba HTML estático claro y rápido.

## Tecnologías utilizadas

1. Astro.js
2. Tailwind CSS
3. TypeScript
4. View Transitions
5. Swiper
6. Formspree
7. Astro Sitemap

## Resultado

El resultado fue un catálogo comercial rápido, visual y bien estructurado, con fichas descargables, rutas por producto y puntos de contacto como formulario, WhatsApp, Waze y Google Maps. Para mi portafolio, Tradeco no solo representa un sitio de pisos: representa el inicio de mi etapa profesional con Astro y el cambio técnico que después influiría en muchos proyectos posteriores.
