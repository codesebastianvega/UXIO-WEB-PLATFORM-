import { InstructorNotes } from './types';
import { getLiveLabInstructorNotesPart1 } from './m00-03-notes-part1';
import { getLiveLabInstructorNotesPart2 } from './m00-03-notes-part2';

export const getLiveLabInstructorNotes = (isEs: boolean): Record<string, InstructorNotes> => {
  return {
    ...getLiveLabInstructorNotesPart1(isEs),
    ...getLiveLabInstructorNotesPart2(isEs),
  };
};
