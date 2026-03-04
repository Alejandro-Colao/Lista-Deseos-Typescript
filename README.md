# 📝 Lista de Deseos (Wishlist)

Una aplicación sencilla y elegante para gestionar tu lista de deseos, construida con **React**, **TypeScript** y **Vite**.

## ✨ Características

- ➕ **Añadir deseos**: Permite agregar nuevos elementos a tu lista de forma rápida.
- ✅ **Marcar como completado**: Gestiona el estado de tus deseos con un simple clic.
- 💾 **Persistencia**: Tus deseos se guardan automáticamente en el `localStorage` del navegador, por lo que no se pierden al recargar la página.
- 🧹 **Limpieza inteligente**: Opción para eliminar todos los deseos ya realizados de una sola vez.
- 📱 **Diseño Responsive**: Interfaz limpia y adaptada a diferentes dispositivos.

## 🚀 Tecnologías Utilizadas

- [React 19](https://react.dev/) - Biblioteca de UI.
- [TypeScript](https://www.typescriptlang.org/) - Tipado estático para un código más seguro.
- [Vite](https://vitejs.dev/) - Herramienta de construcción ultra rápida.
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Estilos personalizados.
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - Para la persistencia de datos localmente.

## 📂 Estructura del Proyecto

```text
src/
├── addDeseo/        # Componente para añadir nuevos deseos
├── Listadeseos/     # Componentes para listar y mostrar deseos
├── types.ts         # Definiciones de tipos TypeScript
├── App.tsx          # Lógica principal y gestión de estado
├── main.tsx         # Punto de entrada de la aplicación
└── App.css          # Estilos globales y de componentes
```

## 🛠️ Instalación y Uso

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clonar el repositorio o descargar el código.**
2. **Instalar las dependencias:**
   ```bash
   npm install
   ```
3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
4. **Abrir en el navegador:**
   Visita la URL que se muestra en la terminal (por defecto `http://localhost:5173`).
