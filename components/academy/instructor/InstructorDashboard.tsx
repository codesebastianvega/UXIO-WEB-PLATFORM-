'use client';

import React, { useState } from 'react';
import {
  Layers,
  MessageSquare,
  Lock,
  Radio,
  ClipboardList,
} from 'lucide-react';
import { Locale } from '@/types';
import { InstructorQueueItem, InstructorMetrics } from '@/lib/supabase/instructor';
import InstructorHeader from './InstructorHeader';
import ReviewQueue from './ReviewQueue';
import SubmissionReview from './SubmissionReview';
import InstructorQAFeed from './InstructorQAFeed';
import InstructorCohortControl from './InstructorCohortControl';
import InstructorLiveLinks from './InstructorLiveLinks';

type InstructorWorkspaceTab = 'submissions' | 'qa' | 'pacing' | 'links';

interface InstructorDashboardProps {
  instructorUser: { email?: string; full_name?: string };
  initialItems: InstructorQueueItem[];
  initialMetrics: InstructorMetrics;
  lang: Locale;
}

export default function InstructorDashboard({
  instructorUser,
  initialItems,
  initialMetrics,
  lang,
}: InstructorDashboardProps) {
  const isEs = lang === 'es';
  const [activeWorkspaceTab, setActiveWorkspaceTab] =
    useState<InstructorWorkspaceTab>('submissions');
  const [items, setItems] = useState<InstructorQueueItem[]>(initialItems);
  const [metrics, setMetrics] = useState<InstructorMetrics>(initialMetrics);
  const [selectedItem, setSelectedItem] = useState<InstructorQueueItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'needs_revision' | 'approved'>('pending');
  const [searchQuery, setSearchQuery] = useState('');

  const handleReviewed = (updated: InstructorQueueItem) => {
    const nextItems = items.map(item => (item.id === updated.id ? updated : item));
    setItems(nextItems);
    setSelectedItem(null);

    const pendingCount = nextItems.filter(
      i => i.status === 'submitted' || i.status === 'pending_review'
    ).length;
    const needsRevisionCount = nextItems.filter(
      i => i.status === 'needs_revision'
    ).length;
    const approvedCount = nextItems.filter(i => i.status === 'approved').length;

    setMetrics(prev => ({
      ...prev,
      pendingCount,
      needsRevisionCount,
      approvedCount,
    }));
  };

  return (
    <div className="space-y-8">
      {/* 1. Header with KPIs */}
      <InstructorHeader
        instructorName={instructorUser.full_name || 'Instructor'}
        instructorEmail={instructorUser.email}
        metrics={metrics}
        lang={lang}
      />

      {/* 2. Top Navigation Tabs between Instructor Desks */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06] w-fit">
        <button
          type="button"
          onClick={() => setActiveWorkspaceTab('submissions')}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
            activeWorkspaceTab === 'submissions'
              ? 'bg-[#FE385B] text-white font-bold shadow-sm'
              : 'text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
          }`}
        >
          <ClipboardList size={14} />
          <span>{isEs ? '1. Retos & Calificaciones' : '1. Homework & Grading'}</span>
          {metrics.pendingCount > 0 && (
            <span className="px-1.5 py-0.5 rounded-md bg-white/20 text-[10px] font-bold">
              {metrics.pendingCount}
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveWorkspaceTab('qa')}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
            activeWorkspaceTab === 'qa'
              ? 'bg-[#FE385B] text-white font-bold shadow-sm'
              : 'text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
          }`}
        >
          <MessageSquare size={14} />
          <span>{isEs ? '2. Dudas & Preguntas' : '2. Q&A Forum'}</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveWorkspaceTab('pacing')}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
            activeWorkspaceTab === 'pacing'
              ? 'bg-[#FE385B] text-white font-bold shadow-sm'
              : 'text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
          }`}
        >
          <Lock size={14} />
          <span>{isEs ? '3. Control de Semanas' : '3. Weekly Pacing'}</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveWorkspaceTab('links')}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
            activeWorkspaceTab === 'links'
              ? 'bg-[#FE385B] text-white font-bold shadow-sm'
              : 'text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
          }`}
        >
          <Radio size={14} />
          <span>{isEs ? '4. Clases en Vivo & Enlaces' : '4. Live Classes & Links'}</span>
        </button>
      </div>

      {/* 3. Render Selected Desk */}
      {activeWorkspaceTab === 'submissions' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div
            className={
              selectedItem
                ? 'lg:col-span-6 space-y-4'
                : 'lg:col-span-12 space-y-4'
            }
          >
            <ReviewQueue
              items={items}
              selectedItem={selectedItem}
              onSelect={setSelectedItem}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              lang={lang}
            />
          </div>

          {selectedItem && (
            <div className="lg:col-span-6 sticky top-24">
              <SubmissionReview
                item={selectedItem}
                onClose={() => setSelectedItem(null)}
                onReviewed={handleReviewed}
                lang={lang}
              />
            </div>
          )}
        </div>
      )}

      {activeWorkspaceTab === 'qa' && <InstructorQAFeed lang={lang} />}

      {activeWorkspaceTab === 'pacing' && (
        <InstructorCohortControl lang={lang} />
      )}

      {activeWorkspaceTab === 'links' && <InstructorLiveLinks lang={lang} />}
    </div>
  );
}
