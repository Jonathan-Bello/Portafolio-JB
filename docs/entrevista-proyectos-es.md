# Entrevista editorial de proyectos en español

Este documento organiza la captura de anécdotas y contexto técnico para enriquecer las entradas del portafolio. El trabajo se hará por fases cronológicas para mantener continuidad narrativa y evitar mezclar etapas profesionales.

## Estado general

- Idioma actual: español.
- Criterio de orden: del proyecto más antiguo al más reciente, usando `publishDate` y el inventario de fechas.
- Objetivo de cada entrevista: obtener contexto, decisiones, problemas reales, aprendizajes y anécdotas que puedan integrarse con buena redacción en cada entrada.
- Formato de respuesta esperado: dictado libre. No hace falta contestar perfecto ni en orden; después se depura editorialmente.

## Fase 1: inicio profesional y primeros sistemas

Estado: capturada y redactada.

1. OUL
2. Woof Tulum
3. Worldpark

## Fase 2: Gatsby en YGU, operación comercial y mantenimiento

Estado: capturada y redactada.

Proyectos:

1. Dirección Humana
2. Bora
3. Tycoon
4. Clavijero68
5. Ditulum

### Dirección Humana

Estado: redactado en `src/content/projects/es/direccion-humana.md`.

Entrada actual: sitio Gatsby con módulos para vacantes, postulaciones, administración, Firebase, exportación de datos y funciones serverless.

Señales técnicas encontradas:

- Vacantes y postulaciones.
- Firebase y Firebase Admin.
- Netlify Functions.
- Formularios con Formik y Yup.
- Exportación con XLSX.
- Google Jobs / estructura de ofertas laborales.
- Commits relacionados con `vacantes id`, filtros por estado, templates de vacantes, corrección de Firebase, funciones de build y verificación de página de vacante existente.

Preguntas:

1. ¿Cómo llegó Dirección Humana a tus manos y cuál fue tu primer contacto con el problema: era solo una página institucional o desde el inicio se veía como un sistema de reclutamiento?
2. En la parte de vacantes, ¿qué tuviste que construir exactamente: listado público, página individual, filtros, formulario de postulación, panel interno, carga de CV, exportación de datos?
3. Vi señales de trabajo con Firebase, Netlify Functions y Firebase Admin. ¿Qué parte corría del lado del frontend y qué parte necesitó funciones/serverless para operar con permisos o datos administrativos?
4. Hay commits sobre `googlejobs`, templates de vacantes y verificación de páginas de vacante. ¿Recuerdas si el reto de SEO para ofertas laborales fue importante? ¿Qué se buscaba lograr con Google Jobs?
5. ¿Qué tan complejo fue manejar estados de vacantes o postulaciones? Por ejemplo: vacante activa/inactiva, postulaciones recibidas, filtros, exportaciones o revisión interna.
6. ¿Hubo alguna integración externa, como GlobalPatron u otro servicio de reclutamiento, que haya condicionado cómo se guardaban o enviaban los datos?
7. A nivel personal, ¿Dirección Humana fue el proyecto donde empezaste a sentir más confianza después de OUL, o todavía lo viviste como un reto pesado?
8. Para la entrada, ¿quieres que se lea más como un “sitio con funcionalidades operativas” o como un “módulo de reclutamiento desarrollado sobre Gatsby”?

### Bora

Estado: redactado en `src/content/projects/es/bora.md`.

Entrada actual: sitio Gatsby para una marca hotelera boutique, con experiencia visual, secciones comerciales, reservaciones y tracking.

Señales técnicas encontradas:

- Gatsby, React, TypeScript y Sass.
- Sliders, hero visual, carruseles e imágenes comprimidas.
- Google Tag Manager.
- Cambios en links de WhatsApp, PDFs, menú, FrontDesk, metadata y assets.
- Commits relacionados con compresión de imágenes del carrusel, cambios de imágenes, recepción/front desk, GTM y ajustes de metadata.

Preguntas:

1. ¿Qué era Bora exactamente: hotel, experiencia boutique, renta vacacional, club, restaurante o una mezcla de servicios turísticos?
2. ¿El diseño ya venía definido por YGU/cliente o tú participaste también en decisiones visuales y de estructura?
3. Vi varios commits relacionados con carruseles, imágenes comprimidas y cambios visuales. ¿El reto principal fue hacer que la página se viera premium sin volverse lenta?
4. ¿Qué secciones te tocaron más directamente: hero, habitaciones/amenidades, albercas, contacto, recepción/front desk, reservaciones, PDFs o WhatsApp?
5. Hay commits sobre FrontDesk, links de WhatsApp y menú PDF. ¿Qué flujo comercial era importante para el cliente: reservar, contactar recepción, descargar información o llevar al usuario a otro sistema?
6. ¿Qué aprendiste de trabajar sitios turísticos/hoteleros donde la imagen pesa tanto como la funcionalidad?
7. ¿Hubo alguna anécdota de assets pesados, cambios de último momento, ajustes de copy o detalles visuales que recuerdes?
8. Para la entrada, ¿te interesa enfatizar más el reto visual/performance o el trabajo de mantenimiento comercial sobre canales de contacto?

### Tycoon

Estado: redactado en `src/content/projects/es/tycoon.md`.

Entrada actual: mantenimiento de un sitio Gatsby grande con catálogo de marcas, noticias, regiones, internacionalización e integración social.

Señales técnicas encontradas:

