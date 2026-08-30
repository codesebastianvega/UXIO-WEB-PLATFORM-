'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  TelestratorStroke,
  TelestratorTool,
  TelestratorPoint,
} from '@/lib/academy/presentation-channel';

interface UseTelestratorProps {
  slideId: string;
  onBroadcastStrokeStart?: (stroke: TelestratorStroke) => void;
  onBroadcastStrokeUpdate?: (strokeId: string, point: TelestratorPoint, endPoint?: TelestratorPoint) => void;
  onBroadcastStrokeEnd?: (stroke: TelestratorStroke) => void;
  onBroadcastClear?: (slideId: string) => void;
}

export function useTelestrator({
  slideId,
  onBroadcastStrokeStart,
  onBroadcastStrokeUpdate,
  onBroadcastStrokeEnd,
  onBroadcastClear,
}: UseTelestratorProps) {
  const [activeTool, setActiveTool] = useState<TelestratorTool>('none');
  const [strokesBySlide, setStrokesBySlide] = useState<Record<string, TelestratorStroke[]>>({});
  const [currentStroke, setCurrentStroke] = useState<TelestratorStroke | null>(null);

  const activeStrokeRef = useRef<TelestratorStroke | null>(null);
  activeStrokeRef.current = currentStroke;

  // Colors & stroke weights
  const getToolConfig = (tool: TelestratorTool) => {
    switch (tool) {
      case 'laser':
        return { color: '#FE385B', size: 6, opacity: 1 };
      case 'highlighter':
        return { color: '#FFCC48', size: 24, opacity: 0.38 };
      case 'circle':
        return { color: '#00F0FF', size: 4, opacity: 0.95 };
      default:
        return { color: '#FE385B', size: 4, opacity: 1 };
    }
  };

  // Laser fade animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setStrokesBySlide(prev => {
        const now = Date.now();
        let changed = false;
        const next: Record<string, TelestratorStroke[]> = {};

        for (const [sId, strokes] of Object.entries(prev)) {
          const remaining = strokes
            .map(st => {
              if (st.tool === 'laser') {
                const elapsed = now - st.createdAt;
                if (elapsed > 2500) {
                  changed = true;
                  return null;
                }
                const newOpacity = Math.max(0, 1 - elapsed / 2500);
                if (st.opacity !== newOpacity) changed = true;
                return { ...st, opacity: newOpacity };
              }
              return st;
            })
            .filter(Boolean) as TelestratorStroke[];

          next[sId] = remaining;
        }

        return changed ? next : prev;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const startDrawing = useCallback(
    (point: TelestratorPoint) => {
      if (activeTool === 'none') return;
      const cfg = getToolConfig(activeTool);
      const newStroke: TelestratorStroke = {
        id: `strk-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        slideId,
        tool: activeTool,
        color: cfg.color,
        size: cfg.size,
        opacity: cfg.opacity,
        points: [point],
        startPoint: point,
        endPoint: point,
        createdAt: Date.now(),
      };

      setCurrentStroke(newStroke);
      onBroadcastStrokeStart?.(newStroke);
    },
    [activeTool, slideId, onBroadcastStrokeStart]
  );

  const updateDrawing = useCallback(
    (point: TelestratorPoint) => {
      if (!activeStrokeRef.current) return;
      const strokeId = activeStrokeRef.current.id;

      setCurrentStroke(prev => {
        if (!prev) return null;
        return {
          ...prev,
          points: [...prev.points, point],
          endPoint: point,
        };
      });

      onBroadcastStrokeUpdate?.(strokeId, point, point);
    },
    [onBroadcastStrokeUpdate]
  );

  const endDrawing = useCallback(() => {
    if (!activeStrokeRef.current) return;
    const finished = activeStrokeRef.current;

    setStrokesBySlide(prev => ({
      ...prev,
      [finished.slideId]: [...(prev[finished.slideId] || []), finished],
    }));

    setCurrentStroke(null);
    onBroadcastStrokeEnd?.(finished);
  }, [onBroadcastStrokeEnd]);

  const clearSlideDrawings = useCallback(
    (targetSlideId: string) => {
      setStrokesBySlide(prev => {
        const next = { ...prev };
        delete next[targetSlideId];
        return next;
      });
      setCurrentStroke(null);
      onBroadcastClear?.(targetSlideId);
    },
    [onBroadcastClear]
  );

  // Handlers for remote incoming strokes
  const handleRemoteStrokeStart = useCallback((stroke: TelestratorStroke) => {
    setCurrentStroke(stroke);
  }, []);

  const handleRemoteStrokeUpdate = useCallback((strokeId: string, point: TelestratorPoint, endPoint?: TelestratorPoint) => {
    setCurrentStroke(prev => {
      if (!prev || prev.id !== strokeId) return prev;
      return {
        ...prev,
        points: [...prev.points, point],
        endPoint: endPoint || point,
      };
    });
  }, []);

  const handleRemoteStrokeEnd = useCallback((stroke: TelestratorStroke) => {
    setStrokesBySlide(prev => ({
      ...prev,
      [stroke.slideId]: [...(prev[stroke.slideId] || []), stroke],
    }));
    setCurrentStroke(null);
  }, []);

  const handleRemoteClear = useCallback((sId: string) => {
    setStrokesBySlide(prev => {
      const next = { ...prev };
      delete next[sId];
      return next;
    });
    setCurrentStroke(null);
  }, []);

  const currentSlideStrokes = strokesBySlide[slideId] || [];

  return {
    activeTool,
    setActiveTool,
    currentSlideStrokes,
    currentStroke,
    startDrawing,
    updateDrawing,
    endDrawing,
    clearSlideDrawings,
    handleRemoteStrokeStart,
    handleRemoteStrokeUpdate,
    handleRemoteStrokeEnd,
    handleRemoteClear,
  };
}
