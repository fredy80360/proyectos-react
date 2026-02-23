# Calculadora Interactiva

Una calculadora web funcional construida con React que permite realizar operaciones matemáticas básicas y avanzadas. Diseñada con una interfaz intuitiva y botones personalizados para una experiencia de usuario fluida.

## 🎯 Características

- ➕ Suma, resta, multiplicación y división
- 🧮 Operaciones matemáticas avanzadas
- 🔄 Botón para limpiar/resetear
- 🎨 Interfaz moderna y responsive
- ⚡ Cálculos en tiempo real

## 🛠️ Tecnologías Utilizadas

- **React** - Librería JavaScript para interfaces de usuario
- **React Hooks (useState)** - Gestión de estado
- **Math.js** - Librería para evaluación de expresiones matemáticas
- **CSS3** - Estilos personalizados y responsivos
- **Create React App** - Herramienta de construcción

## 📂 Estructura del Proyecto

```
src/
├── componentes/
│   ├── Boton.js           # Botones numéricos y de operación
│   ├── BotonClear.js      # Botón para limpiar la pantalla
│   └── Pantalla.js        # Pantalla para mostrar el resultado
├── hojas-de-estilo/
│   ├── Boton.css
│   ├── BotonClear.css
│   └── Pantalla.css
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
   cd calculadora
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

### Scripts Disponibles

#### `npm start`
Inicia la aplicación en modo de desarrollo. Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

#### `npm test`
Ejecuta las pruebas en modo de observación interactivo.

#### `npm run build`
Compila la aplicación para producción. La aplicación está lista para ser desplegada.

## 📝 Cómo Usar la Calculadora

1. **Ingresa números**: Haz clic en los botones numéricos (0-9)
2. **Selecciona operación**: Haz clic en +, -, ×, ÷
3. **Obtén el resultado**: Haz clic en = para ver el resultado
4. **Limpia**: Utiliza el botón C para resetear la pantalla

## 💡 Dependencias Principales

- `mathjs` - Para evaluación segura de expresiones matemáticas

## 📚 Aprende Más

Para aprender más sobre React, consulta la [documentación oficial de React](https://reactjs.org/).

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT.