- Sitio Gatsby grande, bilingüe y corporativo.
- Catálogo de marcas por país o región.
- Noticias, vacantes y secciones institucionales.
- Instagram Graph API y tracking.
- Commits relacionados con altas/bajas de marcas: Stumble Guys, Poppy, Telefunken, Smiley, Kings League, Pepsico, 7up, ABG y Head.
- Commit relacionado con regeneración de token de Instagram.

Preguntas:

1. ¿Cuál fue tu rol real en Tycoon: mantenimiento recurrente, carga de marcas, ajustes visuales, nuevas secciones, integración social o correcciones puntuales?
2. Por los commits, parece que una parte importante era mantener actualizado el catálogo de marcas. ¿Cómo se gestionaba esa información: archivos locales, data estática, imágenes por carpeta, CMS, GraphQL/Apollo?
3. ¿Qué tan delicado era tocar el catálogo? ¿Había diferencias por país, idioma o región que pudieran romper rutas o navegación?
4. Vi cambios de marcas como Stumble Guys, Kings League, Pepsico y otras. ¿Recuerdas si cada alta implicaba solo agregar imagen/texto o también modificar estructura, filtros, rutas o secciones?
5. Hay referencia a Instagram Graph API y regeneración de token. ¿Te tocó resolver problemas de tokens, feed social o contenido externo que dejaba de funcionar?
6. ¿Qué fue lo más difícil de mantener un Gatsby grande hecho por varias manos: estructura de carpetas, estilos, internacionalización, imágenes, deploys, datos?
7. ¿Tycoon fue para ti un proyecto de aprendizaje sobre mantenimiento profesional más que sobre creación desde cero?
8. Para la entrada, ¿conviene presentarlo como “mantenimiento de catálogo corporativo a escala” más que como sitio hecho desde cero?

### Clavijero68

Estado: redactado en `src/content/projects/es/clavijero68.md`.

Entrada actual: landing comercial en Gatsby y React con secciones informativas, servicios, contacto y tracking.

Señales técnicas encontradas:

- Gatsby, React, Sass, EDgrid, Swiper, Formspree y Google Tag Manager.
- Commits sobre modal con formulario, hover effects, scripts de GTM, carga de SVG, footer sin slider, fuente Montserrat y pruebas de código.

Preguntas:

1. ¿Qué comunicaba o vendía Clavijero68? Necesito aterrizar si era inmobiliario, comercial, servicios, desarrollo habitacional, oficina u otro giro.
2. ¿La landing se hizo desde cero o partía de una estructura/plantilla previa de YGU?
3. Vi commits de modal con formulario y Formspree. ¿El formulario era el punto central de conversión? ¿Qué datos pedía y hacia dónde llegaban?
4. También hay commits de GTM. ¿El cliente necesitaba medición de campañas o solo se agregó como estándar de YGU?
5. ¿Qué tan visual era el proyecto? ¿Recuerdas si el reto estaba en secciones, sliders, SVGs, hover effects o responsive?
6. ¿Qué aprendiste de esta landing respecto a entregar rápido pero cuidando estructura y conversión?
7. ¿Hubo alguna parte que te haya costado más de lo esperado, como el modal, el formulario, imports de SVG, estilos o scripts externos?
8. Para la entrada, ¿quieres que se sienta como un proyecto de entrega ágil o como una landing con trabajo fino de interacción y medición?

### Ditulum

Estado: redactado en `src/content/projects/es/ditulum.md`.

Entrada actual: sitio Gatsby multipágina con servicios, catálogo, contacto, tracking, Facebook Pixel y widget comercial de LeadSales.

Señales técnicas encontradas:

- Gatsby, React, Sass, EDgrid, Gatsby Intl, React Slick, Swiper.
- Google Tag Manager, Facebook Pixel y LeadSales/Leadclick.
- Commits sobre Pixel de Facebook, widget de botón de contacto, GTM, nueva dirección en footer, segunda sucursal, orden de idiomas y correcciones de copy.

Preguntas:

1. ¿Qué era Ditulum exactamente y qué vendía/ofrecía? La entrada actual dice “servicios” y “catálogo”, pero falta el giro real.
2. ¿Qué páginas o secciones desarrollaste tú: inicio, servicios, catálogo, nosotros, contacto, footer, sucursales, idiomas?
3. Vi trabajo con Gatsby Intl y orden de idiomas. ¿Era un sitio bilingüe desde el inicio o se agregó después?
4. ¿Qué tan importante fue el tracking comercial? Hay GTM, Facebook Pixel y LeadSales. ¿El sitio estaba pensado para campañas, leads o contacto inmediato?
5. Hay commits sobre nueva dirección, segunda sucursal y footer. ¿Recuerdas si el negocio estaba creciendo o si solo eran ajustes de información comercial?
6. ¿Qué retos te dio integrar scripts externos en Gatsby: ubicación del script, estilos del botón, duplicados, conflictos con SSR o build?
7. ¿Ditulum te enseñó algo sobre sitios que no solo informan, sino que también deben medir, convertir y conectar con ventas?
8. Para la entrada, ¿quieres enfatizar la parte multipágina/bilingüe o la parte de tracking y generación de leads?

## Fase 3: Next.js, pagos y landings comerciales 2023-2024

Estado: capturada y redactada.

1. ChildFund México: mantenimiento de sitio y pagos
2. Tradeco Costa Rica
3. Cenote Gardens
4. Ads Atelier
5. May Pro
6. Surima
7. Ventum

