-- Run this script in Supabase SQL Editor.
-- It creates a table that stores all player answers and allows anon insert/select
-- so the React admin panel can read results across devices.

create extension if not exists pgcrypto;

create table if not exists public.player_answers (
  id text primary key,
  player_session_id text not null,
  stage text not null,
  activity text not null,
  answer_text text not null,
  is_correct boolean,
  story_page integer,
  topic text,
  extra jsonb,
  submitted_at timestamptz not null default now()
);

create index if not exists player_answers_submitted_at_idx
  on public.player_answers (submitted_at desc);

create index if not exists player_answers_session_idx
  on public.player_answers (player_session_id);

alter table public.player_answers enable row level security;

do $$
begin
  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'player_answers'
      and policyname = 'Allow anon insert answers'
  ) then
    create policy "Allow anon insert answers"
      on public.player_answers
      for insert
      to anon
      with check (true);
  end if;

  if not exists (
    select 1
    from pg_policies
    where schemaname = 'public'
      and tablename = 'player_answers'
      and policyname = 'Allow anon select answers'
  ) then
    create policy "Allow anon select answers"
      on public.player_answers
      for select
      to anon
      using (true);
  end if;
end
$$;
