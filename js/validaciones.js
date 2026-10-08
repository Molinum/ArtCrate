/* ==========================================================
   ArtCrate - funciones comunes de validación (JavaScript vanilla)
   Lo usan los 4 formularios del sitio: registro, ingreso, contacto
   y producto (admin). Cada formulario tiene su propio archivo con
   sus reglas y llama a Validar.configurar().
   Los estilos de error (is-invalid / invalid-feedback) son de Bootstrap.
   Nada se guarda ni se envía: solo se valida y se muestra un éxito simulado.
   ========================================================== */

'use strict'; // modo estricto: el navegador avisa de errores comunes (variables sin declarar, etc.)

// Objeto con todas las funciones, para no llenar la página de funciones sueltas
const Validar = {

  /* ---------- Mostrar y quitar errores ---------- */

  // Pinta el campo en rojo (is-invalid) y escribe el mensaje en su caja de error
  mostrarError(campo, mensaje) {
    campo.classList.add('is-invalid');
    campo.setAttribute('aria-invalid', 'true'); // avisa a los lectores de pantalla
    const caja = document.getElementById('error-' + campo.id);
    caja.textContent = mensaje;
  },

  // Deja el campo sin error y vacía el mensaje
  limpiarError(campo) {
    campo.classList.remove('is-invalid');
    campo.removeAttribute('aria-invalid');
    document.getElementById('error-' + campo.id).textContent = '';
  },

  /* ---------- Reglas reutilizables ----------
     Una regla es una función que recibe el valor del campo y el campo,
     y devuelve el mensaje de error, o '' si el dato es correcto. */

  // Campo obligatorio: texto vacío o casilla sin marcar
  requerido(mensaje) {
    return (valor, campo) => {
      const vacio = campo.type === 'checkbox' ? !campo.checked : valor.trim() === '';
      return vacio ? mensaje : '';
    };
  },

  // Formato de correo: algo@dominio.ext, sin espacios.
  // La expresión regular se lee así: ^ inicio, [^\s@]+ uno o más caracteres que no sean
  // espacio ni @, luego @, luego otro bloque igual, un punto y otro bloque, $ fin.
  formatoCorreo(mensaje) {
    return (valor) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim()) ? '' : mensaje);
  },

  // Junta varias reglas: devuelve el mensaje de la primera que falle
  // (así un campo vacío muestra "Ingresa tu correo" y no el error de formato)
  combinar(...reglas) {
    return (valor, campo) => {
      for (const regla of reglas) {
        const mensaje = regla(valor, campo);
        if (mensaje) return mensaje;
      }
      return '';
    };
  },

  /* ---------- Configurar un formulario ----------
     form: el <form>; reglas: { idDelCampo: regla, ... } en el mismo orden
     en que aparecen los campos en la página. */
  configurar(form, reglas) {
    const campos = Object.keys(reglas).map((id) => document.getElementById(id));
    const alertaExito = document.getElementById('mensaje-exito');

    // Valida un solo campo; devuelve true si está bien
    const validarCampo = (campo) => {
      const mensaje = reglas[campo.id](campo.value, campo);
      if (mensaje) {
        Validar.mostrarError(campo, mensaje);
        return false;
      }
      Validar.limpiarError(campo);
      return true;
    };

    campos.forEach((campo) => {
      // Al salir del campo (blur) se valida
      campo.addEventListener('blur', () => validarCampo(campo));

      // Si el campo ya tiene error, se vuelve a validar mientras el usuario corrige,
      // así el mensaje desaparece apenas el dato queda bien.
      // Los select, casillas y archivos avisan con "change"; los demás con "input".
      const evento = (campo.tagName === 'SELECT' || campo.type === 'checkbox' || campo.type === 'file') ? 'change' : 'input';
      campo.addEventListener(evento, () => {
        if (campo.classList.contains('is-invalid')) validarCampo(campo);
      });
    });

    // Al enviar: se evita el envío real y se validan todos los campos
    form.addEventListener('submit', (evento) => {
      evento.preventDefault();
      alertaExito.classList.add('d-none');

      let primerError = null;
      campos.forEach((campo) => {
        const correcto = validarCampo(campo);
        if (!correcto && primerError === null) primerError = campo;
      });

      // Con errores: el foco se mueve al primer campo con error
      if (primerError !== null) {
        primerError.focus();
        return;
      }

      // Sin errores: éxito simulado (no se guarda ni se envía nada)
      alertaExito.classList.remove('d-none');
      alertaExito.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
};
