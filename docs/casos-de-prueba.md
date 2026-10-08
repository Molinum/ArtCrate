# Casos de prueba – ArtCrate E1

Documento de la historia **HU-38** (Sprint 4). Reúne los casos válidos e inválidos de cada formulario, vinculados a la historia de usuario (HU) y al criterio de aceptación (CA) que comprueban.

## Cómo se ejecutaron

- **Fecha:** 7 de octubre de 2026.
- **Navegador:** navegador integrado de la aplicación de escritorio de Claude (motor Chromium), con el sitio servido en `http://localhost:8000`.
- **Método:** para cada caso se abre la página, se escriben los datos de entrada en los campos, se envía el formulario y se leen los mensajes de error que aparecen bajo cada campo (cajas `invalid-feedback`) y el mensaje de éxito simulado. El resultado obtenido es lo que mostró la página, y se compara con el resultado esperado de este documento (mismos campos con error y mismo texto).
- **Limitación:** el evento "al salir del campo" (T-02) se probó disparándolo por código; además se comprobó a mano con el teclado en la página de ingreso.
- **Dato de prueba:** las contraseñas, correos y teléfonos usados son ficticios.

## Resumen

**49 de 49 casos pasaron. Fallaron 0.**

| Formulario | Casos válidos | Casos inválidos | Estado |
|---|---|---|---|
| Formulario de inicio de sesión | 1 | 5 | ✅ Todos pasaron |
| Formulario de registro | 1 | 10 | ✅ Todos pasaron |
| Formulario de contacto | 4 | 5 | ✅ Todos pasaron |
| Formulario de producto del administrador | 4 | 11 | ✅ Todos pasaron |

Cada formulario cumple la exigencia de HU-38 CA1: al menos 1 caso válido y 3 inválidos.

## Formulario de inicio de sesión (`pages/login.html`)

| ID | HU / CA | Tipo | Caso | Datos de entrada | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|---|---|---|---|
| L-01 | HU-32 / CA3 | Válido | Datos válidos | (todos los datos válidos) | Sin errores; aparece el mensaje de éxito simulado | Sin errores; aparece el mensaje de éxito simulado | ✅ Pasó |
| L-02 | HU-32 / CA1 | Inválido | Correo vacío | correo="" | correo: «Ingresa tu correo electrónico» | correo: «Ingresa tu correo electrónico» | ✅ Pasó |
| L-03 | HU-32 / CA1 | Inválido | Correo sin arroba | correo="nombre.dominio.cl" | correo: «Ingresa un correo válido (ej: nombre@dominio.cl)» | correo: «Ingresa un correo válido (ej: nombre@dominio.cl)» | ✅ Pasó |
| L-04 | HU-32 / CA1 | Inválido | Correo sin dominio | correo="nombre@" | correo: «Ingresa un correo válido (ej: nombre@dominio.cl)» | correo: «Ingresa un correo válido (ej: nombre@dominio.cl)» | ✅ Pasó |
| L-05 | HU-32 / CA2 | Inválido | Contraseña vacía | clave="" | clave: «Ingresa tu contraseña» | clave: «Ingresa tu contraseña» | ✅ Pasó |
| L-06 | HU-32 / CA1, CA2 | Inválido | Correo y contraseña vacíos | correo="", clave="" | correo: «Ingresa tu correo electrónico» · clave: «Ingresa tu contraseña» | correo: «Ingresa tu correo electrónico» · clave: «Ingresa tu contraseña» | ✅ Pasó |

## Formulario de registro (`pages/registro.html`)

