/* ==========================================================
   ArtCrate - filtro del catálogo por categoría
   Muestra solo los productos de la categoría elegida, sin recargar
   la página. La opción "Todas" muestra el catálogo completo.
   ========================================================== */

'use strict';

const botones = document.querySelectorAll('[data-filtro]');          // "Todas" y una por categoría
const secciones = document.querySelectorAll('section[data-categoria]'); // una sección por categoría

// Muestra solo la categoría pedida ("todas" muestra todo) y marca el botón activo
function filtrar(categoria) {
  secciones.forEach((seccion) => {
    const ocultar = categoria !== 'todas' && seccion.dataset.categoria !== categoria;
    seccion.classList.toggle('d-none', ocultar); // d-none (Bootstrap) oculta el elemento
  });

  botones.forEach((boton) => {
    const activo = boton.dataset.filtro === categoria;
    boton.classList.toggle('active', activo);     // "active" cambia el color del botón
    if (activo) {
      boton.setAttribute('aria-current', 'true'); // también lo anuncia a los lectores de pantalla
    } else {
      boton.removeAttribute('aria-current');
    }
  });
}

// Al hacer clic en un botón: no se salta a la sección, se filtra
botones.forEach((boton) => {
  boton.addEventListener('click', (evento) => {
    evento.preventDefault();
    filtrar(boton.dataset.filtro);
  });
});

// Al abrir la página: si viene de un enlace como catalogo.html#pintura, se filtra esa categoría
const categoriaInicial = window.location.hash.slice(1); // quita el "#"
const existe = [...botones].some((boton) => boton.dataset.filtro === categoriaInicial);
filtrar(existe ? categoriaInicial : 'todas');
