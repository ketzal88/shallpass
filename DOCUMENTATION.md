# Shall Pass - Documentación del Proyecto

## Resumen del Proyecto

**Shall Pass** es una aplicación web React desarrollada para una consultora que ofrece servicios de administración comercial, gestión de LLC en USA, asesoría jurídica e impositiva. La aplicación incluye múltiples landing pages especializadas para diferentes servicios.

## Estructura del Proyecto

### Tecnologías Principales

- **React 18.2.0** - Framework principal
- **React Router DOM 6.4.2** - Navegación
- **Bootstrap 5.2.3** - Framework CSS
- **React Bootstrap 2.10.0** - Componentes Bootstrap para React
- **SASS 1.58.3** - Preprocesador CSS
- **EmailJS 3.10.0** - Servicio de emails
- **AOS (Animate On Scroll) 2.3.4** - Animaciones
- **DOMPurify 3.1.3** - Sanitización de HTML

### Estructura de Archivos

```
src/
├── App.js                    # Componente principal con routing
├── index.js                  # Punto de entrada
├── assets/                   # Recursos estáticos
│   ├── img/                 # Imágenes
│   ├── svg/                 # Iconos SVG
│   ├── videos/              # Videos
│   └── index.js             # Exportaciones de assets
├── components/              # Componentes reutilizables
│   ├── Header/              # Headers de diferentes páginas
│   ├── Form/                # Formularios de contacto
│   ├── Landings/            # Componentes específicos para landing pages
│   ├── Servicios/           # Componente de servicios
│   ├── WhatsAppButton/      # Botón flotante de WhatsApp
│   └── [otros componentes]
├── data/                    # Datos y contenido
│   ├── data.js              # Datos principales
│   ├── ciudadaniaEspData.js # Datos para ciudadanía española
│   └── monotributo.js       # Datos para monotributo
├── hooks/                   # Custom hooks
│   ├── useScreenSize.js     # Hook para responsive design
│   ├── useScrollTo.js       # Hook para scroll suave
│   └── useIsIOS.js          # Hook para detectar iOS
├── pages/                   # Páginas principales
│   ├── Home.js              # Página principal
│   ├── LLCLanding.js        # Landing de LLC
│   ├── CiudadaniaEspanola.js # Landing de ciudadanía española
│   ├── Monotributo.js        # Landing de monotributo
│   └── Thanks.js             # Página de agradecimiento
└── scss/                    # Estilos globales
    ├── colors.scss           # Variables de colores
    └── layout.scss           # Variables de layout
```

## Páginas y Routing

### Rutas Principales

- `/` - Página principal (Home)
- `/llc` - Landing de LLC en USA
- `/ciudadania-espanola` - Landing de ciudadanía española
- `/monotributo` - Landing de monotributo
- `/thanks/:id` - Página de agradecimiento

### Páginas Detalladas

#### 1. Home (`/`)

- **Componentes**: HeaderHome, Rubros, HeroText, Tips, PorqueElegirnos, Quote, LandingForm, Footer
- **Propósito**: Página principal que presenta todos los servicios
- **Características**: Formulario de contacto, testimonios, información sobre servicios

#### 2. LLC Landing (`/llc`)

- **Componentes**: Atencion, HeaderCTA, HerroVideoBanner, Destacados, Confia, Servicios, Consultas, Proceso, FormSection, FooterLanding
- **Propósito**: Landing especializada para servicios de LLC en USA
- **Características**: Video hero, servicios detallados, proceso paso a paso

#### 3. Ciudadanía Española (`/ciudadania-espanola`)

- **Componentes**: Atencion, HeaderCTA, HeroBannerV2, HighLigthText, CardGrid, Explainer, Explainer2, HeroText, CardGrid2, Price, FormSectionCiudadania, FooterLanding
- **Propósito**: Landing para servicios de ciudadanía española
- **Características**: Video hero responsive, beneficios, proceso, precios

#### 4. Monotributo (`/monotributo`)

- **Componentes**: Atencion, HeaderCTA, HeroBannerV2, ExplainerNoBg, Servicios, FormSection, FooterLanding
- **Propósito**: Landing para servicios de monotributo
- **Características**: Servicios de contabilidad, planes de precios

## Componentes Principales

### Componentes de Layout

- **HeaderHome**: Header de la página principal con formulario
- **HeaderLanding**: Header para landing pages
- **Footer**: Footer principal
- **FooterLanding**: Footer para landing pages

### Componentes de Contenido

- **HeroText**: Texto principal con animaciones
- **HerroVideoBanner**: Banner con video de fondo
- **HeroBannerV2**: Banner hero mejorado con video responsive
- **Servicios**: Grid de servicios con precios
- **Destacados**: Sección de características destacadas
- **Confia**: Sección de confianza con logos
- **Proceso**: Proceso paso a paso
- **Quote**: Testimonios de clientes

### Componentes de Landing

- **Atencion**: Banner de atención
- **HeaderCTA**: Header con CTA
- **HighLigthText**: Texto destacado
- **CardGrid**: Grid de tarjetas
- **Explainer**: Explicaciones detalladas
- **Price**: Sección de precios
- **FormSection**: Formulario de contacto

### Componentes de Formulario

- **Form**: Formulario base con EmailJS
- **LandingForm**: Formulario para landing
- **FormSection**: Sección de formulario
- **FormSectionCiudadania**: Formulario específico para ciudadanía

### Componentes de Interacción

- **WhatsAppButton**: Botón flotante de WhatsApp
- **ImageSelector**: Selector de imágenes

## Datos y Contenido

