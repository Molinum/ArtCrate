/* ==========================================================
   ArtCrate - reglas del formulario: producto (administrador)
   Usa las funciones comunes de js/validaciones.js
   En E1 el producto no se guarda: solo se validan los datos.
   ========================================================== */

'use strict';

const MAX_NOMBRE = 60;
const MAX_IMAGEN_MB = 2;
const TIPOS_IMAGEN = ['image/jpeg', 'image/png', 'image/webp']; // JPG, PNG y WebP

const formulario = document.querySelector('form');

// Nombre: obligatorio y de hasta 60 caracteres
function reglaNombre(valor) {
  const largo = valor.trim().length;
  if (largo === 0) return 'Ingresa el nombre del producto';
  if (largo > MAX_NOMBRE) return `El nombre no puede superar los ${MAX_NOMBRE} caracteres`;
  return '';
}

// Precio: un número mayor a 0 (un campo vacío da NaN al convertirlo, y NaN no es mayor a 0)
function reglaPrecio(valor) {
  const numero = parseFloat(valor);
  return numero > 0 ? '' : 'El precio debe ser un número mayor a 0';
}

// Stock: un número entero de 0 o más (Number.isInteger rechaza los decimales)
function reglaStock(valor) {
  const numero = Number(valor);
  const correcto = valor.trim() !== '' && Number.isInteger(numero) && numero >= 0;
  return correcto ? '' : 'El stock debe ser un número entero de 0 o más';
}

// Imagen: es opcional, pero si se elige un archivo debe ser JPG, PNG o WebP y pesar hasta 2 MB
function reglaImagen(valor, campo) {
  const archivo = campo.files[0];
  if (!archivo) return '';
  if (!TIPOS_IMAGEN.includes(archivo.type)) return 'La imagen debe ser un archivo JPG, PNG o WebP';
  if (archivo.size > MAX_IMAGEN_MB * 1024 * 1024) return `La imagen no puede pesar más de ${MAX_IMAGEN_MB} MB`;
  return '';
}

// Cada campo tiene una regla; el orden es el mismo que en la página
Validar.configurar(formulario, {
  nombre: reglaNombre,
  sku: Validar.requerido('Ingresa el SKU del producto'),
  categoria: Validar.requerido('Selecciona una categoría'),
  precio: reglaPrecio,
  stock: reglaStock,
  imagen: reglaImagen
});
