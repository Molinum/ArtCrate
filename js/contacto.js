/* ==========================================================
   ArtCrate - reglas del formulario: contacto
   Usa las funciones comunes de js/validaciones.js
   En E1 el mensaje no se envía: solo se validan los datos.
   ========================================================== */

'use strict';

const MIN_MENSAJE = 10;
const MAX_MENSAJE = 500;

const formulario = document.querySelector('form');
const campoMensaje = document.getElementById('mensaje');
const contador = document.getElementById('contador-mensaje');

// Regla de largo mínimo: el valor (sin espacios al inicio y al final) debe tener al menos "minimo" caracteres
function largoMinimo(minimo, mensaje) {
  return (valor) => (valor.trim().length < minimo ? mensaje : '');
}

// Regla del mensaje: entre 10 y 500 caracteres
function reglaMensaje(valor) {
  const largo = valor.trim().length;
  const fueraDeRango = largo < MIN_MENSAJE || largo > MAX_MENSAJE;
  return fueraDeRango ? `El mensaje debe tener entre ${MIN_MENSAJE} y ${MAX_MENSAJE} caracteres` : '';
}

// Cada campo tiene una regla; el orden es el mismo que en la página
Validar.configurar(formulario, {
  nombre: largoMinimo(3, 'El nombre debe tener al menos 3 caracteres'),
  correo: Validar.combinar(
    Validar.requerido('Ingresa tu correo electrónico'),
    Validar.formatoCorreo('Ingresa un correo válido (ej: nombre@dominio.cl)')
  ),
  asunto: Validar.requerido('Selecciona un asunto'),
  mensaje: reglaMensaje
});

// Contador: se actualiza cada vez que el usuario escribe en el mensaje
function actualizarContador() {
  const largo = campoMensaje.value.trim().length; // mismo criterio que la regla del mensaje
  contador.textContent = `${largo} / ${MAX_MENSAJE} caracteres`;
  // Si se pasa del máximo, el contador se pinta en rojo (text-danger es de Bootstrap)
  contador.classList.toggle('text-danger', largo > MAX_MENSAJE);
}

campoMensaje.addEventListener('input', actualizarContador);
