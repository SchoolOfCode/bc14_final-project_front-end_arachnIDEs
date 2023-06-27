import { createClient } from "@supabase/supabase-js";
import { supabaseUrl } from "./Components/BurgerMenu/burgerMenu.js";
import { supabaseAnonKey } from "./Components/BurgerMenu/burgerMenu.js";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

await supabase.auth.signOut();
