import { createClient } from "@supabase/supabase-js";

const DEFAULT_SUPABASE_URL = "https://aoobxqbkrmhhxtscuukc.supabase.co";
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? DEFAULT_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

// Derive API URL from Supabase URL
const API_URL = `${SUPABASE_URL}/functions/v1`;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export { SUPABASE_URL, SUPABASE_ANON_KEY, API_URL };
