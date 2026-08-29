# 🛡️ REGLA: PRESERVACIÓN TOTAL DE CÓDIGO Y CALIDAD ARQUITECTÓNICA

## Contexto
En este repositorio se realizan refactorizaciones y modularizaciones frecuentes para mantener los archivos bajo el límite de 350 líneas.

## Reglas Obligatorias
1. **CERO REGRESIONES:** Al modularizar, dividir o refactorizar archivos, no se permite eliminar, simplificar u olvidar funciones, botones, interactividad, controles de playground, textos o estilos ya existentes.
2. **VERIFICACIÓN DE COMPILACIÓN:** Siempre confirmar que Next.js compile limpiamente y sin errores de tipos.
3. **SALUD DEL CODEBASE:** Mantener 0 archivos en estado rojo (> 350 líneas) ejecutando `npm run audit:files`.
