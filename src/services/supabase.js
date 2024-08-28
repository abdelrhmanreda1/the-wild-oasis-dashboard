import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lormzoucpycjysrtsbvx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxvcm16b3VjcHljanlzcnRzYnZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM3NTY5NTYsImV4cCI6MjAxOTMzMjk1Nn0.e9opF0qRYvQIwzWuvbROg-htGe57tIyZXVK5VtPATXE";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
