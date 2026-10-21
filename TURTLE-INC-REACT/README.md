# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Arquitectura del proyecto (post‑migración)

- **Estructura de carpetas principal**
  - `src/`
    - `components/`
      - `Header.jsx` – encabezado global con logo y título.
      - `Navbar.jsx` – barra de navegación reutilizable en todas las vistas.
      - `Footer.jsx` – pie de página con la información institucional.
    - `pages/`
      - Cada página HTML original se ha convertido en un componente React bajo `pages/`.
      - Todas las páginas ahora siguen el mismo patrón de **layout**:
        ```jsx
        import Header from '../components/Header';
        import Navbar from '../components/Navbar';
        import Footer from '../components/Footer';

        export default function <PageName>() {
          return (
            <div className="page-<slug>">
              <Header title="<Título>" />
              <Navbar />
              {/* Contenido específico de la página */}
              <Footer />
            </div>
          );
        }
        ```
      - Cada página está envuelta en un `div` con clase `page‑<slug>` (por ejemplo `page‑inicio`, `page‑detalle‑producto`).
    - `styles/`
      - `scoped-pages.css` – archivo central que contiene los estilos originales de **todas** las páginas.  Los estilos específicos por página fueron migrados aquí y los imports CSS individuales fueron eliminados.
      - Otros archivos CSS auxiliares (por ejemplo `App.css`, `index.css`) permanecen para estilos globales.
    - `App.jsx` – define las rutas con `react‑router‑dom` que apuntan a los componentes bajo `pages/`.

- **Objetivo de la arquitectura**
  - Mantener **exactamente** la apariencia y el comportamiento del sitio HTML original.
  - Evitar duplicación de CSS consolidando todos los estilos en `scoped-pages.css`.
  - Facilitar futuras modificaciones al layout al centralizar encabezado, barra de navegación y pie de página en componentes reutilizables.
  - Cada página conserva su HTML y lógica de interacción original sin modificaciones de diseño.

- **Flujo de datos y recursos**
  - Las imágenes, fuentes y otros assets siguen en la carpeta `public/` y se referencian con rutas relativas (`/imagen.png`).
  - No se introdujeron nuevos paquetes ni dependencias; solo se usó `react`, `react‑router‑dom` y Vite.

---

Con esta arquitectura, el proyecto React replica fielmente el sitio estático original mientras gana la mantenibilidad y modularidad que brinda React.
