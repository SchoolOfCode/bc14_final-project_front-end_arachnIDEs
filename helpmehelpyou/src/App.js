import React from "react";
import { Route, Routes} from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Home/homePage.js";
// to import Page not a component(and giveHelpPage on line 18)
import GiveHelpPage from "./pages/GiveHelp.js";
import FindHelpPage from "./pages/FindHelp.js";
import Footer from "./Components/Footer/footer.js";

import BurgerMenu from "./Components/BurgerMenu/burgerMenu.js";
//import FindHelp from "./Components/FindHelp/findHelp";
import PostRequestPage from "./pages/PostRequest.js";

function App() {
  return (
    <>
      <BurgerMenu />
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

export default App;
