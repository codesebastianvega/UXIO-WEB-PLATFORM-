import React from 'react';
import {
  Clock,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Search,
  User,
  BookOpen,
} from 'lucide-react';
import { Locale } from '@/types';
import { InstructorQueueItem } from '@/lib/supabase/instructor';

interface ReviewQueueProps {
  items: InstructorQueueItem[];
  selectedItem: InstructorQueueItem | null;
  onSelect: (item: InstructorQueueItem) => void;
  activeTab: 'all' | 'pending' | 'needs_revision' | 'approved';
  onTabChange: (tab: 'all' | 'pending' | 'needs_revision' | 'approved') => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  lang: Locale;
}

export default function ReviewQueue({
  items,
  selectedItem,
  onSelect,
  activeTab,
  onTabChange,
  searchQuery,
  onSearchChange,
  lang,
}: ReviewQueueProps) {
  const isEs = lang === 'es';

  const filteredItems = items.filter(item => {
    // Tab filter
    if (activeTab === 'pending' && item.status !== 'submitted' && item.status !== 'pending_review') {
      return false;
    }
    if (activeTab === 'needs_revision' && item.status !== 'needs_revision') {
      return false;
    }
    if (activeTab === 'approved' && item.status !== 'approved') {
      return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        item.studentName.toLowerCase().includes(q) ||
        item.studentEmail.toLowerCase().includes(q) ||
        item.lessonTitle.toLowerCase().includes(q) ||
        item.lessonId.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return { label: isEs ? 'Aprobado ✓' : 'Approved ✓', bg: 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30' };
      case 'needs_revision':
        return { label: isEs ? 'Requiere Ajustes' : 'Needs Revision', bg: 'bg-[#FF7F07]/15 text-[#FF7F07] border-[#FF7F07]/30' };
      case 'pending_review':
      case 'submitted':
      default:
        return { label: isEs ? 'Pendiente' : 'Pending', bg: 'bg-[#00F0FF]/15 text-[#00F0FF] border-[#00F0FF]/30' };
    }
  };

  return (
    <div className="space-y-4">
      {/* Tabs & Search Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] shadow-soft overflow-x-auto text-xs font-mono">
          {[
            { key: 'all' as const, label: isEs ? 'Todas' : 'All' },
            { key: 'pending' as const, label: isEs ? 'Pendientes' : 'Pending' },
            { key: 'needs_revision' as const, label: isEs ? 'Ajustes' : 'Needs Revision' },
            { key: 'approved' as const, label: isEs ? 'Aprobadas' : 'Approved' },
          ].map(tab => (
            <button
              key={tab.key}
              type="button"
              onClick={() => onTabChange(tab.key)}
              className={`px-3 py-1.5 rounded-xl transition-all shrink-0 ${
                activeTab === tab.key
                  ? 'bg-[#111111] dark:bg-white text-white dark:text-[#111111] font-bold shadow-sm'
                  : 'text-[#8E8E93] hover:text-[#111111] dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            placeholder={isEs ? 'Buscar por alumno o reto...' : 'Search student or challenge...'}
            className="w-full sm:w-64 py-2 pl-8 pr-3 rounded-xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-xs font-sans text-[#111111] dark:text-white placeholder-[#8E8E93] focus:outline-none focus:border-[#00F0FF]/50"
          />
          <Search size={13} className="absolute left-2.5 top-2.5 text-[#8E8E93]" />
        </div>
      </div>

      {/* Queue Cards List */}
      {filteredItems.length > 0 ? (
        <div className="space-y-2.5">
          {filteredItems.map(item => {
            const isSelected = selectedItem?.id === item.id;
            const badge = getStatusBadge(item.status);

            return (
              <div
                key={item.id}
                onClick={() => onSelect(item)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isSelected
                    ? 'bg-[#00F0FF]/[0.04] border-[#00F0FF]/50 shadow-soft'
                    : 'bg-white dark:bg-[#171719] border-black/[0.08] dark:border-white/[0.08] hover:border-[#00F0FF]/30'
                }`}
              >
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] text-[#00F0FF] flex items-center justify-center font-display font-bold text-sm shrink-0 border border-black/[0.06] dark:border-white/[0.06]">
                    {item.studentName.charAt(0).toUpperCase()}
                  </div>

                  <div className="min-w-0 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display font-bold text-sm text-[#111111] dark:text-white truncate">
                        {item.studentName}
                      </span>
                      <span className="font-mono text-[10px] text-[#8E8E93]">
                        ({item.studentEmail})
                      </span>
                      <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full border ${badge.bg}`}>
                        {badge.label}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8E8E93]">
                      <span className="text-[#FE385B] font-semibold">{item.moduleWeekTag}</span>
                      <span>·</span>
                      <span className="text-[#111111] dark:text-[#E5E5E7] truncate max-w-xs">{item.lessonTitle}</span>
                      <span>·</span>
                      <span className="uppercase text-[10px] text-[#00F0FF]">{item.submissionType}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                  <span className="text-[11px] font-mono text-[#8E8E93]">
                    {new Date(item.submittedAt).toLocaleDateString(isEs ? 'es-CO' : 'en-US', {
                      day: '2-digit',
                      month: 'short',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>

                  <button
                    type="button"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-colors ${
                      isSelected
                        ? 'bg-[#00F0FF] text-black'
                        : 'bg-black/[0.04] dark:bg-white/[0.06] text-[#111111] dark:text-white hover:bg-[#00F0FF]/15'
                    }`}
                  >
                    <span>{isEs ? 'Revisar' : 'Review'}</span>
                    <ChevronRight size={13} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#171719] border border-black/[0.08] dark:border-white/[0.08] text-center space-y-3 shadow-soft">
          <CheckCircle2 size={32} className="text-[#10B981] mx-auto" />
          <h4 className="font-display font-bold text-base text-[#111111] dark:text-white">
            {isEs ? '¡No hay entregas pendientes en esta vista!' : 'No pending submissions in this view!'}
          </h4>
          <p className="text-xs text-[#8E8E93] font-sans max-w-sm mx-auto">
            {isEs
              ? 'Todas las entregas bajo los filtros actuales han sido calificadas o no se encontraron resultados.'
              : 'All submissions under current filters are reviewed or no matches found.'}
          </p>
        </div>
      )}
    </div>
  );
}
