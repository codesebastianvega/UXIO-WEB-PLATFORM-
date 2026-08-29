# 📜 UXIO ACADEMY · LMS MASTER ARCHITECTURE
> **Documento Maestro y Fuente de Verdad para la Fundación LMS + Content System de UXIO Academy**  
> **Versión:** 1.0.0 · **Fecha:** 28 de Agosto de 2026 · **Estado:** Aprobado para Ejecución · **Primer Producto:** Creator Lab · Cohorte 01

---

## 1. 🎯 Visión y Objetivos del Sistema

**UXIO Academy** es el ecosistema de formación, talento y producción para creadores y marcas de UXIO. Su primer producto oficial es **Creator Lab · Cohorte 01** (*"Contenido que vende"*).

El objetivo de esta arquitectura **NO es construir un LMS masivo ni una copia genérica de Moodle o Udemy**, sino un **LMS ligero, rápido, hiper-estético, escalable y sin sobreingeniería**, integrado de forma nativa en la infraestructura de **UXIO Web Platform**.

### 🔄 Flujo Esencial del Alumno (MVP Funcional)
```text
[Registro / Login]
       ↓
[Mi Aula / Classroom Dashboard]
       ↓
[Creator Lab · Cohorte 01]
       ↓
[Syllabus por Semanas (0 a 5)]
       ↓
[Abrir Lección (ej. M00.01)]
       ↓
 ┌──────────────────────────────────────────────────────────┐
 │ • Consumir Microclases (Video Provider)                 │
 │ • Estudiar Presentación 16:9 (Presentation Engine)       │
 │ • Consultar Recursos & Plantillas                        │
 │ • Resolver Challenge Semanal                             │
 └──────────────────────────────────────────────────────────┘
       ↓
[Marcar Lección como Completada]
       ↓
[Progreso Persistido & Visualizado (72% completado)]
```

---

## 2. 🔍 Auditoría Real del Repositorio Actual

### 📦 Stack y Dependencias (`package.json`)
* **Framework:** Next.js `16.3.3` (App Router con soporte Turbopack).
* **Core:** React `18.3.1` / React DOM `18.3.1`.
* **Lenguaje:** TypeScript `5.7.3` (`strict: true`).
* **Estilos & UI:** Tailwind CSS `3.4.17`, Framer Motion `13.1.1`, Lucide React `1.16.0`, Next Themes `0.4.6`.
* **Internacionalización:** Soporte nativo para rutas bilingües `/[lang]` (`es`, `en`).
* **Estado Supabase:** 🔴 **No instalado aún.** No existen `@supabase/supabase-js` ni `@supabase/ssr` en `package.json`.

### 🗂️ Estructura de Archivos Existente Relevante
```text
UXIO-WEB-PLATFORM/
├── app/[lang]/
│   ├── academy/
│   │   ├── page.tsx                    # Landing pública de Academy / Catálogo
│   │   └── [slug]/
│   │       ├── page.tsx                # Landing comercial de Creator Lab ($99k COP)
│   │       └── enroll/page.tsx         # Página de checkout / link de redes sociales
│   ├── layout.tsx                      # RootLayout i18n con dynamic params asíncronos
│   └── ...                             # (services, works, labs, resources, contact)
│
├── components/
│   ├── academy/                        # Componentes comerciales ya construidos
│   │   ├── AcademyHero.tsx             # Header de Academy y roadmap de visión
│   │   ├── CourseHero.tsx              # Hero comercial, precio $99k, fechas y CTA
│   │   ├── CourseProblemTransformation.tsx # Dolores reales + matriz antes/después
│   │   ├── CourseIncludedGrid.tsx      # Beneficios incluidos
│   │   ├── CourseSyllabusAccordion.tsx # Temario interactivo semanas 0 a 5
│   │   ├── CourseCalendarSchedule.tsx  # Cronograma y sesiones en vivo
│   │   ├── CourseAudienceAndCertificate.tsx # Audiencias + constancia UXIO
│   │   ├── CourseFaqAndPricing.tsx     # Preguntas frecuentes y cierre comercial
│   │   └── AcademyEnrollmentForm.tsx   # Formulario de reserva + WhatsApp Concierge
│   ├── ui/                             # Primitivas UI reutilizables
│   │   ├── AuroraSpotlightCard.tsx     # Tarjetas con resplandor radial e inercia LERP
│   │   ├── BentoCraftGrid.tsx          # Grid estilo bento
│   │   ├── ObsidianDockNav.tsx         # Dock bar flotante
│   │   └── KineticSnapSlider.tsx       # Slider con física snap
│   └── services/drawer/
│       └── FeatureIconRenderer.tsx     # Renderizador de iconos Lucide dinámico
│
├── data/
│   ├── academy/                        # Datos estáticos tipados actuales
│   │   ├── types.ts                    # Interfaces de Cursos, Módulos, Cohortes
│   │   ├── creator-lab.ts              # Metadata comercial, precios y fechas
│   │   ├── creator-lab-modules.ts      # Contenido detallado de Semanas 0 a 5
│   │   └── index.ts                    # Getters (getAcademyCourses, getCourseBySlug)
│   └── sitemap.ts                      # Sección 05 · ACADEMY en navegación
│
├── middleware.ts                       # Enrutador de idioma i18n (/es, /en)
└── lib/
    └── dictionary.ts                   # Diccionarios de internacionalización
```

