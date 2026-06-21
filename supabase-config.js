// Supabase project connection details
// The publishable (anon) key is safe to expose in frontend code —
// real security comes from Row Level Security policies set up in Supabase.

const SUPABASE_URL = "https://ebroyireivwomqdtumre.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_o-cC-JFIGqHpFa0OQ53_WA_AIwzqU2B";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
