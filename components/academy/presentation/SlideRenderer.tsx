import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import SlideTitle from './slides/SlideTitle';
import SlideSection from './slides/SlideSection';
import SlideConcept from './slides/SlideConcept';
import SlideComparison from './slides/SlideComparison';
import SlideSteps from './slides/SlideSteps';
import SlideChallenge from './slides/SlideChallenge';
import SlideClosing from './slides/SlideClosing';
import SlideExample from './slides/SlideExample';
import SlideChecklist from './slides/SlideChecklist';
import SlideSummary from './slides/SlideSummary';
import SlideFallback from './slides/SlideFallback';

interface SlideRendererProps {
  slide: SlideData;
}

export default function SlideRenderer({ slide }: SlideRendererProps) {
  switch (slide.type) {
    case 'title':
      return <SlideTitle slide={slide} />;
    case 'section':
      return <SlideSection slide={slide} />;
    case 'concept':
      return <SlideConcept slide={slide} />;
    case 'comparison':
      return <SlideComparison slide={slide} />;
    case 'steps':
      return <SlideSteps slide={slide} />;
    case 'challenge':
      return <SlideChallenge slide={slide} />;
    case 'closing':
      return <SlideClosing slide={slide} />;
    case 'example':
      return <SlideExample slide={slide} />;
    case 'checklist':
      return <SlideChecklist slide={slide} />;
    case 'summary':
      return <SlideSummary slide={slide} />;
    default:
      return <SlideFallback slide={slide} />;
  }
}