---

## 3. 🏛️ Principio de Separación de Capas y Fuente de Verdad

```text
CONTENT (Static Data en Repo: TS / JSON)
   ↓
ACADEMY DOMAIN (Modelos, Validaciones, Getters y Reglas Académicas)
   ↓
LMS (Auth, Matrículas, Dashboard de Alumno, Classroom, Progreso)
   ↓
PRESENTATION ENGINE (Motor 16:9 interactivo, Keyboard & Print PDF)
   ↓
STUDENT EXPERIENCE (Microclases, Video Provider, Challenges, Recursos)
```

### 📍 La Frontera Sagrada: Repo vs. Supabase
* **EL REPOSITORIO (`data/academy/`):** Define **QUÉ ES EL CURSO**.
  * Contiene: Temario, semanas, lecciones, microclases, presentaciones, recursos, textos, challenges y metadatos académicos.
  * *Razón:* Cero costo de egress, versionado con Git, compilación estática de alta velocidad y cero sobrecarga de CMS.
* **SUPABASE (PostgreSQL + Auth + RLS):** Define **QUIÉN ACCEDE Y QUÉ HA HECHO EL ALUMNO**.
  * Contiene: Usuarios, perfiles de alumnos, cohortes operativas, matrículas activas y progreso de lecciones completadas.
  * *Razón:* Estado transaccional, seguridad basada en filas (RLS) y persistencia en tiempo real.

---

## 4. ⚡ Estrategia Anti-Egress y Performance

Para evitar costos innecesarios y cuellos de botella:
1. **Contenido Académico y Presentaciones 100% Estáticos:** Los textos, diapositivas y metadatos se sirven directamente desde el bundle de Next.js (Edge/Static Cache). **Cero queries a Supabase para leer diapositivas o temarios.**
2. **Video Streaming Externo:** Videos alojados en YouTube (videos no listados) o proveedores de streaming dedicados. **Supabase Storage NUNCA se usará como CDN de video.**
3. **El Presentation Engine opera 100% en el cliente:** Una vez que el navegador carga la lección, la navegación entre diapositivas, pantalla completa y animaciones se ejecuta en memoria local con cero peticiones de red por slide.
4. **Mutaciones Mínimas a Supabase:** Supabase solo recibe tráfico cuando:
   - El alumno inicia sesión (`Auth`).
   - El alumno carga su lista de cursos (`GET enrollments + progress`).
   - El alumno marca/desmarca una lección (`POST/PATCH lesson_progress`).

---

## 5. 🔐 Autenticación y Seguridad

### Estrategia V1
* **Proveedor:** Supabase Auth con **Email + Password** (compatible con Magic Link).
* **Librerías Oficiales:** `@supabase/supabase-js` y `@supabase/ssr` (Next.js 16 App Router cookie-based auth).
* **Estructura en `lib/supabase/`:**
  - `client.ts`: Inicialización en Browser Client (`createBrowserClient`).
  - `server.ts`: Inicialización en Server Components y Server Actions (`createServerClient` con cookies).
  - `middleware.ts`: Refresco de sesión JWT y protección de rutas.
