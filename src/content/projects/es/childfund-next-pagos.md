---
id: "childfund-next-pagos"
title: "ChildFund México: mantenimiento de sitio y pagos"
description: "Mantenimiento evolutivo de un sitio institucional en Next.js, con trabajo sobre flujos de donación, APIs, correos, despliegue en servidor y pasarelas de pago."
publishDate: 2023-10-19
cover: "@assets/coversProjects/sitios-web/childfund-next-cover.png"
screenshots:
  - "@assets/coversProjects/sitios-web/childfund-next-detail.png"
screenshotCaptions:
  - "Flujo de donación de ChildFund México dentro del sitio institucional."
techs:
  - Next.js
  - React
  - Stripe
  - PayPal
  - OpenPay
  - reCAPTCHA
  - Nodemailer
  - PM2
  - DigitalOcean
  - Next SEO
category: ["web", "backend"]
url: "https://www.childfundmexico.org.mx/"
author: "jonathan-bello"
isRelevant: false
---

ChildFund México ha sido uno de los sitios más importantes y retadores que me ha tocado mantener. Antes de esta versión, gran parte del trabajo web en YGU se hacía en WordPress, y ChildFund venía de ese contexto: sitios que había que mantener, corregir y sostener aunque no siempre fueran cómodos para desarrollo.

Cuando el proyecto pasó de WordPress a un sitio propio en Next.js, yo no desarrollé toda la plataforma desde cero. La estructura general del sitio fue creada por mi jefe de ese momento, pero a mí me asignaron una de las partes más delicadas: los formularios y flujos de donación con pasarelas de pago.

También lo recuerdo como el último proyecto grande que trabajé junto a [Adriano Ortiz Garda](https://github.com/AdrianoOGarda), un desarrollador con quien compartí una etapa importante dentro de YGU. ChildFund quedó, de alguna forma, como cierre de esa colaboración: un proyecto exigente, sensible y suficientemente grande como para dejar aprendizajes técnicos y personales.

## Desarrollo y reto técnico

Mi trabajo se centró en formularios de donación, validaciones, APIs, correos y conexión con pasarelas como Stripe, PayPal y, posteriormente, OpenPay. Fue la primera vez que me enfrenté de forma seria a pagos en producción, con todo lo que eso implica: leer documentación, trabajar en modo sandbox, validar datos sensibles y evitar errores que pudieran afectar donaciones reales.

El flujo era más complejo que un formulario normal. La persona llenaba datos personales, dirección, monto de donación y selección de pasarela. Después se procesaba el pago, se registraban los datos, se enviaba información a un sistema externo de ChildFund y, si todo salía bien, se mostraba la página de donación exitosa. También implementé notificaciones por correo con Nodemailer y validaciones con Formik y Yup para ordenar mejor los datos antes de llegar al backend.

Cada pasarela tenía su propio comportamiento. Stripe se sentía más cercana a trabajar con una API; PayPal tenía una integración distinta, más orientada a su propio flujo; y OpenPay fue especialmente retadora porque durante la implementación apareció una actualización que cambió parte de la forma de integrarse. Eso me obligó a ajustar el trabajo a mitad del proceso y a depender mucho de documentación que en ese momento no se sentía tan clara como la de Stripe.

Otro reto importante fue el despliegue. Por tratarse de una ONG, el sitio debía vivir en infraestructura controlada por la organización, no en Vercel. Eso me llevó a desplegar el proyecto manualmente en un servidor Ubuntu dentro de DigitalOcean, usando PM2 para mantener la aplicación corriendo. Fue mi primera experiencia real entrando a un droplet, configurando un entorno de producción y entendiendo cómo operar un Next.js fuera de los flujos automáticos a los que estaba acostumbrado.

El proyecto también me enseñó una diferencia importante: una ONG no se gestiona igual que un sitio comercial tradicional. Hay más tolerancia en ciertas decisiones, pero también más responsabilidad cuando el flujo toca donaciones, datos personales y sistemas internos.

## Tecnologías utilizadas

1. Next.js 13
2. React
3. Stripe
4. PayPal
5. OpenPay
6. reCAPTCHA
7. Nodemailer
8. Formik y Yup
9. PM2
10. DigitalOcean
11. Next SEO

## Resultado

El proyecto representa experiencia de mantenimiento profesional en un sitio institucional activo, con flujos críticos de donación y despliegue en servidor propio. Para mi portafolio, ChildFund México no es una entrada de autoría completa del sitio, sino de evolución técnica: pagos, formularios, APIs, correos, seguridad, integración con sistemas externos y operación real en producción.
