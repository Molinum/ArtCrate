# ArtCrate

Tienda en línea de materiales de arte (pinturas, lienzos, cuadernos de dibujo y accesorios).

Proyecto semestral — **Desarrollo Fullstack 2**.

## Estado actual

E1 completo (Sprints 1-4): estructura, diseño visual y validaciones del sitio base. E2 (migración
a React + TypeScript) es lo siguiente.

## Fuente de verdad del proyecto

[`docs/Analisis_Requerimientos_ArtCrate.docx`](docs/Analisis_Requerimientos_ArtCrate.docx) — documento
vivo con el modelo de datos, el contrato de API objetivo, las reglas de negocio, el flujo crítico
que debe funcionar de punta a punta en la defensa final, y el mapa de riesgos. Ante cualquier duda
de alcance o de comportamiento del sistema, esa es la referencia, no esta sección resumida del
README.

## Actores

- **Cliente**: navega el catálogo, gestiona su carrito y realiza compras.
- **Administrador**: gestiona el catálogo, el stock y da seguimiento a los pedidos.

## Alcance

Dentro del alcance: catálogo con variantes (color, tamaño, marca), carrito y checkout simulado,
historial y seguimiento de pedidos, panel de administración con CRUD de productos.

Fuera del alcance: pasarela de pago real, integración con couriers, marketplace multivendedor
(los proveedores se registran como un atributo del producto, no como un actor del sistema).

Detalle completo en [`docs/Analisis_Requerimientos_ArtCrate.docx`](docs/Analisis_Requerimientos_ArtCrate.docx)
(ver también el [`docs/ERS_Inicial_TiendaArtSupplies.docx`](docs/ERS_Inicial_TiendaArtSupplies.docx) de Sprint 1).

## Backlog

Épicas, historias de usuario, criterios de aceptación y estimación con Story Points en
[`docs/Plantilla_Gestion_Requerimientos_Scrum_ArtSupplies.xlsx`](docs/Plantilla_Gestion_Requerimientos_Scrum_ArtSupplies.xlsx).

## Plan de sprints (resumen)

| Experiencia | Sprints | Enfoque |
|---|---|---|
| E1 | 1-4 | Definición del producto, estructura HTML5 semántica, diseño con CSS/Bootstrap, validaciones en JavaScript |
| E2 | 5-10 | Migración a SPA con React + TypeScript, componentización, carrito propio en TypeScript, testing (Vitest/RTL) |
| E3 | 11-12 | Integración con backend real (Spring Boot + base de datos), autenticación con Spring Security + JWT |

## Estructura del repositorio

```
docs/                     Documentación (análisis de requerimientos, ERS, backlog)
assets/css/estilos.css    Estilos propios sobre Bootstrap
assets/js/validaciones.js Validaciones de formularios (login, registro)
assets/vendor/bootstrap/  Bootstrap 5 vendorizado (funciona sin conexión)
assets/img/               Imágenes y placeholders
admin/                    Páginas del panel de administración
*.html (raíz)             Páginas del sitio de cliente
```
