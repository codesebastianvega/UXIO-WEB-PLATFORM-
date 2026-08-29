CONTEXTO OFICIAL — UXIO × SIE TRAVEL

Estamos construyendo el sistema de Projects / Ecosystem del sitio web de UXIO.

Necesitamos documentar SIE Travel como un ecosistema/proyecto completo, no como una simple página web.

UXIO fue responsable integral del proyecto: estrategia, definición de producto, UX, UI, identidad/aplicación de marca digital, arquitectura, diseño, desarrollo frontend/backend, plataforma operativa, contenido, estructura comercial y evolución tecnológica.

El objetivo es presentar SIE como evidencia de lo que UXIO es capaz de hacer: pensar, diseñar, construir, ejecutar y evolucionar productos digitales y negocios completos.

1. ¿Qué es SIE Travel?

SIE Travel es una plataforma de turismo regenerativo enfocada en conectar viajeros con experiencias auténticas de naturaleza, bienestar, territorio y comunidades en Colombia.

Pero para UXIO, SIE no debe presentarse simplemente como:

"una agencia de viajes con una página web".

Debe presentarse como:

Una plataforma digital y ecosistema operativo para un negocio turístico.

UXIO transformó la presencia digital de SIE en una infraestructura capaz de:

descubrir experiencias;
explorar y comparar productos;
consultar fechas y disponibilidad;
reservar;
pagar;
gestionar viajeros;
gestionar salidas;
administrar guías;
gestionar inventario;
gestionar leads;
gestionar contenido;
gestionar costos;
gestionar impacto;
trabajar con aliados;
desarrollar B2B;
y preparar el negocio para escalar hacia operadores, marketplace, alojamientos y nuevos modelos comerciales.
2. El problema

Antes de la plataforma, buena parte de la operación de SIE dependía de procesos manuales y herramientas distribuidas.

La comercialización se apoyaba fuertemente en canales como redes sociales y WhatsApp, mientras que la información de viajeros, experiencias, reservas, operación y contenidos estaba distribuida entre diferentes herramientas y procesos.

Esto generaba una limitación estructural:

Cada crecimiento en ventas también podía significar más trabajo operativo.

UXIO identificó que el problema no era únicamente tener una mejor página web.

El problema era construir la infraestructura digital que permitiera a SIE:

vender + operar + administrar + aprender + escalar.

3. La transformación

UXIO llevó a SIE de:

Presencia digital

→

Producto digital

→

Plataforma transaccional

→

Sistema operativo turístico

La web pasó de ser principalmente una superficie de comunicación a convertirse en una capa conectada con el negocio.

4. El ecosistema construido

El ecosistema SIE puede entenderse en varias capas.

EXPERIENCE

La experiencia pública para el viajero:

Home
Explore
categorías
experiencias
detalle de experiencias
calendario
disponibilidad
itinerarios
inclusiones
FAQs
reviews
impacto
COMMERCE

La capa comercial:

booking
selección de fechas
número de viajeros
addons
cupones
pricing
pagos
Bold
confirmación
TRAVELER

La relación con el viajero:

autenticación
perfil
información del viajero
viajes
tickets
QR
reviews
favoritos
notificaciones
logros
OPERATIONS

La operación interna:

inventario
salidas
cupos
reservas
viajeros
guías
leads
reviews
contenidos
costos
economía
impacto
B2B

La infraestructura comercial para empresas y aliados:

cotización
pricing
escenarios
recetas de producto
costos
propuestas
exportación PDF
PARTNERS

La expansión del ecosistema:

aliados
agencias
operadores
miembros
embajadores
marketplace
CONTENT

La capa editorial y de adquisición:

blog
campañas
contenido de experiencias
impacto
SEO
landing pages
SYSTEM

La infraestructura tecnológica:

Next.js
React
TypeScript
Tailwind
Supabase
PostgreSQL
Auth
Storage
Bold
Webhooks
APIs
Server Actions
Analytics
fallback estático
arquitectura resiliente
5. Arquitectura conceptual

