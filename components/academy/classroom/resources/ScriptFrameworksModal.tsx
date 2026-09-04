import React, { useState } from 'react';
import { X, BookOpen, Printer, Copy, Check, Sparkles } from 'lucide-react';
import { ScriptFrameworksPrintTemplate } from './ScriptFrameworksPrintTemplate';

interface ScriptFrameworksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScriptFrameworksModal: React.FC<ScriptFrameworksModalProps> = ({ isOpen, onClose }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const templates = [
    {
      id: 'pas',
      title: 'Estructura PAS (Problema → Agitación → Solución)',
      badge: 'Más Efectivo para Ventas',
      color: '#FE385B',
      content: `[0-3s HOOK]: Si estás perdiendo clientes por culpa de [Problema visible]...\n[3-15s AGITACIÓN]: El error es que [Causa oculta] y cada día que pasa pierdes [Dinero/Tiempo]...\n[15-35s SOLUCIÓN]: En nuestro taller aplicamos [Tu método/producto] que resuelve esto en [Tiempo]...\n[35-45s CTA]: Comenta [PALABRA] y te paso la información directo a WhatsApp.`,
    },
    {
      id: 'bab',
      title: 'Estructura BAB (Antes → Puente → Después)',
      badge: 'Ideal para Casos de Éxito',
      color: '#FF7F07',
      content: `[0-5s ANTES]: Así es como lucía [Situación inicial precaria] antes de conocernos...\n[5-25s PUENTE]: Decidimos cambiar el proceso e implementar [Herramienta/Ajuste clave]...\n[25-40s DESPUÉS]: Hoy este es el resultado final con [Métrica o beneficio tangible]...\n[40-45s CTA]: Escríbenos al enlace del perfil para agendar tu diagnóstico.`,
    },
    {
      id: 'story',
      title: 'Storytelling de Fundador (Anécdota & Valores)',
      badge: 'Máxima Conexión Humana',
      color: '#10B981',
      content: `[0-5s HOOK]: El día que casi quebramos por confiar en proveedores baratos...\n[5-25s RELATO]: Nos entregaron material defectuoso y tuvimos que dar la cara ante 50 clientes...\n[25-40s APRENDIZAJE]: Desde ese día juramos que en [Marca] solo usamos [Calidad/Valor intransigente]...\n[40-45s CTA]: ¿Valoras más el precio bajo o la durabilidad? Te leo en comentarios.`,
    },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Printable Area (visible only on print) */}
      <div className="hidden print:block fixed inset-0 bg-white z-[9999]">
        <ScriptFrameworksPrintTemplate />
      </div>

      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md print:hidden" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#0C0D0E] border border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh] print:hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.08] bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FF7F07]/10 text-[#FF7F07] flex items-center justify-center border border-[#FF7F07]/20">
              <BookOpen size={20} />
            </div>
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-[#FF7F07] tracking-wider block">
                PLANTILLAS DE STORYTELLING // FRAMEWORKS
              </span>
              <h2 className="font-display font-bold text-xl text-white">
                Bóveda de Guiones Comerciales (PAS, BAB & Fundador)
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-mono text-[#E5E5E7] transition-all cursor-pointer"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Imprimir PDF A4</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-[#8E8E93] hover:text-white transition-all cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <p className="text-xs text-[#8E8E93] leading-relaxed">
            Selecciona una plantilla, cópiala y rellena los bloques con tu contenido para tener un guion listo en menos de 10 minutos.
          </p>

          <div className="space-y-3">
            {templates.map(t => (
              <div
                key={t.id}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.15] transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-md"
                      style={{ backgroundColor: `${t.color}15`, color: t.color }}
                    >
                      {t.badge}
                    </span>
                    <h4 className="font-display font-bold text-sm text-white">{t.title}</h4>
                  </div>
                  <button
                    onClick={() => handleCopy(t.content, t.id)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-[#E5E5E7] transition-colors cursor-pointer"
                  >
                    {copiedId === t.id ? <Check size={12} className="text-[#10B981]" /> : <Copy size={12} />}
                    <span>{copiedId === t.id ? 'Copiado' : 'Copiar'}</span>
                  </button>
                </div>
                <pre className="p-3 rounded-xl bg-black/50 border border-white/[0.04] text-[11px] font-mono text-[#CCCCCC] whitespace-pre-wrap leading-relaxed">
                  {t.content}
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
          <span className="font-mono text-[11px] text-[#8E8E93]">
            💡 Tip: Mantén cada bloque en menos de 2 oraciones para ritmo dinámico.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white text-black font-mono text-xs font-bold hover:bg-white/90 transition-all cursor-pointer"
          >
            Listo para Guionizar
          </button>
        </div>
      </div>
    </div>
  );
};
