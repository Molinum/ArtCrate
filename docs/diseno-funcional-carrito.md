# Diseño funcional del carrito de compras – ArtCrate

Documento de la historia **HU-40** (Sprint 4, E1).
Es solo un diseño: en E1 **no se programa el carrito**. Se implementará en TypeScript en E2
(historias HU-41, HU-42, HU-43 y HU-44), y este documento es la referencia para hacerlo sin ambigüedades.

En la versión actual de E1 el botón "Agregar al carrito" solo existe como elemento visual y no tiene comportamiento.

## 1. Alcance

- El carrito pertenece al **Cliente** y vive mientras navega por la tienda.
- Todos los precios están en **pesos chilenos (CLP)**, sin decimales y con punto como separador de miles
  (ejemplo: $12.990).
- Fuera de este documento: pago real, envío y descuentos (no forman parte del carrito de E1/E2).

## 2. Datos de un ítem del carrito

Cada producto agregado se representa como un ítem con estos datos:

| Dato | Tipo | Descripción | Ejemplo |
|---|---|---|---|
| `id` | número | Identificador único del producto en el catálogo | 1 |
| `nombre` | texto | Nombre del producto | Acrílico 12 colores |
| `precio` | número entero | Precio unitario en CLP | 12990 |
| `cantidad` | número entero | Unidades que el cliente quiere comprar | 2 |
| `imagen` | texto | Ruta de la imagen del producto | assets/img/producto-01-acrilico-12-colores.svg |

Datos que se **calculan** y no se guardan:

| Dato calculado | Fórmula | Ejemplo |
|---|---|---|
| Subtotal del ítem | precio × cantidad | 12990 × 2 = $25.980 |
| Total del carrito | suma de los subtotales de todos los ítems | $25.980 + $8.990 = $34.970 |
| Cantidad de ítems | suma de las cantidades | 2 + 1 = 3 unidades |

Además, para validar la cantidad máxima, el sistema necesita conocer el **stock disponible** del producto
(dato que viene del catálogo, no del ítem del carrito).

## 3. Reglas de negocio

| N.º | Regla |
|---|---|
| R1 | La cantidad mínima de un ítem es **1**. |
| R2 | La cantidad máxima de un ítem es el **stock disponible** del producto. |
| R3 | El **total** del carrito es la suma de los subtotales de todos sus ítems. |
| R4 | No puede haber dos ítems del mismo producto: si el producto ya está en el carrito, se aumenta su cantidad en 1. |
| R5 | Si el carrito está vacío, el total es **$0** y no se puede iniciar el checkout. |
| R6 | Un producto sin stock (0 unidades) no se puede agregar al carrito. |
| R7 | Los valores se muestran siempre con el formato CLP (por ejemplo $12.990). |

## 4. Flujos

Cada flujo indica quién lo inicia, qué ocurre y cómo termina.

### 4.1 Agregar un producto
1. El cliente pulsa "Agregar al carrito" en el catálogo o en el detalle del producto.
2. Si el producto **no** está en el carrito, se crea un ítem con cantidad 1.
3. Si el producto **ya** está en el carrito, su cantidad aumenta en 1 (R4), siempre que no supere el stock (R2).
4. Si ya se alcanzó el stock, no se agrega y se muestra el mensaje "Ya tienes todo el stock disponible de este producto".
5. Se actualiza el total del carrito.

### 4.2 Cambiar la cantidad
1. El cliente modifica la cantidad de un ítem en la vista del carrito.
2. Si la nueva cantidad es menor que 1 o mayor que el stock, no se acepta y se muestra un mensaje que indica el rango permitido (R1 y R2).
3. Si es válida, se recalcula el subtotal del ítem y el total del carrito.

### 4.3 Quitar un ítem
1. El cliente pulsa "Quitar" en un ítem.
2. El ítem desaparece del carrito.
3. Se recalcula el total (R3). Si era el último ítem, el carrito queda vacío (flujo 4.5).

### 4.4 Ver subtotal y total
1. Cada ítem muestra su subtotal (precio × cantidad).
2. Al final de la lista se muestra el total del carrito (R3).
3. Los valores se actualizan cada vez que cambia el carrito.

### 4.5 Vaciar el carrito
1. El cliente pulsa "Vaciar carrito".
2. Se pide confirmación ("¿Seguro que quieres vaciar el carrito?").
3. Si confirma, se eliminan todos los ítems, se muestra el mensaje "Tu carrito está vacío" con un enlace al catálogo, y el total pasa a $0 (R5).

### 4.6 Iniciar el checkout
1. El cliente pulsa "Ir a pagar".
2. Con el carrito vacío, el botón está **deshabilitado** (R5).
3. Con productos en el carrito, se pasa a la vista de checkout con el resumen del pedido (HU-44).

## 5. Boceto de la vista del carrito

Versión de escritorio (la numeración indica el flujo que corresponde a cada elemento):

```
+----------------------------------------------------------------------+
| [Logo ArtCrate]       Inicio  Catálogo  Contacto  Ingresar  Registro |
+----------------------------------------------------------------------+
|  Tu carrito                                                          |
|                                                                      |
|  +-------+  Acrílico 12 colores    Cantidad       Subtotal           |
|  | imagen|  $12.990 c/u           [ - ] 2 [ + ]   $25.980   [Quitar] |
|  +-------+                         (4.2)           (4.4)      (4.3)  |
|  ------------------------------------------------------------------  |
|  +-------+  Lienzo 40x50 cm        Cantidad       Subtotal           |
|  | imagen|  $8.990 c/u            [ - ] 1 [ + ]   $8.990    [Quitar] |
|  +-------+                                                           |
|  ------------------------------------------------------------------  |
|                                                                      |
|  [Vaciar carrito] (4.5)                     Total:  $34.970   (4.4)  |
|                                                                      |
|  [ Seguir comprando ]                        [ Ir a pagar ]  (4.6)   |
+----------------------------------------------------------------------+
```

Versión de carrito vacío:

```
+----------------------------------------------------------------------+
|  Tu carrito                                                          |
|                                                                      |
|            Tu carrito está vacío                                     |
|            [ Ir al catálogo ]                                        |
|                                                                      |
|                                              Total:  $0              |
|                                              [ Ir a pagar ]          |
|                                              (deshabilitado)         |
+----------------------------------------------------------------------+
```

En pantallas pequeñas (menos de 576 px) cada ítem se apila en una sola columna:
imagen, nombre y precio, cantidad, subtotal y botón "Quitar", uno debajo del otro.

## 6. Mensajes del carrito

| Situación | Mensaje |
|---|---|
| Producto agregado | "Producto agregado al carrito" |
| Stock máximo alcanzado | "Ya tienes todo el stock disponible de este producto" |
| Cantidad fuera de rango | "La cantidad debe estar entre 1 y {stock}" |
| Confirmar vaciado | "¿Seguro que quieres vaciar el carrito?" |
| Carrito vacío | "Tu carrito está vacío" |

## 7. Criterios para la implementación en E2

Al implementar el carrito se debe poder comprobar que:

- Agregar dos veces el mismo producto deja un solo ítem con cantidad 2.
- Con un producto de stock 5, no se puede llegar a una cantidad de 6.
- El total siempre coincide con la suma de los subtotales visibles.
- Con el carrito vacío el total es $0 y "Ir a pagar" está deshabilitado.

Trazabilidad: este diseño cubre los criterios de HU-40 y sirve de base para HU-41 (agregar), HU-42 (cantidad y eliminar),
HU-43 (subtotal, total y vaciar) y HU-44 (checkout).
