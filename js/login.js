/* ==========================================================
   ArtCrate - reglas del formulario: inicio de sesión
   Usa las funciones comunes de js/validaciones.js
   En E1 no se verifica la cuenta: solo se revisa el formato de los datos.
   ========================================================== */

'use strict';

const formulario = document.querySelector('form');

// Cada campo tiene una regla; el orden es el mismo que en la página
Validar.configurar(formulario, {
  // Primero se revisa que no esté vacío y, si no lo está, que tenga formato de correo
  correo: Validar.combinar(
    Validar.requerido('Ingresa tu correo electrónico'),
    Validar.formatoCorreo('Ingresa un correo válido (ej: nombre@dominio.cl)')
  ),
  clave: Validar.requerido('Ingresa tu contraseña')
});
