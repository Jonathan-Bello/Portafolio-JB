---
id: "gdd-css"
title: "GDD CSS: documentacion web para Citadel of the Solar Souls"
description: "Sitio web documental para el Game Design Document de Citadel of the Solar Souls, con secciones de diseño, sistema de juego, progresion, narrativa, referencias, equipo y demo jugable."
publishDate: 2026-03-02
cover: "@assets/coversProjects/sitios-web/gdd-css-cover.png"
screenshots:
  - "@assets/coversProjects/sitios-web/gdd-css-detail.png"
screenshotCaptions:
  - "Sitio documental del Game Design Document de Citadel of the Solar Souls."
techs:
  - Astro.js
  - React
  - Tailwind CSS
  - JavaScript
  - Godot
  - Render
category: ["web"]
url: "https://css.jonathanbello.com/"
author: "jonathan-bello"
isRelevant: true
---

El GDD CSS nacio por necesidad, pero tambien por conviccion. Citadel of the Solar Souls era demasiado grande para vivir solamente en mi cabeza o en conversaciones sueltas. Si el proyecto iba a involucrar narrativa, mecanicas, arte, musica, progresion, CSS, IA y colaboracion con otras personas, necesitaba una documentacion seria.

Pude haber hecho un documento tradicional, pero soy desarrollador web. La respuesta natural fue convertir el Game Design Document en un sitio. No queria un archivo escondido en una carpeta; queria una pagina consultable, navegable y suficientemente clara para que mi equipo, mis asesores y cualquier persona interesada pudiera entender el proyecto.

## Desarrollo y estructura

Construí el sitio con Astro, React y Tailwind CSS. La documentacion se organizo como una web tecnica con secciones dedicadas al concepto general, sistema de juego, progresion, interfaz, narrativa, referencias, equipo y demo.

La estructura se inspiro en la plantilla propuesta en el libro El viaje del jugador, una referencia que me ayudo a ordenar mejor el diseño de videojuegos desde una mirada mas formal. A partir de ahi, el sitio se convirtio en una especie de biblia del juego: un lugar para normalizar terminos, describir mecanicas y dejar claro como se relacionan CSS, mundo, personajes y progresion.

La tesis documenta que el GDD Web termino organizado en varias secciones y decenas de entradas, lo cual fue clave para aterrizar la idea general del videojuego. Ese proceso ayudo a que conceptos como Hemis, pilares solares, ciudadela, sinergia CSS y municion tuvieran un lenguaje comun.

## Demo jugable

El sitio no esta conectado directamente con Godot como sistema interno, pero si funciona como punto de publicacion. Dentro de la pagina existe una seccion de demo donde se integra la build web generada por Godot.

Para eso fue necesario configurar el juego de forma que pudiera detectar donde se estaba ejecutando. Algunas opciones cambian si se juega desde navegador o desde una build de escritorio. Por ejemplo, en la version web se pide una API key para activar a Hemis y permitir la comunicacion con el asistente.

## Proposito

Este sitio fue creado principalmente para mi y para el equipo. Era la manera de mantener el proyecto ordenado mientras crecia. Tambien sirvio como producto adicional de la tesis: no solo existia el prototipo del juego, sino tambien una documentacion publica que explicaba su diseño.

## Resultado

El GDD CSS funciona como el mapa documental de Citadel of the Solar Souls. No es una landing promocional ni una simple pagina de presentacion; es una documentacion tecnica viva para entender como se penso el juego.

Quiero que esta entrada se lea justamente asi: como el registro de una decision profesional. Cuando un proyecto crece, documentarlo no es burocracia; es darle una estructura para que otros puedan entrar, entenderlo y continuarlo.
