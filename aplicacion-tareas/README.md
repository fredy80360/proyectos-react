# Aplicación de Tareas (Todo List)

Una aplicación web moderna para gestionar tus tareas diarias de forma eficiente. Construida con React, permite crear, visualizar y organizar tus tareas en una interfaz intuitiva y responsiva.

## 🎯 Características

- ✅ Crear nuevas tareas
- 📋 Visualizar lista de tareas
- 🎨 Interfaz moderna y amigable
- 📱 Diseño responsivo
- ⚡ Componentes reutilizables en React

## 🛠️ Tecnologías Utilizadas

- **React** - Librería JavaScript para interfaces de usuario
- **React Hooks** - Estado y efectos en componentes funcionales
- **CSS3** - Estilos personalizados
- **Create React App** - Herramienta de construcción

## 📂 Estructura del Proyecto

```
src/
├── componentes/
│   ├── ListaDeTareas.js      # Componente principal de la lista
│   ├── Tarea.js              # Componente individual de tarea
│   └── TareaFormulario.js    # Formulario para crear tareas
├── hojas-de-estilo/
│   ├── ListaDeTareas.css
│   ├── Tarea.css
│   └── TareaFormulario.css
├── App.js
└── index.js
```

## 🚀 Cómo Ejecutar el Proyecto

### Requisitos Previos
- Node.js (versión 12 o superior)
- npm o yarn

### Instalación

1. Clona o descarga el repositorio
2. Navega al directorio del proyecto:
   ```bash
   cd aplicacion-tareas
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

### Scripts Disponibles

#### `npm start`
Inicia la aplicación en modo de desarrollo. Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador. La página se recargará automáticamente cuando hagas cambios.

#### `npm test`
Ejecuta las pruebas en modo de observación interactivo.

#### `npm run build`
Compila la aplicación para producción en la carpeta `build`. La aplicación está lista para ser desplegada.

## 📝 Cómo Usar la Aplicación

1. **Agregar una tarea**: Escribe el nombre de la tarea en el formulario y haz clic en "Agregar"
2. **Ver tareas**: Las tareas aparecerán en la lista principal
3. **Marcar como completada**: Haz clic en una tarea para marcarla como completada
4. **Eliminar tarea**: Haz clic en el botón de eliminar para remover la tarea

## 📚 Aprende Más

Para aprender más sobre React, consulta la [documentación oficial de React](https://reactjs.org/).

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT.
