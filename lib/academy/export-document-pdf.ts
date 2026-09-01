'use client';

import { jsPDF } from 'jspdf';
import { toPng } from 'html-to-image';

export interface DocumentExportOptions {
  fileName: string;
  studentName?: string;
  onProgress?: (message: string) => void;
}

export async function exportA4DocumentToPdf(
  targetElement: HTMLElement,
  options: DocumentExportOptions
): Promise<void> {
  const { fileName, onProgress } = options;

  // Find inner document container if targetElement is an offscreen wrapper
  const docElement = targetElement.classList.contains('pdf-export-document')
    ? targetElement
    : targetElement.querySelector<HTMLElement>('.pdf-export-document') || targetElement;

  onProgress?.('Renderizando documento A4 en alta fidelidad...');

  // Standard A4 dimensions in px at 96 DPI: 794 x 1123
  const A4_WIDTH = 794;
  const A4_HEIGHT = 1123;

  const dataUrl = await toPng(docElement, {
    pixelRatio: 2,
    cacheBust: true,
    quality: 0.98,
    backgroundColor: '#FFFFFF',
    width: A4_WIDTH,
    height: A4_HEIGHT,
  });

  onProgress?.('Generando archivo PDF...');

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [A4_WIDTH, A4_HEIGHT],
    compress: true,
  });

  pdf.addImage(dataUrl, 'PNG', 0, 0, A4_WIDTH, A4_HEIGHT, undefined, 'FAST');

  const cleanName = (fileName.replace(/[^a-zA-Z0-9-_]/g, '_') || 'documento') + '.pdf';
  pdf.save(cleanName);
}