* **Protección de Rutas:**
  - `/[lang]/academy/classroom/*` -> **PROTEGIDA:** Redirige a `/[lang]/academy/login` si no hay sesión activa.
  - `/[lang]/academy/login` -> **PÚBLICA:** Redirige a `/classroom` si ya está autenticado.
  - `/[lang]/academy/*` -> **PÚBLICA:** Rutas comerciales y catálogo accesibles por todos.
* **Roles:** Separación inicial en base de datos (`role: 'student' | 'admin'`).

---

## 6. 🗄️ Modelo de Datos Supabase (PostgreSQL + RLS)

```sql
-- 1. Perfiles de Alumnos
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text not null,
  email text not null,
  avatar_url text,
  role text not null default 'student' check (role in ('student', 'admin')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Cursos
create table public.courses (
  id text primary key, -- 'creator-lab'
  slug text unique not null,
  title text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Cohortes
create table public.cohorts (
  id text primary key, -- 'creator-lab-c01'
  course_id text references public.courses(id) on delete cascade not null,
  name text not null, -- 'Cohorte 01'
  start_date date not null,
  end_date date not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Matrículas (Enrollments)
create table public.enrollments (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  cohort_id text references public.cohorts(id) on delete cascade not null,
  status text not null default 'active' check (status in ('active', 'completed', 'suspended')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, cohort_id)
);

-- 5. Progreso de Lecciones
create table public.lesson_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  course_id text references public.courses(id) on delete cascade not null,
  lesson_id text not null, -- 'm00-01', 'm01-01', etc.
  completed boolean not null default true,
  completed_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, course_id, lesson_id)
);

-- Habilitar RLS en todas las tablas
alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.cohorts enable row level security;
alter table public.enrollments enable row level security;
alter table public.lesson_progress enable row level security;

-- Políticas RLS (Estricta privacidad de datos)
create policy "Los usuarios pueden ver y editar su propio perfil"
  on public.profiles for all using (auth.uid() = id);

create policy "Cursos y cohortes son visibles por usuarios autenticados"
  on public.courses for select using (auth.role() = 'authenticated');
create policy "Cohortes visibles por autenticados"
  on public.cohorts for select using (auth.role() = 'authenticated');

create policy "Los alumnos ven solo sus propias matrículas"
  on public.enrollments for select using (auth.uid() = user_id);

create policy "Los alumnos ven y modifican su propio progreso"
  on public.lesson_progress for all using (auth.uid() = user_id);
```

---

## 7. 📚 Modelo Académico & Jerarquía de Contenido

```text
UXIO Academy
  ↓
Curso (Course: Creator Lab)
  ↓
Cohorte (Cohort: Cohorte 01)
  ↓
Módulo / Semana (Module: Semana 0 · Inducción)
  ↓
Lección (Lesson: M00.01 · Bienvenido a Creator Lab)
  │
  ├── Microclases (Videos de 5-8 min con VideoProvider)
  ├── Presentación (Presentation Engine 16:9)
  ├── Recursos (Plantillas de Guion, Prompts IA, PDF)
  └── Challenge (Entregable semanal práctico con criterios de evaluación)
```

### Nueva Estructura Modular en `data/academy/`
```text
data/academy/
├── types.ts                        # Modelos TypeScript maestros
├── index.ts                        # Punto de entrada y getters unificados
├── creator-lab.ts                  # Metadata comercial existente
├── creator-lab-modules.ts          # Módulos 0 a 5 existentes
└── creator-lab/                    # [NUEVO: Desglose granular del curso]
    ├── course.ts                   # Definición del curso y cohortes
    ├── modules.ts                  # Lista estructurada de módulos
    ├── lessons/
    │   ├── m00-01-welcome.ts       # Lección M00.01 completa
    │   ├── m00-02-creator-kit.ts   # Lección M00.02
    │   └── index.ts                # Registro de lecciones
    └── presentations/
        └── m00-01-welcome.ts       # Diapositivas estructuradas de la lección
```

---

## 8. 🖥️ Experiencia del Alumno (Classroom UI)

