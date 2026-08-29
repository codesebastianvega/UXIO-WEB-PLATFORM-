'use client';

export interface AcademyLiveLinks {
  liveSessionUrl: string;
  liveSessionDate: string;
  recordingUrl: string;
  recordingTitle: string;
  whatsappGroupUrl: string;
  whatsappGroupName: string;
}

export const DEFAULT_ACADEMY_LIVE_LINKS: AcademyLiveLinks = {
  liveSessionUrl: 'https://meet.google.com/uxio-creator-lab-live',
  liveSessionDate: 'Cada Jueves · 7:00 PM (Hora Colombia)',
  recordingUrl: 'https://youtube.com/watch?v=live-recording-demo',
  recordingTitle: 'Grabación Sesión: Feedback Semanal y Masterclass',
  whatsappGroupUrl: 'https://chat.whatsapp.com/CreatorLabCohorte01',
  whatsappGroupName: 'UXIO Creator Lab · Cohorte 01',
};

const STORAGE_KEY = 'uxio_creator_lab_live_links';

export function getStoredLiveLinks(): AcademyLiveLinks {
  if (typeof window === 'undefined') {
    return DEFAULT_ACADEMY_LIVE_LINKS;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_ACADEMY_LIVE_LINKS;
    return { ...DEFAULT_ACADEMY_LIVE_LINKS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_ACADEMY_LIVE_LINKS;
  }
}

export function saveStoredLiveLinks(links: AcademyLiveLinks): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
    window.dispatchEvent(new Event('uxio-live-links-updated'));
  } catch (err) {
    console.error('Error saving live links', err);
  }
}
