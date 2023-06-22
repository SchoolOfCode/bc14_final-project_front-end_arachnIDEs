import "./login.css"
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@supabase/supabase-js";
import { useEffect} from "react";


const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_ANON_KEY
  );

export default function Login({session, setSession}) {
    console.log("Hi this is im loged", session);
  

    useEffect(() => {
        
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session);
          if (session) {
          
          }
        });
    
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session);
          if (session) {
            // getTasks();
            // writeCategoryIcons();
          }
        });

    
        return () => subscription.unsubscribe();

      }, []);

      
      

    return(

        <div className="login-page">   
     
         <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              
            }}
            onSignOut={() => setSession(null)}
            providers={["google", "facebook"]}
          />
  {session ? (
        <p>Logged in as: {session.user.email}</p>
      ) : (
        <p>Not logged in</p>
      )}
        </div>
    )
    
    
    
}