### ChildFund México: mantenimiento de sitio y pagos

Estado: redactado en `src/content/projects/es/childfund-next-pagos.md`.

Entrada actual: mantenimiento técnico de un sitio institucional grande en Next.js, con rutas API, donaciones, formularios, reCAPTCHA, correos y pasarelas de pago.

Señales técnicas encontradas:

- Next.js 13, React, Stripe, PayPal, OpenPay, Nodemailer, reCAPTCHA, Formik/Yup y Next SEO.
- Commits relacionados con PayPal, actualización de cuenta y productos de PayPal, cambios en home, blog system, footer, landing, transparencia, links, carruseles y contenido institucional.
- El inventario indica que no fue autoría desde cero: fue mantenimiento evolutivo y trabajo técnico sobre pagos y flujos de donación.

Preguntas:

1. ¿Cómo entraste a ChildFund México y qué parte del sitio te tocó primero: pagos, formularios, contenido, blog, home, footer o mantenimiento general?
2. ¿Qué tan grande era el sitio cuando empezaste? ¿Lo sentiste como un proyecto institucional pesado, con muchas rutas y áreas sensibles?
3. Sobre donaciones: ¿qué flujos tocaste realmente? Por ejemplo, donación única, donación recurrente, apadrinamiento, productos de PayPal, Stripe, OpenPay o confirmaciones por correo.
4. Vi commits de PayPal, cuenta y productos. ¿Qué problema había ahí: cambio de cuenta, IDs de productos, botones, ambiente sandbox/producción, validaciones o redirecciones?
5. ¿Te tocó trabajar con rutas API de Next para pagos o correos? ¿Qué hacía el backend: crear sesiones, validar formularios, mandar correos, registrar datos o conectar con un sistema externo?
6. ¿Cuál fue la pasarela más complicada de mantener: Stripe, PayPal u OpenPay? ¿Por qué?
7. ¿Qué papel tenían reCAPTCHA, Nodemailer, Formik y Yup en los flujos? ¿Era más por seguridad, validación, notificación o experiencia del usuario?
8. ¿Qué aprendiste al trabajar en un sitio de ONG donde los errores pueden afectar donaciones reales?
9. ¿Qué parte no quieres que se lea como autoría tuya? Para dejar claro qué fue mantenimiento y qué sí desarrollaste o modificaste.
10. Para la entrada, ¿quieres que se lea más como “mantenimiento de sitio institucional activo” o como “evolución técnica de flujos de donación”?

### Tradeco Costa Rica

Estado: redactado en `src/content/projects/es/tradeco.md`.

Entrada actual: sitio Astro comercial con catálogo de pisos SPC y LVT, rutas individuales, formularios, WhatsApp, mapa y SEO.

Señales técnicas encontradas:

- Astro, React, Tailwind CSS, Sass, Swiper, Formspree y Astro Sitemap.
- Commits relacionados con metadata, keywords, títulos SEO, página 404, catálogos/PDFs, fichas técnicas, íconos de contacto, Waze, Google Maps, Formspree, scroll en anchors, responsive tablet y catálogo nuevo.
- Sitio publicado en dominio propio `tradeco506.com`.

Preguntas:

1. ¿Qué era Tradeco y qué buscaba vender/comunicar exactamente: pisos SPC/LVT, marcas, fichas técnicas, distribución, contacto comercial?
2. ¿El sitio lo hiciste desde cero o partiste de una base de YGU/Astro ya existente?
3. ¿Cómo estructuraste el catálogo: páginas por producto, datos estáticos, rutas manuales, PDFs descargables, fichas técnicas, carruseles?
4. Vi muchos commits sobre PDFs, catálogo y fichas técnicas. ¿El reto más pesado fue organizar recursos comerciales y hacerlos fáciles de consultar?
5. ¿Qué papel tenían Waze, Google Maps, WhatsApp y Formspree en la conversión? ¿El usuario debía cotizar, visitar tienda, pedir ficha o contactar directo?
6. Hay varias señales de SEO: títulos, keywords, metadata y sitemap. ¿Este proyecto exigía posicionamiento local en Costa Rica o era más una práctica estándar?
7. ¿Recuerdas algún problema con responsive, anchors, scroll o tablets que te haya tomado más tiempo del esperado?
8. ¿Qué aprendiste de trabajar un catálogo comercial más “de producto” que de marca?
9. Para la entrada, ¿conviene presentarlo como catálogo técnico-comercial o como sitio de conversión para ventas/contacto?

### Cenote Gardens

Estado: redactado en `src/content/projects/es/cenote-gardens.md`.

Entrada actual: landing inmobiliaria/residencial en Astro, con contenido visual, carruseles y combinación de React/Vue.

Señales técnicas encontradas:

- Astro, React, Vue, Tailwind CSS, Sass, Swiper y Netlify.
- Commits relacionados con banner principal, imágenes variantes, planos, mapa/puntos con problema en Safari, FormEmbed, formulario de contacto, SSR, transiciones persistentes de idioma y cambio de banner a imagen estática.
- Sitio desplegado en Netlify.

Preguntas:

