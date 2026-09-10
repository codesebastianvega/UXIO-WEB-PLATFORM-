'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Sparkles } from 'lucide-react';
import { TeamMember } from '@/data/people';
import { Locale } from '@/types';

function GitHubIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

interface PeopleGridProps {
  members: TeamMember[];
  lang: Locale;
}

export default function PeopleGrid({ members, lang }: PeopleGridProps) {
  const isEs = lang === 'es';
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const [imgSrcOverrides, setImgSrcOverrides] = useState<Record<string, string>>({});

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-3">
        <div className="space-y-0.5">
          <span className="font-mono text-[10px] text-[#FE385B] uppercase tracking-wider font-semibold">
            // {isEs ? 'DIRECTORIO PRINCIPAL' : 'CORE DIRECTORY'}
          </span>
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white">
            {isEs ? 'Liderazgo & Núcleo Técnico' : 'Leadership & Core Craft'}
          </h2>
        </div>
        <span className="font-mono text-[11px] text-[#8E8E93]">
          [03 UNIDADES]
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => {
          const hasImageError = !!imgErrors[member.id];
          const currentSrc = imgSrcOverrides[member.id] || member.avatarUrl;
          const initials = member.name
            .split(' ')
            .map((n) => n[0])
            .slice(0, 2)
            .join('');

          const handleImageError = () => {
            if (currentSrc.endsWith('.jpg')) {
              setImgSrcOverrides((prev) => ({ ...prev, [member.id]: currentSrc.replace('.jpg', '.png') }));
            } else if (currentSrc.endsWith('.png')) {
              setImgSrcOverrides((prev) => ({ ...prev, [member.id]: currentSrc.replace('.png', '.webp') }));
            } else {
              setImgErrors((prev) => ({ ...prev, [member.id]: true }));
            }
          };

          return (
            <div
              key={member.id}
              className={`group relative p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#171719] border transition-all flex flex-col justify-between space-y-6 hover:shadow-soft-xl ${
                member.isLead
                  ? 'border-[#FE385B]/40 dark:border-[#FE385B]/30 lg:col-span-2'
                  : 'border-black/[0.08] dark:border-white/[0.08] hover:border-black/[0.15] dark:hover:border-white/[0.2]'
              }`}
            >
              {/* Member Card Header */}
              <div className="space-y-5">
                <div className="flex items-start justify-between gap-4">
                  {/* Avatar or Monogram */}
                  <div className="relative">
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.1] dark:border-white/[0.15] flex items-center justify-center relative shadow-sm"
                    >
                      {!hasImageError ? (
                        <img
                          src={currentSrc}
                          alt={member.name}
                          onError={handleImageError}
                          className="w-full h-full object-cover object-top select-none transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex flex-col items-center justify-center font-display font-black text-xl text-white tracking-wider"
                          style={{
                            background: `linear-gradient(135deg, #1A1A1E 0%, #0D0D0E 100%)`,
                          }}
                        >
                          <span style={{ color: member.accent }}>{initials}</span>
                        </div>
                      )}
                    </div>

                    {member.isLead && (
                      <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-[#FE385B] text-white font-mono text-[9px] font-bold uppercase shadow-sm">
                        Lead
                      </span>
                    )}
                  </div>

                  {/* Location & Department */}
                  <div className="text-right space-y-1">
                    <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] text-[#8E8E93] inline-block">
                      {member.department}
                    </span>
                    <div className="flex items-center justify-end gap-1 text-[11px] font-mono text-[#8E8E93]">
                      <MapPin size={11} className="text-[#8E8E93]" />
                      <span>{member.location}</span>
                    </div>
                  </div>
                </div>

                {/* Name & Title */}
                <div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111] dark:text-white flex items-center gap-2">
                    <span>{member.name}</span>
                    {member.isLead && <Sparkles size={16} className="text-[#FE385B]" />}
                  </h3>
                  <p className="font-mono text-xs text-[#FE385B] font-semibold mt-0.5">
                    {member.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-[13px] text-[#666666] dark:text-[#8E8E93] leading-relaxed font-sans">
                  {member.bio}
                </p>

                {/* Specialties Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {member.specialties.map((spec, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.05] dark:border-white/[0.06] text-[#555555] dark:text-[#AAAAAA]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-black/[0.04] dark:border-white/[0.06] flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#8E8E93] uppercase">
                  {isEs ? 'Contacto Directo' : 'Direct Contact'}
                </span>
                <div className="flex items-center gap-2">
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
                      title="GitHub"
                    >
                      <GitHubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] text-[#8E8E93] hover:text-[#111111] dark:hover:text-white transition-colors"
                      title="LinkedIn"
                    >
                      <LinkedInIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {member.socials.email && (
                    <a
                      href={`mailto:${member.socials.email}`}
                      className="p-2 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] text-[#8E8E93] hover:text-[#FE385B] transition-colors"
                      title="Email"
                    >
                      <Mail size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
