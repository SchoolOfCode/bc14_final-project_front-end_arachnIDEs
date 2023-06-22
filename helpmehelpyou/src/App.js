//import React from "react";
import { Route, Routes} from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Home/homePage";
// to import Page not a component(and giveHelpPage on line 18)
import GiveHelpPage from "./pages/GiveHelp";
import FindHelpPage from "./pages/FindHelp";
import Footer from "./Components/Footer/footer";
import BurgerMenu from "./Components/BurgerMenu/burgerMenu";
//import FindHelp from "./Components/FindHelp/findHelp";
import PostRequestPage from "./pages/PostRequest";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useEffect, useState } from "react";
import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_ANON_KEY
);

// function to log in 
function App() {
  dotenv.config();
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
      );
    } else {
      return (
<>
      <BurgerMenu handleLogout={handleLogout}/>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />        
          <Route path="/give" element={<GiveHelpPage />} />
          <Route path="/find" element={<FindHelpPage/>} />
          <Route path="/findhelpform" element ={<PostRequestPage/>}/>
        </Routes>
      </div>
      <Footer/>
      </>
      );
    }

 
}

export default App;
