-- ==============================================================================
-- 🎓 UXIO ACADEMY · SCRIPT MAESTRO DE BASE DE DATOS (CONSOLIDADO COMPLETO)
-- Archivo: supabase/SCHEMA_UXIO_ACADEMY_MASTER.sql
-- Instrucciones: Pega y ejecuta todo este script en el SQL Editor de Supabase
-- Proyecto: https://xclmedxvoondijbdecsr.supabase.co
-- ==============================================================================

-- ==============================================================================
-- 1. EXTENSIÓN Y TABLA DE PERFILES DE USUARIO (PROFILES)
-- ==============================================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  avatar_url text,
  role text not null default 'student' check (role in ('student', 'instructor', 'admin')),
  bio text,
  instagram text,
  tiktok text,
  youtube text,
  website text,
  city text,
  profession text,
  created_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null
);

-- Índices de perfiles
create index if not exists idx_profiles_role on public.profiles(role);
create index if not exists idx_profiles_email on public.profiles(email);

-- Trigger para crear perfil automáticamente al registrar usuario en Supabase Auth
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email, avatar_url, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.email),
    new.email,
    new.raw_user_meta_data->>'avatar_url',
    'student'
  )
  on conflict (id) do update set
    email = excluded.email,
    full_name = coalesce(excluded.full_name, public.profiles.full_name),
    updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ==============================================================================