1. ¿Qué era Cenote Gardens exactamente: desarrollo residencial, proyecto inmobiliario, inversión, terrenos, departamentos o comunidad?
2. ¿El diseño venía completamente de Figma o tú tomaste decisiones visuales importantes?
3. ¿Qué tan visual era el proyecto? ¿El reto principal estuvo en banners, planos, renders, mapas, carruseles o storytelling inmobiliario?
4. Vi commits sobre planos e imágenes variantes. ¿Te tocó ajustar materiales gráficos pesados o hacer que los planos se vieran bien en distintos dispositivos?
5. Hay un commit sobre un problema de puntos negros en Safari. ¿Recuerdas qué pasaba y cómo lo resolviste?
6. También aparecen FormEmbed, formulario de contacto y cambio a SSR. ¿Qué problema técnico motivó usar SSR o cambiar la lógica del formulario?
7. ¿Qué experiencia te dejó mezclar React y Vue dentro de Astro? ¿Fue por una necesidad real, por componentes heredados o por experimentar?
8. ¿Qué tan importante era el cambio de idioma o las transiciones persistentes en este proyecto?
9. Para la entrada, ¿quieres que destaque más el reto visual inmobiliario o el reto técnico de compatibilidad/formularios/SSR?

### Ads Atelier

Estado: redactado en `src/content/projects/es/ads-atelier.md`.

Entrada actual: sitio Astro para joyería fina, con catálogo visual, colecciones, piezas custom made, Instagram y carruseles.

Señales técnicas encontradas:

- Astro, React, Tailwind CSS, TypeScript, Swiper e Instagram.
- Commits relacionados con posts de Instagram con video, carrusel principal, nuevas imágenes, header, menú móvil, opacidad/fade del isologo, metadata, 404 y correcciones de escritura.
- Sitio publicado en `adsatelier.mx`.

Preguntas:

1. ¿Qué buscaba transmitir Ads Atelier como marca: lujo, joyería fina, piezas personalizadas, editorial visual, venta directa o catálogo aspiracional?
2. ¿Lo hiciste desde cero? ¿Qué tanto venía definido en Figma y qué tanto resolviste tú en desarrollo?
3. ¿Qué partes construiste: home, líneas/colecciones, custom made, carruseles, contacto, Instagram, menú móvil, 404?
4. Vi trabajo con isologo, opacidad y fade sobre scroll. ¿El reto visual era que la marca se sintiera premium y no solo funcional?
5. Hay commits sobre Instagram y condición para video en posts. ¿Qué problema resolviste ahí: posts mixtos, videos que rompían layout, API, embeds o carrusel?
6. ¿Qué tan delicado fue trabajar con imágenes de joyería en cuanto a peso, proporciones, recortes y calidad visual?
7. ¿Qué aprendiste de construir un sitio donde la estética y el detalle de marca importan tanto?
8. Para la entrada, ¿quieres que se lea como catálogo visual de marca premium o como integración visual con contenido social?

### May Pro

Estado: redactado en `src/content/projects/es/may-pro.md`.

Entrada actual: sitio Astro comercial con secciones reutilizables, contenido visual optimizado y dominio personalizado.

Señales técnicas encontradas:

- Astro, Tailwind CSS, TypeScript, Swiper y Remix Icon.
- Commits relacionados con página de nosotros, adhesivos, morteros, estucos, PDFs comprimidos, autoplay de video en iPhone, validación de source de video, botón de WhatsApp, favicon, metadata y descripciones.
- Sitio publicado en `maypro.mx`.

Preguntas:

1. ¿Qué es May Pro y qué productos o servicios vendía: estucos, adhesivos, morteros, acabados, construcción, catálogo técnico?
2. ¿Este sitio fue desde cero o venía de una base previa?
3. Por los commits, parece que hay páginas por línea de producto y PDFs. ¿Cómo organizaste la información técnica y los descargables?
4. ¿El reto principal fue catálogo, video, rendimiento, WhatsApp, dominio personalizado o SEO?
5. Vi commits sobre autoplay de video en iPhone y validación del source del video. ¿Qué problema había en mobile/iOS y cómo lo resolviste?
6. ¿Qué papel tenían los PDFs comprimidos? ¿Eran fichas técnicas, catálogos o materiales comerciales?
7. ¿Qué aprendiste de sitios de productos de construcción o acabados, donde el contenido técnico tiene que ser claro para vender?
8. Para la entrada, ¿conviene presentarlo como sitio comercial de producto técnico o como catálogo con recursos descargables?

### Surima

Estado: redactado en `src/content/projects/es/surima.md`.

Entrada actual: landing Astro comercial con carruseles, secciones visuales y despliegue estático.

Señales técnicas encontradas:

- Astro, Tailwind CSS, Swiper y Netlify.
- Commits muy lineales: inicio/configuración, banner principal, secciones de host/invest/value, migración a Astro 5 beta, carrusel, footer, fuente y README.

Preguntas:

1. ¿Qué era Surima y qué propuesta comercial comunicaba?
2. ¿Fue una landing desde cero y de alcance acotado?
3. ¿Qué secciones recuerdas haber construido: banner principal, valores, inversión, host, carrusel, footer?
4. Vi una migración o uso de Astro 5 beta. ¿Fue decisión tuya probar esa versión o el proyecto ya nació así?
5. ¿El reto principal fue visual, de contenido, de carrusel o de configuración/despliegue?
6. ¿Qué tan rápido salió este proyecto comparado con Tradeco, Ads Atelier o May Pro?
7. ¿Hay alguna anécdota de diseño, cliente, cambios o assets que valga la pena incluir?
8. Para la entrada, ¿quieres que sea breve como landing comercial o que tenga más peso como parte de tu transición a Astro?

