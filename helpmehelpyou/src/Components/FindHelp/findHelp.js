import React, { useState } from "react";
import "./findHelp.css";
import image from "./findHelpImage.png";
import helperDummyData from "./helperDummyData"


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
    <div className="findHelpContainer">
      <h1 className="find-help-title">Find Help</h1>
      <img
        className="find-help-image"
        src={image}
        alt="cartoon person helping another person to climb a ladder"
      ></img>
      <section id="find-help-search">
        <input type="text" onChange={storeInput} className="search-box"></input>
        <button className="search-button">🔍</button>
      </section>

      <section id="post-request-link">      
        <p className="post-request">Need hepl? <a href="/findhelpform">Post a request.</a></p>
      </section>

      <section id="helpers">
        <h3 className="helper-list">Browse Helpers...</h3>
        {helperDummyData.map((listing) => (
          <div className="individual-listing">
            <h1 className="listing-title">{listing.listing_title}</h1>
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
            <p className="about-me">{listing.about_me}</p>
            <p className="s-s-c-id">
              I can offer... {listing.ssc_name}
            </p>
            <p className="s-s-c-id">I need... {listing.ssc_name}</p>
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