### Paleta Visual UXIO Academy
* `UXIO BLACK`: `#080808` (Canvas de aula y proyección)
* `UXIO DARK`: `#111111` (Contenedores y stages 16:9)
* `UXIO SURFACE`: `#181818` (Tarjetas y barras laterales)
* `UXIO WHITE`: `#F5F5F5` (Texto principal de alto contraste)
* `UXIO MUTED`: `#A1A1AA` (Metadatos y descripciones secundarias)
* `UXIO BORDER`: `#292929` (Líneas divisorias sutiles)
* `UXIO ACCENT`: `#FF4FD8` / `#FE385B` (Fucsia Eléctrico UXIO)
* `UXIO ACCENT 2`: `#7C3AED` (Púrpura secundario)

### Arquitectura de Pantallas
1. **`/login` (`app/[lang]/academy/login/page.tsx`):**
   - Formulario limpio y sobrio: Email, Password, botón "Ingresar a mi Aula", opción de Magic Link y modo de prueba.
2. **`/classroom` (`app/[lang]/academy/classroom/page.tsx`):**
   - Dashboard personal del alumno con saludo, cohorte activa (`Creator Lab · Cohorte 01`), barra de progreso global (`[ 72% completado ]`) y botón "Continuar lección actual".
3. **`/classroom/[courseSlug]` (`app/[lang]/academy/classroom/[courseSlug]/page.tsx`):**
   - Vista general del syllabus del curso, listado de semanas (0 a 5), estado de cada lección (✓ Completada, ○ Pendiente, 🔒 Bloqueada) y enlaces a sesiones en vivo.
4. **`/classroom/[courseSlug]/[moduleSlug]/[lessonSlug]` (`app/.../[lessonSlug]/page.tsx`):**
   - **Área principal de estudio:**
     - Header con breadcrumb y botón de completado.
     - Reproductor de video (`VideoPlayer` con soporte YouTube unlisted).
     - Pestañas de contenido: `Microclase`, `Presentación 16:9`, `Recursos`, `Challenge`.
     - **Visor de Presentación Integrado:** Renderizado directo del Presentation Engine con botón a pantalla completa (`F`) y exportación PDF (`window.print()`).
     - **Challenge Card:** Bloque visual con ¿Qué debo hacer?, ¿Qué debo entregar?, ¿Dónde entregarlo? y Criterios de evaluación.
     - Botón interactivo "Marcar lección como completada" conectado a `lesson_progress`.

---

## 9. 📽️ Presentation Engine v1.0 (Subsistema Independiente)

El motor de presentaciones se ubicará en `components/academy/presentation/` y es **completamente agnóstico al contenido**:

```text
components/academy/presentation/
├── PresentationEngine.tsx          # Stage 16:9, atajos de teclado, fullscreen, LERP
├── PresentationControls.tsx        # Controles flotantes (prev, next, count, fullscreen, print)
├── PresentationHeader.tsx          # Identificador superior (Módulo, Lección, Tipo)
├── PresentationProgress.tsx        # Barra de progreso inferior y contador 01/10
└── slides/                         # Componentes de slide reutilizables (< 150 líneas c/u)
    ├── SlideTitle.tsx              # Portada de clase
    ├── SlideSection.tsx            # Separador temático
    ├── SlideConcept.tsx            # Puntos clave con etiquetas
    ├── SlideComparison.tsx         # Antes vs. Después / Comparativas
    ├── SlideSteps.tsx              # Metodología y pasos en secuencia
    ├── SlideExample.tsx            # Desglose visual de caso de estudio
    ├── SlideChecklist.tsx          # Lista de verificación
    ├── SlideChallenge.tsx          # Reto semanal diferenciado
    ├── SlideSummary.tsx            # Resumen de aprendizaje
    └── SlideClosing.tsx            # Cierre y despedida
```

### Atajos de Teclado del Motor
* `←` / `→` o `Espacio` / `Shift + Espacio`: Navegar slides.
* `F`: Activar/desactivar Pantalla Completa (Modo Proyector).
* `P` o botón flotante: Exportación vectorial a PDF vía `@media print`.
* `Home` / `End`: Ir a la primera o última diapositiva.

---

## 10. 🚫 Qué NO Vamos a Construir Todavía (Regla Anti-Scope-Creep)

