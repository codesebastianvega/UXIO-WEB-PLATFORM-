'use client';

import React, { useState } from 'react';
import { Locale } from '@/types';
import { InstructorQueueItem, InstructorMetrics } from '@/lib/supabase/instructor';
import InstructorHeader from './InstructorHeader';
import ReviewQueue from './ReviewQueue';
import SubmissionReview from './SubmissionReview';

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
  const [items, setItems] = useState<InstructorQueueItem[]>(initialItems);
  const [metrics, setMetrics] = useState<InstructorMetrics>(initialMetrics);
  const [selectedItem, setSelectedItem] = useState<InstructorQueueItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'needs_revision' | 'approved'>('pending');
  const [searchQuery, setSearchQuery] = useState('');

  const handleReviewed = (updated: InstructorQueueItem) => {
    const nextItems = items.map(item => (item.id === updated.id ? updated : item));
    setItems(nextItems);
    setSelectedItem(null);

    // Recompute metrics
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

      {/* 2. Review Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Queue List */}
        <div className={selectedItem ? 'lg:col-span-6 space-y-4' : 'lg:col-span-12 space-y-4'}>
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

        {/* Right Column: Review Inspector */}
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
    </div>
  );
}
