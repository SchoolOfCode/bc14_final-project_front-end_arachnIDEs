import React, { useState } from "react";
import "./findHelp.css";
import image from "./findHelpImage.png";
import helperDummyData from "./helperDummyData"
import { Link } from "react-router-dom";


export default function FindHelp() {
  // state goes here
  const [userInput, setUserInput] = useState("");

  // functions: saving input from input box, click on button in listing to get email address of user.
  function storeInput(event) {
    setUserInput(event.target.value);
    console.log(userInput);
  }

 

  function contactUser(email) {
    alert(`Here's the email address: ${email}`);
  }


  return (
  // Parent find-help-div
    <div className="find-help-container">
      <h1 className="find-help-title">Find Help</h1>
      {/* Logo */}
      <img
        className="find-help-image"
        src={image}
        alt="cartoon person helping another person to climb a ladder"
      ></img>
      {/* Search box and button */}
      <section id="find-help-search-section">
        <input type="text" onChange={storeInput} className="find-help-search-box"></input>
        <button className="find-help-search-button">🔍</button>
      </section>
{/* Link to the Post a request page */}
      <section id="find-help-post-request-link">      

        <p className="find-help-post-request">Need something specific? <Link to ="/findhelpform">Post a request </Link></p>

      </section>
{/* List of helpers */}
      <section id="find-help-helpers">
        {/* List of helpers TITLE */}
        <h3 className="find-help-helper-list">Helpers</h3>
        {helperDummyData.map((listing) => (
          // Parent div for each new box
          <div key={listing.user_id} className="find-help-individual-listing">
            <h1 className="find-help-listing-title">{listing.listing_title}</h1>
            <div className="find-help-user-img-and-rating">
              <div className="find-help-image-container">
                {/* Img from user profile */}
                <img
                  className="find-help-profile-picture"
                  src={listing.profile_picture}
                  alt="profile"
                />
                <p className="find-help-rating">{listing.rating}</p>
              </div>
              <div className="find-help-user-details-container">
                <p className="find-help-display-name">{listing.display_name}</p>
                <p className="find-help-borough-name">{listing.borough_name}</p>
              </div>
            </div>
            <p className="find-help-about-me">{listing.about_me}</p>
            <p className="find-help-skills">
              I can offer... {listing.skills_offered}
            </p>
            <p className="find-help-skills">I need... {listing.skills_needed}</p>
            <div className="find-help-user-contact">
              <button
                className="find-help-contact-user"
                onClick={() => contactUser(listing.email_address)}
              >
                Contact user
              </button>
              <button className="find-help-visit-profile">View Profile</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}