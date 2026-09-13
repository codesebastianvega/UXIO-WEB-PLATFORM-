import { SlideData } from './types';
import { getLiveLab5Block1 } from './m05-03-slides-block1';
import { getLiveLab5Block2 } from './m05-03-slides-block2';
import { getLiveLab5Block3 } from './m05-03-slides-block3';
import { getLiveLab5Block4 } from './m05-03-slides-block4';

export const getLiveLab5Slides = (isEs: boolean): SlideData[] => {
  return [
    ...getLiveLab5Block1(isEs),
    ...getLiveLab5Block2(isEs),
    ...getLiveLab5Block3(isEs),
    ...getLiveLab5Block4(isEs),
  ];
};
