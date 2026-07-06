# Inventario inicial de proyectos Gatsby y Next

Este documento registra los proyectos encontrados fuera de la carpeta de Astro para preparar las siguientes entradas del portafolio. La prioridad es escribir primero en español y después traducir.

## Criterio para nuevas entradas

Cada entrada debe seguir la plantilla de `docs/plantillas/plantilla-entrada-proyecto.md`:

1. Imagen principal.
2. Título.
3. Fecha.
4. Descripción corta.
5. Link al sitio publicado.
6. Texto introductorio.
7. Desarrollo y reto técnico.
8. Tecnologías utilizadas.
9. Resultado.
10. Imágenes adicionales.

## Gatsby

### Clavijero68

- Ruta local: `D:\DEV\DesarrolloWeb\Gatsby,js\clavijero`
- URL pública: `https://regal-duckanoo-270131.netlify.app/`
- README: landing page hecha con Gatsby.js, React, Sass y EDgrid.
- Tecnologías detectadas: Gatsby, React, Sass, EDgrid, Formspree, React Icons, React Scroll, Swiper, Google Tag Manager.
- Estado de información: listo para captura y redacción base.
- Pendiente editorial: confirmar qué comunicaba/vendía Clavijero68 y cuál fue el reto técnico más representativo.

### Worldpark

- Ruta local: `D:\DEV\DesarrolloWeb\Gatsby,js\worldpark-web`
- URL pública: `https://worldpark.com.mx/`
- README: conserva contenido del starter de Gatsby, no documenta el proyecto.
- Tecnologías detectadas: Gatsby, React, Styled Components, Bootstrap, React Bootstrap, Google Map React, Swiper, Axios, Gatsby Sitemap, Cloudinary, catálogos PDF en Google Drive.
- Lectura inicial: sitio inmobiliario o de desarrollos, con páginas por desarrollo, catálogo, videos y mapas.
- Pendiente editorial: confirmar alcance real, si hubo integración de catálogo o maquetación de datos existentes, y cuál fue la parte más compleja.

### Ventum

- Ruta local: `D:\DEV\DesarrolloWeb\Gatsby,js\Ventum`
- URL pública: `https://www.ventum.com.mx/`
- README: página web de Ventum.
- Tecnologías detectadas: Gatsby 4, React 17, Styled Components, Ant Design, React Calendar, React Helmet, Google Analytics, Sitemap, Formspree.
- Lectura inicial: incluye páginas de contacto, sistema, agenda/calendario y link externo de inicio de sesión.
- Pendiente editorial: confirmar qué debía resolver el sitio y si el calendario/formulario fue parte clave del reto técnico.

### Ditulum

- Ruta local: `D:\DEV\DesarrolloWeb\Gatsby,js\ditulum`
- URL pública: `https://cozy-salamander-27c74b.netlify.app/es/`
- README: sitio creado por YGU COMUNICAXION con Gatsby.js y React.
- Tecnologías detectadas: Gatsby, React, Sass, EDgrid, React Slick, React Icons, Swiper, Gatsby Intl, Google Tag Manager, Facebook Pixel, LeadSales.
- Lectura inicial: sitio de servicios con integración de tracking, chat/LeadSales, redes y WhatsApp.
- Pendiente editorial: confirmar tipo de negocio y reto principal.

### Woof Tulum

- Ruta local: `D:\DEV\DesarrolloWeb\Gatsby,js\Woof-Tulum`
- URL pública: `https://www.wooftulum.com/`
- README: conserva contenido del starter de Gatsby.
- Tecnologías detectadas: Gatsby 4, React, Bootstrap, React Bootstrap, Styled Components, i18next, React i18next, React Scroll.
- Lectura inicial: sitio bilingüe; falta confirmar giro y alcance.
- Pendiente editorial: confirmar si era bilingüe por requerimiento del cliente y qué secciones fueron más importantes.

### Dirección Humana

- Ruta local: `D:\DEV\DesarrolloWeb\Gatsby,js\dirhumana`
- URL pública: `https://direccionhumana.com`
- README: conserva contenido del starter de Gatsby.
- Tecnologías detectadas: Gatsby, React, Styled Components, Firebase, Firebase Admin, Formik, Yup, Axios, Moment, XLSX, Netlify Functions, Google Map React, React Helmet, Gatsby Sitemap, Formspree.
- Lectura inicial: sitio con vacantes/postulaciones, carga o referencia de CV, schema de JobPosting, formularios, mapa e integración con API externa de GlobalPatron.
- Nota de autoría: Jonathan implementó los módulos.
- Pendiente editorial: redactar el reto técnico alrededor de vacantes, postulaciones, formularios, datos y SEO de ofertas laborales.

