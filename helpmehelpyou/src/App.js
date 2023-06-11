import React from "react";
import { Route, Routes} from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Home/homePage";
import GiveHelpPage from "./pages/GiveHelp";
import BurgerMenu from "./Components/BurgerMenu/burgerMenu";
import FindHelp from "./Components/FindHelp/findHelp";
import PostRequest from "./Components/PostRequest/postRequest";

function App() {
  return (
    <>
      <BurgerMenu />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/give" element={<GiveHelpPage />} />
          <Route path="/find" element={<FindHelp/>} />
          <Route path="/findhelpform" element ={<PostRequest/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
