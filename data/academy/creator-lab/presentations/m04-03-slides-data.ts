import { SlideData } from './types';
import { getLiveLab4SlidesBlock1 } from './m04-03-slides-block1';
import { getLiveLab4SlidesBlock2 } from './m04-03-slides-block2';
import { getLiveLab4SlidesBlock3 } from './m04-03-slides-block3';
import { getLiveLab4SlidesBlock4 } from './m04-03-slides-block4';

export const getLiveLab4Slides = (isEs: boolean): SlideData[] => [
  ...getLiveLab4SlidesBlock1(isEs),
  ...getLiveLab4SlidesBlock2(isEs),
  ...getLiveLab4SlidesBlock3(isEs),
  ...getLiveLab4SlidesBlock4(isEs),
];
