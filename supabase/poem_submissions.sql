-- Run this script in Supabase SQL Editor.
-- It creates the table used by stage 3 poem submissions so the admin panel can read them across devices.

create extension if not exists pgcrypto;

create table if not exists public.poem_submissions (
  id text primary key,
  player_name text not null default '',
  poem text not null,
  topic text not null,
  submitted_at timestamptz not null default now()
);

alter table public.poem_submissions
  add column if not exists player_name text not null default '';

create index if not exists poem_submissions_submitted_at_idx
  on public.poem_submissions (submitted_at desc);

alter table public.poem_submissions enable row level security;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'poem_submissions'
      and policyname = 'Allow anon insert poem submissions'
  ) then
    create policy "Allow anon insert poem submissions"
      on public.poem_submissions
      for insert
      to anon
      with check (true);
  end if;

  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'poem_submissions'
      and policyname = 'Allow anon select poem submissions'
  ) then
    create policy "Allow anon select poem submissions"
      on public.poem_submissions
      for select
      to anon
      using (true);
  end if;
end
$$;