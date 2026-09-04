import { jsPDF } from 'jspdf';
import fs from 'fs';
import path from 'path';

const doc = new jsPDF({
  orientation: 'portrait',
  unit: 'mm',
  format: 'a4',
});

// Brand Colors
const primary = [254, 56, 91]; // #FE385B
const dark = [17, 17, 17];
const muted = [110, 110, 115];
const border = [230, 230, 235];
const bgCard = [248, 248, 250];

// Header
doc.setFillColor(primary[0], primary[1], primary[2]);
doc.rect(0, 0, 210, 6, 'F');

doc.setFont('helvetica', 'bold');
doc.setFontSize(22);
doc.setTextColor(dark[0], dark[1], dark[2]);
doc.text('uxio.', 16, 18);
doc.setTextColor(primary[0], primary[1], primary[2]);
doc.text('creator lab', 33, 18);

doc.setFontSize(9);
doc.setFont('helvetica', 'bold');
doc.setTextColor(muted[0], muted[1], muted[2]);
doc.text('SEMANA 1 · RETO 1 OFICIAL', 16, 25);

doc.setFontSize(16);
doc.setFont('helvetica', 'bold');
doc.setTextColor(dark[0], dark[1], dark[2]);
doc.text('Matriz de 30 Ideas de Contenido Comercial', 16, 33);

doc.setFontSize(9);
doc.setFont('helvetica', 'normal');
doc.setTextColor(muted[0], muted[1], muted[2]);
doc.text('Estructura tu mes completo de contenido vertical (TikTok / Reels) listo para grabar.', 16, 38);

// Student Info Box
doc.setFillColor(bgCard[0], bgCard[1], bgCard[2]);
doc.roundedRect(16, 42, 178, 16, 2, 2, 'F');
doc.setDrawColor(border[0], border[1], border[2]);
doc.roundedRect(16, 42, 178, 16, 2, 2, 'D');

doc.setFontSize(8);
doc.setFont('helvetica', 'bold');
doc.setTextColor(dark[0], dark[1], dark[2]);
doc.text('ESTUDIANTE / MARCA:', 20, 48);
doc.text('OFERTA PRINCIPAL & PRECIO:', 20, 54);

doc.setFont('helvetica', 'normal');
doc.setTextColor(muted[0], muted[1], muted[2]);
doc.text('___________________________________________', 56, 48);
doc.text('___________________________________________', 68, 54);

// Pillars Legend
doc.setFontSize(9);
doc.setFont('helvetica', 'bold');
doc.setTextColor(dark[0], dark[1], dark[2]);
doc.text('LOS 5 PILARES DE CONTENIDO UXIO (DIETA 40/20/20/10/10):', 16, 65);

const pillars = [
  '1. EDUCAR (40%): Trucos y soluciones rápidas',
  '2. CONECTAR (20%): Backstage y valores',
  '3. DEMOSTRAR (20%): Resultados de clientes',
  '4. DESMENTIR (10%): Derribar mitos',
  '5. VENDER (10%): Oferta con CTA a WhatsApp',
];

doc.setFontSize(7.5);
doc.setFont('helvetica', 'normal');
doc.setTextColor(muted[0], muted[1], muted[2]);
pillars.forEach((p, idx) => {
  doc.text(`• ${p}`, 16, 70 + idx * 4);
});

// Matrix Table Header
const startY = 93;
doc.setFillColor(dark[0], dark[1], dark[2]);
doc.rect(16, startY, 178, 7, 'F');

doc.setFontSize(7.5);
doc.setFont('helvetica', 'bold');
doc.setTextColor(255, 255, 255);
doc.text('#', 18, startY + 4.5);
doc.text('PILAR', 24, startY + 4.5);
doc.text('GANCHO (HOOK 0-3s)', 48, startY + 4.5);
doc.text('PROBLEMA / DUDA', 105, startY + 4.5);
doc.text('TOMA B-ROLL', 150, startY + 4.5);
doc.text('CTA WHATSAPP', 176, startY + 4.5);

// Sample rows
const sampleRows = [
  ['01', 'Educar', 'El error #1 que cometes al cotizar...', 'Clientes indecisos por precios confusos', 'Manos en teclado', 'Comenta GUIA'],
  ['02', 'Conectar', 'Por qué decidimos no vender productos baratos...', 'Filosofía de durabilidad vs competencia', 'Backstage taller', 'Escríbenos'],
  ['03', 'Demostrar', 'Así le ahorramos $400 USD a este cliente...', 'Caso de éxito en optimización fiscal', 'Pantalla / Excel', 'Pide Asesoría'],
  ['04', 'Desmentir', 'El mito de que necesitas 100k seguidores...', 'Creencia de que se requiere viralidad', 'Plano medio a cámara', 'Link en Bio'],
  ['05', 'Vender', 'Abrimos 5 cupos para la consultoría de este mes...', 'Oferta directa con cupos limitados', 'Producto en mano', 'Comenta CUPO'],
];

sampleRows.forEach((row, idx) => {
  const y = startY + 7 + idx * 6;
  doc.setFillColor(idx % 2 === 0 ? 255 : 248, idx % 2 === 0 ? 255 : 248, idx % 2 === 0 ? 255 : 250);
  doc.rect(16, y, 178, 6, 'F');
  doc.setDrawColor(border[0], border[1], border[2]);
  doc.line(16, y + 6, 194, y + 6);

  doc.setFontSize(7);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(dark[0], dark[1], dark[2]);
  doc.text(row[0], 18, y + 4);
  doc.text(row[1], 24, y + 4);
  doc.text(row[2], 48, y + 4);
  doc.text(row[3], 105, y + 4);
  doc.text(row[4], 150, y + 4);
  doc.text(row[5], 176, y + 4);
});

// Empty Template Rows
for (let i = 6; i <= 28; i++) {
  const y = startY + 7 + (i - 1) * 6;
  if (y > 275) break;
  doc.setFillColor(i % 2 === 0 ? 255 : 248, i % 2 === 0 ? 255 : 248, i % 2 === 0 ? 255 : 250);
  doc.rect(16, y, 178, 6, 'F');
  doc.setDrawColor(border[0], border[1], border[2]);
  doc.line(16, y + 6, 194, y + 6);

  doc.setFontSize(7);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(muted[0], muted[1], muted[2]);
  doc.text(String(i).padStart(2, '0'), 18, y + 4);
}

// Page Footer
doc.setFontSize(7);
doc.setFont('helvetica', 'normal');
doc.setTextColor(muted[0], muted[1], muted[2]);
doc.text('UXIO Creator Lab · Cohorte 01 · Entrega dominical antes de las 11:59 PM en el Aula Virtual', 16, 290);
doc.text('Página 1 de 1', 180, 290);

const outputPath = path.resolve(process.cwd(), 'public/resources/matriz-30-ideas-contenido.pdf');
fs.writeFileSync(outputPath, Buffer.from(doc.output('arraybuffer')));
console.log('PDF generado exitosamente en:', outputPath);
