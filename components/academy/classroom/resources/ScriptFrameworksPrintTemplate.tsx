import React from 'react';
import { BookOpen, ArrowRight, Layers } from 'lucide-react';

export const ScriptFrameworksPrintTemplate: React.FC = () => {
  const frameworks = [
    {
      name: '1. FRAMEWORK PAS (PROBLEMA → AGITACIÓN → SOLUCIÓN)',
      tag: 'IDEAL PARA REELS DIRECTOS Y ANUNCIOS',
      steps: [
        { phase: '0-3s · Gancho al Problema:', desc: 'Cita la frustración visible que vive tu cliente hoy.' },
        { phase: '3-15s · Agitación:', desc: 'Explica cuánto dinero, tiempo o estrés le cuesta no solucionarlo.' },
        { phase: '15-35s · Solución & B-Roll:', desc: 'Demuestra visualmente cómo tu producto o método elimina el problema.' },
        { phase: '35-45s · Llamado a la Acción (CTA):', desc: 'Instrucción con palabra clave hacia WhatsApp o enlace directo.' },
      ],
    },
    {
      name: '2. FRAMEWORK BAB (ANTES → PUENTE → DESPUÉS)',
      tag: 'IDEAL PARA CASOS DE ESTUDIO Y TRANSFORMACIONES',
      steps: [
        { phase: '0-5s · Antes (Situación Inicial):', desc: 'Muestra el desorden, las dudas o el resultado precario inicial.' },
        { phase: '5-25s · El Puente (El Cambio):', desc: 'Muestra el momento del quiebre: la herramienta o decisión aplicada.' },
        { phase: '25-40s · Después (Resultado Final):', desc: 'Muestra el producto terminado, la métrica o la sonrisa del cliente.' },
        { phase: '40-45s · CTA:', desc: '"Si quieres el mismo resultado en tu negocio, comenta [PALABRA]".' },
      ],
    },
    {
      name: '3. STORYTELLING DE FUNDADOR (ANÉCDOTA REAL)',
      tag: 'IDEAL PARA CONEXIÓN PROFUNDA Y AUTORIDAD',
      steps: [
        { phase: '0-5s · El Quiebre:', desc: '"El día que casi perdemos todo por culpa de este error..."' },
        { phase: '5-25s · El Aprendizaje Humano:', desc: 'Cuenta la lección que te obligó a crear tu producto con mejores estándares.' },
        { phase: '25-45s · Conexión & Comunidad:', desc: '"Por eso hoy jamás usamos [Elemento malo]. ¿Te ha pasado algo similar?"' },
      ],
    },
  ];

  return (
    <div className="bg-white text-black p-8 font-sans max-w-[800px] mx-auto space-y-6">
      {/* Header */}
      <div className="border-b-2 border-black pb-4 flex justify-between items-start">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#FF7F07] uppercase block">
            UXIO ACADEMY · CREATOR LAB · HERRAMIENTA OFICIAL
          </span>
          <h1 className="text-2xl font-black tracking-tight text-black mt-1">
            Plantilla de Frameworks de Guionización Rápida
          </h1>
          <p className="text-xs text-[#555555] mt-0.5">
            Las 3 estructuras maestras de storytelling y persuasión comercial (PAS, BAB y Relato de Fundador).
          </p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#FF7F07]/10 text-[#FF7F07] flex items-center justify-center border border-[#FF7F07]/20 shrink-0">
          <BookOpen size={20} />
        </div>
      </div>

      {/* Frameworks List */}
      <div className="space-y-4">
        {frameworks.map((fw, idx) => (
          <div key={idx} className="border border-black/15 rounded-xl p-4 space-y-2.5 bg-black/[0.01]">
            <div className="flex items-center justify-between border-b border-black/10 pb-1.5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-black">
                {fw.name}
              </h3>
              <span className="text-[10px] font-mono text-[#FF7F07] font-semibold">{fw.tag}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {fw.steps.map((st, sIdx) => (
                <div key={sIdx} className="p-2 rounded-lg bg-white border border-black/10 space-y-0.5">
                  <span className="font-mono text-[10px] font-bold text-black flex items-center gap-1">
                    <ArrowRight size={10} className="text-[#FF7F07]" />
                    {st.phase}
                  </span>
                  <p className="text-[11px] text-[#444444] pl-3 leading-snug">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="border-t border-black/15 pt-3 flex justify-between items-center text-[10px] font-mono text-[#666666]">
        <span>// CREATOR LAB M03 · GUIONES PERSUASIVOS</span>
        <span>Elige 1 framework por video y mantén la duración entre 45 y 60 segundos</span>
      </div>
    </div>
  );
};
