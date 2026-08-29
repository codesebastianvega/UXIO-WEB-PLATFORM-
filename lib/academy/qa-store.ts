'use client';

export interface QAMessage {
  id: string;
  courseSlug: string;
  lessonId: string;
  lessonTitle: string;
  lessonWeekTag: string;
  studentName: string;
  studentEmail: string;
  studentAvatarText: string;
  questionText: string;
  askedAt: string;
  replyText?: string | null;
  repliedAt?: string | null;
}

const STORAGE_KEY = 'uxio_academy_qa_messages_v2';

export const INITIAL_QA_ITEMS: QAMessage[] = [];

export function getStoredQAMessages(): QAMessage[] {
  if (typeof window === 'undefined') return INITIAL_QA_ITEMS;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
      return [];
    }
    const parsed: QAMessage[] = JSON.parse(raw);
    // Sanitize any legacy fake data
    return parsed.filter(m => !m.id.startsWith('qa-seed'));
  } catch {
    return [];
  }
}

export function saveQAMessage(msg: Omit<QAMessage, 'id' | 'askedAt'>): QAMessage {
  const current = getStoredQAMessages();
  const newMsg: QAMessage = {
    ...msg,
    id: `qa-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    askedAt: 'Justo ahora',
  };

  const updated = [newMsg, ...current];
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('uxio-qa-updated', { detail: newMsg }));
  }
  return newMsg;
}

export function replyQAMessage(id: string, replyText: string): boolean {
  const current = getStoredQAMessages();
  const index = current.findIndex(m => m.id === id);
  if (index === -1) return false;

  current[index] = {
    ...current[index],
    replyText: replyText.trim(),
    repliedAt: 'Justo ahora',
  };

  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    window.dispatchEvent(new CustomEvent('uxio-qa-updated'));
  }
  return true;
}
