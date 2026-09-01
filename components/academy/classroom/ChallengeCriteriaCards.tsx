'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { LessonChallenge as LessonChallengeType } from '@/data/academy/types';

interface ChallengeCriteriaCardsProps {
  challenge: LessonChallengeType;
  isEs: boolean;
}

export default function ChallengeCriteriaCards({
  challenge,
  isEs,
}: ChallengeCriteriaCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-1.5">
        <span className="font-mono text-[10px] text-[#FE385B] uppercase font-bold">
          01. {isEs ? 'QUÉ DEBES HACER' : 'WHAT TO DO'}
        </span>
        <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans leading-relaxed">
          {challenge.whatToDo}
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-1.5">
        <span className="font-mono text-[10px] text-[#FF7F07] uppercase font-bold">
          02. {isEs ? 'ENTREGABLE ESPERADO' : 'DELIVERABLE'}
        </span>
        <p className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans leading-relaxed">
          {challenge.whatToDeliver}
        </p>
      </div>

      <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] space-y-1.5">
        <span className="font-mono text-[10px] text-[#10B981] uppercase font-bold">
          03. {isEs ? 'CRITERIOS DE EVALUACIÓN' : 'CRITERIA'}
        </span>
        {challenge.evaluationCriteria && challenge.evaluationCriteria.length > 0 ? (
          <ul className="text-xs text-[#666666] dark:text-[#8E8E93] font-sans space-y-1">
            {challenge.evaluationCriteria.map((c, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <CheckCircle2 size={14} className="text-[#10B981] shrink-0 mt-0.5" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-[#8E8E93]">
            {isEs ? 'Cumplir con las pautas de la clase.' : 'Follow lesson guidelines.'}
          </p>
        )}
      </div>
    </div>
  );
}
