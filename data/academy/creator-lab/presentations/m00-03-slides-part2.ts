import { SlideData } from './types';
import { getLiveLabBlock3 } from './m00-03-slides-block3';
import { getLiveLabBlock4 } from './m00-03-slides-block4';
import { getLiveLabBlock5 } from './m00-03-slides-block5';

export const getLiveLabSlidesPart2 = (isEs: boolean): SlideData[] => {
  return [
    ...getLiveLabBlock3(isEs),
    ...getLiveLabBlock4(isEs),
    ...getLiveLabBlock5(isEs),
  ];
};
