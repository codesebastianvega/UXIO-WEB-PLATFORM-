import React from 'react';
import { Scissors, Sparkles, Smartphone, ArrowRight, Sliders } from 'lucide-react';

export const CapCutShortcutsPrintTemplate: React.FC = () => {
  const categories = [
    {
      title: '1. GESTOS TÁCTILES RÁPIDOS EN TIMELINE',
      icon: Smartphone,
      color: '#FE385B',
      items: [
        { action: 'Pellizcar con 2 dedos:', desc: 'Amplía el timeline para ver los milisegundos exactos de la onda de audio.' },
        { action: 'Doble tap en clip:', desc: 'Abre el menú de corte (Split) y velocidad al instante.' },
        { action: 'Arrastrar borde del clip:', desc: 'Ajuste fino de entrada y salida sin tener que dividir y borrar.' },
      ],
    },
    {
      title: '2. CONFIGURACIÓN DE SUBTÍTULOS DINÁMICOS',
      icon: Sparkles,
      color: '#FF7F07',
      items: [
        { action: 'Plantilla de Texto:', desc: 'Usa estilo "Palabra por palabra" con resaltador amarillo o verde esmeralda.' },
        { action: 'Tipografía recomendada:', desc: 'The Bold Font, Montserrat Bold o Futura Heavy (40-48pt).' },
        { action: 'Ubicación en pantalla:', desc: 'Tercio medio-inferior (Y: -150 a -200) para no tapar rostro ni botones.' },
      ],
    },
    {
      title: '3. PARÁMETROS DE EXPORTACIÓN SIN PÉRDIDA',
      icon: Sliders,
      color: '#10B981',
      items: [
        { action: 'Resolución:', desc: '1080p (No exportes en 4K si la plataforma recomprime a 1080p).' },
        { action: 'Tasa de Cuadros (FPS):', desc: '30 FPS (o 60 FPS si grabaste en 60 FPS).' },
        { action: 'Tasa de Bits (Bitrate):', desc: 'Personalizado / Más alto (High Bitrate) para nitidez cristalina.' },
      ],
    },
  ];

  return (
    <div className="bg-white text-black p-8 font-sans max-w-[800px] mx-auto space-y-6">
      {/* Header */}
      <div className="border-b-2 border-black pb-4 flex justify-between items-start">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#FE385B] uppercase block">
            UXIO ACADEMY · CREATOR LAB · GUÍA RÁPIDA
          </span>
          <h1 className="text-2xl font-black tracking-tight text-black mt-1">
            Cheat Sheet de Edición Rápida en CapCut Móvil
          </h1>
          <p className="text-xs text-[#555555] mt-0.5">
            Gestos táctiles, ajustes de subtítulos dinámicos y parámetros de exportación profesional.
          </p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#FE385B]/10 text-[#FE385B] flex items-center justify-center border border-[#FE385B]/20 shrink-0">
          <Scissors size={20} />
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="border border-black/15 rounded-xl p-4 space-y-2.5 bg-black/[0.01]">
            <div className="flex items-center gap-2 border-b border-black/10 pb-1.5">
              <cat.icon size={16} style={{ color: cat.color }} />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-black">
                {cat.title}
              </h3>
            </div>

            <div className="space-y-2">
              {cat.items.map((it, iIdx) => (
                <div key={iIdx} className="p-2 rounded-lg bg-white border border-black/10 space-y-0.5">
                  <span className="font-mono text-[11px] font-bold text-black flex items-center gap-1">
                    <ArrowRight size={10} style={{ color: cat.color }} />
                    {it.action}
                  </span>
                  <p className="text-[11px] text-[#444444] pl-3 leading-snug">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-black/15 pt-3 flex justify-between items-center text-[10px] font-mono text-[#666666]">
        <span>// CREATOR LAB M04 · EDICIÓN CAPCUT</span>
        <span>Aplica el corte J/L para enlazar audio antes que el video</span>
      </div>
    </div>
  );
};
