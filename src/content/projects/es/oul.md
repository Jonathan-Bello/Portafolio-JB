---
id: "oul"
title: "OUL: sistema web de tramites fiscales"
description: "Plataforma Next.js para registro y pago de tramites fiscales, formularios multipaso, Firebase, panel administrativo, pagos con Stripe y generacion documental."
publishDate: 2022-07-28
cover: "@assets/coversProjects/sitios-web/oul-cover.png"
screenshots:
  - "@assets/coversProjects/sitios-web/oul-detail.png"
techs:
  - Next.js
  - React
  - Firebase
  - Firestore
  - Firebase Storage
  - Firebase Auth
  - Formik
  - Yup
  - Stripe
  - SendGrid
  - React PDF
category: ["web", "backend"]
url: "https://oul.mx/"
author: "jonathan-bello"
isRelevant: false
---

OUL es uno de los proyectos mas importantes de mi etapa inicial como desarrollador. Lo trabaje durante mi estancia de licenciatura y fue la base de mi tesis final, donde documente el desarrollo de un sistema para registrar, pagar y dar seguimiento a tramites fiscales y legales desde una aplicacion web.

La organizacion necesitaba migrar su sitio anterior, actualizar su presencia digital y agregar funcionalidad real para que los clientes pudieran solicitar tramites desde casa, proporcionar informacion sensible, adjuntar archivos y pagar en linea.

## Desarrollo y reto tecnico

Mi trabajo se centro en desarrollar e implementar el apartado de registro y pago de tramites fiscales, junto con un administrador que permitiera dar seguimiento a los clientes de OUL dentro de su nueva aplicacion web.

El reto tecnico fue convertir procesos legales largos en flujos digitales controlados. Los formularios debian registrar el estado de cada tramite, diferenciar solicitudes incompletas, solicitudes terminadas pero no pagadas y solicitudes pagadas. Ademas, el sistema debia manejar datos sensibles, archivos, autenticacion, generacion documental, pagos y seguimiento administrativo.

La implementacion se desarrollo con Next.js y React en el frontend. Firebase se uso para acelerar el desarrollo de autenticacion, base de datos y almacenamiento de archivos, una decision importante porque el equipo era pequeno y no era viable construir toda una infraestructura backend desde cero en ese momento. Stripe se integro como pasarela de pago y React PDF apoyo la generacion de documentos.

Tambien se trabajo bajo una dinamica tipo Scrum, con epicas enfocadas primero en formularios de tramites y despues en el panel administrativo. El primer formulario fuerte fue registro de marca, que sirvio como base para otros tramites por su complejidad de datos, validaciones y carga de archivos.

## Tecnologias utilizadas

1. Next.js 12
2. React
3. Firebase
4. Firestore
5. Firebase Storage
6. Firebase Auth
7. Formik y Yup
8. Stripe
9. SendGrid
10. React PDF

## Resultado

El resultado fue una plataforma operativa para centralizar solicitudes de tramites desde la web. Para mi portafolio, OUL representa experiencia temprana en producto web real: formularios complejos, pagos, autenticacion, panel administrativo, manejo de archivos y documentacion tecnica ligada a una tesis de licenciatura.
