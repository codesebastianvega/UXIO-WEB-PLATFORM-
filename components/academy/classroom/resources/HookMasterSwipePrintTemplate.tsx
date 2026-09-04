import React from 'react';
import { Sparkles, Anchor, Flame, HelpCircle, ArrowRight } from 'lucide-react';

export const HookMasterSwipePrintTemplate: React.FC = () => {
  const hookCategories = [
    {
      category: '1. GANCHOS DE FRICCIÓN & DOLOR',
      icon: Flame,
      color: '#FE385B',
      description: 'Atacan directamente un error común o frustración no resuelta.',
      examples: [
        { formula: 'El error al [Acción] que te cuesta [Pérdida/Dinero]:', sample: 'El error al comprar hosting que te cuesta el 40% de tus ventas.' },
        { formula: 'Si estás usando [Método obsoleto] para [Objetivo], para ya:', sample: 'Si estás usando hojas de Excel para controlar tus inventarios, para ya.' },
        { formula: 'Por qué el 90% de [Audiencia] fracasa al intentar [Resultado]:', sample: 'Por qué el 90% de restaurantes fracasa al intentar pautar en Meta.' },
      ],
    },
    {
      category: '2. GANCHOS DE CURIOSIDAD & CONTRADICCIÓN',
      icon: HelpCircle,
      color: '#FF7F07',
      description: 'Generan un bucle abierto en la mente que solo se cierra al ver el video.',
      examples: [
        { formula: 'Nadie habla de esto, pero [Verdad incómoda de la industria]:', sample: 'Nadie habla de esto, pero las agencias tradicionales te cobran de más.' },
        { formula: 'Hice [Acción inusual] durante 30 días y esto fue lo que pasó:', sample: 'Grabé 1 Reel diario usando solo luz de ventana y gané $3.000 USD.' },
        { formula: 'La razón oculta por la que [Líder/Empresa] nunca usa [Herramienta]:', sample: 'La razón oculta por la que marcas de lujo nunca usan descuentos.' },
      ],
    },
    {
      category: '3. GANCHOS DE PROMESA & VELOCIDAD',
      icon: Anchor,
      color: '#10B981',
      description: 'Ofrecen un resultado tangible en un tiempo exacto y medible.',
      examples: [
        { formula: 'Cómo lograr [Resultado deseado] en solo [Tiempo] sin [Dolor]:', sample: 'Cómo estructurar 30 guiones de video en 2 horas sin quedarte en blanco.' },
        { formula: 'La regla de 3 pasos para [Objetivo comercial]:', sample: 'La regla de 3 pasos para responder leads de WhatsApp en 60 segundos.' },
        { formula: 'El único ajuste de [Elemento] que multiplicó nuestras ventas por 3:', sample: 'El único ajuste de gancho que multiplicó nuestras consultas por 3.' },
      ],
    },
  ];

  return (
    <div className="bg-white text-black p-8 font-sans max-w-[800px] mx-auto space-y-6">
      {/* Header */}
      <div className="border-b-2 border-black pb-4 flex justify-between items-start">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#FE385B] uppercase block">
            UXIO ACADEMY · CREATOR LAB · HERRAMIENTA OFICIAL
          </span>
          <h1 className="text-2xl font-black tracking-tight text-black mt-1">
            Bóveda de Ganchos: 30 Fórmulas de Alta Retención
          </h1>
          <p className="text-xs text-[#555555] mt-0.5">
            Plantilla imprimible de ganchos verbales y de texto listos para aplicar a tu nicho.
          </p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#FE385B]/10 text-[#FE385B] flex items-center justify-center border border-[#FE385B]/20 shrink-0">
          <Sparkles size={20} />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="space-y-5">
        {hookCategories.map((cat, idx) => (
          <div key={idx} className="border border-black/15 rounded-xl p-4 space-y-3 bg-black/[0.01]">
            <div className="flex items-center justify-between border-b border-black/10 pb-2">
              <div className="flex items-center gap-2">
                <cat.icon size={16} style={{ color: cat.color }} />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-black">
                  {cat.category}
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[#777777]">{cat.description}</span>
            </div>

            <div className="space-y-2.5">
              {cat.examples.map((ex, exIdx) => (
                <div key={exIdx} className="p-2.5 rounded-lg bg-white border border-black/10 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-black">
                    <ArrowRight size={12} style={{ color: cat.color }} className="shrink-0" />
                    <span>Fórmula: &quot;{ex.formula}&quot;</span>
                  </div>
                  <p className="text-[11px] text-[#444444] italic pl-4">
                    Ejemplo real: &quot;{ex.sample}&quot;
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer / Instructions */}
      <div className="border-t border-black/15 pt-3 flex justify-between items-center text-[10px] font-mono text-[#666666]">
        <span>// CREATOR LAB M03 · CIENCIA DEL HOOK</span>
        <span>Aplica la sincronía triple: Gancho Visual + Gancho Verbal + Texto en Pantalla</span>
      </div>
    </div>
  );
};
