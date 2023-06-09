import React from "react";
import { Route, Routes} from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Home/homePage";
import GiveHelp from "./Components/GiveHelp/giveHelp";
import BurgerMenu from "./Components/BurgerMenu/burgerMenu";
import FindHelp from "./Components/FindHelp/findHelp";

function App() {
  return (
    <>
      <BurgerMenu />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/give" element={<GiveHelp />} />
          <Route path="/find" element={<FindHelp/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
