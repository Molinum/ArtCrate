/* ==========================================================
   ArtCrate - reglas del formulario: registro de cliente
   Usa las funciones comunes de js/validaciones.js
   En E1 el registro no se guarda: solo se validan los datos.
   ========================================================== */

'use strict';

const formulario = document.querySelector('form');
const campoClave = document.getElementById('clave');
const campoConfirmacion = document.getElementById('clave-confirmacion');

// Regla de la contraseña: indica solo los requisitos que faltan
function reglaClave(valor) {
  if (valor === '') return 'Ingresa una contraseña';

  const faltan = [];
  if (valor.length < 8) faltan.push('al menos 8 caracteres');
  if (!/[A-Z]/.test(valor)) faltan.push('una letra mayúscula'); // [A-Z] = cualquier mayúscula
  if (!/[0-9]/.test(valor)) faltan.push('un número');           // [0-9] = cualquier dígito

  return faltan.length > 0 ? 'La contraseña debe tener ' + faltan.join(', ') : '';
}

// Regla de la confirmación: debe ser igual a la contraseña
function reglaConfirmacion(valor) {
  if (valor === '') return 'Confirma tu contraseña';
  return valor === campoClave.value ? '' : 'Las contraseñas no coinciden';
}

// Cada campo tiene una regla; el orden es el mismo que en la página
const revalidar = Validar.configurar(formulario, {
  nombre: Validar.requerido('Ingresa tu nombre'),
  apellido: Validar.requerido('Ingresa tu apellido'),
  // Teléfono chileno: +569 seguido de 8 dígitos (\d{8})
  telefono: Validar.combinar(
    Validar.requerido('Ingresa tu teléfono'),
    Validar.patron(/^\+569\d{8}$/, 'Ingresa un teléfono chileno con el formato +569XXXXXXXX')
  ),
  region: Validar.requerido('Selecciona tu región'),
  correo: Validar.combinar(
    Validar.requerido('Ingresa tu correo electrónico'),
    Validar.formatoCorreo('Ingresa un correo válido (ej: nombre@dominio.cl)')
  ),
  clave: reglaClave,
  'clave-confirmacion': reglaConfirmacion,
  terminos: Validar.requerido('Debes aceptar los términos y condiciones')
});

// Si cambia la contraseña y ya se escribió la confirmación, se vuelve a comparar
campoClave.addEventListener('input', () => {
  if (campoConfirmacion.value !== '') revalidar('clave-confirmacion');
});
