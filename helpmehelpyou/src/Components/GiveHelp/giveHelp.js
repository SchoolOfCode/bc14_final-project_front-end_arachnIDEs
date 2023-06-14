import React, { useState } from "react";
import "./giveHelp.css";
import image from "./givehelp-image.png";
import dummyData from "./DummyData";
import { Link } from "react-router-dom";

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
    <div className="give-help-container">
      <h1 className="give-help-title">Give Help</h1>
      <img
        className="give-help-image"
        src={image}
        alt="cartoon person helping another person to climb a ladder"
      ></img>
      <section id="give-help-search">
        <input type="text" onChange={storeInput} className="give-help-search-box"></input>
        <button className="give-help-search-button">🔍</button>
      </section>  <section id="give-help-post-request-link-from-givehelp">      

        <p className="give-help-post-request">Need help? <Link to ="/findhelpform">Post a request </Link></p>

      </section>
      <section id="give-help-listings">
        <h3 className="give-help-recent-listings">Recent listings...</h3>
        {dummyData.map((listing) => (
          <div className="give-help-individual-listing">
            <h1 className="give-help-listing-title">{listing.listing_title}</h1>
            <div className="give-help-sub-title">
              <p className="give-help-ssc-id">{listing.ssc_name}</p>
              <p className="give-help-date-posted">{listing.date_posted}</p>
            </div>
            <p className="give-help-listing-details">{listing.listing_details}</p>
            <p className="give-help-offer-details">
              I can offer... {listing.offer_details}
            </p>
            <div className="give-help-user-info">
              <div className="give-help-image-container">
                <img
                  className="give-help-profile-picture"
                  src={listing.profile_picture}
                  alt="profile"
                />
                <p className="give-help-rating">{listing.rating}</p>
              </div>
              <div className="give-help-user-details-container">
                <p className="give-help-display-name">{listing.display_name}</p>
                <p className="give-help-borough-name">{listing.borough_id}</p>
              </div>
            </div>
            <div className="give-help-user-contact">
              <button
                className="give-help-contact-user"
                onClick={() => contactUser(listing.email_address)}
              >
                Contact user
              </button>
              <button className="give-help-visit-profile">View Profile</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
