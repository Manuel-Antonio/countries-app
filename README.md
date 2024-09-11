# 🌍 Country Explorer Project

**Country Explorer** es una aplicación web que permite a los usuarios explorar países, seleccionando continentes y filtrando por nombre de país, todo a través de una interfaz simple y amigable. Este proyecto usa **Angular** como framework principal y varias tecnologías y recursos complementarios para ofrecer una experiencia optimizada y eficiente.

## 🚀 Características

- **Selección de continentes**: Filtra países por continentes a través de un menú desplegable interactivo.
- **Búsqueda de países por nombre**: Busca países por nombre con una opción para limitar la búsqueda a un continente específico o realizarla globalmente.
- **Visualización de países**: Lista de países que se ajusta dinámicamente a la cantidad disponible, con un contenedor que admite desplazamiento vertical.
- **Sidebar interactivo**: Un menú lateral (sidebar) que se puede abrir/cerrar con animaciones suaves usando Bootstrap 5 y Font Awesome.

## 🛠️ Tecnologías utilizadas

- **Angular v16**: Framework para construir interfaces dinámicas y escalables.
- **Bootstrap 5**: Framework CSS para un diseño responsive y limpio.
- **Bootswatch**: Temas personalizados para Bootstrap.
- **Font Awesome**: Biblioteca de iconos para mejorar la experiencia visual.
- **Cloudinary**: Para la gestión de imágenes y optimización con transformaciones en URL.
- **CSS personalizado**: Ajustes de estilo para asegurar que la experiencia sea uniforme en diferentes resoluciones.

## 📂 Estructura del Proyecto

El proyecto sigue los principios **SOLID** para asegurar una buena mantenibilidad y escalabilidad:

- **components/**: Contiene componentes reutilizables como el country-item, country-details, sidebar, loader, alphabet-buttons y search-items.
- **data/**: Contiene un archivo .ts con data referente a su propio nombre.
- **models/**: Definición de tipos y modelos de datos.
- **pages/**: Páginas individuales de la aplicación.
- **services/**: Servicios para manejar la lógica de negocio.
- **utils/**: Contiene un archivo .ts con las fnuciones utilizadas en otros compontes.


## 💻 Funcionalidad

### Selección de Continentes
Cada continente en el menú desplegable puede ser seleccionado para aplicar un filtro. Los continentes seleccionados se rastrean en un \`Set\` para evitar duplicados, y la búsqueda se puede personalizar para trabajar con o sin filtros de continente.

\`\`\`typescript
let selectedContinents = new Set<string>();

function updateSelectedContinents(continent: string) {
  if (selectedContinents.has(continent)) {
    selectedContinents.delete(continent);
  } else {
    selectedContinents.add(continent);
  }
}
\`\`\`

### Lógica de Búsqueda
La búsqueda de países tiene tres posibles escenarios:
- Si solo se selecciona un nombre de país, se realiza una búsqueda global.
- Si hay un continente seleccionado, se limita la búsqueda a ese continente.
- Si no hay selección, se busca por países que comiencen con la letra 'A' de forma predeterminada.

## 🌐 APIs y recursos externos

- **API de países**: La información de los países puede ser obtenida a través de [REST Countries API](https://countries.trevorblades.com/).
- **Cloudinary**: Utilizado para optimizar y transformar las imágenes de los países según sea necesario.

## 📸 Imágenes y Media
Las imágenes se gestionan a través de **Cloudinary**, donde se utilizan transformaciones de URL para optimizar el tamaño y la carga.

Ejemplo de transformación:
\`\`\`url
https://res.cloudinary.com/demo/image/upload/w_400,h_300/country_flag.png
\`\`\`

## 🎨 Estilos y Responsividad

El diseño se asegura de ser completamente **responsive**, adaptándose a pantallas móviles, tablets y desktop. Se ha hecho uso de **Bootstrap 5** junto con **Bootswatch** para asegurar un estilo moderno y profesional.

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor abre un issue o envía un pull request con tus mejoras o sugerencias.

"""
