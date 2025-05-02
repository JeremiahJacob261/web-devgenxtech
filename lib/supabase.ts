import { createClient } from '@supabase/supabase-js' //import createClient

const supabaseKEY =    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdncHZ4a29wYXRlaml4anl4eXlvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjIxNTAwNSwiZXhwIjoyMDYxNzkxMDA1fQ.sEvOwB2GRJrS6PvNHCc5x3ArtCr7ESzGCBqzSui9a9Q"
const supabaseURL =  "https://ggpvxkopatejixjyxyyo.supabase.co"

const supabase = createClient(supabaseURL, supabaseKEY)  //initialize supabase client
export  default supabase; //export supabase