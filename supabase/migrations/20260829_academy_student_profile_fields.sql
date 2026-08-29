-- ==============================================================================
-- UXIO ACADEMY · SPRINT 3C: STUDENT PROFILE & OUTCOMES
-- Migration: 20260829_academy_student_profile_fields.sql
-- Description: Add bio, social links, city, and profession fields to profiles.
-- ==============================================================================

alter table public.profiles
  add column if not exists bio text,
  add column if not exists instagram text,
  add column if not exists tiktok text,
  add column if not exists youtube text,
  add column if not exists website text,
  add column if not exists city text,
  add column if not exists profession text;
