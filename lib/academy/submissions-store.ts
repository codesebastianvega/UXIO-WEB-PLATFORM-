'use client';

import { SubmissionStatus, SubmissionType } from '@/lib/supabase/academy-submissions';

export interface LocalSubmissionItem {
  id: string;
  userId: string;
  studentName: string;
  studentEmail: string;
  courseSlug: string;
  lessonId: string;
  lessonTitle: string;
  moduleWeekTag: string;
  challengePrompt: string;
  challengeDeliverable: string;
  challengeCriteria: string[];
  approvedCriteria?: string[];
  score?: number;
  submissionUrl: string;
  submissionType: SubmissionType;
  status: SubmissionStatus;
  feedbackText?: string | null;
  reviewedAt?: string | null;
  formData?: any;
  submittedAt: string;
  updatedAt: string;
}

const SUBMISSIONS_STORAGE_KEY = 'uxio_academy_submissions_v2';

export const INITIAL_SEED_SUBMISSIONS: LocalSubmissionItem[] = [];

export function getStoredSubmissions(): LocalSubmissionItem[] {
  if (typeof window === 'undefined') return INITIAL_SEED_SUBMISSIONS;

  try {
    const raw = localStorage.getItem(SUBMISSIONS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(SUBMISSIONS_STORAGE_KEY, JSON.stringify([]));
      return [];
    }
    const parsed: LocalSubmissionItem[] = JSON.parse(raw);
    return parsed.filter(s => !s.id.startsWith('sub-seed') && s.userId !== 'user-carlos-1');
  } catch {
    return [];
  }
}

export function saveLocalSubmission(item: Omit<LocalSubmissionItem, 'id' | 'submittedAt' | 'updatedAt'>): LocalSubmissionItem {
  const current = getStoredSubmissions();
  const existingIdx = current.findIndex(
    s => s.courseSlug === item.courseSlug && s.lessonId === item.lessonId && s.userId === item.userId
  );

  const now = new Date().toISOString();
  let newItem: LocalSubmissionItem;

  if (existingIdx >= 0) {
    newItem = {
      ...current[existingIdx],
      ...item,
      updatedAt: now,
    };
    current[existingIdx] = newItem;
  } else {
    newItem = {
      ...item,
      id: `sub-loc-${Date.now()}`,
      submittedAt: now,
      updatedAt: now,
    };
    current.unshift(newItem);
  }

  if (typeof window !== 'undefined') {
    localStorage.setItem(SUBMISSIONS_STORAGE_KEY, JSON.stringify(current));
    window.dispatchEvent(new Event('uxio-submissions-updated'));
  }

  return newItem;
}

export function reviewLocalSubmission(
  submissionId: string,
  status: SubmissionStatus,
  feedbackText: string,
  approvedCriteria: string[] = [],
  score?: number
): LocalSubmissionItem | null {
  const current = getStoredSubmissions();
  const idx = current.findIndex(s => s.id === submissionId);
  if (idx === -1) return null;

  const now = new Date().toISOString();
  current[idx] = {
    ...current[idx],
    status,
    feedbackText,
    approvedCriteria,
    score,
    reviewedAt: now,
    updatedAt: now,
  };

  if (typeof window !== 'undefined') {
    localStorage.setItem(SUBMISSIONS_STORAGE_KEY, JSON.stringify(current));
    window.dispatchEvent(new Event('uxio-submissions-updated'));
  }

  return current[idx];
}
