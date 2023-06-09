import React, { useState } from "react";
import "./giveHelp.css";
import image from "./givehelp-image.png";
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
      <h2 className="give-help-title">Give Help</h2>
      <img
        className="give-help-image"
        src={image}
        alt="cartoon person helping another person to climb a ladder"
      ></img>
      <section id="give-help-search">
        <input type="text" onChange={storeInput} className="search-box"></input>
        <button className="search-button">🔍</button>
      </section>
      <section id="listings">
        <h3 className="recent-listings">Recent listings...</h3>
        {dummyData.map((listing) => (
          <div className="individual-listing">
            <h1 className="listing-title">{listing.listing_title}</h1>
            <div className="sub-title">
              <p className="s-s-c-id">{listing.ssc_name}</p>
              <p className="date-posted">{listing.date_posted}</p>
            </div>
            <p className="listing-details">{listing.listing_details}</p>
            <p className="offer-details">
              I can offer... {listing.offer_details}
            </p>
            <div className="user-info">
              <div className="image-container">
                <img
                  className="profile-picture"
                  src={listing.profile_picture}
                  alt="profile"
                />
                <p className="rating">{listing.rating}</p>
              </div>
              <div className="user-details-container">
                <p className="display-name">{listing.display_name}</p>
                <p className="borough-id">{listing.borough_id}</p>
              </div>
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
