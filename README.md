# 🍕 Food Storage - Evaluación 1

## 🎥 Enlace al Video
[Explicación del código](https://youtu.be/QlhxXizzNJU)

## 📘 Descripción

Aplicación web que permite a los usuarios navegar por un catálogo de productos, filtrar por categorías, buscar productos por nombre y gestionar un carrito de compras interactivo con persistencia en `LocalStorage`.

Incluye un diseño moderno, miniaturas en el carrito, controles de cantidad y un resumen de compra con subtotal y total.

---

## ⚙️ Funcionalidades Implementadas

### 🛍️ Catálogo Dinámico
- Renderizado automático de productos desde una fuente de datos centralizada.
- Visualización de imágenes, precios y descripciones.

### 🛒 Carrito de Compras
- Agregar productos (incrementa cantidad si ya existen).
- Persistencia completa en `LocalStorage`.
- Cálculo automático del subtotal y total.
- Vaciar carrito.
- Miniaturas dentro del carrito.
- Controles de cantidad: sumar, restar y eliminar.

### 🔎 Búsqueda y Filtros
- Buscador por nombre de producto.
- Menú lateral de categorías con opción de **"Ver Todo"**.

---

## 🧰 Tecnologías Utilizadas

- **HTML5 / CSS3**
- **JavaScript / TypeScript**
- **Vite** como entorno de desarrollo
- **LocalStorage** para persistencia de datos

---

## 🚀 Instalación y Ejecución

1. **Instalar dependencias**

   Usar `pnpm` para la gestión de paquetes:

   ```bash
   pnpm install

2. **Ejecutar el servidor de desarrollo**:

   ```bash
   pnpm dev
   ```

3. **Acceder a la aplicacion**:
   Abre tu navegador en `http://localhost:5173`
---

## 📁 Estructura del Proyecto

```
/
├── src/
│   ├── pages/                # Contiene las páginas de la aplicación
│   │   ├── admin/            # Páginas solo para administradores
│   │   ├── auth/             # Páginas de autenticación (login, registro)
│   │   └── client/           # Páginas solo para clientes
|   |       |──home/
|   |       |  |──home.html   # catalogo de productos
|   |       |  └──home.ts     # render, busqueda y filtros
|   |       └──cart/
|   |          |──cart.html   # vista del carrito
|   |          └──cart.ts     # render del carrito y total
│   ├── types/                # Define las interfaces y tipos (IUser, Rol)
|   |   |──product.ts         # Interfaces IProduct e ICartItem
|   |   └──categoria.ts       # Interface ICategoria
|   ├── data/
|   |   └──data.ts            # PRODUCTS y getCategories()
│   └── utils/                # Lógica reutilizable
|       ├── cart.ts           # Logica del carrito (localStorage)
│       ├── auth.ts           # Función principal de verificación de rol y sesión
│       ├── localStorage.ts   # Funciones para leer/escribir en localStorage
│       └── navigate.ts       # Función para redirigir al usuario
├── package.json              # Dependencias y scripts
└── README.md                 # Este archivo
```
