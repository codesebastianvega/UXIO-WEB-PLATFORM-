import { SlideData } from './types';
import { getLiveLab2SlidesBlock1 } from './m02-04-slides-block1';
import { getLiveLab2SlidesBlock2 } from './m02-04-slides-block2';
import { getLiveLab2SlidesBlock3 } from './m02-04-slides-block3';
import { getLiveLab2SlidesBlock4 } from './m02-04-slides-block4';

export const getLiveLab2Slides = (isEs: boolean): SlideData[] => {
  return [
    ...getLiveLab2SlidesBlock1(isEs),
    ...getLiveLab2SlidesBlock2(isEs),
    ...getLiveLab2SlidesBlock3(isEs),
    ...getLiveLab2SlidesBlock4(isEs),
  ];
};
