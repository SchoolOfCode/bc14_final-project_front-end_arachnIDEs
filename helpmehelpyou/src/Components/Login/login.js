import "./login.css";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_ANON_KEY
);

export default function Login({ session, setSession }) {
  const navigate = useNavigate();
  // console.log("Logged in", session);
  if (session && session.user.last_sign_in_at === "Never") {
    navigate("/registration");
  } else if (session) {
    navigate("/myprofile");
  }

  //testing to log in with github
  // async function signInWithGitHub() {
  //     const { data, error } = await supabase.auth.signInWithOAuth({
  //       provider: 'github',
  //     })
  //   }
  //   async function signout() {
  //     const { error } = await supabase.auth.signOut()
  //   }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("session is being set below this line (line 29)");
      setSession(session);
      if (session) {
        console.log(session.user);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log("session is being set below this line (line 40)");
      setSession(session);
      if (session) {
        // getTasks();
        // writeCategoryIcons();
      }
    });

    return () => subscription.unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="login-page">
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
        }}
        onSignOut={() => {
          console.log("signing out");
          setSession(null);
        }}
        providers={["github"]}
      />
      {session ? (
        <p>Logged in as: {session.user.email}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}