### Tycoon

- Ruta local: `D:\DEV\DesarrolloWeb\Gatsby,js\tycoon`
- URL pública: `https://tycoon.mx/`
- README: sitio web de Tycoon por YGU; tecnologías indicadas: Gatsby, React, Styled Components, GraphQL, Apollo, Netlify, GitHub.
- Tecnologías detectadas: Gatsby 4, React, Styled Components, Bootstrap, React Bootstrap, i18next, Gatsby i18next, Axios, Google Analytics, Sitemap, Instagram Graph API.
- Lectura inicial: sitio bilingüe con noticias, integración o consumo de contenido de Instagram y secciones corporativas.
- Pendiente editorial: confirmar si GraphQL/Apollo siguen siendo parte activa del proyecto y cuál fue el reto más representativo.

### Bora

- Ruta local: `D:\DEV\DesarrolloWeb\Gatsby,js\bora`
- URL pública: `https://hilarious-queijadas-d11b02.netlify.app/`
- README: conserva contenido del starter de Gatsby.
- Tecnologías detectadas: Gatsby, React, Sass, TypeScript, React Slick, Slick Carousel, Hero Slider, React Icons, React Scroll.
- Estado de información: listo para captura y análisis de código.
- Pendiente editorial: confirmar giro del proyecto y reto técnico principal.

## Next

### ChildFund México

- Ruta local: `D:\DEV\DesarrolloWeb\Next\childfund`
- URL pública: `https://www.childfundmexico.org.mx/`
- README: sitio web de ChildFund México creado con Next.js, React, Stripe, OpenPay y PayPal para YGU COMUNICAXION.
- Tecnologías detectadas: Next.js 13, React, Next SEO, Bootstrap, React Bootstrap, Formik, Yup, Stripe, PayPal, OpenPay, Nodemailer, reCAPTCHA, Axios, Google Map React, React Multi Carousel, React Datepicker, React Toastify, Markdown con `gray-matter` y `marked`.
- Lectura inicial: proyecto web grande para ONG con donaciones, rutas API, formularios, pasarelas de pago, recursos, blog, transparencia, integración con sistema externo y tracking.
- Nota de autoría: Jonathan no creó el sitio desde cero; ayuda a mantenerlo y desarrolló/mantiene partes relacionadas con pasarelas de pago y flujos de donación.
- Decisión editorial: no reemplaza `childfund-mundial`, porque esa entrada corresponde a una landing creada en Astro por Jonathan.
- Pendiente editorial: redactar como mantenimiento evolutivo y trabajo técnico sobre pagos, no como autoría completa del sitio.

### OUL

- Ruta local: `D:\DEV\DesarrolloWeb\Gatsby,js\oul`
- URL pública: `https://oul.mx/`
- README: conserva contenido base de Next.js.
- Tecnologías detectadas: Next.js 12, React, Ant Design, Firebase, Formik, Yup, Axios, Stripe, SendGrid, React Email Render, React PDF, React Datepicker, React Device Detect, React Highlight Words.
- Nota profesional: proyecto importante para Jonathan; realizó su estancia de licenciatura en este proyecto y desarrolló su tesis final sobre el sistema de trámites creado para esta organización.
- Decisión editorial: debe tener una entrada más profunda que un sitio web común. Conviene presentarlo como sistema/plataforma, no solo como página.
- Pendiente editorial: separar claramente sitio público, sistema de trámites, alcance de la tesis de licenciatura, módulos implementados y resultado para la organización.

## Backend, IA y videojuegos

### Hemis Backend

- Fuente: README compartido por Jonathan.
- Tipo sugerido: proyecto `backend` + `ai` + `education`.
- Tecnologías base: Express, Zod, Gemini 2.5 Flash Lite, CORS/orígenes permitidos, filtros de seguridad, fallback local, métricas de conversación.
- Pendiente: crear entrada propia. Jonathan agregará imágenes específicas después; mientras tanto se puede trabajar con placeholder o sin screenshots.

### CSS Godot Game

- Fuente: README compartido por Jonathan.
- Tipo sugerido: proyecto `games` + `ai` + `education`.
- Tecnologías base: Godot 4, GDScript, WebView, parser CSS propio, export web, integración con Hemis, SVG en pipeline de juego.
- Pendiente: crear entrada propia. Jonathan agregará imágenes específicas después; mientras tanto se puede trabajar con placeholder o sin screenshots.