| ID | HU / CA | Tipo | Caso | Datos de entrada | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|---|---|---|---|
| R-01 | HU-31 / CA7 | Válido | Todos los datos válidos | (todos los datos válidos) | Sin errores; aparece el mensaje de éxito simulado | Sin errores; aparece el mensaje de éxito simulado | ✅ Pasó |
| R-02 | HU-31 / CA1 | Inválido | Todos los campos obligatorios vacíos | nombre="", apellido="", telefono="", region="", correo="", clave="", clave-confirmacion="", terminos=sin marcar | nombre: «Ingresa tu nombre» · apellido: «Ingresa tu apellido» · telefono: «Ingresa tu teléfono» · region: «Selecciona tu región» · correo: «Ingresa tu correo electrónico» · clave: «Ingresa una contraseña» · clave-confirmacion: «Confirma tu contraseña» · terminos: «Debes aceptar los términos y condiciones» | nombre: «Ingresa tu nombre» · apellido: «Ingresa tu apellido» · telefono: «Ingresa tu teléfono» · region: «Selecciona tu región» · correo: «Ingresa tu correo electrónico» · clave: «Ingresa una contraseña» · clave-confirmacion: «Confirma tu contraseña» · terminos: «Debes aceptar los términos y condiciones» | ✅ Pasó |
| R-03 | HU-31 / CA2 | Inválido | Correo sin formato válido | correo="ana@correo" | correo: «Ingresa un correo válido (ej: nombre@dominio.cl)» | correo: «Ingresa un correo válido (ej: nombre@dominio.cl)» | ✅ Pasó |
| R-04 | HU-31 / CA3 | Inválido | Contraseña de menos de 8 caracteres | clave="Ab1cdef", clave-confirmacion="Ab1cdef" | clave: «La contraseña debe tener al menos 8 caracteres» | clave: «La contraseña debe tener al menos 8 caracteres» | ✅ Pasó |
| R-05 | HU-31 / CA3 | Inválido | Contraseña sin mayúscula | clave="abcdefg1", clave-confirmacion="abcdefg1" | clave: «La contraseña debe tener una letra mayúscula» | clave: «La contraseña debe tener una letra mayúscula» | ✅ Pasó |
| R-06 | HU-31 / CA3 | Inválido | Contraseña sin número | clave="Abcdefgh", clave-confirmacion="Abcdefgh" | clave: «La contraseña debe tener un número» | clave: «La contraseña debe tener un número» | ✅ Pasó |
| R-07 | HU-31 / CA3 | Inválido | Contraseña con varios requisitos faltantes | clave="abc", clave-confirmacion="abc" | clave: «La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número» | clave: «La contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número» | ✅ Pasó |
| R-08 | HU-31 / CA4 | Inválido | Contraseña y confirmación distintas | clave-confirmacion="Abcdefg2" | clave-confirmacion: «Las contraseñas no coinciden» | clave-confirmacion: «Las contraseñas no coinciden» | ✅ Pasó |
| R-09 | HU-31 / CA5 | Inválido | Teléfono sin el prefijo +569 | telefono="12345678" | telefono: «Ingresa un teléfono chileno con el formato +569XXXXXXXX» | telefono: «Ingresa un teléfono chileno con el formato +569XXXXXXXX» | ✅ Pasó |
| R-10 | HU-31 / CA5 | Inválido | Teléfono con dígitos de menos | telefono="+5691234567" | telefono: «Ingresa un teléfono chileno con el formato +569XXXXXXXX» | telefono: «Ingresa un teléfono chileno con el formato +569XXXXXXXX» | ✅ Pasó |
| R-11 | HU-31 / CA6 | Inválido | Términos sin aceptar | terminos=sin marcar | terminos: «Debes aceptar los términos y condiciones» | terminos: «Debes aceptar los términos y condiciones» | ✅ Pasó |

## Formulario de contacto (`pages/contacto.html`)

