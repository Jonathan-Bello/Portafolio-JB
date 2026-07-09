---
id: "direccion-humana"
title: "DIR Humana: vacantes y postulaciones"
description: "Evolución y mantenimiento de un sitio Gatsby con módulo de reclutamiento, vacantes dinámicas, Firebase, formularios, SEO para ofertas laborales y funciones serverless."
publishDate: 2023-07-11
cover: "@assets/coversProjects/sitios-web/direccion-humana-cover.png"
screenshots:
  - "@assets/coversProjects/sitios-web/direccion-humana-detail.png"
screenshotCaptions:
  - "Página de vacantes de DIR Humana, con estructura para consulta y postulación."
techs:
  - Gatsby
  - React
  - Firebase
  - Firebase Admin
  - Netlify Functions
  - Styled Components
  - Formik
  - Yup
  - XLSX
category: ["web", "backend"]
url: "https://direccionhumana.com/"
author: "jonathan-bello"
isRelevant: false
---

DIR Humana, abreviatura de Dirección Humana, es uno de los proyectos que más tiempo he mantenido dentro de mi experiencia profesional. Cuando entré al proyecto, el sitio ya existía y mi participación empezó con ajustes puntuales: modificar vacantes, mantener formularios, cambiar destinatarios de correo y resolver solicitudes pequeñas sobre una base Gatsby ya construida.

Con el tiempo, el proyecto se volvió más importante para mí porque siguió activo y el cliente se mantuvo como uno de los más constantes. Después, cuando quedé con más responsabilidad dentro del área de desarrollo, empecé a intervenir partes más profundas del sistema de vacantes y postulaciones.

## Desarrollo y reto técnico

Mi trabajo evolucionó de mantenimiento puntual a cambios estructurales sobre el módulo de reclutamiento. Modifiqué la pantalla de vacantes, agregué filtros, ajusté la conexión con Firebase y mejoré el formulario para subir nuevas ofertas, que originalmente era muy básico y no tenía una experiencia cuidada para administración.

Uno de los principales problemas técnicos era la falta de normalización de datos. En la práctica, eso generaba inconsistencias como tener “México” y “Mexico” como lugares distintos, o registrar modalidades equivalentes con nombres diferentes como “remoto” y “en línea”. Ese tipo de detalle afectaba filtros, listados y administración, así que parte del trabajo fue detectar esas inconsistencias y mejorar la forma en que se capturaba y consumía la información.

También hubo un cambio importante en el flujo de formularios. El proyecto funcionaba con Formspree, pero el plan gratuito dejó de ser suficiente para el volumen de correos y postulaciones. Eso ocasionaba retrasos y riesgo de que algunas solicitudes no llegaran correctamente. Después se adaptó el envío hacia Global Patron, con el reto adicional de asemejar el comportamiento a lo que el cliente ya esperaba de Formspree.

Otro reto relevante fue el SEO de vacantes. Al inicio, las páginas de empleo cargaban datos desde Firebase en el cliente; para una persona funcionaba, pero los crawlers de Google podían encontrar solo una pantalla de carga y no el contenido real de la oferta. Para resolverlo, ajusté la estructura para que las vacantes pudieran generarse como páginas pre-renderizadas y usé Netlify Functions para disparar rebuilds cuando cambiaban los datos. No era la arquitectura más sofisticada posible, pero sí una solución pragmática para mejorar indexación y compatibilidad con Google Jobs dentro de las restricciones del proyecto.

Lo más complejo de DIR Humana ha sido trabajar con una base que no diseñé desde cero. No siempre conviene borrar todo y rehacerlo “bien”; muchas veces el trabajo profesional consiste en leer el sistema existente, entender sus límites, intervenir donde hace falta y cumplir tiempos sin romper lo que ya opera. Ese aprendizaje marcó mucho mi forma de trabajar en mantenimiento.

## Tecnologías utilizadas

1. Gatsby
2. React
3. Firebase
4. Firebase Admin
5. Netlify Functions
6. Styled Components
7. Formik y Yup
8. XLSX
9. Google Jobs
10. Formspree / Global Patron

## Resultado

El proyecto se mantiene como un sitio operativo para publicación de vacantes, recepción de postulaciones y soporte a procesos de reclutamiento. Para mi portafolio, DIR Humana representa experiencia real en mantenimiento evolutivo: mejorar un sistema heredado, trabajar con datos dinámicos, resolver SEO técnico y adaptar integraciones sin perder continuidad para el cliente.
