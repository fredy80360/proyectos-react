# 🚀 Portafolio React - Colección de Proyectos Interactivos

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/react-18.2+-blue)](https://reactjs.org/)
[![Node](https://img.shields.io/badge/node-12.0+-green)](https://nodejs.org/)

> Una colección de cuatro proyectos React que demuestran mejores prácticas en desarrollo web moderno, desde aplicaciones interactivas hasta portafolios profesionales.

## 📋 Tabla de Contenidos

- [📍 Descripción General](#-descripción-general)
- [📂 Proyectos Incluidos](#-proyectos-incluidos)
- [✨ Características Principales](#-características-principales)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [🚀 Instalación y Uso](#-instalación-y-uso)
- [📁 Estructura del Repositorio](#-estructura-del-repositorio)
- [📚 Recursos y Referencias](#-recursos-y-referencias)
- [🤝 Contribución](#-contribución)
- [📄 Licencia](#-licencia)
- [👤 Autor](#-autor)

## 📍 Descripción General

Este repositorio contiene cuatro proyectos React independientes, cada uno demostrando diferentes aspectos del desarrollo web moderno:

- Gestión de estado con Hooks
- Componentes reutilizables
- Diseño responsivo
- Mejores prácticas en React

## 📂 Proyectos Incluidos

### 1. **Aplicación de Tareas** 📝

Sistema completo de gestión de tareas con interfaz intuitiva.

- **Características**: Crear, editar, eliminar y marcar tareas como completadas
- **Conceptos**: Hooks (useState, useEffect), manipulación de arrays, eventos
- **Carpeta**: `aplicacion-tareas/`

### 2. **Calculadora Interactiva** 🧮

Herramienta matemática funcional con diseño moderno.

- **Características**: Operaciones básicas, interfaz similar a calculadora física
- **Conceptos**: Gestión de estado, renderizado condicional, operaciones matemáticas
- **Carpeta**: `calculadora/`

### 3. **Contador de Clics** 🖱️

Aplicación interactiva simple para aprender fundamentos de React.

- **Características**: Incrementar, decrementar, reiniciar contador
- **Conceptos**: useState básico, manejo de eventos, actualización de estado
- **Carpeta**: `contador-de-clics/`

### 4. **Portafolio de Testimonios** 🌟

Galería dinámica mostrando testimonios de clientes internacionales.

- **Características**: Estructura componentes, props, arrays de datos
- **Conceptos**: Props, renderizado de listas, CSS avanzado
- **Carpeta**: `testimonios-JFrivas/`

## ✨ Características Principales

- ⚡ **Construidos con React y Hooks modernos**
- 📱 **Diseño totalmente responsivo y mobile-first**
- 🎨 **Interfaces modernas y profesionales**
- 🔧 **Componentes reutilizables y bien estructurados**
- 📦 **Listos para producción**
- 🎓 **Código comentado y bien organizado**

## 🛠️ Stack Tecnológico

```
Frontend
├── React 18.2+
├── React Hooks (useState, useEffect, useContext)
└── CSS3 (Flexbox, Grid, diseño responsivo)

Herramientas
├── Create React App
├── npm/yarn
└── Git

Estructura
├── Componentes funcionales
├── Hojas de estilo modularizadas
└── README individual por proyecto
```

## 🚀 Instalación y Uso

### Requisitos Previos

- **Node.js** 12.0 o superior
- **npm** 6.0+ o **yarn** 1.22+
- **Git** (opcional, para clonar)

### Instrucciones Paso a Paso

#### 1. Clonar el repositorio

```bash
git clone https://github.com/fredy80360/Proyectos-React.git
cd Proyectos-React
```

#### 2. Navegar al proyecto deseado

```bash
cd [nombre-del-proyecto]
# Opciones: aplicacion-tareas, calculadora, contador-de-clics, testimonios-JFrivas
```

#### 3. Instalar dependencias

```bash
npm install
# o
yarn install
```

#### 4. Iniciar el servidor de desarrollo

```bash
npm start
# o
yarn start
```

La aplicación se abrirá automáticamente en `http://localhost:3000`

### Construcción para producción

```bash
npm run build
# o
yarn build
```

## 📁 Estructura del Repositorio

```
Proyectos-React/
├── README.md
├── aplicacion-tareas/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── componentes/
│   │   │   ├── ListaDeTareas.js
│   │   │   ├── Tarea.js
│   │   │   └── TareaFormulario.js
│   │   ├── hojas-de-estilo/
│   │   │   ├── ListaDeTareas.css
│   │   │   ├── Tarea.css
│   │   │   └── TareaFormulario.css
│   │   ├── App.css
│   │   └── index.css
│   └── package.json
├── calculadora/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── componentes/
│   │   │   ├── Boton.js
│   │   │   ├── BotonClear.js
│   │   │   └── Pantalla.js
│   │   ├── hojas-de-estilo/
│   │   │   ├── Boton.css
│   │   │   ├── BotonClear.css
│   │   │   └── Pantalla.css
│   │   ├── App.css
│   │   └── index.css
│   └── package.json
├── contador-de-clics/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── componentes/
│   │   │   ├── Boton.js
│   │   │   └── Contador.js
│   │   ├── hojas-de-estilos/
│   │   │   ├── Boton.css
│   │   │   └── Contador.css
│   │   ├── App.css
│   │   └── index.css
│   └── package.json
└── testimonios-JFrivas/
    ├── public/
    ├── src/
    │   ├── App.js
    │   ├── index.js
    │   ├── componentes/
    │   │   └── Testimonio.js
    │   ├── hojas-de-estilo/
    │   │   └── Testimonio.css
    │   ├── App.css
    │   └── index.css
    └── package.json
```

## 📚 Recursos y Referencias

Cada proyecto incluye su propia documentación detallada. Para aprender más:

- [Documentación oficial de React](https://reactjs.org/)
- [React Hooks - Guía completa](https://reactjs.org/docs/hooks-intro.html)
- [Create React App - Documentación](https://create-react-app.dev/)
- [MDN Web Docs - CSS3](https://developer.mozilla.org/es/docs/Web/CSS)

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. **Fork** el proyecto

   ```bash
   git clone https://github.com/usuario/Proyectos-React.git
   ```

2. **Crea una rama** para tu mejora

   ```bash
   git checkout -b feature/tu-mejora
   ```

3. **Realiza tus cambios** y asegúrate que el código esté limpio

4. **Commit** tus cambios

   ```bash
   git commit -m "Descripción clara de tu mejora"
   ```

5. **Push** a la rama

   ```bash
   git push origin feature/tu-mejora
   ```

6. **Abre un Pull Request** describiendo tus cambios

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más información.

## 👤 Autor

**JFrivas**

- 🌐 Portafolio: [jfrivas.com](https://jfrivas.com)
- 💼 LinkedIn: [linkedin.com/in/jfrivas](https://linkedin.com/in/jfrivas)
- 📧 Email: fredyrivas0714@gmail.com

---

## 🙏 Agradecimientos

- A la comunidad de React por sus excelentes herramientas y documentación
- A los clientes por sus valiosos testimonios
- A todos los contribuyentes que ayudan a mejorar estos proyectos

---

<div align="center">
  Hecho con ❤️ por JFrivas
</div>
