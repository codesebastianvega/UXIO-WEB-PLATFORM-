'use client';

import { useState, useCallback, useMemo } from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';

interface UsePresentationStepsProps {
  slides: SlideData[];
  onSlideChanged?: (index: number) => void;
  onStepChanged?: (step: number, totalSteps: number) => void;
}

export function usePresentationSteps({
  slides,
  onSlideChanged,
  onStepChanged,
}: UsePresentationStepsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealedStep, setRevealedStep] = useState(1);

  const totalSlides = slides.length;
  const currentSlide = slides[currentIndex] || slides[0];

  // Number of reveal steps needed for the active slide
  const currentSlideSteps = useMemo(() => {
    if (!currentSlide) return 1;
    if (currentSlide.points?.length) return currentSlide.points.length;
    if (currentSlide.steps?.length) return currentSlide.steps.length;
    if (currentSlide.type === 'comparison') return 2;
    if (currentSlide.stats?.length) return currentSlide.stats.length;
    return 1;
  }, [currentSlide]);

  // Persistent block spotlight color: inherits the latest seen statement/block color
  const activeBlockColor = useMemo(() => {
    for (let i = currentIndex; i >= 0; i--) {
      const s = slides[i];
      if (s?.blockColor) return s.blockColor;
      if (s?.type === 'statement' && s?.bgColor) return s.bgColor;
    }
    return '#FE385B';
  }, [slides, currentIndex]);

  const handlePrev = useCallback(() => {
    if (revealedStep > 1) {
      const prevStep = revealedStep - 1;
      setRevealedStep(prevStep);
      onStepChanged?.(prevStep, currentSlideSteps);
      return;
    }

    if (currentIndex > 0) {
      const prevIdx = currentIndex - 1;
      const prevSlide = slides[prevIdx];
      const prevSteps = prevSlide?.points?.length || prevSlide?.steps?.length || (prevSlide?.type === 'comparison' ? 2 : 1);
      setCurrentIndex(prevIdx);
      setRevealedStep(1);
      onSlideChanged?.(prevIdx);
      onStepChanged?.(1, prevSteps);
    }
  }, [revealedStep, currentIndex, currentSlideSteps, slides, onSlideChanged, onStepChanged]);

  const handleNext = useCallback(() => {
    if (revealedStep < currentSlideSteps) {
      const nextStep = revealedStep + 1;
      setRevealedStep(nextStep);
      onStepChanged?.(nextStep, currentSlideSteps);
      return;
    }

    if (currentIndex < totalSlides - 1) {
      const nextIdx = currentIndex + 1;
      const nextSlide = slides[nextIdx];
      const nextSteps = nextSlide?.points?.length || nextSlide?.steps?.length || (nextSlide?.type === 'comparison' ? 2 : 1);
      setCurrentIndex(nextIdx);
      setRevealedStep(1);
      onSlideChanged?.(nextIdx);
      onStepChanged?.(1, nextSteps);
    }
  }, [revealedStep, currentSlideSteps, currentIndex, totalSlides, slides, onSlideChanged, onStepChanged]);

  const goToSlide = useCallback((index: number) => {
    const validIdx = Math.max(0, Math.min(totalSlides - 1, index));
    const targetSlide = slides[validIdx];
    const targetSteps = targetSlide?.points?.length || targetSlide?.steps?.length || (targetSlide?.type === 'comparison' ? 2 : 1);
    setCurrentIndex(validIdx);
    setRevealedStep(1);
    onStepChanged?.(1, targetSteps);
  }, [totalSlides, slides, onStepChanged]);

  const goToStep = useCallback((step: number) => {
    const validStep = Math.max(1, Math.min(currentSlideSteps, step));
    setRevealedStep(validStep);
  }, [currentSlideSteps]);

  return {
    currentIndex,
    revealedStep,
    totalSlides,
    currentSlide,
    currentSlideSteps,
    activeBlockColor,
    handlePrev,
    handleNext,
    goToSlide,
    goToStep,
  };
}
