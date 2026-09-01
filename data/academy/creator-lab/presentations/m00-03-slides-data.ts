import { SlideData } from './types';
import { getLiveLabSlidesPart1 } from './m00-03-slides-part1';
import { getLiveLabSlidesPart2 } from './m00-03-slides-part2';

export const getLiveLabSlides = (isEs: boolean): SlideData[] => {
  return [
    ...getLiveLabSlidesPart1(isEs),
    ...getLiveLabSlidesPart2(isEs),
  ];
};
