# Testimonios JFrivas

Un portafolio digital que exhibe testimonios de clientes satisfechos con los servicios de diseño web de JFrivas. Aplicación construida con React que destaca historias de éxito de clientes de diferentes países.

## 🎯 Características

- 🌟 Galería de testimonios destacados
- 👤 Perfiles con información del cliente (nombre, país, empresa, cargo)
- 📝 Testimonios detallados y auténticos
- 🖼️ Imágenes de clientes integradas
- 🎨 Diseño moderno y profesional
- 📱 Interfaz completamente responsiva
- 🌍 Clientes de múltiples países

## 🛠️ Tecnologías Utilizadas

- **React** - Librería JavaScript para interfaces de usuario
- **React Componentes Funcionales** - Componentes reutilizables
- **CSS3** - Estilos personalizados y diseño responsivo
- **Create React App** - Herramienta de construcción

## 📂 Estructura del Proyecto

```
src/
├── componentes/
│   └── Testimonio.js          # Componente reutilizable para cada testimonio
├── hojas-de-estilo/
│   └── Testimonio.css         # Estilos para los testimonios
├── img/
│   └── [imágenes de clientes]
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
   cd testimonios-JFrivas
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

## 📋 Componentes Principales

### Componente Testimonio
Componente reutilizable que muestra un testimonio individual con:
- Nombre del cliente
- País de origen
- Cargo en su empresa
- Nombre de la empresa
- Foto del cliente
- Testimonio detallado

### Props Esperadas
```javascript
<Testimonio
  nombre="Nombre del Cliente"
  pais="País"
  imagen="nombre-imagen"
  cargo="Cargo/Puesto"
  empresa="Nombre Empresa"
  testimonio="Texto del testimonio..."
/>
```

## 💼 Acerca de JFrivas

JFrivas es un equipo especializado en diseño web profesional que ayuda a empresas y emprendedores a crear presencia en línea de alto impacto. Con experiencia en múltiples mercados internacionales, JFrivas transforma ideas en soluciones web innovadoras.

## 🌍 Clientes Destacados

El portafolio incluye testimonios de clientes de:
- 🇸🇬 Singapur
- 🇳🇬 Nigeria
- Y más...

## 📚 Aprende Más

Para aprender más sobre React, consulta la [documentación oficial de React](https://reactjs.org/).

## 📄 Licencia

Este proyecto está disponible bajo la licencia MIT.
