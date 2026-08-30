'use client';

import { useEffect } from 'react';
import { CardDetailData } from '../SlideDetailModal';

interface UsePresentationKeyboardProps {
  onPrev: () => void;
  onNext: () => void;
  onToggleFullscreen: () => void;
  onToggleTheme: () => void;
  onToggleTeleprompter: () => void;
  onPrint: () => void;
  modalDetail: CardDetailData | null;
  onCloseModal: () => void;
}

export function usePresentationKeyboard({
  onPrev,
  onNext,
  onToggleFullscreen,
  onToggleTheme,
  onToggleTeleprompter,
  onPrint,
  modalDetail,
  onCloseModal,
}: UsePresentationKeyboardProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (modalDetail && (e.code === 'Escape' || e.code === 'Space')) {
        onCloseModal();
        return;
      }

      switch (e.code) {
        case 'ArrowLeft':
        case 'KeyH':
        case 'KeyA':
          e.preventDefault();
          onPrev();
          break;
        case 'ArrowRight':
        case 'Space':
        case 'KeyL':
        case 'KeyD':
          e.preventDefault();
          onNext();
          break;
        case 'KeyF':
          e.preventDefault();
          onToggleFullscreen();
          break;
        case 'KeyT':
          e.preventDefault();
          onToggleTheme();
          break;
        case 'KeyG':
          e.preventDefault();
          onToggleTeleprompter();
          break;
        case 'KeyP':
          e.preventDefault();
          onPrint();
          break;
        case 'Escape':
          if (modalDetail) onCloseModal();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    onPrev,
    onNext,
    onToggleFullscreen,
    onToggleTheme,
    onToggleTeleprompter,
    onPrint,
    modalDetail,
    onCloseModal,
  ]);
}