### Ventum

Estado: redactado en `src/content/projects/es/ventum.md`.

Entrada actual: mantenimiento de sitio Gatsby existente, con páginas de sistema, contacto, formularios y enlaces comerciales.

Señales técnicas encontradas:

- Gatsby, React, Styled Components, Ant Design, React Calendar, React Helmet, Google Analytics y Sitemap.
- Commits relacionados con contacto, privacidad/cookies, header/footer/WhatsApp, responsivo de sistema e index, botón de enviar, login añadido y cambios de teléfono/WhatsApp.
- Es un proyecto heredado, no creado desde cero.

Preguntas:

1. ¿Qué era Ventum y qué ofrecía? La entrada actual habla de páginas de sistema y contacto, pero falta aterrizar el giro.
2. ¿Tu rol fue mantenimiento puntual o llegaste a tocar secciones completas?
3. ¿Qué cambios recuerdas haber hecho: WhatsApp, teléfonos, formularios, login, calendario, contacto, responsive, privacidad/cookies?
4. Hay un commit de “Login añadido”. ¿Te tocó trabajar algo funcional de autenticación o solo integrar un enlace/pantalla?
5. ¿Qué papel tenía React Calendar o Ant Design dentro del sitio? ¿Era agenda, demostración, sistema o interfaz administrativa?
6. ¿Qué fue lo más difícil de mantener este Gatsby heredado frente a otros como Tycoon o DIR Humana?
7. ¿El proyecto te dejó algún aprendizaje sobre mantenimiento, responsive o cuidado de sitios que ya estaban en producción?
8. Para la entrada, ¿lo dejamos como mantenimiento profesional de proyecto heredado o hay alguna funcionalidad que merezca más protagonismo?

## Fase 4: Astro profesional, sitios médicos y marcas comerciales 2025

Estado: en entrevista.

1. Portafolio profesional
2. Gynobs
3. Beacon
4. Nobilis
5. Empatiko
6. AppDeux
7. Aesthetic Concept
8. Basmar Zahreen
9. Arctic Roots
10. Clínica de Medicina Materno Fetal
11. Zensory
12. Diana Invitación
13. Volta Capital

### Portafolio profesional

Entrada actual: sitio personal diseñado en Figma y construido con Astro/Tailwind para proyectos, blog, SEO, marca personal y versión bilingüe.

Señales técnicas encontradas:

- Astro, Tailwind CSS, Content Collections, rutas bilingües, SEO técnico.
- Commits relacionados con estructura inicial, estilos, media, header, animaciones de header, footer, enlaces, páginas About/Contact, flag avatar, migración a Astro 6, content collections y nuevas directrices de entradas de proyectos.
- Este repo además se está convirtiendo en archivo vivo de tu historia profesional, no solo en una vitrina.

Preguntas:

1. ¿En qué momento sentiste que necesitabas rehacer tu portafolio y no solo “tener una página personal”?
2. ¿Qué querías que dijera de ti visualmente: desarrollador frontend, docente, investigador, alguien con gusto por interfaces, alguien que ya tiene historia?
3. ¿Qué tan importante fue diseñarlo primero en Figma antes de pasarlo a Astro?
4. En los commits aparecen header, animaciones, footer, About, Contact, banderas, rutas bilingües y content collections. ¿Qué parte sentiste más como identidad propia y no solo como implementación?
5. ¿Por qué decidiste convertir los proyectos en entradas con narrativa y no solo en tarjetas con stack y screenshot?
6. ¿Qué significa para ti que este portafolio ahora esté funcionando casi como una memoria técnica de tus años de trabajo?
7. ¿Qué aprendiste al construir un sitio para ti mismo, donde el cliente eres tú y también eres el más difícil de convencer?
8. Para la entrada, ¿quieres que se lea como proyecto técnico, como ejercicio de marca personal o como una bitácora profesional que sigue creciendo?

### Gynobs

Entrada actual: sitio institucional médico para servicios ginecológicos y obstétricos.

Señales técnicas encontradas:

- Astro, React y Tailwind CSS.
- Commits relacionados con home, doctores, servicios, contacto, header, lógica de cambio de color del logo según scroll, imágenes de doctores, selector de doctores, instituciones, sala de estar y actualización de datos de médicos.
- Proyecto médico donde confianza, claridad y cuidado visual pesan más que espectacularidad.

Preguntas:

1. ¿Qué tipo de clínica o proyecto médico era Gynobs y qué tono debía transmitir: confianza, cercanía, especialidad, calma, profesionalismo?
2. ¿El diseño ya venía definido o tú tuviste margen para decidir estructura y comportamiento visual?
3. ¿Qué páginas construiste con más detalle: home, doctores, servicios, contacto?
4. Vi commits sobre selector de doctores, perfiles e instituciones. ¿La sección médica fue el corazón del sitio?
5. ¿Qué reto tuvo presentar doctores, servicios e información sensible sin que el sitio se sintiera frío o saturado?
6. Hay una lógica de cambio de color del logo según scroll. ¿Recuerdas por qué fue necesaria y qué buscaba visualmente?
7. ¿Qué aprendiste de crear sitios médicos, donde la interfaz debe calmar más que impresionar?
8. Para la entrada, ¿quieres que el texto tenga más peso en confianza médica, en estructura de servicios o en detalles de interfaz?

