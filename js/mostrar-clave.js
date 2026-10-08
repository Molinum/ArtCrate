/* ==========================================================
   ArtCrate - mostrar u ocultar la contraseña
   Cada botón con el atributo data-mostrar-clave="idDelCampo"
   alterna ese campo entre texto oculto (password) y visible (text).
   ========================================================== */

'use strict';

document.querySelectorAll('[data-mostrar-clave]').forEach((boton) => {
  const campo = document.getElementById(boton.dataset.mostrarClave);

  boton.addEventListener('click', () => {
    const estabaOculta = campo.type === 'password';

    // Cambiar el tipo del input es lo que oculta o muestra los caracteres
    campo.type = estabaOculta ? 'text' : 'password';

    // El texto del botón indica qué pasará al pulsarlo
    boton.textContent = estabaOculta ? 'Ocultar' : 'Mostrar';
    boton.setAttribute('aria-pressed', estabaOculta ? 'true' : 'false');
  });
});
