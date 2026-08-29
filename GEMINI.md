# 📜 PROTOCOLO Y CONSIGNAS DE DESARROLLO UXIO (DIRECTRICES PERMANENTES)

Este archivo define las reglas inquebrantables de desarrollo, preservación de código y arquitectura para el proyecto **UXIO Web Platform**. Todo agente o desarrollador que trabaje en esta base de código debe acatar estas consignas con prioridad absoluta.

---

## 🛑 1. Principio de Cero Regresiones y Preservación Total (Inviolable)

> **Regla de Oro:** Ninguna refactorización, modularización o limpieza de código puede eliminar, simplificar en exceso o alterar funcionalidades, detalles de diseño, interacciones, textos, controles o botones que ya hayan sido construidos y aprobados.

1. **Paridad Funcional y Visual 100%:**
   - Antes de refactorizar un archivo, se debe inventariar cada prop, control, estado (`useState`, `useMemo`, `useCallback`), botón, modal, animación y cálculo matemático.
   - Tras dividir el archivo en submódulos, la interfaz y su comportamiento deben ser exactamente idénticos o superiores, nunca un recorte o versión reducida ("placeholder").

2. **Prohibido el uso de Placeholders o Eliminación de Casos Edge:**
   - Nunca reemplazar lógica activa por `// TODO`, textos genéricos o eliminar pestañas/filtros/selectores existentes.

3. **Preservación del ADN Visual (Design System UXIO):**
   - Respetar estrictamente los tokens de color (`#FE385B`, `#FF7F07`, `#FFCC48`, `#00F0FF`, `#10B981`, `#7928CA`).
   - Mantener las micro-interacciones a 120 FPS, físicas no newtonianas / LERP y estados hover/active calibrados.

---

## 🏛️ 2. Límites de Tamaño de Archivo y Arquitectura Limpia

1. **Escala de Límites:**
   - 🟢 **< 200 líneas:** Rango ideal y óptimo para componentes individuales y submódulos.
   - 🟡 **200 - 350 líneas:** Rango aceptable para vistas coordinadoras o contenedores principales.
   - 🔴 **> 350 líneas:** **Prohibido.** Requiere extracción inmediata a submódulos dedicados en carpetas de dominio (ej. `components/services/drawer/`, `components/navigation/`, `data/services/`).

2. **Comando de Verificación Continua:**
   - Ejecutar `npm run audit:files` antes de dar por terminada cualquier tarea para garantizar que el proyecto se mantenga con **0 archivos en zona roja**.

---

## 🔍 3. Protocolo de Verificación Pre-Entrega

Antes de responder al usuario o dar una tarea por completada:
1. Verificar que el servidor local de Next.js (`npm run dev`) compile con **cero errores de TypeScript y JSX**.
2. Probar las rutas activas vía peticiones HTTP (código `200 OK`).
3. Confirmar que no se hayan perdido props, handlers o interactividad en los playgrounds y drawers.
