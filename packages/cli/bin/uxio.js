#!/usr/bin/env node

/**
 * UXIO CLI - One-click component installer
 * Open Source & UI Distribution Engine by UXIO Studio & Labs
 * 
 * Usage: npx @uxio/ui add <component-name>
 */

import fs from 'fs';
import path from 'path';

const REGISTRY_URL = process.env.UXIO_REGISTRY_URL || 'https://uxio-platform.vercel.app/api/registry';

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  const componentName = args[1];

  if (!command || command !== 'add' || !componentName) {
    console.log(`
\x1b[35m  _   ___  _____ ___  \x1b[0m
\x1b[35m | | | \\ \\/ /_ _/ _ \\ \x1b[0m
\x1b[35m | |_| |>  < | | (_) |\x1b[0m
\x1b[35m  \\___//_/\\_\\___\\___/ \x1b[0m  \x1b[90mSTUDIO & LABS UI ENGINE\x1b[0m

\x1b[1mUso:\x1b[0m
  npx @uxio/ui add <component-name>

\x1b[1mEjemplos:\x1b[0m
  npx @uxio/ui add spotlight-card
  npx @uxio/ui add hover-link-preview
  npx @uxio/ui add magnetic-button
`);
    process.exit(0);
  }

  console.log(`\n\x1b[36m⚡ Descargando componente '${componentName}' desde UXIO Registry...\x1b[0m`);

  try {
    const res = await fetch(`${REGISTRY_URL}/${componentName}`);
    if (!res.ok) {
      throw new Error(`Componente '${componentName}' no encontrado en el registro (${res.status}).`);
    }

    const data = await res.json();
    const targetDir = path.resolve(process.cwd(), 'components/ui');

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    for (const file of data.files) {
      if (!file.content) continue;
      const targetFilePath = path.resolve(process.cwd(), file.path);
      const parentDir = path.dirname(targetFilePath);

      if (!fs.existsSync(parentDir)) {
        fs.mkdirSync(parentDir, { recursive: true });
      }

      fs.writeFileSync(targetFilePath, file.content, 'utf8');
      console.log(`\x1b[32m✔ Creado: ${file.path}\x1b[0m`);
    }

    console.log(`\n\x1b[32m🎉 ¡Instalación exitosa!\x1b[0m`);
    console.log(`\x1b[90mYa puedes importar \x1b[1m<${data.title} />\x1b[0m\x1b[90m en tus páginas de Next.js.\x1b[0m\n`);
  } catch (err) {
    console.error(`\x1b[31m✖ Error:\x1b[0m ${err.message}`);
    process.exit(1);
  }
}

main();
