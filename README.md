# ArtCrate – Frontend

Tienda en línea de insumos de arte (pinturas, lienzos, cuadernos de dibujo y accesorios).
Proyecto del curso **Desarrollo Fullstack 2** (Duoc UC).

Este repositorio es el **frontend**. El backend (microservicios con Spring Boot) vive en un repositorio aparte:
[Molinum/ArtCrate-backend](https://github.com/Molinum/ArtCrate-backend).

## Estado actual

**Experiencia 1 (E1) completa** – etiqueta [`v1.0-e1`](https://github.com/Molinum/ArtCrate/releases/tag/v1.0-e1): sitio base con HTML5 semántico, diseño responsive con Bootstrap y validaciones de formularios con JavaScript.

Por ahora el sitio es **estático y no se conecta al backend**. Los productos del catálogo son contenido escrito en el HTML, el carrito solo existe como botón visual y los formularios validan en el navegador y muestran un éxito simulado (no guardan ni envían nada).
La conexión con el backend llega en las siguientes experiencias (ver [Plan de sprints](#plan-de-sprints)).

## Tecnologías

- **HTML5 semántico** (`header`, `nav`, `main`, `section`, `article`, `footer`, `figure`, `fieldset`...).
- **CSS propio** (`css/styles.css`) con variables en `:root`, comentado por secciones para distinguirlo de lo que aporta Bootstrap.
- **Bootstrap 5.3** cargado por **CDN** (antes del CSS propio): grilla, navbar, cards, formularios, acordeón, tablas y badges.
- **JavaScript vanilla** (sin frameworks, sin jQuery, sin npm).
- Tipografías de **Google Fonts**: Playfair Display (títulos) e Inter (texto).

Como Bootstrap y las fuentes vienen de CDN, **se necesita internet** para ver el sitio con su diseño completo.

## Cómo verlo

No hay que instalar nada ni compilar. Opciones:

1. **Abrir el archivo:** doble clic en `index.html` (o arrástralo al navegador).
2. **Con un servidor local** (recomendado, se parece más a un sitio real):

   ```bash
   python -m http.server 8000
   ```
   y abre http://localhost:8000. (En Arch Linux viene con `python`; en Windows también funciona con `py -m http.server 8000`.)

## Páginas

### Sitio del cliente

| Página | Archivo | Qué tiene |
|---|---|---|
| Inicio | `index.html` | Banner con llamado a la acción, 5 categorías y 4 productos destacados |
| Catálogo | `pages/catalogo.html` | 12 productos en 5 categorías, cuadrícula responsive y **filtro por categoría** |
| Detalle de producto | `pages/producto.html` | Plantilla única: imagen, descripción, especificaciones, precio y botón "Agregar al carrito" (solo visual) |
| Registro | `pages/registro.html` | Formulario con validaciones |
| Ingresar | `pages/login.html` | Formulario con validaciones |
| Contacto | `pages/contacto.html` | Datos de la tienda y formulario con contador de caracteres |
| Nosotros | `pages/nosotros.html` | Presentación de la tienda |
| Preguntas frecuentes | `pages/faq.html` | 6 preguntas en acordeón de Bootstrap |

### Panel de administración (datos de ejemplo, vistas estáticas)

| Página | Archivo |
|---|---|
| Panel | `admin/index.html` |
| Productos (tabla con Editar y Eliminar visuales) | `admin/productos.html` |
| Formulario de producto (alta y edición) | `admin/producto-form.html` |
| Pedidos | `admin/pedidos.html` |

## Validaciones (JavaScript)

Los mensajes aparecen debajo de cada campo (clases `is-invalid` / `invalid-feedback` de Bootstrap), al salir del campo y al enviar; desaparecen al corregir, y al enviar con errores el foco va al primer campo con error.

| Formulario | Reglas principales |
|---|---|
| **Registro** | Campos obligatorios; correo con formato válido; contraseña de mínimo 8 caracteres con una mayúscula y un número (indica lo que falta); confirmación igual a la contraseña; teléfono chileno `+569XXXXXXXX`; términos aceptados |
| **Ingresar** | Correo con formato válido y contraseña no vacía |
| **Contacto** | Nombre de al menos 3 caracteres; correo válido; asunto elegido; mensaje de 10 a 500 caracteres con contador en vivo |
| **Producto (admin)** | Nombre de hasta 60 caracteres; precio mayor a 0; stock entero de 0 o más; categoría elegida; imagen JPG, PNG o WebP de hasta 2 MB |

Además: botón para **mostrar u ocultar la contraseña** (registro e ingreso) y **filtro del catálogo** por categoría sin recargar la página.

## Estructura de carpetas

```
index.html              Página de inicio
pages/                  Catálogo, detalle, registro, ingreso, contacto, nosotros y preguntas frecuentes
admin/                  Panel de administración (4 vistas)
css/styles.css          Todo el CSS propio (variables, secciones comentadas)
js/                     validaciones.js (funciones comunes) + un archivo por formulario,
                        mostrar-clave.js y filtro-catalogo.js
assets/img/             Imágenes de marcador de posición (SVG) y logos
docs/                   Documentación del proyecto (ver abajo)
```

Todo el contenido visible, los mensajes de error y los comentarios están en español (Chile); los precios van en CLP con el formato `$12.990`.
Las páginas de `pages/` y `admin/` usan rutas relativas con `../` para llegar a `css/`, `js/` y `assets/`.

## Documentación (`docs/`)

| Archivo | Contenido |
|---|---|
| `ArtCrate_Requerimientos_Scrum.xlsx` | Backlog: épicas, historias de usuario y criterios de aceptación (fuente de verdad del proyecto) |
| `casos-de-prueba.md` | 49 casos válidos e inválidos de los formularios, vinculados a su historia y criterio, con su resultado |
| `diseno-funcional-carrito.md` | Diseño del carrito (flujos, reglas, datos y boceto) para implementarlo en E2 |
| `capturas/` | 36 capturas del sitio a 360, 768 y 1366 px (evidencia de que es responsive) |
| `Claude.md` | Instrucciones de trabajo del proyecto (restricciones de E1 y forma de trabajar por sprint) |

## Calidad

- Las 12 páginas HTML pasan el **validador W3C** (Nu Html Checker) sin errores.
- No hay enlaces internos rotos, ni estilos en línea, ni errores de JavaScript en la consola.
- Sin scroll horizontal a 360, 768 y 1366 px.
- Los 49 casos de prueba de `docs/casos-de-prueba.md` pasaron.

## Convenciones del repositorio

- Un commit por historia de usuario, con el formato `HU-06: crear página de inicio con HTML semántico`.
- Se trabaja un sprint a la vez y una historia a la vez.
- El código es simple y está comentado en español.

## Pendientes conocidos

- **Elemento multimedia** (video o audio) de la historia HU-09: aún no hay ninguno; se decidirá qué mostrar más adelante.
- **Imágenes:** son SVG de marcador de posición; hay que reemplazarlas por fotos reales.
- **Datos de contacto** del pie de página y de la página de contacto (dirección, correo y teléfono): son de ejemplo.
- **Carrito:** el botón "Agregar al carrito" no hace nada; la funcionalidad llega en E2.

## Plan de sprints

| Experiencia | Sprints | Enfoque |
|---|---|---|
| E1 | 1-4 | Definición del producto, estructura HTML5 semántica, diseño con CSS/Bootstrap y validaciones en JavaScript *(Sprints 2 a 4 completos)* |
| E2 | 5-10 | Migración a SPA con React + TypeScript, componentización, carrito propio, testing |
| E3 | 11-12 | Integración con el backend real y autenticación con JWT |

## Conexión con el backend (cuando llegue el momento)

El backend está en [ArtCrate-backend](https://github.com/Molinum/ArtCrate-backend) y se ejecuta por separado (ver su README). Toda la API se consume por una **única dirección: el API Gateway en `http://localhost:8080`**
(rutas `/api/usuarios`, `/api/productos`, `/api/categorias`, `/api/inventario`, `/api/carritos`, `/api/pedidos` y `/api/pagos`). El gateway ya permite peticiones desde cualquier puerto de `localhost`, así que un servidor de desarrollo del front funcionará sin ajustes de CORS.

## Autor

Proyecto desarrollado por [@Molinum](https://github.com/Molinum) para Desarrollo Fullstack 2, Duoc UC.