### Beacon

Entrada actual: sitio comercial Astro para soluciones médicas dentro del ecosistema Servimex.

Señales técnicas encontradas:

- Astro, React, Tailwind, Heroicons, Formspree y HubSpot Meetings.
- Commits relacionados con header, hero slider, counter stats, modal, sección de productos, sección Beacon, about/contacto, CTA, aviso de privacidad, home, Formspree, imágenes sin marca de agua, favicon y monitor C22S+.
- Comparte base/historial con Nobilis, por lo que conviene distinguir identidad y alcance real.

Preguntas:

1. ¿Qué era Beacon dentro del grupo Servimex y qué producto o solución médica buscaba posicionar?
2. ¿Este fue el primer sitio del bloque Servimex o ya venías con una base técnica previa?
3. ¿Qué partes construiste tú: hero slider, contador, modal de producto, sección Beacon, contacto, aviso de privacidad, agenda?
4. Hay commits sobre modal y reinicio de modal. ¿Qué función tenía ese modal y por qué necesitaba lógica especial?
5. ¿Qué papel tenían Formspree y HubSpot Meetings? ¿El sitio buscaba cotización, demostración, agenda o contacto comercial?
6. ¿Qué tan delicado fue trabajar imágenes de producto médico, marca de agua y presentación comercial?
7. ¿Qué aprendiste al convertir un producto médico en una página que no solo informa, sino que también vende confianza?
8. Para la entrada, ¿conviene enfatizarlo como landing de conversión médica o como primera pieza de un ecosistema Servimex?

### Nobilis

Entrada actual: sitio comercial Astro para marca médica dentro de Servimex.

Señales técnicas encontradas:

- Astro, React, Tailwind, Heroicons, Formspree y HubSpot Meetings.
- El historial visible comparte muchos commits con Beacon: hero slider, counter stats, modal, productos, contacto, aviso de privacidad, Formspree, imágenes sin marca de agua y monitor C22S+.
- La pregunta clave es cómo evitar que Nobilis se lea como copia de Beacon.

Preguntas:

1. ¿Qué diferencia real había entre Nobilis y Beacon: producto, público, tono, identidad visual, prioridad comercial?
2. ¿Nobilis nació reutilizando una base técnica de Beacon o ambos se desarrollaron en paralelo?
3. ¿Qué cambiaste para que Nobilis no se sintiera como “el mismo sitio con otros colores”?
4. ¿Qué componentes reutilizaste y cuáles tuviste que adaptar: hero, productos, modal, CTA, contacto, agenda?
5. ¿El reto principal fue técnico o editorial: ordenar la propuesta de valor de una marca médica específica?
6. ¿Cómo manejaste la frontera entre eficiencia y repetición cuando trabajas varios sitios de un mismo grupo empresarial?
7. ¿Qué parte de Nobilis merece contarse como aprendizaje propio y no solo como derivación de Beacon?
8. Para la entrada, ¿lo presentamos como sitio hermano de Beacon o como marca independiente dentro del ecosistema Servimex?

### Empatiko

Entrada actual: sitio comercial más amplio de Servimex con catálogo, rutas internas, distribuidores, soporte, contacto y productos.

Señales técnicas encontradas:

- Astro, React, Tailwind, Heroicons, Nodemailer, Formspree y HubSpot Meetings.
- Commits relacionados con archivos JSON de productos, megamenú, páginas individuales de producto, render estático, WhatsApp, formulario para productos, PDFs/fichas, workstation faltantes, subcategorías de servidores, links de catálogo y orden de categorías.
- Es el Servimex más complejo en información.

Preguntas:

1. ¿Qué era Empatiko dentro de Servimex y por qué necesitaba una estructura más grande que Beacon/Nobilis?
2. ¿El catálogo de productos fue la parte central del proyecto?
3. Vi commits de JSON, páginas individuales, megamenú, subcategorías, PDFs y fichas. ¿Cómo organizaste esa información para que no se volviera inmanejable?
4. ¿Qué tan difícil fue diseñar un megamenú útil para productos médicos o tecnológicos con varias categorías?
5. ¿Por qué cambiaste o cuidaste el renderizado estático? ¿Era por rendimiento, SEO, Netlify, o por facilidad de despliegue?
6. ¿Qué papel tenían WhatsApp, Formspree, Nodemailer y HubSpot en los flujos de contacto?
7. ¿Empatiko fue el proyecto donde el ecosistema Servimex dejó de sentirse como landings y empezó a sentirse como catálogo comercial serio?
8. Para la entrada, ¿quieres que pese más la arquitectura de catálogo o la idea de ordenar comercialmente una oferta médica compleja?

### AppDeux

Entrada actual: emprendimiento propio para crear sitios accesibles para microempresas locales.

Señales técnicas encontradas:

- No hay un repo único claro en esta fase; la entrada actual está redactada como iniciativa/emprendimiento.
- Tecnologías listadas: Astro, Tailwind, Figma y SEO.
- Conviene tratarlo como experiencia profesional transversal, no como un sitio individual.

Preguntas:

