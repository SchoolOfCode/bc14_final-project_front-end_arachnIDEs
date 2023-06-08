import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Home/homePage";
import GiveHelp from "./Components/GiveHelp/giveHelp";
import BurgerMenu from "./Components/BurgerMenu/burgerMenu";
function App() {
  return (
    <>
      <BurgerMenu />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/give" element={<GiveHelp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
