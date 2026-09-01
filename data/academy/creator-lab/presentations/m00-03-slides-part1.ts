import { SlideData } from './types';
import { getLiveLabBlock1 } from './m00-03-slides-block1';
import { getLiveLabBlock2 } from './m00-03-slides-block2';

export const getLiveLabSlidesPart1 = (isEs: boolean): SlideData[] => {
  return [
    ...getLiveLabBlock1(isEs),
    ...getLiveLabBlock2(isEs),
  ];
};
