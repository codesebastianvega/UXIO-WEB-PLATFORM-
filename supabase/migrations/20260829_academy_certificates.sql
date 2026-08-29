-- ==============================================================================
-- UXIO ACADEMY · SPRINT 3D: CERTIFICATE FOUNDATION & ELIGIBILITY
-- Migration: 20260829_academy_certificates.sql
-- Description: Certificates table, unique constraints, indexes, and strict RLS.
-- ==============================================================================

-- 1. Table: public.certificates
create table if not exists public.certificates (
  id uuid default gen_random_uuid() primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  certificate_number text unique,
  status text not null check (status in ('eligible', 'issued', 'revoked')) default 'eligible',
  issued_at timestamptz,
  created_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null,
  constraint uq_certificates_user_course unique (user_id, course_id)
);

-- Indexes for high-performance lookup
create index if not exists idx_certificates_user_id on public.certificates(user_id);
create index if not exists idx_certificates_course_id on public.certificates(course_id);
create index if not exists idx_certificates_number on public.certificates(certificate_number);
create index if not exists idx_certificates_status on public.certificates(status);

-- Enable Row Level Security (RLS)
alter table public.certificates enable row level security;

-- Policies:
-- 1. Student can only read their own certificate
drop policy if exists "certificates_select_own" on public.certificates;
create policy "certificates_select_own"
  on public.certificates for select
  to authenticated
  using (auth.uid() = user_id);

-- 2. Instructors & admins can read all certificates
drop policy if exists "certificates_select_instructor" on public.certificates;
create policy "certificates_select_instructor"
  on public.certificates for select
  to authenticated
  using (
    exists (
      select 1 from public.profiles
      where profiles.id = auth.uid()
      and profiles.role in ('instructor', 'admin')
    )
  );

-- Note: No client-side INSERT / UPDATE policies are granted.
-- Certificate emission and revocation are strictly governed server-side.
