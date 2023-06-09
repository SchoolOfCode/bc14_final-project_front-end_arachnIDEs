import React, { useState } from "react";
import "./giveHelp.css";
import dummyData from "./DummyData";

// Create skeleton code for GiveHelp page.
// A list of all listings to render by default.
// State to store data (i.e. all listings)
// Users to be able to search for listings with keywords and category filter
// State to store input box input. ✅
// Render a list results.

export default function GiveHelp() {
  // state goes here
  const [userInput, setUserInput] = useState("");

  // functions: saving input from input box, click on button in listing to get email address of user.
  function storeInput(event) {
    setUserInput(event.target.value);
    console.log(userInput);
  }

  function contactUser() {
    // display email address of user
    alert("Here's the email address!");
  }
  /*renders:
Header
Nav Bar
GiveHelpSearch - searchInput (input box) & searchBtn (button)
Listing - <h1> for title / summary
<p> for details
<img> for profile picture
<button> to close the component? */

  return (
    <div className="giveHelpContainer">
      <section id="give-help-search">
        <input type="text" onChange={storeInput} className="search-box"></input>
        <button className = "search-button">Search</button>
      </section>
      <section id="listings">
        <div className="individual-listing">
          <h1 className="listing-title">Listing Title</h1>
          <p className="date-posted">       </p>
            <p className="listing-details">Listing Details</p>
          <p className="s-s-c-id">I can offer... skills</p>
          <div className="user-info">
            <img
              className="profile-picture"
              src="https://via.placeholder.com/150"
              alt="profile" />
            <p className="display-name">Display Name</p>
            <p className="borough-id">Borough</p>
          </div>
          <div className="user-contact">
            <button className="contact-user" onClick={contactUser}>
              Contact user
            </button>
            <button className="visit-profile">View Profile</button>
          </div>
        </div>
      </section>
    </div>
  )
}
