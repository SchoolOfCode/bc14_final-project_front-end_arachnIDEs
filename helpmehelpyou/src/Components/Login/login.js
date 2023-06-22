
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
// import HomePage from "Components/HomePage/homePage";
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_ANON_KEY
);



export default function Login() {

      const [session, setSession] = useState(null);
// console.log("keay", process.env.REACT_APP_SUPABASE_URL,  process.env.REACT_APP_ANON_KEY);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        //getMessages(session);
        //getUsers();
        // console.log("session", session);
      }
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
       // getMessages(session);
        //getUsers();
        // console.log("session", session);
      }
    });

    return () => subscription.unsubscribe();
  }, []);
// and log out
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  
    if (!session) {
      return (
        <Auth
          supabaseClient={supabase}

          providers={["google", "github", "facebook"]}

          />

      );}
      else{
        return
      }
    }
    