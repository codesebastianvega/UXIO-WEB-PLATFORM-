export const DOCK_NAV_CODE = `'use client';

import React, { useRef, useState } from 'react';
import { Home, Compass, Sparkles, FolderGit2, Terminal, Settings } from 'lucide-react';

export interface DockItemConfig {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export interface ObsidianDockNavProps {
  items?: DockItemConfig[];
  variant?: 'obsidian' | 'glass' | 'frosted';
  accentColor?: string;
  baseSize?: number;
  maxScale?: number;
  distance?: number;
  gap?: number;
  showTooltips?: boolean;
  showIndicators?: boolean;
  className?: string;
}

const DEFAULT_ITEMS: DockItemConfig[] = [
  { id: 'home', label: 'Inicio', icon: <Home size={18} />, active: true },
  { id: 'explore', label: 'Explorar', icon: <Compass size={18} /> },
  { id: 'ai', label: 'AI Core', icon: <Sparkles size={18} />, active: true },
  { id: 'projects', label: 'Proyectos', icon: <FolderGit2 size={18} /> },
  { id: 'terminal', label: 'Consola', icon: <Terminal size={18} /> },
  { id: 'settings', label: 'Ajustes', icon: <Settings size={18} /> },
];

function DockItem({
  item,
  mouseX,
  baseSize,
  maxScale,
  distance,
  accentColor,
  showTooltips,
  showIndicators,
}: {
  item: DockItemConfig;
  mouseX: number | null;
  baseSize: number;
  maxScale: number;
  distance: number;
  accentColor: string;
  showTooltips: boolean;
  showIndicators: boolean;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isBouncing, setIsBouncing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  let scale = 1;
  if (mouseX !== null && itemRef.current) {
    const rect = itemRef.current.getBoundingClientRect();
    const itemCenter = rect.left + rect.width / 2;
    const dist = Math.abs(mouseX - itemCenter);
    if (dist < distance) {
      const normDist = dist / distance;
      scale = 1 + (maxScale - 1) * Math.cos(normDist * (Math.PI / 2));
    }
  }

  const currentSize = baseSize * scale;

  const handleClick = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 500);
    if (item.onClick) item.onClick();
  };

  return (
    <div
      ref={itemRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      style={{
        width: \`\${currentSize}px\`,
        height: \`\${currentSize}px\`,
      }}
      className={\`relative flex-shrink-0 flex items-center justify-center rounded-2xl cursor-pointer transition-[width,height] duration-75 ease-out select-none group \${
        isBouncing ? 'animate-bounce' : ''
      }\`}
    >
      {showTooltips && isHovered && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-xl bg-black/85 dark:bg-[#1A1A1D]/95 text-white font-mono text-[10px] font-semibold tracking-wide whitespace-nowrap shadow-xl border border-white/15 backdrop-blur-md pointer-events-none animate-fadeIn z-30 flex items-center gap-1">
          <span>{item.label}</span>
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
        </div>
      )}

      <div
        className="w-full h-full rounded-2xl flex items-center justify-center transition-all duration-150 relative overflow-hidden border border-white/10"
        style={{
          backgroundColor: isHovered ? \`\${accentColor}25\` : 'rgba(255, 255, 255, 0.05)',
          borderColor: isHovered ? \`\${accentColor}60\` : undefined,
          boxShadow: isHovered ? \`0 8px 24px -4px \${accentColor}40\` : undefined,
        }}
      >
        <div
          style={{
            transform: \`scale(\${scale > 1.2 ? scale * 0.9 : 1})\`,
            color: isHovered ? accentColor : undefined,
          }}
          className="transition-transform duration-75 text-[#EDEDEE]"
        >
          {item.icon}
        </div>
      </div>

      {showIndicators && item.active && (
        <div
          className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-all duration-200"
          style={{
            backgroundColor: isHovered ? accentColor : '#8E8E93',
            boxShadow: isHovered ? \`0 0 8px \${accentColor}\` : undefined,
          }}
        />
      )}
    </div>
  );
}

/**
 * ObsidianDockNav - macOS-inspired physical magnification dock.
 * Uses real flex width/height layout expansion to eliminate visual overlapping.
 * 
 * Open Source UI Primitive by UXIO Studio & Labs.
 * License: MIT
 */
export default function ObsidianDockNav({
  items = DEFAULT_ITEMS,
  variant = 'obsidian',
  accentColor = '#00F0FF',
  baseSize = 44,
  maxScale = 1.8,
  distance = 110,
  gap = 10,
  showTooltips = true,
  showIndicators = true,
  className = '',
}: ObsidianDockNavProps) {
  const [mouseX, setMouseX] = useState<number | null>(null);

  const getVariantStyles = () => {
    switch (variant) {
      case 'glass':
        return 'bg-white/10 dark:bg-white/[0.07] border-white/20 shadow-2xl backdrop-blur-2xl';
      case 'frosted':
        return 'bg-white/80 dark:bg-[#1E1E22]/80 border-black/10 dark:border-white/15 shadow-xl backdrop-blur-md';
      case 'obsidian':
      default:
        return 'bg-[#0D0D0E]/90 border-white/[0.12] shadow-2xl shadow-black/80 backdrop-blur-xl';
    }
  };

  return (
    <div
      onMouseMove={(e) => setMouseX(e.clientX)}
      onMouseLeave={() => setMouseX(null)}
      style={{
        gap: \`\${gap}px\`,
        paddingLeft: \`\${gap * 1.2}px\`,
        paddingRight: \`\${gap * 1.2}px\`,
      }}
      className={\`inline-flex items-end py-2.5 rounded-3xl border transition-colors \${getVariantStyles()} \${className}\`}
    >
      {items.map((item) => (
        <DockItem
          key={item.id}
          item={item}
          mouseX={mouseX}
          baseSize={baseSize}
          maxScale={maxScale}
          distance={distance}
          accentColor={accentColor}
          showTooltips={showTooltips}
          showIndicators={showIndicators}
        />
      ))}
    </div>
  );
}
`;