Para preservar la velocidad de entrega y la estabilidad arquitectónica, **queda estrictamente fuera del alcance de la V1:**
* ❌ CMS académico o constructor visual drag-and-drop.
* ❌ Marketplace de creadores o campañas UGC (fase futura).
* ❌ Sistema multi-instructor o asignación compleja de profesores.
* ❌ Gamificación, tablas de clasificación, puntos o insignias.
* ❌ Foros de discusión complejos o sistema de chat interno (se usa la comunidad de WhatsApp/Discord).
* ❌ Calificación automática con Inteligencia Artificial.
* ❌ Almacenamiento propio de videos en servidores o buckets privados (se usa YouTube unlisted).
* ❌ Aplicación móvil nativa (se optimiza web responsive mobile-first).
* ❌ Pasarelas automáticas con webhooks de aprovisionamiento inmediato (se gestiona vía matriculación administrativa).

---

## 11. 🧭 Architecture Decision Record (ADR)

### ADR-001: Contenido Estático en Repo vs. CMS en Base de Datos
* **Contexto:** Decidir dónde residen los textos, lecciones y presentaciones de Creator Lab.
* **Elección:** Repositorio (TypeScript estático + JSON).
* **Por qué:** Evita costos de egress, elimina latencia de red, permite versionado en Git y hace que Next.js compile en estático.
* **Alternativa descartada:** Guardar cada slide en tablas de Supabase.

### ADR-002: Supabase SSR Auth con Next.js 16 App Router
* **Contexto:** Manejo de sesiones y protección de rutas del aula virtual.
* **Elección:** `@supabase/ssr` con cookies HttpOnly en Server Components y middleware.
* **Por qué:** Seguridad robusta en el servidor, prevención de fugas de sesión y compatibilidad total con Next 16.
* **Alternativa descartada:** LocalStorage / Client-only auth.

### ADR-003: Presentation Engine como Renderizador Desacoplado
* **Contexto:** Cómo proyectar diapositivas en clases y en el aula virtual.
* **Elección:** Motor interactivo 16:9 en React alimentado por objetos tipados `PresentationContent`.
* **Por qué:** Editar un texto no requiere tocar el código del motor; exportación a PDF nativa mediante `@media print`.
* **Alternativa descartada:** Subir presentaciones en PDF o Google Slides embebidos en iframes lentos.

### ADR-004: Abstracción de Video (`VideoProvider`)
* **Contexto:** Entrega de microclases en video.
* **Elección:** Componente `VideoPlayer` que abstrae el origen (iniciando con YouTube unlisted).
* **Por qué:** Permite migrar a Vimeo, Mux o almacenamiento propio en el futuro sin modificar las lecciones.

### ADR-005: Content Source Agnostic Architecture (Desacoplamiento Total de la Fuente)
* **Contexto:** Garantizar que el LMS pueda evolucionar a futuro sin que ningún componente de visualización o experiencia de estudiante dependa directamente del medio de persistencia.
* **Elección:** El LMS debe consumir contenido **exclusivamente mediante la capa tipada `Academy Domain`** (getters y modelos puros en `@/data/academy`).
* **Por qué:** La fuente de contenido podrá ser Static Repository, JSON, CMS headless o Supabase en el futuro. Ningún componente de *Student Experience* (Classroom, Lesson Viewer, Presentation Engine) deberá depender directamente de la fuente de persistencia del contenido.
* **Alternativa descartada:** Hacer que componentes visuales consulten directamente tablas de base de datos o APIs de persistencia para obtener textos y temarios.
* **Impacto:** Deja la puerta abierta a un CMS futuro sin hipotecar el rendimiento, estabilidad y cero costo de egress del presente.

### ADR-006: Asynchronous Challenge Submissions & Review Lifecycle (Arquitectura Futura de Entregables)
* **Contexto:** Definir cómo interactuarán los estudiantes, docentes y el sistema de evaluación cuando se active la persistencia de entregables y retos semanales.
* **Ciclo de Vida:**
  ```text
  Student (Classroom)
    ↓
  Challenge (data/academy/)
    ↓
  Submission (Supabase / Storage: link, PDF o imagen)
    ↓
  Review Queue (Dashboard docente / Instructor panel)
    ↓
  Feedback & Approval (Comentarios / Rúbrica)
    ↓
  Capstone Completion & Certificate Generation
  ```
