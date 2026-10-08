/* ==========================================================
   ArtCrate - reglas del formulario: producto (administrador)
   Usa las funciones comunes de js/validaciones.js
   ========================================================== */

'use strict';

const formulario = document.querySelector('form');

// Cada campo tiene una regla; el orden es el mismo que en la página
Validar.configurar(formulario, {
  nombre: Validar.requerido('Ingresa el nombre del producto'),
  sku: Validar.requerido('Ingresa el SKU del producto'),
  categoria: Validar.requerido('Selecciona una categoría'),
  precio: Validar.requerido('El precio debe ser un número mayor a 0'),
  stock: Validar.requerido('El stock debe ser un número entero de 0 o más')
});
