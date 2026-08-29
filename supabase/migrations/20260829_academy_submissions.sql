-- ==============================================================================
-- UXIO ACADEMY · SPRINT 3A: CHALLENGE SUBMISSIONS & STUDENT DELIVERY FLOW
-- Migration: 20260829_academy_submissions.sql
-- Description: Submissions table, constraints, indexes, and strict RLS policies.
-- ==============================================================================

create table if not exists public.submissions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  lesson_id text not null,
  submission_url text not null,
  submission_type text not null check (submission_type in ('link', 'document', 'image', 'video')),
  status text not null check (status in ('submitted', 'pending_review', 'needs_revision', 'approved')) default 'submitted',
  feedback_text text,
  reviewed_at timestamptz,
  submitted_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null,
  constraint uq_submissions_user_course_lesson unique (user_id, course_id, lesson_id)
);

-- Indexes for fast queries
create index if not exists idx_submissions_user_id on public.submissions(user_id);
create index if not exists idx_submissions_course_id on public.submissions(course_id);
create index if not exists idx_submissions_lesson_id on public.submissions(lesson_id);
create index if not exists idx_submissions_status on public.submissions(status);

-- Enable Row Level Security (RLS)
alter table public.submissions enable row level security;

-- Policies
-- 1. SELECT: Students can only read their own submissions
drop policy if exists "submissions_select_own" on public.submissions;
create policy "submissions_select_own"
  on public.submissions for select
  to authenticated
  using (auth.uid() = user_id);

-- 2. INSERT: Students can only insert their own submission if enrolled in the course
drop policy if exists "submissions_insert_enrolled" on public.submissions;
create policy "submissions_insert_enrolled"
  on public.submissions for insert
  to authenticated
  with check (
    user_id = auth.uid()
    and exists (
      select 1 from public.enrollments e
      join public.cohorts c on e.cohort_id = c.id
      where c.course_id = submissions.course_id
      and e.user_id = auth.uid()
      and e.status in ('active', 'completed')
    )
  );

-- 3. UPDATE: Students can only update their own submissions
drop policy if exists "submissions_update_own" on public.submissions;
create policy "submissions_update_own"
  on public.submissions for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
