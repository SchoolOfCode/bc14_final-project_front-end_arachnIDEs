import React, { useState } from "react";
import "../../giveAndFindHelp.css";
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
    // Parent container
    <div className="give-and-find-help-container">
      <h1 className="give-help-title">Give Help</h1>
      {/* Logo */}
      <img
        className="give-help-image"
        src={image}
        alt="cartoon person helping another person to climb a ladder"
      ></img>
      {/* Search bar and button */}
      <section id="give-and-find-help-search-section">
        <input type="text" onChange={storeInput} className="give-and-find-help-search-box"></input>
        <button className="give-and-find-help-search-button">🔍</button>
      </section>  <section id="give-help-post-request-link-from-givehelp">      

        <p className="give-help-post-request">Need help? <Link to ="/findhelpform">Post a request </Link></p>

      </section>
      {/* Recent listings fetched from DB */}
      <section id="give-help-listings">
        <h3 className="give-and-find-help-listings-area-title">Recent listings</h3>
        {dummyData.map((listing) => (
          <div key={listing.listing_id} className="give-and-find-help-individual-listing">
            <h1 className="give-and-find-help-listing-title">{listing.listing_title}</h1>
            <div className="give-help-sub-title">
              {/* Are there skills wanted in the guest listings DB? */}
              <p className="give-and-find-help-skills">{listing.ssc_wanted}</p>
              {/* Date stamp - this needs editing */}
              <p className="give-help-date-posted">{listing.created_at}</p>
            </div>
            <p className="give-help-listing-details">{listing.listing_details}</p>
            <p className="give-help-skills-offer-details">
              I can offer... {listing.skills_offered}
            </p>
            {/* This div isn't being used at the moment and was messing up the alignment of the box! When an image is added - this div can be added again. 
            <div className="give-help-user-info"> */}
              {/* <div className="give-help-image-container">
                {/* There is no image in the DB at the moment 
                <img
                  className="give-help-profile-picture"
                  src={listing.profile_picture}
                  alt="profile"
                />
                There is no rating yet - we need to do a join to the user table 
                <p className="give-help-rating">{listing.rating}</p>
              </div> */}
              <div className="give-help-user-details-container">
                <div className="give-help-posted-by-div">
                <p className="give-and-find-help-display-name">Posted by:</p>
                <p className="give-and-find-help-display-name">{listing.display_name}</p>
                </div>
                <div className="give-help-location-div">
                <p className="give-and-find-help-display-name">Location:</p>
                <p className="give-and-find-help-display-name">{listing.borough_name}</p>
                </div>
                <p className="give-help-borough-name"> </p>
              </div>
            {/* </div> */}
            <div className="give-and-find-help-user-contact">
              <button
                className="give-and-find-help-contact-user"
                onClick={() => contactUser(listing.email_address)}
              >
                Contact user
              </button>
              <button className="give-and-find-help-visit-profile">View Profile</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
