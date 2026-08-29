#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const MAX_OPTIMAL = 200;
const MAX_WARNING = 350;

const IGNORE_DIRS = ['node_modules', '.next', '.git', 'dist', 'build', '.system_generated'];

function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (!IGNORE_DIRS.some(ignored => file.includes(ignored))) {
        getFiles(filePath, fileList);
      }
    } else if (/\.(tsx|ts|jsx|js)$/.test(file) && !file.endsWith('.d.ts')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const rootDir = process.cwd();
const allFiles = getFiles(rootDir);

const results = allFiles.map(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const nonBlankLines = lines.filter(l => l.trim().length > 0 && !l.trim().startsWith('//')).length;
  const relativePath = path.relative(rootDir, filePath).replace(/\\/g, '/');
  return {
    path: relativePath,
    totalLines: lines.length,
    codeLines: nonBlankLines,
  };
});

results.sort((a, b) => b.totalLines - a.totalLines);

console.log('\n📊 AUDITORÍA DE SALUD Y TAMAÑO DE ARCHIVOS UXIO:\n');
console.log('Reglas de arquitectura:');
console.log('🟢 Óptimo: < 200 líneas');
console.log('🟡 Aceptable: 200 - 350 líneas');
console.log('🔴 Monstruo / Requiere modularización: > 350 líneas\n');

const monsters = [];
const warnings = [];
const goods = [];

results.forEach(f => {
  if (f.totalLines > MAX_WARNING) {
    monsters.push(f);
    console.log(`🔴 [REFACTOR REQUERIDO] ${f.totalLines.toString().padStart(4)} líneas (${f.codeLines} código) -> ${f.path}`);
  } else if (f.totalLines > MAX_OPTIMAL) {
    warnings.push(f);
    console.log(`🟡 [ACEPTABLE]         ${f.totalLines.toString().padStart(4)} líneas (${f.codeLines} código) -> ${f.path}`);
  } else {
    goods.push(f);
  }
});

console.log(`\n------------------------------------------------------------`);
console.log(`Resumen:`);
console.log(`🔴 Archivos > 350 líneas: ${monsters.length}`);
console.log(`🟡 Archivos 200-350 líneas: ${warnings.length}`);
console.log(`🟢 Archivos limpios (<200 líneas): ${goods.length}`);
console.log(`Total archivos auditados: ${results.length}\n`);