-- 2. CATÁLOGO DE CURSOS Y COHORTES (COURSES & COHORTS)
-- ==============================================================================
create table if not exists public.courses (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  title text not null,
  description text,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

create table if not exists public.cohorts (
  id uuid default gen_random_uuid() primary key,
  course_id uuid not null references public.courses(id) on delete cascade,
  name text not null,
  start_date date,
  end_date date,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

create index if not exists idx_cohorts_course_id on public.cohorts(course_id);

-- ==============================================================================
-- 3. MATRÍCULAS E INSCRIPCIONES (ENROLLMENTS)
-- ==============================================================================
create table if not exists public.enrollments (
  id uuid default gen_random_uuid() primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  cohort_id uuid not null references public.cohorts(id) on delete cascade,
  status text not null check (status in ('active', 'completed', 'cancelled')) default 'active',
  created_at timestamptz default timezone('utc'::text, now()) not null,
  constraint uq_enrollment_user_cohort unique (user_id, cohort_id)
);

create index if not exists idx_enrollments_user_id on public.enrollments(user_id);
create index if not exists idx_enrollments_cohort_id on public.enrollments(cohort_id);
create index if not exists idx_enrollments_status on public.enrollments(status);

-- ==============================================================================
-- 4. PROGRESO DE LECCIONES (LESSON_PROGRESS)
-- ==============================================================================
create table if not exists public.lesson_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  lesson_id text not null,
  completed boolean not null default false,
  completed_at timestamptz,
  created_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null,
  constraint uq_lesson_progress_user_course_lesson unique (user_id, course_id, lesson_id)
);

create index if not exists idx_lesson_progress_user_course on public.lesson_progress(user_id, course_id);
create index if not exists idx_lesson_progress_completed on public.lesson_progress(completed);

-- ==============================================================================
-- 5. ENTREGABLES Y RETOS PRÁCTICOS (SUBMISSIONS)
-- ==============================================================================
create table if not exists public.submissions (
  id uuid default gen_random_uuid() primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  lesson_id text not null,
  submission_url text not null,
  submission_type text not null check (submission_type in ('link', 'document', 'image', 'video')) default 'link',
  status text not null check (status in ('submitted', 'pending_review', 'needs_revision', 'approved')) default 'submitted',
  feedback_text text,
  reviewed_at timestamptz,
  submitted_at timestamptz default timezone('utc'::text, now()) not null,
  updated_at timestamptz default timezone('utc'::text, now()) not null,
  constraint uq_submissions_user_course_lesson unique (user_id, course_id, lesson_id)
);

create index if not exists idx_submissions_user_id on public.submissions(user_id);
create index if not exists idx_submissions_course_id on public.submissions(course_id);
create index if not exists idx_submissions_lesson_id on public.submissions(lesson_id);
create index if not exists idx_submissions_status on public.submissions(status);

-- ==============================================================================
-- 6. CERTIFICADOS DIGITALES (CERTIFICATES)
-- ==============================================================================
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

create index if not exists idx_certificates_user_id on public.certificates(user_id);
create index if not exists idx_certificates_course_id on public.certificates(course_id);
create index if not exists idx_certificates_number on public.certificates(certificate_number);

-- ==============================================================================
-- 7. ACTIVACIÓN DE ROW LEVEL SECURITY (RLS) EN TODAS LAS TABLAS
-- ==============================================================================
alter table public.profiles enable row level security;
alter table public.courses enable row level security;
alter table public.cohorts enable row level security;
alter table public.enrollments enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.submissions enable row level security;
alter table public.certificates enable row level security;

-- ==============================================================================
-- 8. POLÍTICAS DE SEGURIDAD (RLS POLICIES)
-- ==============================================================================

-- PROFILES
drop policy if exists "profiles_select_all" on public.profiles;
create policy "profiles_select_all" on public.profiles for select to authenticated using (true);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles for update to authenticated using (auth.uid() = id);

-- COURSES & COHORTS (Lectura pública / para todos)
drop policy if exists "courses_select_public" on public.courses;
create policy "courses_select_public" on public.courses for select to authenticated using (true);

drop policy if exists "cohorts_select_public" on public.cohorts;
create policy "cohorts_select_public" on public.cohorts for select to authenticated using (true);

-- ENROLLMENTS
drop policy if exists "enrollments_select_own" on public.enrollments;
create policy "enrollments_select_own" on public.enrollments for select to authenticated using (auth.uid() = user_id);

drop policy if exists "enrollments_insert_own" on public.enrollments;
create policy "enrollments_insert_own" on public.enrollments for insert to authenticated with check (auth.uid() = user_id);

-- LESSON PROGRESS
drop policy if exists "lesson_progress_select_own" on public.lesson_progress;
create policy "lesson_progress_select_own" on public.lesson_progress for select to authenticated using (auth.uid() = user_id);

drop policy if exists "lesson_progress_upsert_own" on public.lesson_progress;
create policy "lesson_progress_upsert_own" on public.lesson_progress for all to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- SUBMISSIONS (Alumnos e Instructores)
drop policy if exists "submissions_select_own" on public.submissions;
create policy "submissions_select_own" on public.submissions for select to authenticated using (auth.uid() = user_id);

drop policy if exists "submissions_insert_own" on public.submissions;
create policy "submissions_insert_own" on public.submissions for insert to authenticated with check (auth.uid() = user_id);

drop policy if exists "submissions_update_own" on public.submissions;
create policy "submissions_update_own" on public.submissions for update to authenticated using (auth.uid() = user_id);

drop policy if exists "submissions_instructor_all" on public.submissions;
create policy "submissions_instructor_all" on public.submissions for all to authenticated using (
  exists (select 1 from public.profiles where profiles.id = auth.uid() and profiles.role in ('instructor', 'admin'))
);

-- CERTIFICATES
drop policy if exists "certificates_select_own" on public.certificates;
create policy "certificates_select_own" on public.certificates for select to authenticated using (auth.uid() = user_id);

drop policy if exists "certificates_instructor_all" on public.certificates;
create policy "certificates_instructor_all" on public.certificates for select to authenticated using (
  exists (select 1 from public.profiles where profiles.id = auth.uid() and profiles.role in ('instructor', 'admin'))
);

-- ==============================================================================
-- 9. SEED DATA INICIAL (CREATOR LAB + COHORTE 01)
-- ==============================================================================
insert into public.courses (slug, title, description)
values (
  'creator-lab',
  'UXIO Creator Lab: De Negocio a Creador de Contenido',
  'Programa intensivo de 4 semanas para estructurar, grabar y publicar contenido comercial de alto impacto con tu celular.'
)
on conflict (slug) do update set
  title = excluded.title,
  description = excluded.description;

insert into public.cohorts (course_id, name, start_date, end_date)
select 
  c.id,
  'Cohorte 01 · 2026',
  '2026-09-24',
  '2026-10-31'
from public.courses c
where c.slug = 'creator-lab'
and not exists (
  select 1 from public.cohorts ch where ch.course_id = c.id and ch.name = 'Cohorte 01 · 2026'
);

-- ==============================================================================
-- FIN DEL SCRIPT MAESTRO UXIO ACADEMY
-- ==============================================================================
