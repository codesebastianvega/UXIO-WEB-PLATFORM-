import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { CardDetailData } from './SlideDetailModal';
import SlideTitle from './slides/SlideTitle';
import SlideSection from './slides/SlideSection';
import SlideConcept from './slides/SlideConcept';
import SlideComparison from './slides/SlideComparison';
import SlideSteps from './slides/SlideSteps';
import SlideChallenge from './slides/SlideChallenge';
import SlideGlossary from './slides/SlideGlossary';
import SlideClosing from './slides/SlideClosing';
import SlideExample from './slides/SlideExample';
import SlideChecklist from './slides/SlideChecklist';
import SlideSummary from './slides/SlideSummary';
import SlideFallback from './slides/SlideFallback';

interface SlideRendererProps {
  slide: SlideData;
  theme?: 'light' | 'dark';
  onOpenDetail?: (data: CardDetailData) => void;
}

export default function SlideRenderer({
  slide,
  theme = 'light',
  onOpenDetail,
}: SlideRendererProps) {
  switch (slide.type) {
    case 'title':
      return <SlideTitle slide={slide} theme={theme} />;
    case 'section':
      return <SlideSection slide={slide} theme={theme} />;
    case 'concept':
      return <SlideConcept slide={slide} theme={theme} onOpenDetail={onOpenDetail} />;
    case 'comparison':
      return <SlideComparison slide={slide} theme={theme} onOpenDetail={onOpenDetail} />;
    case 'steps':
      return <SlideSteps slide={slide} theme={theme} onOpenDetail={onOpenDetail} />;
    case 'challenge':
      return <SlideChallenge slide={slide} theme={theme} onOpenDetail={onOpenDetail} />;
    case 'glossary':
      return <SlideGlossary slide={slide} theme={theme} onOpenDetail={onOpenDetail} />;
    case 'closing':
      return <SlideClosing slide={slide} theme={theme} />;
    case 'example':
      return <SlideExample slide={slide} />;
    case 'checklist':
      return <SlideChecklist slide={slide} />;
    case 'summary':
      return <SlideSummary slide={slide} theme={theme} />;
    default:
      return <SlideFallback slide={slide} />;
  }
}
