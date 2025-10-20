import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kgmvymnzdxxpaexatykp.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnbXZ5bW56ZHh4cGFleGF0eWtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA5NDMzNTQsImV4cCI6MjA3NjUxOTM1NH0.fuWS6GSeJw67aDhaVd9MgSaZ5EKG9LRD-cseS3jyI4E";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
