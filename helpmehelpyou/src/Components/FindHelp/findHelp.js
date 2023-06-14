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
    <div className="find-help-container">
      <h1 className="find-help-title">Find Help</h1>
      <img
        className="find-help-image"
        src={image}
        alt="cartoon person helping another person to climb a ladder"
      ></img>
      <section id="find-help-search-section">
        <input type="text" onChange={storeInput} className="find-help-search-box"></input>
        <button className="find-help-search-button">🔍</button>
      </section>

      <section id="find-help-post-request-link">      

        <p className="find-help-post-request">Need something specific? <Link to ="/findhelpform">Post a request </Link></p>

      </section>

      <section id="find-help-helpers">
        <h3 className="find-help-helper-list">Helpers:</h3>
        {helperDummyData.map((listing) => (
          <div className="find-help-individual-listing">
            <h1 className="find-help-listing-title">{listing.listing_title}</h1>
            <div className="find-help-user-info">
              <div className="find-help-image-container">
                <img
                  className="find-help-profile-picture"
                  src={listing.profile_picture}
                  alt="profile"
                />
                <p className="find-help-rating">{listing.rating}</p>
              </div>

              <div className="user-details-container">
                <p className="display-name">{listing.display_name}</p>
                <p className="borough-id">{listing.borough_name}</p>
              </div>
            </div>
            <p className="about-me">{listing.about_me}</p>
            <p className="s-s-c-id">
              I can offer... {listing.skills_offered}
            </p>
            <p className="s-s-c-id">I need... {listing.skills_needed}</p>
            <div className="user-contact">


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