Representar SIE de esta manera:

                         SIE TRAVEL
                             │
             ┌───────────────┴────────────────┐
             │                                │
          TRAVELER                         BUSINESS
             │                                │
      ┌──────┴──────┐                 ┌───────┴────────┐
      │             │                 │                │
  Discover       Travel           Commerce         Operations
      │             │                 │                │
 Explore       My Trips          Booking           Inventory
 Tours         Tickets           Pricing            Departures
 Calendar      QR                Payments            Guides
 Reviews       Profile           B2B                 Leads
 Favorites     Notifications     Partners            Impact
      │             │                 │                │
      └─────────────┴─────────────────┴────────────────┘
                             │
                         SIE SYSTEM
                             │
                  Next.js + Supabase
                             │
                  APIs + Payments + Data

La arquitectura debe comunicar que la interfaz pública es solamente una parte del producto.

6. Producto

La entidad central del sistema es la Experience / Tour.

Cada experiencia puede tener:

categoría;
región;
tier;
descripción;
imágenes;
highlights;
información clave;
itinerario;
inclusiones;
addons;
FAQs;
fechas;
salidas;
disponibilidad;
pricing;
receta de costos;
transporte;
alojamiento;
reviews;
guías;
impacto.

Esto convierte una experiencia turística en un producto digital estructurado, no simplemente en una página de contenido.

7. Modelo de producto

SIE evolucionó hacia tres niveles:

CORE

Experiencias base, modulares y/o de aliados.

SIGNATURE

Experiencias propias o curadas por SIE con mayor diferenciación.

ELITE

Experiencias premium, privadas, VIP, multidía y con potencial de expansión internacional.

Esto permite que la plataforma soporte una evolución comercial del negocio y no únicamente un catálogo estático.

8. UX

UXIO diseñó el journey alrededor de:

DISCOVER
    ↓
EXPLORE
    ↓
COMPARE
    ↓
DECIDE
    ↓
BOOK
    ↓
PAY
    ↓
TRAVEL
    ↓
RETURN

El usuario debe poder responder:

¿Qué puedo hacer?
¿Dónde?
¿Cuándo?
¿Cuál experiencia es para mí?
¿Cuánto cuesta?
¿Qué incluye?
¿Estoy preparado?
¿Cómo reservo?
¿Qué sucede después?

Por eso Explore, Tour Detail, Calendar, Booking, Profile y My Trips forman un mismo sistema y no páginas independientes.

9. Diseño

UXIO desarrolló el sistema digital de SIE alrededor de una combinación de:

naturaleza + aventura + sofisticación + tecnología.

El sistema visual incluye:

dark mode;
light mode;
tokens de color;
verdes;
aqua;
sand;
gold;
violet;
tipografías Manrope y Urbanist;
componentes reutilizables;
responsive design;
navegación desktop/mobile;
microinteracciones;
estados de loading;
estados vacíos;
errores;
modales;
wizards;
dashboards.

La intención es que SIE se perciba como una travel platform contemporánea, no como una agencia turística tradicional.

10. Tecnología

Stack confirmado:

Next.js 16
React 19
TypeScript
Tailwind CSS
Supabase
PostgreSQL
Supabase Auth
Supabase Storage
Bold
Vercel
Vercel Speed Insights
Metricool
Recharts
Radix UI
Lucide
react-qr-code
html2canvas
jsPDF

La arquitectura combina:

Server Components + Client Components + Route Handlers + Server Actions + APIs + Supabase.

11. Backend

Supabase funciona como backend integral:

database;
authentication;
profiles;
bookings;
tours;
departures;
pricing;
reviews;
leads;
guides;
operators;
agencies;
ambassadors;
impact;
costs;
storage;
RLS.

Esto convierte a SIE en una aplicación de negocio completa.

12. Resiliencia

UXIO también construyó mecanismos para evitar que toda la experiencia pública dependiera de una única fuente de datos.

Existe una arquitectura híbrida:

Live data

Static catalog

Static marketing mode

Asset fallback

Esto permite mantener determinadas superficies públicas funcionando incluso ante problemas de base de datos, storage o egress.

El proyecto también evidenció deuda técnica real y permitió iterar la arquitectura a partir de problemas encontrados en producción.

Esto debe mostrarse como parte de la evolución del producto, no esconderse.

13. Commerce

El sistema incluye un flujo transaccional:

Experience
    ↓
Date
    ↓
Travelers
    ↓
Add-ons
    ↓
Pricing
    ↓
