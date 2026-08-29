import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';
import { Award, CheckCircle } from 'lucide-react';

export default function SlideChallenge({ slide }: { slide: SlideData }) {
  const challenge = slide.challengeData;

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 lg:p-16 select-none space-y-6 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          {slide.tag && (
            <span className="font-mono text-xs text-[#10B981] uppercase tracking-widest font-bold bg-[#10B981]/10 px-3 py-1 rounded-md border border-[#10B981]/20 inline-block">
              {slide.tag}
            </span>
          )}
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
            {slide.title}
          </h2>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-[#10B981]/10 text-[#10B981] flex items-center justify-center border border-[#10B981]/20">
          <Award size={24} />
        </div>
      </div>

      {/* Challenge Data Card */}
      {challenge && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-auto">
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-2">
            <span className="font-mono text-xs text-[#10B981] uppercase font-bold tracking-wider">
              ¿Qué debes hacer?
            </span>
            <p className="font-sans text-xs sm:text-sm text-white leading-relaxed">
              {challenge.whatToDo}
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] space-y-2">
            <span className="font-mono text-xs text-[#00F0FF] uppercase font-bold tracking-wider">
              ¿Qué debes entregar?
            </span>
            <p className="font-sans text-xs sm:text-sm text-white leading-relaxed">
              {challenge.whatToDeliver}
            </p>
          </div>

          {challenge.criteria && challenge.criteria.length > 0 && (
            <div className="sm:col-span-2 p-4 sm:p-5 rounded-2xl bg-[#10B981]/[0.05] border border-[#10B981]/20">
              <span className="font-mono text-xs text-[#10B981] uppercase font-bold tracking-wider block mb-2">
                Criterios de Evaluación
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {challenge.criteria.map((cr, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-sans text-white">
                    <CheckCircle size={13} className="text-[#10B981] shrink-0" />
                    <span className="truncate">{cr}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