### Archivos de Datos

- **data.js**: Datos principales (servicios, rubros, testimonios)
- **ciudadaniaEspData.js**: Datos específicos para ciudadanía española
- **monotributo.js**: Datos específicos para monotributo

### Estructura de Datos

```javascript
// Ejemplo de estructura de servicio
{
  dark: boolean,
  title: string,
  highlight: string,
  currency: string,
  price: number,
  note: string,
  ctaText: string,
  ctaLink: string,
  bulet: array,
  footer: array
}
```

## Hooks Personalizados

### useScreenSize

- **Propósito**: Detectar si es móvil/desktop
- **Retorna**: `{ isMobile, viewport }`
- **Uso**: Responsive design

### useScrollTo

- **Propósito**: Scroll suave a elementos
- **Uso**: Navegación interna

### useIsIOS

- **Propósito**: Detectar dispositivos iOS
- **Uso**: Optimizaciones específicas para iOS

## Estilos y Theming

### Variables SCSS

- **Colores**: `$primaryColor: #FFBF01`, `$secondaryColor: #FFA000`
- **Layout**: `$marginBoxDescktop: 234px`, `$mobileBreak: 991px`
- **Breakpoints**: Bootstrap estándar

### Enfoque de Estilos

- **SCSS Modules**: Para componentes específicos
- **Bootstrap**: Para layout y componentes base
- **Responsive**: Mobile-first approach
- **Animaciones**: AOS para scroll animations

## Funcionalidades

### Formularios

- **EmailJS**: Integración para envío de emails
- **Validación**: Campos requeridos
- **Redirección**: A página de agradecimiento
- **Variables de entorno**: Configuración de EmailJS

### WhatsApp

- **Botón flotante**: Visible en todas las páginas excepto ciudadanía española
- **Mensajes personalizados**: Diferentes mensajes según la página
- **Tracking**: Google Analytics integration

### Videos

- **Responsive**: Diferentes videos para móvil/desktop
- **Autoplay**: Reproducción automática
- **Poster**: Imagen de portada

### Animaciones

- **AOS**: Animate On Scroll
- **Transiciones**: Smooth scrolling
- **Hover effects**: Interacciones visuales

## Configuración de Entorno

### Variables de Entorno Requeridas

```env
REACT_APP_SERVICE_ID=          # EmailJS Service ID
REACT_APP_TEMPLATE_ID=        # EmailJS Template ID
REACT_APP_PUBLIC_KEY=         # EmailJS Public Key
REACT_APP_WP_PHONE=           # Número de WhatsApp
REACT_APP_HOME_MSG=           # Mensaje WhatsApp para home
REACT_APP_LLC_MSG=            # Mensaje WhatsApp para LLC
REACT_APP_ESPANOLA_MSG=       # Mensaje WhatsApp para ciudadanía
REACT_APP_MONOTRIBUTO_MSG=    # Mensaje WhatsApp para monotributo
REACT_APP_CIUDADANIA_SUBJECT= # Asunto para ciudadanía
```

## Scripts Disponibles

- `npm start`: Desarrollo
- `npm run build`: Producción
- `npm test`: Testing
- `npm run pretty`: Formateo de código

## Características Técnicas

### Performance

- **Lazy loading**: Para imágenes y videos
- **Code splitting**: Por rutas
- **Optimización**: Bundle size optimization

### SEO

- **Meta tags**: Configuración básica
- **Structured data**: Para servicios
- **Sitemap**: Generación automática

### Accesibilidad

- **Alt texts**: Para imágenes
- **ARIA labels**: Para elementos interactivos
- **Keyboard navigation**: Soporte completo

## Estructura de Componentes por Página

### Home

```
HeaderHome
├── Logo
├── Título
└── Form

Rubros
├── Administración Comercial
├── LLC en USA
├── Gestión Impositiva
└── Asesoría Jurídica

HeroText
Tips
PorqueElegirnos
Quote
LandingForm
Footer
```

### LLC Landing

```
Atencion
HeaderCTA
HerroVideoBanner
Destacados
Confia
Servicios
├── Armado LLC
├── Taxes Anual
├── Taxes Mensual
└── Tarjeta de Débito

Consultas
Proceso
FormSection
FooterLanding
```

### Ciudadanía Española

```
Atencion
HeaderCTA
HeroBannerV2
HighLigthText
CardGrid (Beneficios)
Explainer (Quiénes pueden solicitar)
Explainer2 (Beneficios de Shall Pass)
HeroText
CardGrid2 (Servicios)
Price
FormSectionCiudadania
FooterLanding
```

### Monotributo

```
Atencion
HeaderCTA
HeroBannerV2
ExplainerNoBg
Servicios
├── Alta Emprendedores
├── Monotributistas Inscriptos
└── Monotributistas Plus

FormSection
FooterLanding
```

## Consideraciones de Desarrollo

### Mantenimiento

- **Componentes modulares**: Fácil mantenimiento
- **Datos centralizados**: Fácil actualización de contenido
- **Estilos consistentes**: Variables SCSS

### Escalabilidad

- **Componentes reutilizables**: Para nuevas landing pages
- **Sistema de datos**: Fácil agregar nuevos servicios
- **Routing**: Fácil agregar nuevas rutas

### Testing

- **Jest**: Framework de testing
- **React Testing Library**: Testing de componentes
- **User Event**: Testing de interacciones

Esta documentación proporciona una visión completa del proyecto Shall Pass, facilitando el mantenimiento, desarrollo de nuevas funcionalidades y onboarding de nuevos desarrolladores.