Booking
    ↓
Bold
    ↓
Payment
    ↓
Confirmation
    ↓
Ticket / QR

La plataforma conecta adquisición, conversión y post-compra.

14. Operations

Uno de los principales diferenciales del proyecto es que UXIO no se quedó en el frontend.

Construyó también el back-office necesario para operar el negocio:

Inventory
Operations
Travelers
Guides
Leads
Reviews
Content
Economics
Impact
Ambassadors
Settings

Esto demuestra capacidad de construir software operacional, no solamente interfaces.

15. B2B

UXIO también construyó una capa B2B para que SIE pueda trabajar con:

agencias;
empresas;
operadores;
aliados;
clientes corporativos.

Incluye lógica de:

pricing;
escenarios;
costos;
recetas;
cotización;
generación de propuestas;
PDF.

La arquitectura está preparada para evolucionar hacia un modelo B2B más sofisticado.

16. Impacto

El impacto no se trata únicamente como una sección editorial.

El sistema contempla estructuras para:

impacto ambiental;
impacto social;
árboles;
agua;
residuos;
transporte;
indicadores;
dashboards.

La intención es integrar el propósito de SIE dentro del producto y la operación.

17. Ecosistema futuro

La plataforma fue pensada para evolucionar.

Direcciones contempladas:

operadores;
marketplace;
agencias;
alojamientos;
Signature;
Elite;
expansión internacional;
i18n;
analytics avanzado;
IA;
WhatsApp Business API;
automatización;
reportes B2B;
BI.

Por tanto, SIE no debe presentarse como un proyecto cerrado.

Debe mostrarse como un ecosistema digital en evolución.

18. Rol de UXIO

Para este proyecto, UXIO actuó como digital product partner integral.

Áreas:

Strategy

Definición de la evolución digital del negocio.

Product

Arquitectura del producto y definición de módulos.

UX

Journeys, flujos, arquitectura de información y experiencia.

UI

Sistema visual, interfaces y componentes.

Technology

Arquitectura y desarrollo.

Backend

Datos, autenticación, operaciones y lógica de negocio.

Commerce

Booking, pricing y pagos.

Operations

Back-office y herramientas internas.

Content

Estructura editorial y superficies comerciales.

Growth

SEO, campañas, analytics y adquisición.

Innovation

Arquitectura preparada para nuevas líneas de negocio.

19. La idea central del case study

No queremos presentar:

"Diseñamos una web para SIE Travel."

Queremos presentar:

"Transformamos SIE Travel de una operación turística dependiente de procesos manuales en un ecosistema digital capaz de vender, operar y escalar experiencias."

Y como concepto principal:

From travel website to digital tourism ecosystem.

O:

From experiences to infrastructure.

20. Qué debe demostrar SIE dentro de UXIO

Cuando un potencial cliente o reclutador entre al proyecto debe entender rápidamente que UXIO puede:

Think

→ entender el negocio.

Design

→ convertirlo en producto.

Build

→ construir la tecnología.

Operate

→ resolver procesos reales.

Scale

→ diseñar la infraestructura para el siguiente nivel.

Por eso SIE es uno de los proyectos que mejor representa la capacidad integral de UXIO.

IMPORTANTE PARA LA PRESENTACIÓN

No inventar métricas de:

ventas;
conversiones;
tráfico;
ROI;
usuarios;
tiempo ahorrado;
reservas;
NPS.

Cuando no exista una métrica confirmada, presentar el resultado cualitativo y la capacidad construida.

El proyecto debe comunicarse como un ecosistema, y dentro del ecosistema deben poder mostrarse piezas individuales:

SIE TRAVEL
│
├── Strategy
├── Brand / Digital Identity
├── Product
├── UX/UI
├── Website
├── Marketplace
├── Booking
├── Payments
├── Traveler App / Experience
├── Admin
├── Operations
├── B2B
├── Impact
├── Content
├── Campaigns
├── Analytics
└── Technology

Cada pieza puede convertirse posteriormente en un subproyecto/case dentro del mismo ecosistema SIE, sin perder la visión del proyecto completo.

Objetivo final: que SIE Travel sea presentado en UXIO como evidencia de que UXIO no solamente crea websites, sino que diseña y construye sistemas digitales alrededor de negocios reales.