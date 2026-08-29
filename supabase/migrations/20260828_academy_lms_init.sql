-- ==============================================================================
-- UXIO ACADEMY · SPRINT 2A: LMS DATABASE FOUNDATION + RLS
-- Migration: 20260828_academy_lms_init.sql
-- Description: Core tables, constraints, indexes, triggers, and strict RLS policies.
-- ==============================================================================

-- 1. PROFILES (Extensión de auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  avatar_url text,
  created_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null
);

-- 2. COURSES (Catálogo académico en base de datos)
create table if not exists public.courses (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  title text not null,
  description text,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 3. COHORTS (Cohortes activas por curso)
create table if not exists public.cohorts (
  id uuid default gen_random_uuid() primary key,
  course_id uuid not null references public.courses(id) on delete cascade,
  name text not null,
  start_date date,
  end_date date,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 4. ENROLLMENTS (Matrículas alumno <-> cohorte)
create table if not exists public.enrollments (
  id uuid default gen_random_uuid() primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  cohort_id uuid not null references public.cohorts(id) on delete cascade,
  status text not null check (status in ('active', 'completed', 'cancelled')),
  created_at timestamptz default timezone('utc'::text, now()) not null,
  constraint uq_enrollment_user_cohort unique (user_id, cohort_id)
);

-- 5. LESSON_PROGRESS (Progreso granular de lecciones estáticas)
create table if not exists public.lesson_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  lesson_id text not null,
  completed boolean not null default false,
  completed_at timestamptz,
  updated_at timestamptz default timezone('utc'::text, now()) not null,
  constraint uq_lesson_progress_user_course_lesson unique (user_id, course_id, lesson_id)
);

-- ==============================================================================
-- ÍNDICES DE ALTO RENDIMIENTO
-- ==============================================================================
create index if not exists idx_cohorts_course_id on public.cohorts(course_id);
create index if not exists idx_enrollments_user_id on public.enrollments(user_id);
create index if not exists idx_enrollments_cohort_id on public.enrollments(cohort_id);
create index if not exists idx_lesson_progress_user_id on public.lesson_progress(user_id);
create index if not exists idx_lesson_progress_course_id on public.lesson_progress(course_id);

-- ==============================================================================
-- HABILITAR ROW LEVEL SECURITY (RLS)
-- ==============================================================================
alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.cohorts enable row level security;
alter table public.enrollments enable row level security;
alter table public.lesson_progress enable row level security;

-- ==============================================================================
-- POLÍTICAS DE SEGURIDAD (RLS)
-- ==============================================================================

-- PROFILES
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles for select
  to authenticated
  using (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- COURSES (Solo lectura para usuarios autenticados)
drop policy if exists "courses_select_authenticated" on public.courses;
create policy "courses_select_authenticated"
  on public.courses for select
  to authenticated
  using (true);

-- COHORTS (Solo visibles para alumnos matriculados en dicha cohorte)
drop policy if exists "cohorts_select_enrolled" on public.cohorts;
create policy "cohorts_select_enrolled"
  on public.cohorts for select
  to authenticated
  using (
    exists (
      select 1 from public.enrollments e
      where e.cohort_id = cohorts.id
      and e.user_id = auth.uid()
    )
  );

-- ENROLLMENTS (Solo lectura de propias matrículas)
drop policy if exists "enrollments_select_own" on public.enrollments;
create policy "enrollments_select_own"
  on public.enrollments for select
  to authenticated
  using (auth.uid() = user_id);

-- LESSON_PROGRESS (Acceso condicionado a matrícula activa o completada)
drop policy if exists "lesson_progress_select_own" on public.lesson_progress;
create policy "lesson_progress_select_own"
  on public.lesson_progress for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "lesson_progress_insert_enrolled" on public.lesson_progress;
create policy "lesson_progress_insert_enrolled"
  on public.lesson_progress for insert
  to authenticated
  with check (
    user_id = auth.uid()
    and exists (
      select 1 from public.enrollments e
      join public.cohorts c on e.cohort_id = c.id
      where c.course_id = lesson_progress.course_id
      and e.user_id = auth.uid()
      and e.status in ('active', 'completed')
    )
  );

drop policy if exists "lesson_progress_update_own" on public.lesson_progress;
create policy "lesson_progress_update_own"
  on public.lesson_progress for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ==============================================================================
-- TRIGGER AUTOMÁTICO PARA PROFILES DESDE AUTH.USERS
-- ==============================================================================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', ''),
    coalesce(new.raw_user_meta_data->>'avatar_url', new.raw_user_meta_data->>'picture', '')
  )
  on conflict (id) do update set
    email = excluded.email,
    updated_at = timezone('utc'::text, now());
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ==============================================================================
-- SEED MÍNIMO (CREATOR LAB + COHORTE 01)
-- ==============================================================================
do $$
declare
  v_course_id uuid;
begin
  -- 1. Insertar curso Creator Lab si no existe
  insert into public.courses (slug, title, description)
  values (
    'creator-lab',
    'UXIO Creator Lab',
    'Aprende a convertir lo que haces en contenido que vende. Programa práctico para emprendedores y creadores.'
  )
  on conflict (slug) do update set
    title = excluded.title,
    description = excluded.description
  returning id into v_course_id;

  -- 2. Insertar Cohorte 01 si no existe para este curso
  if not exists (
    select 1 from public.cohorts 
    where course_id = v_course_id and name = 'Cohorte 01'
  ) then
    insert into public.cohorts (course_id, name, start_date, end_date)
    values (
      v_course_id,
      'Cohorte 01',
      '2026-10-01',
      '2026-11-01'
    );
  end if;
end $$;
