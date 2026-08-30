'use client';

import React, { useRef, useCallback } from 'react';
import {
  TelestratorStroke,
  TelestratorPoint,
} from '@/lib/academy/presentation-channel';

interface TelestratorCanvasProps {
  strokes: TelestratorStroke[];
  currentStroke: TelestratorStroke | null;
  isInteractive?: boolean;
  onPointerDown?: (point: TelestratorPoint) => void;
  onPointerMove?: (point: TelestratorPoint) => void;
  onPointerUp?: () => void;
}

export default function TelestratorCanvas({
  strokes,
  currentStroke,
  isInteractive = false,
  onPointerDown,
  onPointerMove,
  onPointerUp,
}: TelestratorCanvasProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  const getNormalizedPoint = useCallback((e: React.PointerEvent<SVGSVGElement>): TelestratorPoint | null => {
    if (!svgRef.current) return null;
    const rect = svgRef.current.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return null;

    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    return { x, y };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isInteractive) return;
    const pt = getNormalizedPoint(e);
    if (pt) {
      (e.target as Element).setPointerCapture?.(e.pointerId);
      onPointerDown?.(pt);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isInteractive) return;
    const pt = getNormalizedPoint(e);
    if (pt) onPointerMove?.(pt);
  };

  const handlePointerUp = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isInteractive) return;
    try {
      (e.target as Element).releasePointerCapture?.(e.pointerId);
    } catch {}
    onPointerUp?.();
  };

  const renderStroke = (stroke: TelestratorStroke) => {
    const opacity = stroke.opacity ?? 1;

    // 1. Circle / Ellipse Tool
    if (stroke.tool === 'circle' && stroke.startPoint && stroke.endPoint) {
      const x1 = stroke.startPoint.x * 1280;
      const y1 = stroke.startPoint.y * 720;
      const x2 = stroke.endPoint.x * 1280;
      const y2 = stroke.endPoint.y * 720;

      const cx = (x1 + x2) / 2;
      const cy = (y1 + y2) / 2;
      const rx = Math.max(8, Math.abs(x2 - x1) / 2);
      const ry = Math.max(8, Math.abs(y2 - y1) / 2);

      return (
        <ellipse
          key={stroke.id}
          cx={cx}
          cy={cy}
          rx={rx}
          ry={ry}
          fill="none"
          stroke={stroke.color}
          strokeWidth={stroke.size}
          strokeDasharray="8 6"
          opacity={opacity}
          className="transition-opacity"
        />
      );
    }

    // 2. Freehand Path (Laser or Highlighter)
    if (!stroke.points || stroke.points.length === 0) return null;

    const pathData = stroke.points.reduce((acc, pt, i) => {
      const px = pt.x * 1280;
      const py = pt.y * 720;
      return i === 0 ? `M ${px} ${py}` : `${acc} L ${px} ${py}`;
    }, '');

    const isLaser = stroke.tool === 'laser';

    return (
      <g key={stroke.id} opacity={opacity}>
        {isLaser && (
          <path
            d={pathData}
            fill="none"
            stroke="#FE385B"
            strokeWidth={stroke.size * 2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.4}
            filter="blur(4px)"
          />
        )}
        <path
          d={pathData}
          fill="none"
          stroke={stroke.color}
          strokeWidth={stroke.size}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    );
  };

  const allStrokes = currentStroke ? [...strokes, currentStroke] : strokes;

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1280 720"
      preserveAspectRatio="none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className={`absolute inset-0 w-full h-full z-40 select-none ${
        isInteractive ? 'cursor-crosshair pointer-events-auto touch-none' : 'pointer-events-none'
      }`}
    >
      {allStrokes.map(renderStroke)}
    </svg>
  );
}
