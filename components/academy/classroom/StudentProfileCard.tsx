'use client';

import React, { useState, useTransition } from 'react';
import {
  User,
  Edit3,
  MapPin,
  Globe,
  Loader2,
  Share2,
  Camera,
  Video,
} from 'lucide-react';
import { Locale } from '@/types';
import { StudentProfileData } from '@/lib/supabase/profile';
import { updateStudentProfileAction } from '@/app/[lang]/academy/actions/profile';

interface StudentProfileCardProps {
  initialProfile: StudentProfileData;
  onProfileUpdated: (updated: StudentProfileData) => void;
  lang: Locale;
}

export default function StudentProfileCard({
  initialProfile,
  onProfileUpdated,
  lang,
}: StudentProfileCardProps) {
  const isEs = lang === 'es';
  const [profile, setProfile] = useState<StudentProfileData>(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: initialProfile.fullName,
    bio: initialProfile.bio || '',
    profession: initialProfile.profession || '',
    city: initialProfile.city || '',
    instagram: initialProfile.instagram || '',
    tiktok: initialProfile.tiktok || '',
    youtube: initialProfile.youtube || '',
    website: initialProfile.website || '',
  });
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setErrorMsg(isEs ? 'El nombre es obligatorio.' : 'Name is required.');
      return;
    }
    setErrorMsg(null);
    startTransition(async () => {
      const res = await updateStudentProfileAction({ ...formData, lang });
      if (res.success && res.profile) {
        const next = { ...profile, ...res.profile } as StudentProfileData;
        setProfile(next);
        onProfileUpdated(next);
        setIsEditing(false);
      } else {
        setErrorMsg(res.error || (isEs ? 'Error al guardar.' : 'Failed to save.'));
      }
    });
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FE385B] to-[#FF7F07] text-white flex items-center justify-center font-display font-black text-2xl shadow-md shadow-[#FE385B]/20 shrink-0">
            {profile.fullName.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] dark:text-white">
              {profile.fullName}
            </h1>
            <p className="text-xs sm:text-sm font-sans text-[#FE385B] font-medium">
              {profile.profession || (isEs ? 'Creador en Formación' : 'Creator in Training')}
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8E8E93] mt-1">
              {profile.city && (
                <span className="flex items-center gap-1">
                  <MapPin size={12} className="text-[#00F0FF]" />
                  {profile.city}
                </span>
              )}
              <span>{profile.email}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] text-xs font-mono text-[#111111] dark:text-white hover:bg-[#00F0FF]/15 transition-colors border border-black/[0.06] dark:border-white/[0.06] shrink-0"
        >
          <Edit3 size={13} />
          <span>{isEditing ? (isEs ? 'Cerrar Edición' : 'Cancel') : (isEs ? 'Editar Perfil' : 'Edit Profile')}</span>
        </button>
      </div>

      {profile.bio && (
        <p className="text-xs sm:text-sm text-[#666666] dark:text-[#8E8E93] font-sans leading-relaxed border-t border-black/[0.06] dark:border-white/[0.06] pt-4">
          {profile.bio}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-2 pt-2">
        {profile.instagram && (
          <a
            href={`https://instagram.com/${profile.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] text-xs font-mono text-[#8E8E93] hover:text-[#FE385B] border border-black/[0.04] dark:border-white/[0.04]"
          >
            <Camera size={13} />
            <span>@{profile.instagram.replace('@', '')}</span>
          </a>
        )}
        {profile.tiktok && (
          <a
            href={`https://tiktok.com/@${profile.tiktok.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] text-xs font-mono text-[#8E8E93] hover:text-[#00F0FF] border border-black/[0.04] dark:border-white/[0.04]"
          >
            <Share2 size={13} />
            <span>TikTok</span>
          </a>
        )}
        {profile.youtube && (
          <a
            href={profile.youtube.startsWith('http') ? profile.youtube : `https://youtube.com/${profile.youtube}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] text-xs font-mono text-[#8E8E93] hover:text-[#FE385B] border border-black/[0.04] dark:border-white/[0.04]"
          >
            <Video size={13} />
            <span>YouTube</span>
          </a>
        )}
        {profile.website && (
          <a
            href={profile.website.startsWith('http') ? profile.website : `https://${profile.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] text-xs font-mono text-[#8E8E93] hover:text-[#10B981] border border-black/[0.04] dark:border-white/[0.04]"
          >
            <Globe size={13} />
            <span>{isEs ? 'Portafolio' : 'Portfolio'}</span>
          </a>
        )}
      </div>

      {isEditing && (
        <form onSubmit={handleSave} className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-[#00F0FF]/30 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="font-mono text-[11px] text-[#8E8E93] block mb-1">{isEs ? 'Nombre' : 'Name'}</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full py-1.5 px-2.5 rounded-xl bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.08] text-xs text-[#111111] dark:text-white"
              />
            </div>
            <div>
              <label className="font-mono text-[11px] text-[#8E8E93] block mb-1">{isEs ? 'Profesión' : 'Profession'}</label>
              <input
                type="text"
                value={formData.profession}
                onChange={e => setFormData({ ...formData, profession: e.target.value })}
                className="w-full py-1.5 px-2.5 rounded-xl bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.08] text-xs text-[#111111] dark:text-white"
              />
            </div>
            <div>
              <label className="font-mono text-[11px] text-[#8E8E93] block mb-1">{isEs ? 'Ciudad' : 'City'}</label>
              <input
                type="text"
                value={formData.city}
                onChange={e => setFormData({ ...formData, city: e.target.value })}
                className="w-full py-1.5 px-2.5 rounded-xl bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.08] text-xs text-[#111111] dark:text-white"
              />
            </div>
            <div>
              <label className="font-mono text-[11px] text-[#8E8E93] block mb-1">Instagram</label>
              <input
                type="text"
                value={formData.instagram}
                onChange={e => setFormData({ ...formData, instagram: e.target.value })}
                className="w-full py-1.5 px-2.5 rounded-xl bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.08] text-xs text-[#111111] dark:text-white"
              />
            </div>
            <div>
              <label className="font-mono text-[11px] text-[#8E8E93] block mb-1">TikTok</label>
              <input
                type="text"
                value={formData.tiktok}
                onChange={e => setFormData({ ...formData, tiktok: e.target.value })}
                className="w-full py-1.5 px-2.5 rounded-xl bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.08] text-xs text-[#111111] dark:text-white"
              />
            </div>
            <div>
              <label className="font-mono text-[11px] text-[#8E8E93] block mb-1">{isEs ? 'Web' : 'Website'}</label>
              <input
                type="text"
                value={formData.website}
                onChange={e => setFormData({ ...formData, website: e.target.value })}
                className="w-full py-1.5 px-2.5 rounded-xl bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.08] text-xs text-[#111111] dark:text-white"
              />
            </div>
          </div>
          <div>
            <label className="font-mono text-[11px] text-[#8E8E93] block mb-1">{isEs ? 'Bio' : 'Bio'}</label>
            <textarea
              rows={2}
              value={formData.bio}
              onChange={e => setFormData({ ...formData, bio: e.target.value })}
              className="w-full p-2 rounded-xl bg-white dark:bg-[#111111] border border-black/[0.08] dark:border-white/[0.08] text-xs text-[#111111] dark:text-white"
            />
          </div>
          {errorMsg && <div className="p-2 rounded-xl bg-[#FE385B]/10 text-xs text-[#FE385B]">{errorMsg}</div>}
          <div className="flex justify-end gap-2 pt-1">
            <button type="button" onClick={() => setIsEditing(false)} className="py-1.5 px-3 text-xs font-mono text-[#8E8E93]">{isEs ? 'Cancelar' : 'Cancel'}</button>
            <button type="submit" disabled={isPending} className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-xl bg-[#00F0FF] text-black font-display font-bold text-xs">
              {isPending && <Loader2 size={12} className="animate-spin" />}
              <span>{isPending ? (isEs ? 'Guardando...' : 'Saving...') : (isEs ? 'Guardar' : 'Save')}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
