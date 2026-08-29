# 🛠️ UXIO Design System & Architecture - v1.0
**Document Type:** Source of Truth & AI System Prompt
**Project:** UXIO - Digital Product Studio Website

## 1. Concept & Art Direction
UXIO is a technology, design, and experience house. The interface must feel like an editorial space, a living canvas, and a technical laboratory.
*   **Core Vibe:** Curious, Technical, Human, Experimental, Precise, Playful.
*   **Key Visual Contrast (Soft + Technical):** The brand DNA features soft geometry (rounded logos, friendly shapes) encapsulated within strict technical grids, straight lines, and negative space.

## 2. Expanded Design Tokens & Color System
The UI requires a functional color scale for interactive states (hover, active, disabled) and structural depth (backgrounds, modals). Do not flood the UI with color; use it strictly for accents.

*   **Base Light Theme (Canvas & Surfaces):** 
    *   `bg-canvas`: `#F7F7F5` (Main website background)
    *   `bg-surface`: `#FFFFFF` (Cards and primary containers)
    *   `bg-surface-elevated`: `#F0F0EE` (Modals, hover states)
    *   `border-subtle`: `rgba(0,0,0,0.08)`
    *   `border-strong`: `rgba(0,0,0,0.15)`
*   **Base Dark Theme (Canvas & Surfaces):** 
    *   `bg-canvas`: `#0D0D0E` (Main website background)
    *   `bg-surface`: `#171719` (Cards and primary containers)
    *   `bg-surface-elevated`: `#222226` (Modals, hover states)
    *   `border-subtle`: `rgba(255,255,255,0.08)`
*   **Text Colors:**
    *   Primary: `#111111` (Light) | `#EDEDEE` (Dark)
    *   Secondary: `#666666` (Light) | `#8E8E93` (Dark)
*   **Brand Accents & States (The UXIO Exact DNA):**
    *   **UXIO Yellow (Creative/Highlights):** `#FFCC48`
    *   **UXIO Orange (Labs/Playful):** `#FF7F07`
    *   **UXIO Pink Vibrant (Primary CTA/Brand):** `#FE385B`
    *   **UXIO Pink Soft (Subtle states/Tags):** `#F06C83`
    *   **UXIO Cyan (Technical/Dev/Open Source):** `#00F0FF` - *Used to contrast the warm tones with a futuristic, technical vibe.*
    *   **Brand Gradients:** Use transitions like `linear-gradient(to right, #FF7F07, #FE385B)` for special badges or hero text.

## 3. Typography Hierarchy
*   **Display / Headings (Punchy & Modern):** `Plus Jakarta Sans` or `Satoshi` (Weights: 600, 800). Tracking: `-0.02em`.
*   **Body / UI (Highly Legible):** `Inter` or `Geist Sans` (Weights: 400, 500).
*   **Mono / Tech (Technical Contrast):** `JetBrains Mono` or `Geist Mono` (Weights: 400). Use for sidebar labels, tags, code snippets, counters, and metrics.

## 4. Soft Geometry (Radii & Shapes)
Translate the rounded logo DNA into the UI components:
*   `radius-sm (8px)`: Inputs, tooltips.
*   `radius-md (16px)`: Standard buttons, tags.
*   `radius-lg (24px)`: Project cards (Works), modular containers.
*   `radius-full (9999px)`: Pills, status indicators (e.g., Lab statuses).
*   **Shadows:** Avoid harsh shadows. Use diffused, low-opacity elevation (e.g., `0 8px 30px rgba(0,0,0,0.04)`).
*   **Hover States:** Cards elevate slightly (`transform: translateY(-4px)`) on hover with a snappy transition (`150ms cubic-bezier`).

## 5. Layout & Navigation (The Sidebar Protagonist)
*   **Desktop Layout:** A fixed left sidebar (`260px` width) + Main Canvas (`flex-1` with `max-width: 1200px` centered, `40px` padding).
*   **Sidebar UI:** Must feel editorial. Includes collapsible accordions (`+ / -`) for nested routes. Bottom section is fixed (About, People, Contact).
*   **Mobile Layout:** Sidebar hides. Top header (`56px`) with a hamburger menu triggering a full-screen drawer with `backdrop-filter: blur(12px)`.

## 6. Information Architecture (Sitemap)
The application must follow this exact routing tree:

/ (Home Canvas - Show live projects immediately)
├── /services
│   ├── /technology, /experience, /brand, /growth, /content, /solutions
├── /works (Visual catalog)
│   ├── /websites, /apps, /branding, /ux-ui, /content, /photography, /video, /campaigns, /print
├── /labs (Internal products)
│   ├── /aluna, /arca, /boku-bento, /experiments
├── /open-source (Technical authority)
│   ├── /components, /libraries, /tools, /templates, /resources
├── /insights
├── /about
├── /people
└── /contact
