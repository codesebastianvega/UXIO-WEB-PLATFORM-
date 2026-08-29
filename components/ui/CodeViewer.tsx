import React, { useState, useMemo } from 'react';
import { Copy, Check, Terminal, FileCode, Sparkles, Bot, Wand2 } from 'lucide-react';

interface CodeTab {
  id: string;
  label: string;
  code: string;
  language?: string;
}

interface CodeViewerProps {
  tabs: CodeTab[];
  activeTab: string;
  onTabChange: (id: string) => void;
  className?: string;
  onCopyAiPrompt?: () => void;
  aiPromptText?: string;
}

// Lightweight, zero-dependency VS Code Dark+ Syntax Tokenizer
function tokenizeLine(line: string): React.ReactNode[] {
  // If markdown header or AI prompt formatting
  if (line.startsWith('#') || line.startsWith('>') || line.startsWith('- **') || line.startsWith('**')) {
    return [<span key="md" className="text-[#9CDCFE] font-semibold">{line}</span>];
  }

  // If comment line
  if (line.trim().startsWith('//') || line.trim().startsWith('/*') || line.trim().startsWith('*')) {
    return [<span key="comment" className="text-[#6A9955] italic">{line}</span>];
  }

  // Token regex matching keywords, strings, types, functions, tags, props, and numbers
  const regex = /('(?:\\'|[^'])*'|"(?:\\"|[^"])*"|`(?:\\`|[^`])*`)|(\b(?:import|export|default|function|interface|extends|const|let|var|return|type|typeof|from|if|else|null|true|false|async|await)\b)|(\b(?:string|number|boolean|any|void|ReactNode|HTMLDivElement|FluidSpotlightCardProps|HoverLinkPreviewProps|MagneticPillButtonProps|ShimmerGradientTextProps|Locale)\b)|(\b(?:useRef|useState|useCallback|useEffect|cancelAnimationFrame|requestAnimationFrame|Math|parseInt|parseFloat|toFixed|getBoundingClientRect|addEventListener|removeEventListener|setTimeout|clearTimeout|FluidSpotlightCard|HoverLinkPreview|MagneticPillButton|ShimmerGradientText)\b)|(<\/?[a-zA-Z0-9_-]+|\/>|>)|(\b[a-zA-Z0-9_-]+(?==))|(\b\d+(?:\.\d+)?(?:px|%|ms|s)?\b)|(\/\/.*$)/g;

  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(line)) !== null) {
    // Push preceding plain text
    if (match.index > lastIndex) {
      elements.push(<span key={lastIndex} className="text-[#D4D4D4]">{line.slice(lastIndex, match.index)}</span>);
    }

    const [fullMatch, str, keyword, type, func, tag, prop, num, comment] = match;

    if (str) {
      elements.push(<span key={match.index} className="text-[#CE9178]">{str}</span>); // Strings (Amber)
    } else if (keyword) {
      elements.push(<span key={match.index} className="text-[#C586C0] font-semibold">{keyword}</span>); // Keywords (Purple/Pink)
    } else if (type) {
      elements.push(<span key={match.index} className="text-[#4EC9B0]">{type}</span>); // Types (Teal)
    } else if (func) {
      elements.push(<span key={match.index} className="text-[#DCDCAA]">{func}</span>); // Functions (Yellow)
    } else if (tag) {
      elements.push(<span key={match.index} className="text-[#569CD6] font-medium">{tag}</span>); // JSX Tags (Blue)
    } else if (prop) {
      elements.push(<span key={match.index} className="text-[#9CDCFE]">{prop}</span>); // Props / Attributes (Sky Blue)
    } else if (num) {
      elements.push(<span key={match.index} className="text-[#B5CEA8]">{num}</span>); // Numbers (Light Green)
    } else if (comment) {
      elements.push(<span key={match.index} className="text-[#6A9955] italic">{comment}</span>); // Comments (Muted Green)
    } else {
      elements.push(<span key={match.index} className="text-[#D4D4D4]">{fullMatch}</span>);
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < line.length) {
    elements.push(<span key={lastIndex} className="text-[#D4D4D4]">{line.slice(lastIndex)}</span>);
  }

  return elements.length > 0 ? elements : [<span key="empty">&nbsp;</span>];
}

/**
 * CodeViewer - A high-fidelity VS Code editor window
 * with Dark+ theme syntax highlighting, line numbers, AI prompt mode, and traffic dots.
 */
export default function CodeViewer({
  tabs,
  activeTab,
  onTabChange,
  className = '',
  onCopyAiPrompt,
  aiPromptText,
}: CodeViewerProps) {
  const [copied, setCopied] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];
  const lines = useMemo(() => currentTab.code.split('\n'), [currentTab.code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyAi = () => {
    const textToCopy = aiPromptText || (tabs.find(t => t.id === 'ai-prompt')?.code) || currentTab.code;
    navigator.clipboard.writeText(textToCopy);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const isCli = currentTab.id === 'cli';
  const isAiPrompt = currentTab.id === 'ai-prompt';

  return (
    <div className={`rounded-2xl bg-[#1E1E1E] border border-white/[0.1] shadow-2xl overflow-hidden font-mono text-xs ${className}`}>
      
      {/* VS Code Window Top Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between px-4 py-2.5 bg-[#181818] border-b border-black/40 gap-3 select-none">
        
        {/* Left: macOS Traffic Lights + Active File Tabs */}
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
            <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
            <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
          </div>

          {/* File Tabs */}
          <div className="flex items-center gap-1 shrink-0">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`
                    px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap
                    ${isActive
                      ? tab.id === 'ai-prompt'
                        ? 'bg-[#1E1E1E] text-[#FFCC48] border-t-2 border-[#FFCC48] font-semibold shadow-xs'
                        : 'bg-[#1E1E1E] text-white border-t-2 border-[#FE385B] font-semibold shadow-xs'
                      : 'text-[#8E8E93] hover:text-[#D4D4D4] hover:bg-white/[0.04]'
                    }
                  `}
                >
                  {tab.id === 'cli' ? (
                    <Terminal size={12} className="text-[#00F0FF]" />
                  ) : tab.id === 'ai-prompt' ? (
                    <Bot size={13} className="text-[#FFCC48]" />
                  ) : (
                    <FileCode size={12} className="text-[#FE385B]" />
                  )}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Quick Actions, AI Prompt Button & Copy */}
        <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
          
          {/* Dedicated Direct AI Prompt Copy Button */}
          <button
            onClick={handleCopyAi}
            title="Copiar prompt listo para ChatGPT, Claude, Cursor, v0 o Antigravity"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#FFCC48]/20 to-[#FE385B]/20 border border-[#FFCC48]/30 hover:border-[#FFCC48] text-[#FFCC48] hover:text-white font-mono text-[11px] font-semibold transition-all active:scale-95 cursor-pointer shadow-xs"
          >
            {copiedPrompt ? <Check size={12} className="text-emerald-400" /> : <Bot size={12} className="text-[#FFCC48]" />}
            <span>{copiedPrompt ? '¡Prompt Copiado!' : 'Copiar Prompt IA'}</span>
          </button>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.08] hover:bg-[#FE385B] text-white font-mono text-[11px] font-semibold transition-all active:scale-95 cursor-pointer shadow-xs"
          >
            {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
            <span>{copied ? '¡Copiado!' : 'Copiar Código'}</span>
          </button>
        </div>

      </div>

      {/* Editor Body */}
      {isCli ? (
        <div className="p-6 space-y-4 font-mono text-xs bg-[#1E1E1E]">
          <div className="space-y-1.5">
            <span className="text-[#6A9955] block">// 01 · Instalar vía CLI en tu proyecto Next.js:</span>
            <div className="p-4 rounded-xl bg-[#121212] border border-white/[0.08] text-[#00F0FF] flex items-center justify-between">
              <code>{currentTab.code}</code>
              <button
                onClick={handleCopy}
                className="p-1.5 text-[#8E8E93] hover:text-white transition-colors"
                title="Copiar comando"
              >
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              </button>
            </div>
          </div>

          <div className="space-y-1 pt-2 font-sans text-xs text-[#8E8E93]">
            <span className="font-mono text-[#6A9955] block">// 02 · Compatibilidad:</span>
            <p>Next.js 13/14/15 (App Router), React 18/19, Tailwind CSS y TypeScript estricto.</p>
          </div>
        </div>
      ) : (
        <div className="flex overflow-x-auto max-h-[460px] no-scrollbar selection:bg-[#FE385B]/40">
          
          {/* Line Numbers Column */}
          <div className="py-4 pl-4 pr-3 select-none text-right font-mono text-[11.5px] text-[#555555] border-r border-black/40 bg-[#1A1A1A]">
            {lines.map((_, i) => (
              <div key={i} className="leading-relaxed">
                {i + 1}
              </div>
            ))}
          </div>

          {/* Syntax Code Column */}
          <pre className="py-4 px-4 font-mono text-[11.5px] leading-relaxed flex-1 overflow-x-auto">
            <code>
              {lines.map((line, i) => (
                <div key={i} className="whitespace-pre">
                  {tokenizeLine(line)}
                </div>
              ))}
            </code>
          </pre>

        </div>
      )}

      {/* VS Code Bottom Status Bar */}
      <div className="px-4 py-1 bg-[#121212] border-t border-black/40 flex items-center justify-between text-[10px] text-[#8E8E93] font-mono select-none">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-[#00F0FF]">
            <Sparkles size={10} /> UXIO Design Engine
          </span>
          <span>Ln {lines.length}, Col 1</span>
        </div>
        <div>
          <span>Spaces: 2 · UTF-8 · Prettier</span>
        </div>
      </div>

    </div>
  );
}