1. ¿Qué es AppDeux para ti: emprendimiento, laboratorio, marca local, intento de agencia, colaboración con amigos?
2. ¿Por qué nació? ¿Fue por ver que microempresas locales necesitaban presencia web accesible?
3. ¿Qué tipo de negocios han llegado o te gustaría atender con AppDeux?
4. ¿Cuál era la filosofía: páginas simples, precios accesibles, SEO local, diseño claro, acompañamiento cercano?
5. ¿Qué aprendiste de hablar directamente con clientes pequeños, que quizá no tienen claridad técnica pero sí una necesidad real?
6. ¿Cómo se diferencia AppDeux de tu trabajo en YGU?
7. ¿Quieres que esta entrada siga siendo proyecto, o después convendría convertirla en blog/reflexión profesional?
8. Para redactarla, ¿quieres un tono más íntimo, como “mi intento de construir algo propio”, o más empresarial?

### Aesthetic Concept

Entrada actual: catálogo premium de mobiliario para interiorismo.

Señales técnicas encontradas:

- Astro, React, Tailwind, Formspree y Heroicons.
- Commits relacionados con layout principal, slider, contacto, páginas de sillas, comedores, galerías, WhatsApp flotante, ruta directa a sillas, metadata, formulario, lógica de cambio de imágenes en galería, transiciones de cards, precarga de imágenes, favicon y catálogo.
- Reto claro: catálogo visual premium con galerías.

Preguntas:

1. ¿Qué vendía Aesthetic Concept y qué debía sentirse al entrar: lujo, interiorismo, catálogo editorial, mobiliario premium?
2. ¿Qué secciones o categorías construiste: sillas, comedores, galerías, contacto, catálogo?
3. Vi varias iteraciones sobre galería y cambio de imágenes. ¿La galería fue el reto más fino del proyecto?
4. ¿Cómo resolviste la experiencia de producto: cards, imágenes alternas, transición, precarga, ficha o contacto?
5. ¿Qué tan importante era WhatsApp flotante y Formspree en la conversión?
6. ¿Qué aprendiste de sitios donde el producto entra por los ojos y la interfaz no debe estorbar?
7. ¿Hubo un detalle visual que te haya gustado especialmente o que haya costado más de lo esperado?
8. Para la entrada, ¿quieres presentarlo como catálogo premium o como ejercicio de galería/interacción visual?

### Basmar Beauty Zahreen

Entrada actual: landing dentro de ruta comercial `/zahreen/`.

Señales técnicas encontradas:

- Astro, React y Tailwind.
- Commits relacionados con selector entre versión normal/Royale, banner video background, retailers ocultos, fotos de perfumes, páginas Royale, tarjetas de perfumes, modales, detalles de fragancias y cambios de footer.
- Parece haber crecido de una landing Zahreen hacia variantes/selector de productos.

Preguntas:

1. ¿Qué era Zahreen dentro de Basmar Beauty: perfume, línea de belleza, campaña, producto específico?
2. ¿Al inicio era solo una landing en `/zahreen/` o después evolucionó con versión Royale y selector?
3. ¿Qué parte construiste tú: landing base, selector, video background, tarjetas, modales, páginas de perfumes, footer?
4. Vi commits con detalles de fragancias y tarjetas de perfumes. ¿El reto era contar un producto sensorial con una interfaz visual?
5. ¿Qué tan difícil fue publicar dentro de una ruta base del dominio sin romper assets, navegación o enlaces?
6. ¿Qué papel tuvo el video de fondo o la selección visual entre variantes?
7. ¿Te interesa que la entrada tenga un tono más de producto/fragancia, casi editorial, o más técnico sobre ruta base y variantes?
8. ¿Qué aprendiste de construir una landing que vive dentro de otro ecosistema de marca?

### Arctic Roots

Entrada actual: sitio institucional bilingüe con servicios, agentes, contacto y rutas localizadas.

Señales técnicas encontradas:

- Astro, React, Tailwind, TypeScript, i18n y Heroicons.
- Commits relacionados con header dark, travel types, página “vive el eclipse”, footer language switcher, correcciones de textos en inglés/español, favicon, metadata, header mobile y color mobile.
- Varias ramas/cambios generados para páginas específicas, por lo que conviene distinguir tu rol de dirección/integración.

Preguntas:

1. ¿Qué era Arctic Roots y qué vendía o comunicaba: viajes, experiencias, agentes, turismo, eventos como eclipses?
2. ¿El bilingüismo era requisito central desde el inicio?
3. ¿Qué estructura i18n usaste y qué aprendiste al mantener rutas limpias en español/inglés?
4. Vi páginas como Travel Types y Vive el Eclipse. ¿Te tocó construirlas, integrarlas o revisar trabajo generado/colaborativo?
5. ¿Qué reto tuvo mantener coherencia entre contenido turístico, calendario, CTAs y contacto?
6. ¿El cambio de idioma en footer/header tuvo un aprendizaje específico de UX?
7. ¿Qué tanto se volvió este proyecto un sitio vivo, con nuevas páginas y campañas, en vez de un sitio institucional cerrado?
8. Para la entrada, ¿lo contamos como sitio bilingüe turístico o como arquitectura extensible para campañas?

### Clínica de Medicina Materno Fetal

Entrada actual: sitio institucional médico para clínica especializada.

Señales técnicas encontradas:

- Astro, React, Tailwind y Heroicons.
- Commits relacionados con página de doctores, modales de doctores, logros, hover de cards, misión/visión, quienes somos, servicios, CTAs a WhatsApp, mapa, ubicación y correcciones de nombres de doctores.
- Sitio médico con mucho contenido humano: doctores, logros, servicios, confianza.

Preguntas:

