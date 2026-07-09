---
id: "cssgame-tesis-ia"
title: "Citadel of the Solar Souls: videojuego educativo de CSS con IA"
description: "Prototipo 2D tipo metroidvania para aprender CSS mediante retos, editor de codigo, municion basada en propiedades visuales, asistente de IA y evaluacion aplicada a estudiantes."
publishDate: 2026-05-30
cover: "@assets/coversProjects/videojuegos/citadel_of_solar_souls_cover.png"
techs:
  - Godot
  - CSS
  - Node.js
  - Express.js
  - Wallace CSS
  - Inteligencia Artificial
category: ["games", "education", "ai", "web"]
url: "https://www.jonathanbello.com/projects/cssgame-tesis-ia/"
author: "jonathan-bello"
isRelevant: true
---

Citadel of the Solar Souls es el proyecto mas ambicioso que he construido hasta ahora: un videojuego educativo para aprender CSS con apoyo de inteligencia artificial. Nacio como tesis de la Maestria en Sistemas Computacionales, pero en realidad venia de mas atras, de una inquietud que ya me acompañaba desde la licenciatura: usar videojuegos como medio para enseñar.

Cuando entré a la maestria en el Tecnologico de Teziutlan, gracias al apoyo de la beca de SECIHTI, sabia que no queria dedicar dos años a un proyecto que no sintiera mio. Existia un banco de proyectos propuestos por docentes, pero yo queria comprometerme con una idea propia. Ya habia participado antes en concursos de innovacion con proyectos relacionados con videojuegos educativos, asi que volvi a esa linea: queria hacer un juego.

La primera idea fue un videojuego para aprender CSS. Mi asesor, el Dr. Marco Antonio Aguilar Cortes, me hizo ver algo importante: eso podia funcionar como proyecto de licenciatura, pero para una tesis de maestria necesitaba un componente de innovacion mas fuerte. Ahi aparecio la pregunta que termino definiendo el proyecto: que pasaria si el juego tuviera un asistente de inteligencia artificial integrado dentro del mundo, no como una pagina externa, sino como una presencia que acompaña al jugador mientras aprende.

## La idea educativa

Elegí CSS porque es un lenguaje visual. Sus propiedades no solo se leen: se ven. Cambiar un color, modificar un borde, alterar una forma o activar un fondo produce una respuesta inmediata. Eso lo convierte en un candidato natural para trasladarse a un entorno audiovisual.

Tambien me interesaba evitar una dependencia superficial de la IA. Una herramienta de inteligencia artificial puede ayudar mucho, pero si el estudiante no desarrolla bases propias, solo aprende a pedir respuestas. Mi intencion era distinta: crear una experiencia donde el jugador tuviera que interiorizar conceptos de CSS para avanzar. No porque alguien lo obligara, sino porque el mundo le despertara curiosidad.

Por eso elegí una estructura 2D tipo metroidvania. Necesitaba un entorno interconectado, con exploracion, reglas, obstaculos y progreso. El juego funciona como un espacio controlado donde las reglas y los objetivos generan tension, y esa tension empuja la motivacion intrinseca: avanzar porque quieres saber que hay despues.

## Mecanicas principales

El jugador explora un mundo solarpunk, interactua con pilares solares, abre un editor de CSS y crea municion a partir de propiedades visuales. Esa municion no es decorativa: afecta el entorno.

Una plataforma puede activarse si recibe una bala con el color correcto. Un obstaculo puede eliminarse si la municion usa ciertas propiedades de borde. Un enemigo puede responder a atributos visuales como color, forma o radio. En lugar de presentar CSS como una lista de conceptos abstractos, el juego lo convierte en accion: escribir, equipar, disparar y observar.

La decision tecnica mas importante fue no simular CSS. Dentro del juego hay una capa web real. Godot sostiene la logica del videojuego, pero encima existe una interfaz HTML/CSS que permite crear municion con tecnologia nativa del navegador. El flujo completo conecta Godot, una vista web y un backend en Express. Esa union fue el mayor logro tecnico del proyecto.

Tambien decidí usar graficos vectoriales. Como SVG y CSS pertenecen al mismo lenguaje visual de la web, la municion, los elementos graficos y la interfaz no se sienten separados. Todo comparte una misma logica visual.

## Hemis, el asistente de IA

Hemis es el acompañante inteligente del juego. Su papel se parece al de un guia dentro del mundo: no debe resolver todo por el jugador, sino darle pistas, contexto y orientacion. Queria que se sintiera vivo, incluso con una personalidad ligeramente sarcastica, para que la interaccion no pareciera un simple chatbot pegado encima del juego.

El asistente puede considerar donde esta el jugador, que objetivo tiene, que habilidades ha desbloqueado, que puzzle esta enfrentando y que consulta acaba de hacer. Esa informacion le permite responder con mas contexto y mantener la inmersion.

## Resultado academico

La tesis se evaluo con 50 estudiantes de Ingenieria en Sistemas Computacionales del Instituto Tecnologico Superior de Teziutlan. Los resultados mostraron una mejora en el promedio de conocimientos de CSS: de 5.84 en el pretest a 8.12 en el postest. La escala de usabilidad SUS obtuvo 81.4 puntos, una valoracion favorable para el prototipo.

Estos resultados no convierten al juego en una solucion definitiva ni en un producto comercial terminado. Lo que demuestran es algo mas importante para mi: que es viable unir videojuegos educativos, tecnologias web e inteligencia artificial en una experiencia que apoye el aprendizaje introductorio de CSS.

## Mi rol

Lidere la investigacion, el diseño de la propuesta, la documentacion tecnica, la programacion, la integracion de tecnologias, parte de los graficos vectoriales y la construccion general del prototipo. Tambien recibí apoyo de personas cercanas que participaron en aspectos como narrativa, ideas, pruebas y acompañamiento del proyecto.

Citadel of the Solar Souls es investigacion, videojuego, backend, interfaz web, tesis y memoria personal al mismo tiempo. Es el punto donde se cruzan muchas de las cosas que soy: desarrollador, docente, investigador, diseñador de experiencias y alguien que sigue creyendo que aprender tambien puede sentirse como explorar un mundo.
