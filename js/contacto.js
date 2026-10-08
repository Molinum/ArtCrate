/* ==========================================================
   ArtCrate - reglas del formulario: contacto
   Usa las funciones comunes de js/validaciones.js
   ========================================================== */

'use strict';

const formulario = document.querySelector('form');

// Cada campo tiene una regla; el orden es el mismo que en la página
Validar.configurar(formulario, {
  nombre: Validar.requerido('Ingresa tu nombre'),
  correo: Validar.requerido('Ingresa tu correo electrónico'),
  asunto: Validar.requerido('Selecciona un asunto'),
  mensaje: Validar.requerido('Escribe tu mensaje')
});
