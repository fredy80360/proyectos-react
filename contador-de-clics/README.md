# Contador de Clics

Una aplicación interactiva simple pero efectiva que cuenta el número de clics realizados por el usuario. Ideal para aprender los fundamentos de React, estado dinámico y manejo de eventos.

## 🎯 Características

- 🖱️ Contador de clics en tiempo real
- 🔄 Botón para reiniciar el contador
- 📊 Visualización clara del conteo actual
- 🎨 Interfaz moderna y responsiva
- ⚡ Componentes funcionales con Hooks

## 🛠️ Tecnologías Utilizadas

- **React** - Librería JavaScript para interfaces de usuario
- **React Hooks (useState)** - Gestión de estado local
- **CSS3** - Estilos personalizados y diseño responsivo
- **Create React App** - Herramienta de construcción

## 📂 Estructura del Proyecto

```
src/
├── componentes/
│   ├── Boton.js           # Botones principales de la aplicación
│   └── Contador.js        # Componente que muestra el contador
├── hojas-de-estilos/
│   ├── Boton.css
│   └── Contador.css
├── img/
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
   cd contador-de-clics
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

1. **Incrementar contador**: Haz clic en el botón "CLICK" para aumentar el contador
2. **Reiniciar**: Haz clic en el botón "REINICIAR" para volver el contador a 0
3. **Ver resultado**: El número actual de clics se muestra en grande en la pantalla

## 💡 Conceptos de React Demostrados

- **useState Hook** - Gestión de estado en componentes funcionales
- **Manejo de eventos** - onClick para botones
- **Props** - Paso de datos entre componentes
- **Componentes funcionales** - Componentes modernos de React

## 📚 Aprende Más

Para aprender más sobre React, consulta la [documentación oficial de React](https://reactjs.org/).

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT.