| ID | HU / CA | Tipo | Caso | Datos de entrada | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|---|---|---|---|
| C-01 | HU-33 / CA1–CA4 | Válido | Todos los datos válidos | (todos los datos válidos) | Sin errores; aparece el mensaje de éxito simulado | Sin errores; aparece el mensaje de éxito simulado | ✅ Pasó |
| C-02 | HU-33 / CA1 | Inválido | Nombre de 2 caracteres | nombre="Al" | nombre: «El nombre debe tener al menos 3 caracteres» | nombre: «El nombre debe tener al menos 3 caracteres» | ✅ Pasó |
| C-03 | HU-33 / CA2 | Inválido | Correo inválido | correo="ana@" | correo: «Ingresa un correo válido (ej: nombre@dominio.cl)» | correo: «Ingresa un correo válido (ej: nombre@dominio.cl)» | ✅ Pasó |
| C-04 | HU-33 / CA2 | Inválido | Asunto sin seleccionar | asunto="" | asunto: «Selecciona un asunto» | asunto: «Selecciona un asunto» | ✅ Pasó |
| C-05 | HU-33 / CA3 | Inválido | Mensaje de 9 caracteres | mensaje="123456789" | mensaje: «El mensaje debe tener entre 10 y 500 caracteres» | mensaje: «El mensaje debe tener entre 10 y 500 caracteres» | ✅ Pasó |
| C-06 | HU-33 / CA3 | Inválido | Mensaje de 501 caracteres | mensaje=(501 caracteres) | mensaje: «El mensaje debe tener entre 10 y 500 caracteres» | mensaje: «El mensaje debe tener entre 10 y 500 caracteres» | ✅ Pasó |
| C-07 | HU-33 / CA3 | Válido | Mensaje de 10 caracteres (límite inferior) | mensaje="1234567890" | Sin errores; aparece el mensaje de éxito simulado | Sin errores; aparece el mensaje de éxito simulado | ✅ Pasó |
| C-08 | HU-33 / CA3 | Válido | Mensaje de 500 caracteres (límite superior) | mensaje=(500 caracteres) | Sin errores; aparece el mensaje de éxito simulado | Sin errores; aparece el mensaje de éxito simulado | ✅ Pasó |
| C-09 | HU-33 / CA4 | Válido | El contador se actualiza al escribir | Se escribe "Hola" y luego "Hola, buen día" | 0 / 500 → 4 / 500 → 14 / 500 caracteres | 0 / 500 caracteres → 4 / 500 caracteres → 14 / 500 caracteres | ✅ Pasó |

## Formulario de producto del administrador (`admin/producto-form.html`)

| ID | HU / CA | Tipo | Caso | Datos de entrada | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|---|---|---|---|
| P-01 | HU-34 / CA6 | Válido | Todos los datos válidos, sin imagen | (todos los datos válidos) | Sin errores; aparece el mensaje de éxito simulado | Sin errores; aparece el mensaje de éxito simulado | ✅ Pasó |
| P-02 | HU-34 / CA1 | Inválido | Nombre vacío | nombre="" | nombre: «Ingresa el nombre del producto» | nombre: «Ingresa el nombre del producto» | ✅ Pasó |
| P-03 | HU-34 / CA1 | Inválido | Nombre de 61 caracteres | nombre=(61 caracteres) | nombre: «El nombre no puede superar los 60 caracteres» | nombre: «El nombre no puede superar los 60 caracteres» | ✅ Pasó |
| P-04 | HU-34 / CA1 | Válido | Nombre de 60 caracteres (límite) | nombre=(60 caracteres) | Sin errores; aparece el mensaje de éxito simulado | Sin errores; aparece el mensaje de éxito simulado | ✅ Pasó |
| P-05 | HU-34 / CA2 | Inválido | Precio vacío | precio="" | precio: «El precio debe ser un número mayor a 0» | precio: «El precio debe ser un número mayor a 0» | ✅ Pasó |
| P-06 | HU-34 / CA2 | Inválido | Precio cero | precio="0" | precio: «El precio debe ser un número mayor a 0» | precio: «El precio debe ser un número mayor a 0» | ✅ Pasó |
| P-07 | HU-34 / CA2 | Inválido | Precio negativo | precio="-5" | precio: «El precio debe ser un número mayor a 0» | precio: «El precio debe ser un número mayor a 0» | ✅ Pasó |
| P-08 | HU-34 / CA3 | Inválido | Stock vacío | stock="" | stock: «El stock debe ser un número entero de 0 o más» | stock: «El stock debe ser un número entero de 0 o más» | ✅ Pasó |
| P-09 | HU-34 / CA3 | Inválido | Stock negativo | stock="-1" | stock: «El stock debe ser un número entero de 0 o más» | stock: «El stock debe ser un número entero de 0 o más» | ✅ Pasó |
| P-10 | HU-34 / CA3 | Inválido | Stock con decimales | stock="2.5" | stock: «El stock debe ser un número entero de 0 o más» | stock: «El stock debe ser un número entero de 0 o más» | ✅ Pasó |
| P-11 | HU-34 / CA3 | Válido | Stock cero (límite) | stock="0" | Sin errores; aparece el mensaje de éxito simulado | Sin errores; aparece el mensaje de éxito simulado | ✅ Pasó |
| P-12 | HU-34 / CA4 | Inválido | Categoría sin seleccionar | categoria="" | categoria: «Selecciona una categoría» | categoria: «Selecciona una categoría» | ✅ Pasó |
| P-13 | HU-34 / CA5 | Inválido | Imagen en formato GIF |  imagen=foto.gif (100 B, image/gif) | imagen: «La imagen debe ser un archivo JPG, PNG o WebP» | imagen: «La imagen debe ser un archivo JPG, PNG o WebP» | ✅ Pasó |
| P-14 | HU-34 / CA5 | Inválido | Imagen PNG de más de 2 MB |  imagen=foto.png (2.00 MB, image/png) | imagen: «La imagen no puede pesar más de 2 MB» | imagen: «La imagen no puede pesar más de 2 MB» | ✅ Pasó |
| P-15 | HU-34 / CA5 | Válido | Imagen WebP de 1 KB |  imagen=foto.webp (1000 B, image/webp) | Sin errores; aparece el mensaje de éxito simulado | Sin errores; aparece el mensaje de éxito simulado | ✅ Pasó |

