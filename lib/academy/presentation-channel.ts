'use client';

import { useEffect, useRef, useCallback } from 'react';
import { CardDetailData } from '@/components/academy/presentation/SlideDetailModal';

export interface TelestratorPoint {
  x: number; // 0..1 normalized to 1280x720 stage
  y: number; // 0..1 normalized
}

export type TelestratorTool = 'none' | 'laser' | 'highlighter' | 'circle';

export interface TelestratorStroke {
  id: string;
  slideId: string;
  tool: TelestratorTool;
  color: string;
  size: number;
  points: TelestratorPoint[];
  startPoint?: TelestratorPoint;
  endPoint?: TelestratorPoint;
  createdAt: number;
  opacity?: number;
}

export type PresentationSyncMessage =
  | { type: 'SLIDE_CHANGE'; index: number }
  | { type: 'THEME_CHANGE'; theme: 'light' | 'dark' }
  | { type: 'REQUEST_SYNC' }
  | { type: 'SYNC_RESPONSE'; index: number; theme: 'light' | 'dark' }
  | { type: 'DRAW_STROKE_START'; stroke: TelestratorStroke }
  | { type: 'DRAW_STROKE_UPDATE'; strokeId: string; point: TelestratorPoint; endPoint?: TelestratorPoint }
  | { type: 'DRAW_STROKE_END'; stroke: TelestratorStroke }
  | { type: 'CLEAR_SLIDE_DRAWINGS'; slideId: string }
  | { type: 'OPEN_MODAL_DETAIL'; detail: CardDetailData }
  | { type: 'CLOSE_MODAL_DETAIL' }
  | { type: 'CURSOR_MOVE'; point: TelestratorPoint };

interface UsePresentationSyncProps {
  channelId: string;
  currentIndex: number;
  theme: 'light' | 'dark';
  onSlideChange: (index: number) => void;
  onThemeChange?: (theme: 'light' | 'dark') => void;
  onRemoteStrokeStart?: (stroke: TelestratorStroke) => void;
  onRemoteStrokeUpdate?: (strokeId: string, point: TelestratorPoint, endPoint?: TelestratorPoint) => void;
  onRemoteStrokeEnd?: (stroke: TelestratorStroke) => void;
  onRemoteClearDrawings?: (slideId: string) => void;
  onRemoteOpenModal?: (detail: CardDetailData) => void;
  onRemoteCloseModal?: () => void;
  onRemoteCursorMove?: (point: TelestratorPoint) => void;
}

export function usePresentationSync({
  channelId,
  currentIndex,
  theme,
  onSlideChange,
  onThemeChange,
  onRemoteStrokeStart,
  onRemoteStrokeUpdate,
  onRemoteStrokeEnd,
  onRemoteClearDrawings,
  onRemoteOpenModal,
  onRemoteCloseModal,
  onRemoteCursorMove,
}: UsePresentationSyncProps) {
  const channelRef = useRef<BroadcastChannel | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('BroadcastChannel' in window)) {
      return;
    }

    const channelName = `uxio-deck-sync-${channelId}`;
    const channel = new BroadcastChannel(channelName);
    channelRef.current = channel;

    const handleMessage = (event: MessageEvent<PresentationSyncMessage>) => {
      const data = event.data;
      if (!data) return;

      switch (data.type) {
        case 'SLIDE_CHANGE':
          onSlideChange(data.index);
          break;
        case 'THEME_CHANGE':
          onThemeChange?.(data.theme);
          break;
        case 'REQUEST_SYNC':
          channel.postMessage({
            type: 'SYNC_RESPONSE',
            index: currentIndex,
            theme,
          });
          break;
        case 'SYNC_RESPONSE':
          onSlideChange(data.index);
          onThemeChange?.(data.theme);
          break;
        case 'DRAW_STROKE_START':
          onRemoteStrokeStart?.(data.stroke);
          break;
        case 'DRAW_STROKE_UPDATE':
          onRemoteStrokeUpdate?.(data.strokeId, data.point, data.endPoint);
          break;
        case 'DRAW_STROKE_END':
          onRemoteStrokeEnd?.(data.stroke);
          break;
        case 'CLEAR_SLIDE_DRAWINGS':
          onRemoteClearDrawings?.(data.slideId);
          break;
        case 'OPEN_MODAL_DETAIL':
          onRemoteOpenModal?.(data.detail);
          break;
        case 'CLOSE_MODAL_DETAIL':
          onRemoteCloseModal?.();
          break;
        case 'CURSOR_MOVE':
          onRemoteCursorMove?.(data.point);
          break;
      }
    };

    channel.addEventListener('message', handleMessage);
    channel.postMessage({ type: 'REQUEST_SYNC' });

    return () => {
      channel.removeEventListener('message', handleMessage);
      channel.close();
      channelRef.current = null;
    };
  }, [
    channelId,
    currentIndex,
    theme,
    onSlideChange,
    onThemeChange,
    onRemoteStrokeStart,
    onRemoteStrokeUpdate,
    onRemoteStrokeEnd,
    onRemoteClearDrawings,
    onRemoteOpenModal,
    onRemoteCloseModal,
    onRemoteCursorMove,
  ]);

  const broadcastSlideChange = useCallback((index: number) => {
    channelRef.current?.postMessage({
      type: 'SLIDE_CHANGE',
      index,
    });
  }, []);

  const broadcastThemeChange = useCallback((newTheme: 'light' | 'dark') => {
    channelRef.current?.postMessage({
      type: 'THEME_CHANGE',
      theme: newTheme,
    });
  }, []);

  const broadcastStrokeStart = useCallback((stroke: TelestratorStroke) => {
    channelRef.current?.postMessage({
      type: 'DRAW_STROKE_START',
      stroke,
    });
  }, []);

  const broadcastStrokeUpdate = useCallback(
    (strokeId: string, point: TelestratorPoint, endPoint?: TelestratorPoint) => {
      channelRef.current?.postMessage({
        type: 'DRAW_STROKE_UPDATE',
        strokeId,
        point,
        endPoint,
      });
    },
    []
  );

  const broadcastStrokeEnd = useCallback((stroke: TelestratorStroke) => {
    channelRef.current?.postMessage({
      type: 'DRAW_STROKE_END',
      stroke,
    });
  }, []);

  const broadcastClearDrawings = useCallback((slideId: string) => {
    channelRef.current?.postMessage({
      type: 'CLEAR_SLIDE_DRAWINGS',
      slideId,
    });
  }, []);

  const broadcastOpenModal = useCallback((detail: CardDetailData) => {
    channelRef.current?.postMessage({
      type: 'OPEN_MODAL_DETAIL',
      detail,
    });
  }, []);

  const broadcastCloseModal = useCallback(() => {
    channelRef.current?.postMessage({
      type: 'CLOSE_MODAL_DETAIL',
    });
  }, []);

  const broadcastCursorMove = useCallback((point: TelestratorPoint) => {
    channelRef.current?.postMessage({
      type: 'CURSOR_MOVE',
      point,
    });
  }, []);

  return {
    broadcastSlideChange,
    broadcastThemeChange,
    broadcastStrokeStart,
    broadcastStrokeUpdate,
    broadcastStrokeEnd,
    broadcastClearDrawings,
    broadcastOpenModal,
    broadcastCloseModal,
    broadcastCursorMove,
  };
}
