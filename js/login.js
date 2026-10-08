/* ==========================================================
   ArtCrate - reglas del formulario: inicio de sesión
   Usa las funciones comunes de js/validaciones.js
   ========================================================== */

'use strict';

const formulario = document.querySelector('form');

// Cada campo tiene una regla; el orden es el mismo que en la página
Validar.configurar(formulario, {
  correo: Validar.requerido('Ingresa tu correo electrónico'),
  clave: Validar.requerido('Ingresa tu contraseña')
});
