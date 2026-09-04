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

  // Standard A4 dimensions in px at 96 DPI: 794 x 1123
  const A4_WIDTH = 794;
  const A4_HEIGHT = 1123;

  onProgress?.('Preparando documento para exportación...');

  // Find the actual document element or create a visible clone container
  const sourceDoc = targetElement.classList.contains('pdf-export-document')
    ? targetElement
    : targetElement.querySelector<HTMLElement>('.pdf-export-document') || targetElement;

  // Create a clean temporary clone attached to body to guarantee layout and font calculation
  const clone = sourceDoc.cloneNode(true) as HTMLElement;
  clone.style.position = 'fixed';
  clone.style.top = '0';
  clone.style.left = '0';
  clone.style.width = `${A4_WIDTH}px`;
  clone.style.minHeight = `${A4_HEIGHT}px`;
  clone.style.zIndex = '999999';
  clone.style.opacity = '1';
  clone.style.backgroundColor = '#FFFFFF';
  clone.style.pointerEvents = 'none';

  document.body.appendChild(clone);

  try {
    onProgress?.('Renderizando documento A4 en alta definición...');
    
    // Wait for repaint
    await new Promise(r => setTimeout(r, 150));

    const dataUrl = await toPng(clone, {
      pixelRatio: 2,
      cacheBust: true,
      quality: 0.98,
      backgroundColor: '#FFFFFF',
      width: A4_WIDTH,
      height: clone.scrollHeight || A4_HEIGHT,
    });

    onProgress?.('Generando archivo PDF...');

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [A4_WIDTH, clone.scrollHeight || A4_HEIGHT],
      compress: true,
    });

    pdf.addImage(dataUrl, 'PNG', 0, 0, A4_WIDTH, clone.scrollHeight || A4_HEIGHT, undefined, 'FAST');

    const cleanName = (fileName.replace(/[^a-zA-Z0-9-_]/g, '_') || 'documento') + '.pdf';
    pdf.save(cleanName);
  } catch (err) {
    console.warn('Fallo renderizado raster toPng, activando impresión nativa como fallback:', err);
    if (typeof window !== 'undefined') {
      window.print();
    }
  } finally {
    if (document.body.contains(clone)) {
      document.body.removeChild(clone);
    }
  }
}
