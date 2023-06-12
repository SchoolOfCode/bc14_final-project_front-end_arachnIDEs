import React from "react";
import { Route, Routes} from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Home/homePage";
// to import Page not a componrnt(and giveHelpPage on line 18)
import GiveHelpPage from "./pages/GiveHelp";
import FindHelpPage from "./pages/FindHelp";

import BurgerMenu from "./Components/BurgerMenu/burgerMenu";
//import FindHelp from "./Components/FindHelp/findHelp";
import PostRequestPage from "./pages/PostRequest";

function App() {
  return (
    <>
      <BurgerMenu />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />        
          <Route path="/give" element={<GiveHelpPage />} />
          <Route path="/find" element={<FindHelpPage/>} />
          <Route path="/findhelpform" element ={<PostRequestPage/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
