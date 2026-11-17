import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://cssvjhsitecdstlfpcxc.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_ST1R4-yMZT8sMS9-5AV07Q_n37YXoYK'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export default supabase
