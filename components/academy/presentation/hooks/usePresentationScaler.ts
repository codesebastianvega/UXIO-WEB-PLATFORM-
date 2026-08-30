'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

export function usePresentationScaler(isFullscreen: boolean, isTeleprompterOpen: boolean) {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const stageContainerRef = useRef<HTMLDivElement>(null);

  const updateScale = useCallback(() => {
    if (!stageContainerRef.current) return;
    const rect = stageContainerRef.current.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const baseWidth = 1280;
    const baseHeight = 720;
    const availableWidth = rect.width - 24;
    const availableHeight = rect.height - 16;

    const scaleX = availableWidth / baseWidth;
    const scaleY = availableHeight / baseHeight;
    setScale(Math.max(0.45, Math.min(2.5, Math.min(scaleX, scaleY))));
  }, []);

  useEffect(() => {
    updateScale();
    const stageEl = stageContainerRef.current;
    if (!stageEl) return;

    const observer = new ResizeObserver(updateScale);
    observer.observe(stageEl);
    window.addEventListener('resize', updateScale);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, [updateScale, isFullscreen, isTeleprompterOpen]);

  return {
    scale,
    containerRef,
    stageContainerRef,
    updateScale,
  };
}
