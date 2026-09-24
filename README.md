# ArtCrate

Tienda en línea de materiales de arte (pinturas, lienzos, cuadernos de dibujo y accesorios).

Proyecto semestral — **Desarrollo Fullstack 2**.

## Estado actual

Sprint 1 (E1) — definición del producto y organización del desarrollo.

## Actores

- **Cliente**: navega el catálogo, gestiona su carrito y realiza compras.
- **Administrador**: gestiona el catálogo, el stock y da seguimiento a los pedidos.

## Alcance

Dentro del alcance: catálogo con variantes (color, tamaño, marca), carrito y checkout simulado,
historial y seguimiento de pedidos, panel de administración con CRUD de productos.

Fuera del alcance: pasarela de pago real, integración con couriers, marketplace multivendedor
(los proveedores se registran como un atributo del producto, no como un actor del sistema).

Detalle completo en [`docs/ERS_Inicial_TiendaArtSupplies.docx`](docs/ERS_Inicial_TiendaArtSupplies.docx).

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
docs/       Documentación (ERS, backlog)
```

A medida que avancen los sprints se irán agregando las carpetas del sitio (páginas, estilos,
scripts) según lo que pida cada entrega.
