# CriptoExchange

Aplicación de página única construida con **Vue.js** para el análisis en tiempo real del mercado de criptomonedas. Compara precios en USD con los principales activos digitales, sigue las tendencias de precios en las últimas 24 horas y descubre las mejores tasas de cambio entre múltiples plataformas.

**Demo en vivo:** [eloquent-curran-914e8b.netlify.app](https://eloquent-curran-914e8b.netlify.app/)

![Vue.js](https://img.shields.io/badge/Vue.js-2.x-green)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue)
![Netlify](https://img.shields.io/badge/Desplegado-Netlify-00C7B7)

---

## Características

- **Datos de mercado en tiempo real** — Top 20 de criptomonedas con actualizaciones de precios en vivo mediante [CoinCap API](https://coincap.io/)
- **Vista detallada de cada moneda** — Páginas individuales con historial de precios de 24h, análisis de mínimo/máximo/promedio y gráfico interactivo
- **Convertidor de divisas** — Conversión instantánea de USD a crypto y de crypto a USD
- **Descubrimiento de exchanges** — Explora los mejores mercados para cada activo con enlaces directos a los exchanges
- **Diseño responsive** — Interfaz completamente adaptada a todos los dispositivos con Tailwind CSS
- **Búsqueda y ordenamiento** — Filtra activos por nombre o símbolo, ordénalos por ranking

## Stack Tecnológico

| Capa | Tecnología |
|------|------------|
| Framework | Vue.js 2 + Vue Router |
| Estilos | Tailwind CSS |
| Gráficos | Chart.js + vue-chartkick |
| Build | Vue CLI |
| Despliegue | Netlify |
| API | CoinCap v3 |

## Inicio Rápido

### Requisitos previos

- Node.js >= 12.x
- npm o yarn

### Instalación

```bash
git clone https://github.com/your-username/CriptoExchange.git
cd CriptoExchange
npm install
```

### Desarrollo

```bash
npm run serve
```

La aplicación estará disponible en `http://localhost:8080`.

### Build de producción

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Notas sobre la API y el rendimiento

Esta aplicación consume la **API REST de CoinCap v3** para todos los datos de mercado. El tier gratuito de esta API establece límites de velocidad de solicitud que pueden afectar la demo en vivo bajo ciertas condiciones:

- **El desarrollo local** ofrece la mejor experiencia, con actualizaciones en tiempo real consistentes y sin limitación de requests.
- **La versión en producción (hosted)** puede mostrar datos limitados ocasionalmente cuando se alcanzan los límites de la API. La aplicación maneja estos escenarios de forma elegante, mostrando los datos disponibles sin interrumpir la experiencia del usuario.

Para obtener un rendimiento óptimo, se recomienda ejecutar el proyecto en local.

## Estructura del Proyecto

```
src/
├── api.js                  # Cliente API con manejo de errores
├── main.js                 # Punto de entrada y registros globales
├── router.js               # Definición de rutas
├── filters.js              # Filtros globales de formato de precios
├── components/
│   ├── PxAssetsTable.vue   # Tabla de activos con búsqueda y ordenamiento
│   ├── PxButton.vue        # Botón reutilizable con estado de carga
│   ├── PxHeader.vue        # Barra de navegación
│   └── PxIcon.vue          # Componente de logo SVG
└── views/
    ├── Home.vue            # Dashboard con top 20 de activos
    ├── CoinDetail.vue      # Análisis individual de cada moneda
    ├── About.vue           # Página Acerca de
    └── Error.vue           # Página 404
```