## Comportamientos comunes a los formularios (HU-35)

| ID | HU / CA | Tipo | Caso | Datos de entrada | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|---|---|---|---|
| T-01 | HU-35 / CA4 | Inválido | Al enviar con errores el foco va al primer campo con error | Se envía el registro vacío | Foco en "nombre" | Foco en "nombre" | ✅ Pasó |
| T-02 | HU-35 / CA3 | Inválido | El error aparece al salir del campo y desaparece al corregirlo | Se sale de "nombre" vacío y luego se escribe "Ana" | Aparece «Ingresa tu nombre» y luego desaparece | Tras salir: «Ingresa tu nombre»; tras escribir: «(sin mensaje)» | ✅ Pasó |
| T-03 | HU-35 / CA1, CA2 | Inválido | El mensaje es texto visible bajo el campo (no depende solo del color) | Se envía el registro vacío | Campo con is-invalid y texto visible en su invalid-feedback | Campo con is-invalid y texto visible: «Ingresa tu nombre» | ✅ Pasó |

## Mostrar u ocultar la contraseña (HU-36)

| ID | HU / CA | Tipo | Caso | Datos de entrada | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|---|---|---|---|
| V-01 | HU-36 / CA1, CA2, CA3 | Válido | Mostrar y ocultar la contraseña (login) | Se pulsa el botón dos veces | password/Mostrar → text/Ocultar → password/Mostrar | password/Mostrar → text/Ocultar → password/Mostrar | ✅ Pasó |
| V-02 | HU-36 / CA3 | Válido | El botón existe en las dos contraseñas del registro | Se pulsa cada botón una vez | clave:text, clave-confirmacion:text | clave:text, clave-confirmacion:text | ✅ Pasó |

## Filtro del catálogo (HU-37)

| ID | HU / CA | Tipo | Caso | Datos de entrada | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|---|---|---|---|
| F-01 | HU-37 / CA1, CA3 | Válido | Elegir la categoría Dibujo | Clic en el botón "Dibujo" | Solo se ve la sección «dibujo» y el botón Dibujo queda activo | Se ve: dibujo; activo: Dibujo | ✅ Pasó |
| F-02 | HU-37 / CA2 | Válido | Elegir la opción Todas | Clic en el botón "Todas" | Se ven las 5 categorías | Se ven 5 categorías | ✅ Pasó |
| F-03 | HU-37 / CA1 | Válido | Entrar desde un enlace de categoría del inicio | Se abre catalogo.html#kits-artcrate | Solo se ve la sección «kits-artcrate» | Se ve: kits-artcrate | ✅ Pasó |

## Notas

- En los casos de "Datos de entrada" solo se listan los campos que cambian respecto de un conjunto de datos válidos (por ejemplo, en registro: nombre Ana, apellido Pérez, teléfono +56912345678, región Valparaíso, correo ana@correo.cl, contraseña Abcdefg1, términos aceptados).
- Cuando un caso dice "Sin errores", el formulario muestra el mensaje de éxito simulado y no se guarda ni se envía nada.
- HU-31 a HU-34 definen mensajes exactos; la columna "Resultado esperado" los copia tal cual del Excel de requerimientos o, cuando el Excel no fija el texto (por ejemplo, los requisitos de la contraseña), del diseño acordado en el Sprint 4.
