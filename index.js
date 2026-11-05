const SUPABASE_URL = "https://htmafwhpgabwapneqzaz.supabase.co";

const SUPABASE_ANON_KEY =
  "sb_publishable_Vszdpz_SRGlPj3lbrtBaDA_Dd3IT8oA";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

console.log("Supabase connected!");
