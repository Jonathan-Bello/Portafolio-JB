---
id: "css-evaluator-api"
title: "Hemis: CSS Evaluator API"
description: "Backend en Node.js y Express para conectar el videojuego, la interfaz web y el asistente de IA Hemis dentro de Citadel of the Solar Souls."
publishDate: 2026-01-14
cover: "@assets/coversProjects/backend/hemis_backend_thumbnail.png"
techs:
  - Node.js
  - Express.js
  - CSS
  - Wallace CSS
  - IA
category: ["backend", "ai", "education"]
url: "https://jonathanbello.com/projects/css-evaluator-api"
author: "jonathan-bello"
isRelevant: true
---

Hemis es el backend que permite que Citadel of the Solar Souls tenga un asistente de inteligencia artificial integrado dentro del juego. Nacio junto con la idea original del proyecto: no queria que el jugador saliera a otra pagina para pedir ayuda, sino que pudiera conversar con una presencia dentro del propio mundo.

En el lore del juego, Hemis forma parte de una inteligencia artificial implantada en los seres humanos de un futuro solarpunk. En lo tecnico, es una API desarrollada con Node.js y Express que media la comunicacion entre Godot, la interfaz web del juego y el modelo de inteligencia artificial.

## Funcion

La API recibe contexto del jugador: zona, objetivo, puzzle actual, avances, habilidades desbloqueadas, municion activa, codigo CSS en revision y consulta escrita. Con esa informacion construye una respuesta contextual para orientar al jugador sin entregarle directamente la solucion.

Esa distincion era importante. Hemis no debia convertirse en una maquina de respuestas. Su papel era acompañar el aprendizaje: dar pistas, explicar propiedades, orientar el siguiente paso y mantener al jugador dentro de la experiencia.

## Arquitectura

El proyecto separa responsabilidades en tres piezas. Godot se encarga del videojuego. La capa web permite escribir CSS real, previsualizar municion e interactuar con el asistente. El backend recibe el contexto, procesa la peticion y devuelve una respuesta que el juego puede mostrar.

Separar la logica en una API fue una decision practica y arquitectonica. Godot debia seguir siendo el juego; la interfaz web debia encargarse del codigo visual; y el backend debia resolver la comunicacion con IA, validaciones y estructura de respuesta. Esa separacion hizo mas clara la implementacion y facilito mantener cada parte en su lugar.

## Reto tecnico

Lo mas dificil fue lograr que todo se comunicara bien. El juego habla con la capa web, la capa web habla con el backend, el backend consulta el servicio de IA y la respuesta regresa para mostrarse dentro del entorno de juego.

Tambien fue necesario pedir una API key al jugador. La razon fue practica: el uso de inteligencia artificial tiene costo, y permitir que cada persona use su propia llave evita que mantener el prototipo se vuelva insostenible.

## Importancia

Hemis representa el puente tecnico entre el juego educativo y la inteligencia artificial. Es la pieza que convierte una idea narrativa en una funcion real: un acompañante que entiende contexto y responde dentro de la experiencia.

Para mi, este backend es importante porque demuestra una forma distinta de usar IA en educacion. No como atajo para saltarse el aprendizaje, sino como guia contextual dentro de un entorno donde el estudiante todavia tiene que pensar, probar, equivocarse y avanzar.
