-- ==============================================================================
-- UXIO ACADEMY · SPRINT 3B: INSTRUCTOR ROLES, REVIEW QUEUE & FEEDBACK
-- Migration: 20260829_academy_instructor_roles.sql
-- Description: Add role column to profiles, add instructor RLS policies for submissions.
-- ==============================================================================

-- 1. Add role column to profiles (default: 'student')
alter table public.profiles 
  add column if not exists role text not null default 'student' 
  check (role in ('student', 'instructor', 'admin'));

-- Index on role for fast permission verification
create index if not exists idx_profiles_role on public.profiles(role);

-- 2. INSTRUCTOR POLICIES FOR SUBMISSIONS
-- Instructors and admins can view all submissions
drop policy if exists "submissions_select_instructor" on public.submissions;
create policy "submissions_select_instructor"
  on public.submissions for select
  to authenticated
  using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid()
      and profiles.role in ('instructor', 'admin')
    )
  );

-- Instructors and admins can update status, feedback_text, and reviewed_at
drop policy if exists "submissions_update_instructor" on public.submissions;
create policy "submissions_update_instructor"
  on public.submissions for update
  to authenticated
  using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid()
      and profiles.role in ('instructor', 'admin')
    )
  )
  with check (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid()
      and profiles.role in ('instructor', 'admin')
    )
  );
