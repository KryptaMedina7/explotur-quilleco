# Explotur Quilleco

Este es el repositorio oficial para la landing page de **Explotur Quilleco**, un proyecto turístico de cabañas y naturaleza en Quilleco, Región del Biobío.

## 🛠️ Stack Tecnológico

El proyecto de la página web está construido con las tecnologías más modernas y optimizadas para rendimiento y SEO:

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Librería UI**: [React 19](https://react.dev/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Lenguaje**: TypeScript

## 📂 Estructura del Proyecto

La carpeta raíz contiene reglas e instrucciones generales de marca (en `.github/`). **El código real del sitio web vive dentro de la carpeta `website/`.**

- `/website` - Código fuente de la landing page.
- `/.github` - Reglas de comportamiento e instrucciones del proyecto.
- `/.agent` - Configuraciones internas (puede ser ignorado).

## 🚀 Cómo ejecutar en desarrollo (Local)

Para correr este proyecto en tu computadora, asegúrate de tener Node.js instalado (v18 o superior).

1. Abre tu terminal.
2. Ingresa a la carpeta del sitio web:
   ```bash
   cd website
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Levanta el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la página en vivo.

## 📷 Cómo cambiar las imágenes

Las primeras imágenes son "placeholders" (de prueba). Cuando tengas las fotos reales de Explotur Quilleco:
1. Pon tus fotos dentro de `website/public/images/`.
2. Edita `website/src/app/page.tsx` y cambia los links (`src="..."`) de `<img />` por las rutas de tus imágenes (ej: `/images/mi-foto.jpg`).

## ☁️ Instrucciones de Despliegue (Deploy)

Este proyecto está listo para ser desplegado fácilmente en **Netlify** (o Vercel). 

**Para desplegar en Netlify:**
- Directorio base (Base directory): `website`
- Comando de construcción (Build command): `npm run build`
- Directorio de publicación (Publish directory): `.next` (Netlify auto-detectará Next.js y gestionará la caché y salidas).

Si Netlify te pide "Publish directory", su plugin oficial de Next.js (`@netlify/plugin-nextjs`) lo manejará automáticamente bajo el capó (usualmente apunta a `.next`). 

