import { SlideData } from './types';
import { getLiveLab1SlidesBlock1 } from './m01-04-slides-block1';
import { getLiveLab1SlidesBlock2 } from './m01-04-slides-block2';
import { getLiveLab1SlidesBlock3 } from './m01-04-slides-block3';
import { getLiveLab1SlidesBlock4 } from './m01-04-slides-block4';

export const getLiveLab1Slides = (isEs: boolean): SlideData[] => {
  return [
    ...getLiveLab1SlidesBlock1(isEs),
    ...getLiveLab1SlidesBlock2(isEs),
    ...getLiveLab1SlidesBlock3(isEs),
    ...getLiveLab1SlidesBlock4(isEs),
  ];
};