* **Decisión:** Mantener las instrucciones y criterios del reto en el repositorio estático (`data/academy/`), mientras que únicamente los metadatos del envío (`submission_url`, `submitted_at`, `status: pending | approved | needs_revision`, `feedback_text`) residirán en Supabase.
* **Impacto:** Cero almacenamiento de contenido estático en base de datos; máxima agilidad para envíos y revisiones asíncronas con feedback directo.

### ADR-007: Headless CMS Adapter Protocol & Schema Mapping (CMS Readiness)
* **Contexto:** Garantizar que el dominio académico esté 100% preparado para conectarse a un Headless CMS (Sanity, Strapi, Decap o tablas de contenido Supabase) sin que se deba modificar ningún componente visual de la plataforma.
* **Contrato del Proveedor de Contenido (`AcademyContentProvider`):**
  ```ts
  export interface AcademyContentProvider {
    getAllCourses(lang: Locale): Promise<Course[]>;
    getCourseBySlug(slug: string, lang: Locale): Promise<Course | undefined>;
    getModuleBySlug(courseSlug: string, moduleSlug: string, lang: Locale): Promise<Module | undefined>;
    getLessonBySlug(courseSlug: string, moduleSlug: string, lessonSlug: string, lang: Locale): Promise<Lesson | undefined>;
    getPresentationBySlug(slug: string, lang: Locale): Promise<PresentationContent | undefined>;
  }
  ```
* **Decisión:** Los esquemas definidos en `@/data/academy/types.ts` son serializables 1:1 en JSON. La implementación actual (`StaticRepositoryProvider`) opera sincrónicamente/estáticamente con cero latencia y cero egress. La migración futura a un CMS solo requerirá cambiar la instanciación del provider en `@/data/academy/index.ts`.
* **Impacto:** CMS Readiness completada al 100% con cero regresión y arquitectura lista para escala editorial.

---

## 12. 🗺️ Roadmap de Implementación por Sprints (Sprint 2 Sequence)

```text
SPRINT 2A: LMS Database Foundation + RLS [COMPLETADO - 50a753f]
    ↓
SPRINT 2B: Academy Content Domain + ADR-005 [COMPLETADO - 04fe6d9]
    ↓
SPRINT 2C: Classroom Foundation & Navigation [COMPLETADO - f42f380]
    ↓
SPRINT 2D: Lesson Viewer & Video Foundation [COMPLETADO - 741d46c]
    ↓
SPRINT 2E: Lesson Progress & Completion Action [COMPLETADO - 981814b]
    ↓
SPRINT 2F: Presentation Engine v1 (16:9 & Print PDF) [COMPLETADO - 40400ad]
    ↓
SPRINT 2G: Lesson Resources & Challenges + ADR-006 [COMPLETADO - b503baf]
    ↓
SPRINT 2H: LMS End-to-End QA Validation [COMPLETADO]
    ↓
SPRINT 2I: LMS Hardening & CMS Readiness Audit [EN CURSO]
```

---

## 13. 📊 Estado del Proyecto (Project Status)

* **DONE (Sprints 2A → 2H):**
  - Base de datos Supabase con 5 tablas (`profiles`, `courses`, `cohorts`, `enrollments`, `lesson_progress`), RLS estricto y trigger seguro `handle_new_user()`.
  - Dominio académico tipado y modular (`@/data/academy`).
  - Classroom protegido con SSR auth, breadcrumbs y sidebar de navegación modular.
  - Lesson Viewer con reproductor de video responsivo y conmutador de microclases.
  - Sistema de progreso granular con Server Action optimista y cálculo dinámico de porcentajes.
  - Presentation Engine 16:9 con soporte para 10 tipos de slides, atajos de teclado y exportación a PDF vía `@media print`.
  - Grid de recursos descargables (templates, PDFs, prompt packs, enlaces) y fichas de retos prácticos.
  - Suite de pruebas E2E con 15/15 casos superados y 0 regresiones.
* **IN PROGRESS (Sprint 2I):**
  - LMS Hardening & CMS Readiness Audit.
* **FUTURE:**
  - Persistencia de submissions de estudiantes, feedback docente, emisión de certificados y CMS headless.

