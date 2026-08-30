'use client';

import { jsPDF } from 'jspdf';
import { toPng } from 'html-to-image';

export interface ExportProgressCallback {
  (current: number, total: number, message: string): void;
}

export async function exportPresentationToPdf(
  deckElement: HTMLElement,
  fileName: string,
  onProgress?: ExportProgressCallback
): Promise<void> {
  const slideElements = deckElement.querySelectorAll<HTMLElement>('.pdf-export-slide');

  if (slideElements.length === 0) {
    throw new Error('No se encontraron diapositivas para exportar.');
  }

  const total = slideElements.length;
  // 1280 x 720 Landscape presentation format in points
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'px',
    format: [1280, 720],
    compress: true,
  });

  for (let i = 0; i < total; i++) {
    const slideEl = slideElements[i];
    onProgress?.(i + 1, total, `Procesando diapositiva ${i + 1} de ${total}...`);

    // High fidelity rasterization at 2x retina scale with full CSS and font support
    const dataUrl = await toPng(slideEl, {
      pixelRatio: 2,
      cacheBust: true,
      quality: 0.98,
      backgroundColor: '#FFFFFF',
      width: 1280,
      height: 720,
    });

    if (i > 0) {
      pdf.addPage([1280, 720], 'landscape');
    }

    pdf.addImage(dataUrl, 'PNG', 0, 0, 1280, 720, undefined, 'FAST');
  }

  onProgress?.(total, total, 'Guardando archivo PDF...');
  const cleanName = fileName.replace(/[^a-zA-Z0-9-_]/g, '_') + '.pdf';
  pdf.save(cleanName);
}
