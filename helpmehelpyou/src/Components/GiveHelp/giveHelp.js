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
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);

  const [selectedBorough, setSelectedBorough] = useState(null);
  let newArray = [];
  const cards = [
    //   {
    //     id: 1,
    //     category: "All",
    //   },
    //   {
    //     id: 2,
    //     category: "Household",
    //   },
    //   {
    //     id: 3,
    //     category: "Tutoring",
    //   },
    //   {
    //     id: 4,
    //     category: "Sport & Leisure",
    //   },
    //   {
    //     id: 5,
    //     category: "Professional",
    //   },
    //   {
    //     id: 6,
    //     category: "Mobility",
    //   },
    //   {
    //     id: 7,
    //     category: "French",
    //   },
    //   {
    //     id: 8,
    //     category: "Cleaning",
    //   },
    //   {
    //     id: 9,
    //     category: "German",
    //   },
    //   {
    //     id: 10,
    //     category: "Legal advice",
    //   },
    //   {
    //     id: 11,
    //     category: "Mandarin",
    //   },
    //   {
    //     id: 12,
    //     category: "Gardening",
    //   },
    //   {
    //     id: 13,
    //     category: "Piano Lessons",
    //   },
    //   {
    //     id: 14,
    //     category: "Other",
    //   },
    // ];
    { id: 0.5, borough: "All" },
    { id: 0, borough: "Barking and Dagenham" },
    { id: 1, borough: "Barnet" },
    { id: 2, borough: "Bexley" },
    { id: 3, borough: "Brent" },
    { id: 4, borough: "Bromley" },
    { id: 5, borough: "Camden" },
    { id: 6, borough: "Croydon" },
    { id: 7, borough: "Ealing" },
    { id: 8, borough: "Enfield" },
    { id: 9, borough: "Greenwich" },
    { id: 10, borough: "Hackney" },
    { id: 11, borough: "Hammersmith and Fulham" },
    { id: 12, borough: "Haringey" },
    { id: 13, borough: "Harrow" },
    { id: 14, borough: "Havering" },
    { id: 15, borough: "Hillingdon" },
    { id: 16, borough: "Hounslow" },
    { id: 17, borough: "Islington" },
    { id: 18, borough: "Kensington and Chelsea" },
    { id: 19, borough: "Kingston upon Thames" },
    { id: 20, borough: "Lambeth" },
    { id: 21, borough: "Lewisham" },
    { id: 22, borough: "Merton" },
    { id: 23, borough: "Newham" },
    { id: 24, borough: "Redbridge" },
    { id: 25, borough: "Richmond upon Thames" },
    { id: 26, borough: "Southwark" },
    { id: 27, borough: "Sutton" },
    { id: 28, borough: "Tower Hamlets" },
    { id: 29, borough: "Waltham Forest" },
    { id: 30, borough: "Wandsworth" },
    { id: 31, borough: "Westminster" },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === cards.length - 3 ? 0 : prevIndex + 1
    );
  };

  function categoryFilter(card) {
    setSelectedCard(card.id);
    setSelectedBorough(card.borough);
    // set the following code block to only run if something has been searched
    if (userInput !== "") {
      const filteredCategoryArray = filteredListings.filter((item) => {
        return item.borough_name.includes(card.borough);
      });
      // filters through the selected borough by the user input again
      const filteredSearchandBorough = filteredCategoryArray.filter((item) => {
        return item.listing_title.includes(userInput);
      });
      setfilteredListings(filteredSearchandBorough);
    } else {
      // else just filters by borough
      const categoryArray = listings.filter((item) => {
        return item.borough_name.includes(card.borough);
      });
      setfilteredListings(categoryArray);
      setSelectedBorough(card.borough);
    }
  }

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
    // tells if to do this if the search is conducted after a borough has been selected
    if (listings && listings.length > 0 && selectedBorough !== null) {
      newArray = listings.filter((item) => {
        return item.listing_title.includes(userInput);
      });
      let filteredbyBoroughandSearch = newArray.filter((item) => {
        return item.borough_name.includes(selectedBorough);
      });
      setfilteredListings(filteredbyBoroughandSearch);
    }
    // otherwise performs search as normal
    else if (listings && listings.length > 0) {
      newArray = listings.filter((item) => {
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
      <h1 className="give-help-title">Give Help</h1>
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
      <h3 className="category-title">Browse by borough:</h3>
      <div className="carousel">
        <div className="givehelp-card-container">
          <button className="givehelp-left-arrow" onClick={handlePrev}>
            ←
          </button>
          {cards.slice(activeIndex, activeIndex + 3).map((card) => (
            <div
              className={`givehelp-card ${
                card.id === selectedCard ? "selected-card" : ""
              }`}
              key={card.id}
              onClick={() => categoryFilter(card)}
            >
              <div className="givehelp-card-contents">
                <p>{card.borough}</p>
              </div>
            </div>
          ))}
          <button className="givehelp-right-arrow" onClick={handleNext}>
            →
          </button>
        </div>
      </div>
      {/* Recent listings fetched from DB */}
      <section id="give-help-listings">
        <h3 className="give-and-find-help-listings-area-title">
          Recent listings
        </h3>
        {filteredListings.length === 0
          ? listings.map((listing) => (
              <div
                key={listing.listing_id}
                className="give-and-find-help-individual-listing"
                data-testid="listing"
              >
                <h1 className="give-and-find-help-listing-title">
                  {listing.listing_title}
                </h1>
                <div className="give-help-sub-title">
                  {/* Are there skills wanted in the guest listings DB? */}
                  <p className="give-and-find-help-skills">
                    {listing.ssc_wanted}
                  </p>
                  {/* Date stamp - this needs editing */}
                  <p className="give-help-date-posted">{listing.created_at}</p>
                </div>
                <p className="give-help-listing-details">
                  {listing.listing_details}
                </p>
                <p className="give-help-skills-offer-details">
                  I can offer... {listing.skills_offered}
                </p>
                <p className="give-help-skills-offer-details">
                  I need... {listing.skills_wanted}
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
                    <p className="give-and-find-help-display-name">
                      Posted by:
                    </p>
                    <p className="give-and-find-help-display-name">
                      {listing.display_name}
                    </p>
                  </div>
                  <div className="give-help-location-div">
                    <p className="give-and-find-help-display-name">Location:</p>
                    <p className="give-and-find-help-display-name">
                      {listing.borough_name}
                    </p>
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
                  <button className="give-and-find-help-visit-profile">
                    View Profile
                  </button>
                </div>
              </div>
            ))
          : filteredListings.map((listing) => (
              <div
                key={listing.listing_id}
                className="give-and-find-help-individual-listing"
                data-testid="listing"
              >
                <h1 className="give-and-find-help-listing-title">
                  {listing.listing_title}
                </h1>
                <div className="give-help-sub-title">
                  {/* Are there skills wanted in the guest listings DB? */}
                  <p className="give-and-find-help-skills">
                    {listing.ssc_wanted}
                  </p>
                  {/* Date stamp - this needs editing */}
                  <p className="give-help-date-posted">{listing.created_at}</p>
                </div>
                <p className="give-help-listing-details">
                  {listing.listing_details}
                </p>
                <p className="give-help-skills-offer-details">
                  I can offer... {listing.skills_offered}
                </p>
                <p className="give-help-skills-offer-details">
                  I need... {listing.skills_wanted}
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
                    <p className="give-and-find-help-display-name">
                      Posted by:
                    </p>
                    <p className="give-and-find-help-display-name">
                      {listing.display_name}
                    </p>
                  </div>
                  <div className="give-help-location-div">
                    <p className="give-and-find-help-display-name">Location:</p>
                    <p className="give-and-find-help-display-name">
                      {listing.borough_name}
                    </p>
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
                  <button className="give-and-find-help-visit-profile">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
      </section>
    </div>
  );
}
