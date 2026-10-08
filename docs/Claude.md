# ArtCrate – Experiencia 1 (E1)

Tienda online de insumos de arte. Proyecto del curso Desarrollo Fullstack 2 (Duoc UC).
El backlog completo está en docs/ArtCrate_Requerimientos_Scrum.xlsx (hojas "Epicas" e "Historias de Usuario").
Es la fuente de verdad: cada historia (HU-xx) tiene criterios de aceptación que se deben cumplir.

## Restricciones de E1 (no negociables)
- SOLO HTML5 semántico, CSS externo, Bootstrap 5 (por CDN) y JavaScript vanilla.
- PROHIBIDO: React, TypeScript, Node/npm, frameworks JS, jQuery, backend, base de datos, localStorage como "base de datos".
- NO implementar el carrito en JavaScript (no es entregable de E1). Solo existe el botón "Agregar al carrito" como elemento visual sin comportamiento.
- Las historias marcadas "FUERA DE E1" (sprints 7, 8, 11, 12) NO se tocan.
- Los formularios solo validan en el navegador y muestran un éxito simulado. Nada se guarda ni se envía.
- Sin estilos en línea (atributo style) ni etiquetas <style> en las páginas. Todo el CSS propio va en css/styles.css.
- Bootstrap se carga ANTES que css/styles.css. El CSS propio debe quedar comentado por secciones para distinguirlo de Bootstrap.
- Todo el contenido visible, mensajes de error y comentarios van en español (Chile). Precios en CLP con formato $12.990.

## Estructura de carpetas
index.html · pages/ (catalogo, producto, registro, login, contacto, nosotros, faq) ·
admin/ (index, productos, producto-form, pedidos) · css/styles.css · js/ · assets/img/ · docs/
Cuidado con las rutas relativas entre carpetas (../css/styles.css en pages/ y admin/).

## Forma de trabajar
- Se trabaja UN sprint a la vez, y dentro del sprint UNA historia a la vez.
- Antes de programar una historia, léela en el Excel y repite sus criterios de aceptación.
- Al terminar cada historia, verifica uno por uno sus criterios y dime cuáles cumpliste.
- Un commit por historia. Formato: `HU-06: crear página de inicio con HTML semántico`.
- Código simple y comentado en español. Soy estudiante y debo poder explicar cada línea en la Review.
  Si usas algo no trivial, explícalo en 1–2 líneas.
- Si algo del Excel es ambiguo o choca con estas restricciones, pregúntame antes de decidir.