document.addEventListener("DOMContentLoaded", () => {
  const formRegistro = document.getElementById("form-registro");
  if (formRegistro) inicializarRegistro(formRegistro);

  const formLogin = document.getElementById("form-login");
  if (formLogin) inicializarLogin(formLogin);
});

function mostrarError(input, mensaje) {
  const contenedor = input.closest("div");
  let error = contenedor.querySelector(".acr-error");
  if (!error) {
    error = document.createElement("p");
    error.className = "acr-error text-danger small mb-0 mt-1";
    contenedor.appendChild(error);
  }
  error.textContent = mensaje;
  input.classList.toggle("is-invalid", Boolean(mensaje));
}

function mostrarMensajeFormulario(form, texto, esError) {
  let mensaje = form.querySelector(".acr-mensaje-envio");
  if (!mensaje) {
    mensaje = document.createElement("p");
    mensaje.className = "acr-mensaje-envio mt-3 mb-0";
    form.appendChild(mensaje);
  }
  mensaje.textContent = texto;
  mensaje.classList.toggle("text-danger", Boolean(esError));
  mensaje.classList.toggle("text-success", !esError);
}

function inicializarRegistro(form) {
  // No hay backend real hasta E3: se simula un correo ya registrado para
  // poder demostrar el caso inválido (HU-01, criterio "correo no registrado").
  const correosRegistrados = ["cliente@ejemplo.cl"];

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let esValido = true;

    const nombre = form.querySelector("#nombre-completo");
    if (!nombre.value.trim()) {
      mostrarError(nombre, "Ingresa tu nombre completo.");
      esValido = false;
    } else {
      mostrarError(nombre, "");
    }

    const correo = form.querySelector("#correo-registro");
    if (!correo.validity.valid) {
      mostrarError(correo, "Ingresa un correo electrónico válido.");
      esValido = false;
    } else if (correosRegistrados.includes(correo.value.trim().toLowerCase())) {
      mostrarError(correo, "Ese correo ya tiene una cuenta registrada.");
      esValido = false;
    } else {
      mostrarError(correo, "");
    }

    const contrasena = form.querySelector("#contrasena-registro");
    if (contrasena.value.length < 8) {
      mostrarError(contrasena, "La contraseña debe tener al menos 8 caracteres.");
      esValido = false;
    } else {
      mostrarError(contrasena, "");
    }

    const confirmar = form.querySelector("#confirmar-contrasena");
    if (!confirmar.value || confirmar.value !== contrasena.value) {
      mostrarError(confirmar, "Las contraseñas no coinciden.");
      esValido = false;
    } else {
      mostrarError(confirmar, "");
    }

    if (esValido) {
      mostrarMensajeFormulario(form, "Cuenta creada correctamente.", false);
      form.reset();
    }
  });
}

function inicializarLogin(form) {
  // Credencial de ejemplo hasta que exista autenticación real (E3, Spring Security + JWT).
  const cuentaValida = { correo: "cliente@ejemplo.cl", contrasena: "artcrate2026" };

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let esValido = true;

    const correo = form.querySelector("#correo");
    if (!correo.validity.valid) {
      mostrarError(correo, "Ingresa un correo electrónico válido.");
      esValido = false;
    } else {
      mostrarError(correo, "");
    }

    const contrasena = form.querySelector("#contrasena");
    if (contrasena.value.length < 8) {
      mostrarError(contrasena, "La contraseña debe tener al menos 8 caracteres.");
      esValido = false;
    } else {
      mostrarError(contrasena, "");
    }

    if (!esValido) return;

    const credencialesCorrectas =
      correo.value.trim().toLowerCase() === cuentaValida.correo &&
      contrasena.value === cuentaValida.contrasena;

    if (credencialesCorrectas) {
      mostrarMensajeFormulario(form, "Sesión iniciada correctamente.", false);
    } else {
      mostrarMensajeFormulario(form, "Correo o contraseña incorrectos.", true);
    }
  });
}
