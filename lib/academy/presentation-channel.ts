'use client';

import { useEffect, useRef, useCallback } from 'react';
import { CardDetailData } from '@/components/academy/presentation/SlideDetailModal';

export interface TelestratorPoint {
  x: number;
  y: number;
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

export type SyncPayload =
  | { type: 'SLIDE_CHANGE'; index: number }
  | { type: 'THEME_CHANGE'; theme: 'light' | 'dark' }
  | { type: 'STEP_CHANGE'; step: number; totalSteps: number }
  | { type: 'REQUEST_SYNC' }
  | { type: 'SYNC_RESPONSE'; index: number; theme: 'light' | 'dark'; step?: number; totalSteps?: number }
  | { type: 'DRAW_STROKE_START'; stroke: TelestratorStroke }
  | { type: 'DRAW_STROKE_UPDATE'; strokeId: string; point: TelestratorPoint; endPoint?: TelestratorPoint }
  | { type: 'DRAW_STROKE_END'; stroke: TelestratorStroke }
  | { type: 'CLEAR_SLIDE_DRAWINGS'; slideId: string }
  | { type: 'OPEN_MODAL_DETAIL'; detail: CardDetailData }
  | { type: 'CLOSE_MODAL_DETAIL' }
  | { type: 'CURSOR_MOVE'; point: TelestratorPoint };

export type PresentationSyncMessage = {
  senderId: string;
} & SyncPayload;

interface UsePresentationSyncProps {
  channelId: string;
  currentIndex: number;
  theme: 'light' | 'dark';
  currentStep?: number;
  onSlideChange: (index: number) => void;
  onThemeChange?: (theme: 'light' | 'dark') => void;
  onStepChange?: (step: number, totalSteps: number) => void;
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
  currentStep = 1,
  onSlideChange,
  onThemeChange,
  onStepChange,
  onRemoteStrokeStart,
  onRemoteStrokeUpdate,
  onRemoteStrokeEnd,
  onRemoteClearDrawings,
  onRemoteOpenModal,
  onRemoteCloseModal,
  onRemoteCursorMove,
}: UsePresentationSyncProps) {
  const channelRef = useRef<BroadcastChannel | null>(null);
  const senderIdRef = useRef<string>('');

  if (!senderIdRef.current) {
    senderIdRef.current = Math.random().toString(36).slice(2) + Date.now().toString(36);
  }

  // Keep latest state in refs so the BroadcastChannel listener does not need to reconnect on state change
  const stateRef = useRef({ currentIndex, theme, currentStep });
  useEffect(() => {
    stateRef.current = { currentIndex, theme, currentStep };
  }, [currentIndex, theme, currentStep]);

  // Keep latest callbacks in refs to avoid reconnection loops
  const callbacksRef = useRef({
    onSlideChange,
    onThemeChange,
    onStepChange,
    onRemoteStrokeStart,
    onRemoteStrokeUpdate,
    onRemoteStrokeEnd,
    onRemoteClearDrawings,
    onRemoteOpenModal,
    onRemoteCloseModal,
    onRemoteCursorMove,
  });

  useEffect(() => {
    callbacksRef.current = {
      onSlideChange,
      onThemeChange,
      onStepChange,
      onRemoteStrokeStart,
      onRemoteStrokeUpdate,
      onRemoteStrokeEnd,
      onRemoteClearDrawings,
      onRemoteOpenModal,
      onRemoteCloseModal,
      onRemoteCursorMove,
    };
  });

  const postMsg = useCallback((payload: SyncPayload) => {
    if (!channelRef.current) return;
    try {
      channelRef.current.postMessage({
        senderId: senderIdRef.current,
        ...payload,
      });
    } catch {
      // Ignore broadcast errors in unmounted or private environments
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !('BroadcastChannel' in window)) {
      return;
    }

    const channelName = `uxio-deck-sync-${channelId}`;
    const channel = new BroadcastChannel(channelName);
    channelRef.current = channel;

    const handleMessage = (event: MessageEvent<PresentationSyncMessage>) => {
      const data = event.data;
      if (!data || data.senderId === senderIdRef.current) return;

      const cbs = callbacksRef.current;
      switch (data.type) {
        case 'SLIDE_CHANGE':
          cbs.onSlideChange?.(data.index);
          break;
        case 'THEME_CHANGE':
          cbs.onThemeChange?.(data.theme);
          break;
        case 'STEP_CHANGE':
          cbs.onStepChange?.(data.step, data.totalSteps);
          break;
        case 'REQUEST_SYNC':
          channel.postMessage({
            senderId: senderIdRef.current,
            type: 'SYNC_RESPONSE',
            index: stateRef.current.currentIndex,
            theme: stateRef.current.theme,
            step: stateRef.current.currentStep,
          });
          break;
        case 'SYNC_RESPONSE':
          cbs.onSlideChange?.(data.index);
          cbs.onThemeChange?.(data.theme);
          if (typeof data.step === 'number') {
            cbs.onStepChange?.(data.step, data.totalSteps || 1);
          }
          break;
        case 'DRAW_STROKE_START':
          cbs.onRemoteStrokeStart?.(data.stroke);
          break;
        case 'DRAW_STROKE_UPDATE':
          cbs.onRemoteStrokeUpdate?.(data.strokeId, data.point, data.endPoint);
          break;
        case 'DRAW_STROKE_END':
          cbs.onRemoteStrokeEnd?.(data.stroke);
          break;
        case 'CLEAR_SLIDE_DRAWINGS':
          cbs.onRemoteClearDrawings?.(data.slideId);
          break;
        case 'OPEN_MODAL_DETAIL':
          cbs.onRemoteOpenModal?.(data.detail);
          break;
        case 'CLOSE_MODAL_DETAIL':
          cbs.onRemoteCloseModal?.();
          break;
        case 'CURSOR_MOVE':
          cbs.onRemoteCursorMove?.(data.point);
          break;
      }
    };

    channel.addEventListener('message', handleMessage);
    channel.postMessage({
      senderId: senderIdRef.current,
      type: 'REQUEST_SYNC',
    });

    return () => {
      channel.removeEventListener('message', handleMessage);
      channel.close();
      channelRef.current = null;
    };
  }, [channelId]);

  const broadcastSlideChange = useCallback((index: number) => postMsg({ type: 'SLIDE_CHANGE', index }), [postMsg]);
  const broadcastThemeChange = useCallback((newTheme: 'light' | 'dark') => postMsg({ type: 'THEME_CHANGE', theme: newTheme }), [postMsg]);
  const broadcastStepChange = useCallback((step: number, totalSteps: number) => postMsg({ type: 'STEP_CHANGE', step, totalSteps }), [postMsg]);
  const broadcastStrokeStart = useCallback((stroke: TelestratorStroke) => postMsg({ type: 'DRAW_STROKE_START', stroke }), [postMsg]);
  const broadcastStrokeUpdate = useCallback((strokeId: string, point: TelestratorPoint, endPoint?: TelestratorPoint) => postMsg({ type: 'DRAW_STROKE_UPDATE', strokeId, point, endPoint }), [postMsg]);
  const broadcastStrokeEnd = useCallback((stroke: TelestratorStroke) => postMsg({ type: 'DRAW_STROKE_END', stroke }), [postMsg]);
  const broadcastClearDrawings = useCallback((slideId: string) => postMsg({ type: 'CLEAR_SLIDE_DRAWINGS', slideId }), [postMsg]);
  const broadcastOpenModal = useCallback((detail: CardDetailData) => postMsg({ type: 'OPEN_MODAL_DETAIL', detail }), [postMsg]);
  const broadcastCloseModal = useCallback(() => postMsg({ type: 'CLOSE_MODAL_DETAIL' }), [postMsg]);
  const broadcastCursorMove = useCallback((point: TelestratorPoint) => postMsg({ type: 'CURSOR_MOVE', point }), [postMsg]);

  return {
    broadcastSlideChange,
    broadcastThemeChange,
    broadcastStepChange,
    broadcastStrokeStart,
    broadcastStrokeUpdate,
    broadcastStrokeEnd,
    broadcastClearDrawings,
    broadcastOpenModal,
    broadcastCloseModal,
    broadcastCursorMove,
  };
}
