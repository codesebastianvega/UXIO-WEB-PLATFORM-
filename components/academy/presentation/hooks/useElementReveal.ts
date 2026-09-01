'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface UseElementRevealOptions {
  slideId: string;
  totalElements: number;
  initialRevealed?: number;
  autoRevealMs?: number;
  enabled?: boolean;
  externalRevealedCount?: number;
}

export function useElementReveal({
  slideId,
  totalElements,
  initialRevealed = 1,
  autoRevealMs = 7000,
  enabled = true,
  externalRevealedCount,
}: UseElementRevealOptions) {
  const [internalRevealedCount, setInternalRevealedCount] = useState<number>(
    enabled ? Math.min(initialRevealed, totalElements) : totalElements
  );

  const prevSlideIdRef = useRef(slideId);

  // Reset when slide changes
  useEffect(() => {
    if (prevSlideIdRef.current !== slideId) {
      prevSlideIdRef.current = slideId;
      setInternalRevealedCount(enabled ? Math.min(initialRevealed, totalElements) : totalElements);
    }
  }, [slideId, totalElements, initialRevealed, enabled]);

  // Reveal next item manually
  const revealNext = useCallback(() => {
    setInternalRevealedCount(prev => {
      if (prev >= totalElements) return prev;
      return prev + 1;
    });
  }, [totalElements]);

  // Auto-reveal timer as a natural pacing guide (only if external count is not controlled)
  useEffect(() => {
    if (externalRevealedCount !== undefined) return;
    if (!enabled || autoRevealMs <= 0 || totalElements <= 1) return;
    if (internalRevealedCount >= totalElements) return;

    const timer = setTimeout(() => {
      setInternalRevealedCount(prev => {
        if (prev >= totalElements) return prev;
        return prev + 1;
      });
    }, autoRevealMs);

    return () => clearTimeout(timer);
  }, [enabled, autoRevealMs, totalElements, internalRevealedCount, slideId, externalRevealedCount]);

  const revealedCount =
    externalRevealedCount !== undefined
      ? Math.min(externalRevealedCount, totalElements)
      : internalRevealedCount;

  const isFullyRevealed = revealedCount >= totalElements;

  const getElementStyle = useCallback(
    (index: number): React.CSSProperties => {
      if (!enabled) return {};
      const isVisible = index < revealedCount;
      return {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.96)',
        transition: 'opacity 420ms cubic-bezier(0.16, 1, 0.3, 1), transform 420ms cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isVisible ? 'auto' : 'none',
      };
    },
    [enabled, revealedCount]
  );

  return {
    revealedCount,
    revealNext,
    isFullyRevealed,
    getElementStyle,
  };
}