1. ¿Qué diferencia había entre esta clínica y Gynobs en tono, estructura o tipo de paciente?
2. ¿Qué secciones fueron más importantes: doctores, servicios, quienes somos, misión/visión, ubicación, WhatsApp?
3. Vi commits sobre modales de doctores y logros. ¿La presentación del equipo médico era el centro de confianza?
4. ¿Qué aprendiste al redactar/maquetar logros médicos sin que pareciera currículum pesado?
5. ¿Por qué los CTAs terminaron yendo a WhatsApp? ¿Era la vía real de agendar?
6. ¿Qué reto tuvo integrar mapa/ubicación y dejar vacío URL de redes?
7. ¿Fue un proyecto más sensible por tratarse de embarazo, medicina fetal y pacientes buscando calma?
8. Para la entrada, ¿quieres que destaque más la confianza médica o la arquitectura de doctores/servicios?

### Zensory

Entrada actual: landing con Stripe Checkout y confirmación por correo para producto digital.

Señales técnicas encontradas:

- Astro, React, Tailwind, Stripe, Nodemailer y Netlify.
- Commits relacionados con Checkout, precio fijo, datos de comprador, correos de confirmación, logs de debug, prevención de correos duplicados, variables de entorno, eliminación de webhook de Stripe y verificación de envío.
- Reto fuerte: cerrar compra digital sin duplicar correos y sin depender de un backend pesado.

Preguntas:

1. ¿Qué era Zensory y qué se vendía exactamente: curso, producto digital, experiencia sonora, manifestación con sonido?
2. ¿Cómo llegó este proyecto y por qué necesitaba pagos reales?
3. ¿Qué aprendiste de hacer un flujo de compra más pequeño que ChildFund pero más cerrado como producto digital?
4. Vi commits de Stripe Checkout, precio fijo y datos del comprador. ¿Cómo estructuraste el flujo desde landing hasta confirmación?
5. Hay commits sobre correos duplicados, debug y variables de entorno. ¿Qué problema apareció con los correos de confirmación?
6. ¿Por qué se eliminó o evitó el webhook de Stripe? ¿Fue por simplicidad, Netlify, tiempo o arquitectura?
7. ¿Qué tan importante era que el correo usara el email del formulario y no otro dato de sesión?
8. Para la entrada, ¿quieres que se lea como ecommerce ligero, como aprendizaje de pagos, o como contraste con ChildFund?

### Diana Invitación

Entrada actual: invitación digital responsive con Astro, Tailwind y AOS.

Señales técnicas encontradas:

- Astro, Tailwind y AOS.
- Commits relacionados con configuración, estructura básica, AOS, borrador, imágenes, iconos, vestimenta, carousel, estilos, favicon y corrección de nombre.
- Proyecto de evento, más emocional y personal que corporativo.

Preguntas:

1. ¿Qué evento era esta invitación y qué tono debía transmitir?
2. ¿Fue un proyecto personal/cercano o un cliente formal?
3. ¿Qué información debía resolver: fecha, lugar, vestimenta, carrusel, fotos, confirmación, mapa?
4. ¿Por qué usaste AOS? ¿Buscabas una experiencia de recorrido, casi como abrir una invitación física?
5. ¿Qué reto tuvo diseñar para celular, que probablemente era donde más se iba a compartir?
6. ¿Hubo alguna anécdota con imágenes, iconos, vestimenta o cambios de nombre?
7. ¿Qué te gusta de este tipo de proyectos pequeños, donde el valor está más en el gesto que en la complejidad?
8. Para la entrada, ¿quieres un tono más cálido y de experiencia digital para evento, o mantenerlo técnico y breve?

### Volta Capital

Entrada actual: sitio corporativo bilingüe para servicios, inversionistas y empresas relacionadas.

Señales técnicas encontradas:

- Astro, React, Tailwind, TypeScript, i18n y Heroicons.
- Commits relacionados con contacto, diseño desde Figma, empresas/cards, modales, logos dentro de cards, links de empresas, carrusel de imágenes en “quienes somos”, inglés, favicon y correcciones.
- Varias ramas `codex` para diseño de contacto y cards/modales.

Preguntas:

1. ¿Qué es Volta Capital y qué debía comunicar: inversión, servicios corporativos, empresas relacionadas, grupo financiero?
2. ¿El diseño venía cerrado en Figma o tuviste que interpretar secciones corporativas?
3. ¿Qué tan importante era la versión en inglés? ¿Fue agregada desde el inicio o después?
4. Vi trabajo con cards de empresas, modales, logos y links. ¿La sección de empresas relacionadas fue el reto principal?
5. ¿Qué información debía contener cada modal y cómo evitaste que se volviera pesado?
6. ¿Qué aprendiste de sitios corporativos donde la claridad y sobriedad pesan más que la animación?
7. ¿Cómo convivió aquí tu trabajo directo con cambios asistidos en ramas `codex`?
8. Para la entrada, ¿quieres que se lea como sitio corporativo bilingüe o como estructura de grupo con empresas/modales?

## Fase 5: proyectos recientes, educación, IA y consolidación 2026

Estado: pendiente.

1. Thai Town
2. HEMIS: CSS Evaluator API
3. Re Conecta
4. Monarca Camellia
5. GDD CSS
6. Eco Escuela
7. Videojuego educativo de CSS con IA
8. Cursos de Astro en EDteam
9. Dirección de sitios web para clientes en YGU
10. ChildFund México: landing de apadrinamiento
