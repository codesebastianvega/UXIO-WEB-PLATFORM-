export const NOISE_MESH_CODE = `'use client';

import React, { useRef, useEffect, useCallback } from 'react';

export interface NoiseMeshCanvasProps extends React.HTMLAttributes<HTMLDivElement> {
  colors?: string[];
  speed?: number;
  noiseOpacity?: number;
  blurIntensity?: number;
  mouseInfluence?: number;
  className?: string;
}

interface Orb {
  x: number;
  y: number;
  originX: number;
  originY: number;
  radius: number;
  color: string;
  angle: number;
  angleSpeed: number;
  orbitRadius: number;
}

/**
 * NoiseMeshCanvas - High-performance procedural generative canvas
 * with organic orbiting mesh gradient blobs and analog film grain noise.
 * 
 * Open Source UI Component by UXIO Studio & Labs.
 * License: MIT
 */
export default function NoiseMeshCanvas({
  colors = ['#7928CA', '#00F0FF', '#FE385B'],
  speed = 1.0,
  noiseOpacity = 0.12,
  blurIntensity = 70,
  mouseInfluence = 0.4,
  className = '',
  ...props
}: NoiseMeshCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noiseCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const orbsRef = useRef<Orb[]>([]);
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  const mouseTarget = useRef({ x: 0.5, y: 0.5 });
  const animFrameId = useRef<number | null>(null);

  // 1. Generate Static Film Grain Noise Tile (Offscreen Pattern)
  const generateNoisePattern = useCallback(() => {
    const size = 128;
    const offCanvas = document.createElement('canvas');
    offCanvas.width = size;
    offCanvas.height = size;
    const ctx = offCanvas.getContext('2d');
    if (!ctx) return null;

    const imgData = ctx.createImageData(size, size);
    const data = imgData.data;

    for (let i = 0; i < data.length; i += 4) {
      const val = Math.floor(Math.random() * 255);
      data[i] = val;
      data[i + 1] = val;
      data[i + 2] = val;
      data[i + 3] = 255;
    }

    ctx.putImageData(imgData, 0, 0);
    return offCanvas;
  }, []);

  // 2. Initialize Orbs based on Colors
  useEffect(() => {
    const newOrbs: Orb[] = colors.map((color, idx) => {
      const angle = (idx * (Math.PI * 2)) / colors.length;
      return {
        x: 0.5,
        y: 0.5,
        originX: 0.3 + 0.4 * Math.cos(angle),
        originY: 0.3 + 0.4 * Math.sin(angle),
        radius: 0.35 + (idx % 2 === 0 ? 0.1 : 0),
        color,
        angle,
        angleSpeed: (idx % 2 === 0 ? 0.008 : -0.006),
        orbitRadius: 0.22 + (idx * 0.04),
      };
    });
    orbsRef.current = newOrbs;
  }, [colors]);

  // 3. Render Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    noiseCanvasRef.current = generateNoisePattern();

    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 350);

    const handleResize = () => {
      if (canvas && canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth;
        height = canvas.height = canvas.parentElement.clientHeight;
      }
    };

    window.addEventListener('resize', handleResize);

    const render = () => {
      mousePos.current.x += (mouseTarget.current.x - mousePos.current.x) * 0.06;
      mousePos.current.y += (mouseTarget.current.y - mousePos.current.y) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // Base Background Tone
      ctx.fillStyle = '#0D0D0E';
      ctx.fillRect(0, 0, width, height);

      // Draw Gradient Mesh Orbs
      orbsRef.current.forEach((orb) => {
        orb.angle += orb.angleSpeed * speed;

        const targetX = (orb.originX + Math.cos(orb.angle) * orb.orbitRadius) * width;
        const targetY = (orb.originY + Math.sin(orb.angle) * orb.orbitRadius) * height;

        const offsetX = (mousePos.current.x - 0.5) * width * mouseInfluence;
        const offsetY = (mousePos.current.y - 0.5) * height * mouseInfluence;

        orb.x = targetX + offsetX;
        orb.y = targetY + offsetY;

        const drawRadius = orb.radius * Math.min(width, height);

        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          drawRadius
        );

        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(0.6, \`\${orb.color}99\`);
        gradient.addColorStop(1, 'transparent');

        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, drawRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw Film Grain Noise
      if (noiseCanvasRef.current && noiseOpacity > 0) {
        ctx.save();
        ctx.globalAlpha = noiseOpacity;
        ctx.globalCompositeOperation = 'overlay';
        const pattern = ctx.createPattern(noiseCanvasRef.current, 'repeat');
        if (pattern) {
          ctx.fillStyle = pattern;
          ctx.fillRect(0, 0, width, height);
        }
        ctx.restore();
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [speed, noiseOpacity, mouseInfluence, generateNoisePattern]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseTarget.current = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };
  };

  const handleMouseLeave = () => {
    mouseTarget.current = { x: 0.5, y: 0.5 };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={\`relative w-full h-full overflow-hidden rounded-2xl \${className}\`}
      {...props}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{
          filter: blurIntensity > 0 ? \`blur(\${blurIntensity}px)\` : undefined,
          transform: 'scale(1.25)',
        }}
      />
    </div>
  );
}
`;
