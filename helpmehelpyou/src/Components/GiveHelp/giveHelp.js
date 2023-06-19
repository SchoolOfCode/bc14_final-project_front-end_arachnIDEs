import React, { useState, useEffect } from "react";
import "../giveAndFindHelp.css";
import image from "./givehelp-image.png";
// import dummyData from "./DummyData";
import { Link } from "react-router-dom";

// Create skeleton code for GiveHelp page.
// A list of all listings to render by default.
// State to store data (i.e. all listings)
// Users to be able to search for listings with keywords and category filter
// State to store input box input. ✅
// Render a list results.

// Search Plan...
// Store the userInput ✅
// When the search button is clicked, we want to run a function called filterListings which sets a new filtered array (called filteredListings) to any/all elements in the full listings array if they meet the search criteria and render that instead of listings.
// If the search box is empty and the button is clicked, then show the full listings array.

export default function GiveHelp() {
  // state goes here
  const [userInput, setUserInput] = useState("");
  const [listings, setListings] = useState([]);
  const [filteredListings, setfilteredListings] = useState([]);

  // function filterListings() {
  //   console.log("button has been clicked.");
  //   const newArray = listings.filter((item) => {
  //     console.log(item);
  //     console.log(`userInput === ${userInput} and item === ${item}`);
  //     if (item.title === userInput) {
  //       return true;
  //     }
  //   });
  //   console.log(newArray);
  //   setfilteredListings(newArray);
  // }

  function filterListings() {
    if (listings && listings.length > 0) {
      const newArray = listings.filter((item) => {
        console.log(item.listing_title.includes(userInput));
        return item.listing_title.includes(userInput);
      });
      setfilteredListings(newArray);
    }
  }

  // functions: saving input from input box, click on button in listing to get email address of user.
  function storeInput(event) {
    setUserInput(event.target.value);
    console.log(userInput);
  }

  function contactUser(email) {
    // Display email address of user
    alert(`Here's the email address: ${email}`);
  }

  // function to call the listings from the database
  async function fetchAllListings() {
    const res = await fetch(
      "https://arachnides-backend.onrender.com/api/listings"
    );
    const data = await res.json();
    const dummyData = data.payload;
    console.log(dummyData);
    setListings(dummyData);
  }

  // Fetch listings before rendering
  useEffect(() => {
    fetchAllListings();
  }, []);

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
      <h1 className="give-and-find-help-title">Give Help</h1>
      {/* Logo */}
      <img
        className="give-help-image"
        src={image}
        alt="cartoon person helping another person to climb a ladder"
      ></img>
      {/* Search bar and button */}
      <section id="give-and-find-help-search-section">
        <input
          type="text"
          onChange={storeInput}
          className="give-and-find-help-search-box"
        ></input>
        <button
          className="give-and-find-help-search-button"
          onClick={filterListings}
        >
          Search
        </button>
      </section>{" "}
      <section id="give-help-post-request-link-from-givehelp">
        <p className="give-help-post-request">
          Need help? <Link to="/findhelpform">Post a request </Link>
        </p>
      </section>
      <h3 className="give-and-find-help-listings-area-title">
        Recent listings
      </h3>
      {/* Recent listings fetched from DB */}
      <section className="give-and-find-help-listings-area">
        {listings.length === 0 ? (
          <div className="loading-div">
            <p>Loading listings...</p>
            <img
              src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"
              alt="Loading gif"
              className="give-and-find-help-loading-gif"
            ></img>
          </div>
        ) : filteredListings.length === 0 ? (
          listings.map((listing) => (
            <div
              key={listing.listing_id}
              className="give-and-find-help-individual-listing"
              data-testid="listing"
            >
              <h1 className="give-and-find-help-listing-title">
                {listing.listing_title}
              </h1>
              <div className="give-and-find-help-info-container">
                <p className="give-and-find-help-subheading">Date posted: </p>
                <p className="give-and-find-help-info">
                  {listing.created_at.substring(8, 10)}
                  {listing.created_at.substring(4, 8)}
                  {listing.created_at.substring(0, 4)}
                </p>
              </div>
              {/* <div className="give-help-sub-title"> */}
              {/* Are there skills wanted in the guest listings DB? */}
              {/* <p className="give-and-find-help-info">{listing.ssc_wanted}</p> */}
              {/* Date stamp - this needs editing */}
              {/* </div> */}
              <p
                className="give-and-find-help-info"
                id="give-help-listing-details"
              >
                {listing.listing_details}
              </p>
              <div className="give-and-find-help-info-container">
                <p className="give-and-find-help-subheading">I can offer:</p>
                <p className="give-and-find-help-info">
                  {listing.skills_offered}
                </p>
              </div>
              <div className="give-and-find-help-info-container">
                <p className="give-and-find-help-subheading">I need:</p>
                <p className="give-and-find-help-info">
                  {listing.skills_wanted}
                </p>
              </div>
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
              <div className="give-and-find-help-info-container">
                <p className="give-and-find-help-subheading">Posted by:</p>
                <p className="give-and-find-help-info">
                  {listing.display_name}
                </p>
              </div>
              <div className="give-and-find-help-info-container">
                <p className="give-and-find-help-subheading">Location:</p>
                <p className="give-and-find-help-info">
                  {listing.borough_name}
                </p>
              </div>
              <div className="give-and-find-help-user-contact">
                <button
                  className="give-and-find-help-contact-user"
                  onClick={() => contactUser(listing.email_address)}
                >
                  Contact user
                </button>
                <button className="give-and-find-help-visit-profile">
                  View Profile
                </button>
              </div>
            </div>
          ))
        ) : (
          filteredListings.map((listing) => (
            <div
              key={listing.listing_id}
              className="give-and-find-help-individual-listing"
              data-testid="listing"
            >
              <h1 className="give-and-find-help-listing-title">
                {listing.listing_title}
              </h1>
              <div className="give-and-find-help-info-container">
                <p className="give-and-find-help-subheading">Date posted: </p>
                <p className="give-and-find-help-info">
                  {listing.created_at.substring(8, 10)}
                  {listing.created_at.substring(4, 8)}
                  {listing.created_at.substring(0, 4)}
                </p>
              </div>
              {/* <div className="give-help-sub-title"> */}
              {/* Are there skills wanted in the guest listings DB? */}
              {/* <p className="give-and-find-help-info">{listing.ssc_wanted}</p> */}
              {/* Date stamp - this needs editing */}
              {/* </div> */}
              <p
                className="give-and-find-help-info"
                id="give-help-listing-details"
              >
                {listing.listing_details}
              </p>
              <div className="give-and-find-help-info-container">
                <p className="give-and-find-help-subheading">I can offer:</p>
                <p className="give-and-find-help-info">
                  {listing.skills_offered}
                </p>
              </div>
              <div className="give-and-find-help-info-container">
                <p className="give-and-find-help-subheading">I need:</p>
                <p className="give-and-find-help-info">
                  {listing.skills_wanted}
                </p>
              </div>
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
              <div className="give-and-find-help-info-container">
                <p className="give-and-find-help-subheading">Posted by:</p>
                <p className="give-and-find-help-info">
                  {listing.display_name}
                </p>
              </div>
              <div className="give-and-find-help-info-container">
                <p className="give-and-find-help-subheading">Location:</p>
                <p className="give-and-find-help-info">
                  {listing.borough_name}
                </p>
              </div>
              {/* </div> */}
              <div className="give-and-find-help-user-contact">
                <button
                  className="give-and-find-help-contact-user"
                  onClick={() => contactUser(listing.email_address)}
                >
                  Contact user
                </button>
                <button className="give-and-find-help-visit-profile">
                  View Profile
                </button>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
