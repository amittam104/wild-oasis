import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://eqlxfmdvyebppjnhwuuo.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxbHhmbWR2eWVicHBqbmh3dXVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3NjkzNTMsImV4cCI6MjAzODM0NTM1M30._X6iflkHjxnnbrPFt-9n6yQ1wptL_qbHvBqO4ZjCGXc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
