/* ==========================================================
   ArtCrate - reglas del formulario: registro de cliente
   Usa las funciones comunes de js/validaciones.js
   ========================================================== */

'use strict';

const formulario = document.querySelector('form');

// Cada campo tiene una regla; el orden es el mismo que en la página
Validar.configurar(formulario, {
  nombre: Validar.requerido('Ingresa tu nombre'),
  apellido: Validar.requerido('Ingresa tu apellido'),
  telefono: Validar.requerido('Ingresa tu teléfono'),
  region: Validar.requerido('Selecciona tu región'),
  correo: Validar.requerido('Ingresa tu correo electrónico'),
  clave: Validar.requerido('Ingresa una contraseña'),
  'clave-confirmacion': Validar.requerido('Confirma tu contraseña'),
  terminos: Validar.requerido('Debes aceptar los términos y condiciones')
});
