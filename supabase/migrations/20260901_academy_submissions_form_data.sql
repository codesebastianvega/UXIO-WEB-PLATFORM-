-- ==============================================================================
-- UXIO ACADEMY · MIGRATION: IN-APP FORM DATA & CHALLENGE SUBMISSIONS
-- Migration: 20260901_academy_submissions_form_data.sql
-- Description: Adds jsonb storage for interactive worksheets (Diagnosis, UGC, Objections, 30-Day Matrix)
--              and updates submission_type check constraints to support in-app text/forms.
-- ==============================================================================

-- 1. Update submission_type check constraint to include 'text'
alter table public.submissions drop constraint if exists submissions_submission_type_check;
alter table public.submissions add constraint submissions_submission_type_check
  check (submission_type in ('link', 'document', 'image', 'video', 'text'));

-- 2. Add form_data jsonb column for structured in-app forms
alter table public.submissions add column if not exists form_data jsonb default '{}'::jsonb;

-- 3. Add approved_criteria text[] for faculty rubric grading
alter table public.submissions add column if not exists approved_criteria text[] default array[]::text[];

-- 4. Create GIN index on form_data for fast JSON querying
create index if not exists idx_submissions_form_data on public.submissions using gin (form_data);

-- 5. Create index on approved_criteria
create index if not exists idx_submissions_approved_criteria on public.submissions using gin (approved_criteria);

-- 6. Comment on columns for schema documentation
comment on column public.submissions.form_data is 'Structured student inputs from interactive in-app worksheets (Brand Diagnosis, UGC Script, 5 Objections, 30-Day Content Matrix)';
comment on column public.submissions.approved_criteria is 'Array of rubric criteria keys approved by instructors during review';
