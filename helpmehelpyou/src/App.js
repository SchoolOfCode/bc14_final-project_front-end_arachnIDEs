import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Home/homePage";
// to import Page not a component(and giveHelpPage on line 18)
import GiveHelpPage from "./pages/GiveHelp";
import FindHelpPage from "./pages/FindHelp";
import Footer from "./Components/Footer/footer";
import LoginPage from "./pages/LoginPage";
import{useState} from "react";
import BurgerMenu from "./Components/BurgerMenu/burgerMenu";
//import FindHelp from "./Components/FindHelp/findHelp";
import PostRequestPage from "./pages/PostRequest";
import RegFormPage from "./pages/RegFormPage"
import UserProfilePage from "./pages/UserProfilePage"

function App() {
  const [session, setSession] = useState(null);
  console.log("Here is the session at App level:", session)
  return (
    <>
      <div className="app-container">
        <BurgerMenu session={session} setSession={setSession}/>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/give" element={<GiveHelpPage />} />
            <Route path="/find" element={<FindHelpPage />} />
            <Route path="/findhelpform" element={<PostRequestPage />} />
            <Route path="/login" element={<LoginPage  session={session} setSession={setSession}/>} />
            <Route path="/registration" element={<RegFormPage session={session} />} />
            <Route path="/myprofile" element={<UserProfilePage />} />

          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
