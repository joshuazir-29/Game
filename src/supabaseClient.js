import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const fallbackSupabaseUrl = import.meta.env.NEXT_PUBLIC_SUPABASE_URL
const fallbackSupabaseAnonKey = import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

const resolvedSupabaseUrl = supabaseUrl || fallbackSupabaseUrl
const resolvedSupabaseAnonKey = supabaseAnonKey || fallbackSupabaseAnonKey

export const isSupabaseConfigured = Boolean(resolvedSupabaseUrl && resolvedSupabaseAnonKey)

export const supabase = isSupabaseConfigured
  ? createClient(resolvedSupabaseUrl, resolvedSupabaseAnonKey, {
      auth: {
        persistSession: false,
      },
    })
  : null
