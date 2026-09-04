import { SlideData } from './types';
import { getLiveLab3SlidesBlock1 } from './m03-03-slides-block1';
import { getLiveLab3SlidesBlock2 } from './m03-03-slides-block2';
import { getLiveLab3SlidesBlock3 } from './m03-03-slides-block3';
import { getLiveLab3SlidesBlock4 } from './m03-03-slides-block4';

export const getLiveLab3Slides = (isEs: boolean): SlideData[] => [
  ...getLiveLab3SlidesBlock1(isEs),
  ...getLiveLab3SlidesBlock2(isEs),
  ...getLiveLab3SlidesBlock3(isEs),
  ...getLiveLab3SlidesBlock4(isEs),
];
