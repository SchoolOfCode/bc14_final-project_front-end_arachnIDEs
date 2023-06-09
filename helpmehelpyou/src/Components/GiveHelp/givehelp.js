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

  function contactUser(email) {
    // Display email address of user
    alert(`Here's the email address: ${email}`);
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
        <input type="text" onChange={storeInput}></input>
        <button>Search</button>
      </section>

      <section id="listings">
        {dummyData.map((listing) => (
          <div className="individual-listing">
            <h1 className="listing-title">{listing.listing_title}</h1>
            <p className="date-posted">{listing.date_posted}</p>
            <p className="listing-details">{listing.listing_details}</p>
            <p className="s-s-c-id">{listing.ssc_name}</p>
            <div className="user-info">
              <img
                className="profile-picture"
                src={listing.profile_picture}
                alt="profile"
              />
              <p className="display-name">{listing.display_name}</p>
              <p className="borough-id">{listing.borough}</p>
            </div>
            <div className="user-contact">
              <button
                className="contact-user"
                onClick={() => contactUser(listing.email_address)}
              >
                Contact user
              </button>
              <button className="visit-profile">View Profile</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
