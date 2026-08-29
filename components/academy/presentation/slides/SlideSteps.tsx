import React from 'react';
import { SlideData } from '@/data/academy/creator-lab/presentations/types';

export default function SlideSteps({ slide }: { slide: SlideData }) {
  const steps = slide.steps;

  return (
    <div className="w-full h-full flex flex-col justify-between p-8 sm:p-12 lg:p-16 select-none space-y-6 overflow-hidden">
      {/* Header */}
      <div className="space-y-2">
        {slide.tag && (
          <span className="font-mono text-xs text-[#FE385B] uppercase tracking-widest font-bold bg-[#FE385B]/10 px-3 py-1 rounded-md border border-[#FE385B]/20 inline-block">
            {slide.tag}
          </span>
        )}
        <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
          {slide.title}
        </h2>
      </div>

      {/* Steps Row */}
      {steps && (
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 my-auto">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#FE385B]/30 transition-colors flex flex-col justify-between space-y-3"
            >
              <span className="font-mono text-lg sm:text-2xl font-black text-[#FE385B]">
                {st.number}
              </span>
              <div>
                <h3 className="font-display font-bold text-xs sm:text-sm text-white">
                  {st.title}
                </h3>
                <p className="font-sans text-[11px] sm:text-xs text-[#8E8E93] mt-1 leading-snug">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
