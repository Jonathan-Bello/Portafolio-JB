---
id: "childfund-mundial"
title: "ChildFund Mexico: landing de apadrinamiento mundialista"
description: "Landing page para campana de apadrinamiento de ChildFund Mexico con tematica de futbol, formulario personalizado, API interna, serverless functions y envio de correos con Nodemailer."
publishDate: 2026-06-22
cover: "@assets/coversProjects/sitios-web/childfund-mundial-cover.png"
screenshots:
  - "@assets/coversProjects/sitios-web/childfund-mundial-detail.png"
screenshotCaptions:
  - "Landing mundialista de ChildFund Mexico para captacion de leads."
techs:
  - Astro.js
  - Tailwind CSS
  - "@astrojs/netlify"
  - Nodemailer
  - Netlify Functions
category: ["web"]
url: "https://soymasverde.childfundmexico.org.mx/"
author: "jonathan-bello"
isRelevant: false
---

Esta landing de ChildFund Mexico fue una pieza rapida, enfocada y muy concreta. Llegó como parte de una campaña de apadrinamiento relacionada con el Mundial, por eso la tematica de futbol y el enfoque visual alrededor de esa idea.

Fue distinta al sitio grande de ChildFund que ya habia trabajado antes. Aqui no se trataba de mantener una plataforma completa ni de tocar varias pasarelas de pago, sino de construir una landing funcional, clara y lista para captar leads. Me dieron el diseño y la implementé en tiempo record: en menos de dos dias ya estaba construida.

## Desarrollo y reto tecnico

Construí la landing con Astro y Tailwind CSS, siguiendo el diseño recibido y cuidando la identidad visual que ChildFund ya maneja en sus sitios. Una peculiaridad de estos proyectos es el uso de divisiones entre secciones que parecen hojas rasgadas. Si esos cortes no se trabajan bien, se rompen con facilidad entre resoluciones o se ven mal en responsive. En esta landing esa parte visual se resolvio con cuidado para que las transiciones entre bloques conservaran el estilo de la marca.

La parte tecnica mas importante estuvo en el formulario. Inicialmente podia resolverse con Formspree, pero el cliente necesitaba un comportamiento mas especifico. Por eso decidi implementar una API interna dentro del proyecto con Astro, usando el adapter de Netlify, funciones serverless y Nodemailer para enviar correos mediante SMTP de Google.

Ese cambio hizo que la landing dejara de ser solamente una pagina estatica. Seguía siendo una entrega ligera, pero con una capa serverless suficiente para recibir datos, procesarlos y notificar por correo sin montar un backend completo.

## Tecnologias utilizadas

1. Astro.js
2. Tailwind CSS
3. Netlify adapter
4. Netlify Functions
5. Nodemailer
6. SMTP de Google

## Resultado

El resultado fue una landing de campaña lista en muy poco tiempo, con formulario personalizado y envio automatico de correos. Lo que mas destaco de este proyecto no es la complejidad, sino la velocidad con la que pudo salir gracias a una base tecnica ya madura.

Aqui se nota la confianza ganada con los años: antes un formulario con servidor, correos y deploy serverless podia sentirse como un proyecto aparte; ahora fue una decision practica para resolver una necesidad concreta sin frenar la entrega.
