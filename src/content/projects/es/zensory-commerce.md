---
id: "zensory-commerce"
title: "Zensory: landing con pago de curso"
description: "Landing page para un curso dentro de un subdominio, con Stripe Checkout, formulario de inscripcion, preguntas frecuentes y flujo de compra ligero."
publishDate: 2025-11-07
cover: "@assets/coversProjects/sitios-web/zensory-cover.png"
screenshots:
  - "@assets/coversProjects/sitios-web/zensory-detail.png"
screenshotCaptions:
  - "Landing de Zensory con formulario de inscripcion y pago."
techs:
  - Astro.js
  - React
  - Tailwind CSS
  - Stripe
  - Nodemailer
  - Netlify
category: ["web"]
url: "https://zensory.galimarli.com/"
author: "jonathan-bello"
isRelevant: false
---

Zensory fue una landing page creada para promocionar e inscribir personas a un curso. El proyecto vivia dentro de un subdominio, `zensory.galimarli.com`, porque el sitio principal de Galimarli ya existia en WordPress, pero necesitaban una experiencia independiente, mas personalizada y preparada para recibir pagos.

Me gusto este proyecto porque es pequeño en alcance, pero muy completo en intencion. No era necesario construir una tienda completa ni una plataforma de cursos; bastaba con resolver bien una compra especifica. A veces el desarrollo profesional consiste justo en eso: no levantar un edificio entero cuando solo se necesita una puerta segura y bien hecha.

## Desarrollo y reto tecnico

Construí la landing con secciones informativas, carruseles, preguntas frecuentes, redes sociales, formulario de contacto y un flujo de inscripcion al curso. El formulario de pago pedia solamente lo necesario: nombre completo, correo y el precio del curso.

La integracion principal fue Stripe Checkout. En lugar de crear una pagina de pago propia y asumir riesgos innecesarios, el sitio crea una sesion de pago segura y redirige a `checkout.stripe.com`, donde Stripe se encarga del proceso. Eso hizo que el flujo fuera mas confiable, mas rapido de implementar y mas facil de mantener.

El reto tecnico fue cerrar esa experiencia de manera limpia: iniciar el pago desde la landing, enviar la informacion correcta, evitar una estructura de e-commerce innecesaria y mantener el sitio ligero dentro de un subdominio.

## Tecnologias utilizadas

1. Astro.js
2. React
3. Tailwind CSS
4. Stripe
5. Nodemailer
6. Netlify

## Resultado

Zensory funciona como un e-commerce minimo: una landing, un producto, un pago y una confirmacion. Me interesa conservarlo en el portafolio porque muestra que puedo construir soluciones comerciales pequeñas, seguras y eficaces sin sobredimensionar el problema.
