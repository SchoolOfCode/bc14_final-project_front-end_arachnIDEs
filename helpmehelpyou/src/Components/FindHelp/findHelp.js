import React, { useState, useEffect } from "react";
import "../giveAndFindHelp.css";
import image from "./findHelpImage.png";
import helperDummyData from "./helperDummyData";
import { Link } from "react-router-dom";

export default function FindHelp() {
  // state
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedBorough, setSelectedBorough] = useState(null);
  // State to save the user input in the search box
  const [userInput, setUserInput] = useState("");
  // State to save the filtered helpers
  const [filteredHelpers, setFilteredHelpers] = useState(helperDummyData);
  const [allSelected, setAllSelected] = useState(null);

  const [noHelpers, setNoHelpers] = useState(null);
  // useEffect functions
  useEffect(() => {
    setNoHelpers(filteredHelpers.length === 0);
  }, [filteredHelpers]);

  useEffect(() => {
    setAllSelected(selectedCard === 0.5);
  }, [selectedCard]);

  useEffect(() => {
    setNoHelpers(filteredHelpers.length === 0);
  }, [filteredHelpers]);

  useEffect(() => {}, [filteredHelpers.length]);

  useEffect(() => {
    setFilteredHelpers(helperDummyData);
  }, [allSelected]);

  useEffect(() => {}, [selectedCard]);

  useEffect(() => {}, [selectedCard]);

  useEffect(() => {}, [filteredHelpers]);

  const helperCards = [
    { id: 0.5, borough: "All" },
    { id: 0.75, borough: "Barking and Dagenham" },
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
      prevIndex === 0 ? helperCards.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === helperCards.length - 3 ? 0 : prevIndex + 1
    );
  };

  function clearFilter() {
    setFilteredHelpers(helperDummyData);
    setNoHelpers(null);
    setSelectedCard(null);
    setUserInput("");
  }

  function boroughFilter(card) {
    setSelectedCard(card.id);
    setSelectedBorough(card.borough);
    if (selectedCard === 0.5) {
      setAllSelected(true);
      setSelectedBorough(null);
    }
    if (selectedCard !== 0.5) {
      setAllSelected(false);
    }
    if (allSelected) {
      setFilteredHelpers(helperDummyData);
    }
    // set the following code block to only run if something has been searched
    if (userInput !== "" && !allSelected) {
      let filteredBoroughArray = filteredHelpers.filter((item) => {
        return item.borough_name.includes(card.borough);
      });
      setFilteredHelpers(filteredBoroughArray);
      if (filteredHelpers.length === 0) {
        setNoHelpers(true);
      } else if (filteredHelpers.length > 0) {
        setNoHelpers(null);
      }
    } else if (userInput === "" && !selectedBorough && !allSelected) {
      let boroughArray = helperDummyData.filter((item) => {
        return item.borough_name.includes(card.borough);
      });
      setFilteredHelpers(boroughArray);
      if (filteredHelpers.length === 0) {
        setNoHelpers(true);
      } else if (filteredHelpers.length > 0) {
        setNoHelpers(null);
      }
    } else if (userInput === "" && selectedBorough && !allSelected) {
      let boroughArray = helperDummyData.filter((item) => {
        return item.borough_name.includes(card.borough);
      });
      setFilteredHelpers(boroughArray);
      if (filteredHelpers.length === 0) {
        setNoHelpers(true);
      } else if (filteredHelpers.length > 0) {
        setNoHelpers(null);
      }
    } else if (userInput === "" && allSelected) {
      let boroughArray = helperDummyData;
      setFilteredHelpers(boroughArray);
      if (filteredHelpers.length === 0) {
        setNoHelpers(true);
      } else if (filteredHelpers.length > 0) {
        setNoHelpers(null);
      }
    } else if (userInput !== "" && allSelected) {
      let boroughArray = filteredHelpers;
      setFilteredHelpers(boroughArray);
      if (filteredHelpers.length === 0) {
        setNoHelpers(true);
      } else if (filteredHelpers.length > 0) {
        setNoHelpers(null);
      }
    }
  }

  // filters listings based on user input
  function filterHelpers() {
    if (helperDummyData && helperDummyData.length > 0) {
      let filteredArray = filteredHelpers.filter((item) => {
        return Object.values(item).some((value) => {
          return (
            typeof value === "string" &&
            value.toLowerCase().includes(userInput.toLowerCase())
          );
        });
      });

      if (selectedBorough && !allSelected) {
        filteredArray = filteredArray.filter((item) => {
          return item.borough_name.includes(selectedBorough);
        });
      }

      setFilteredHelpers(filteredArray);
      setNoHelpers(filteredArray.length === 0 ? true : null);
    }
  }

  // alert the user of the email address of the user who posted the listing
  function contactUser(email) {
    // Display email address of user
    alert(`Here's the email address: ${email}`);
  }

  // Function to handle the enter key being pressed
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default form submission
      filterHelpers();
    }
  };

  function clearInput() {
    setUserInput("");
  }

  return (
    // Parent find-help-div
    <div className="give-and-find-help-container">
      <h1 className="give-and-find-help-title">Find Help</h1>
      {/* Logo */}
      <img
        className="find-help-image"
        src={image}
        alt="cartoon person helping another person to climb a ladder"
      ></img>
      {/* Search box and button */}
      <section id="give-and-find-help-search-section">
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          className="give-and-find-help-search-box"
          onKeyDown={handleKeyDown}
          onMouseDown={clearInput}
        ></input>
        <button
          className="give-and-find-help-search-button"
          onClick={() => {
            filterHelpers();
            clearInput("");
          }}
        >
          Search
        </button>
        <button
          className="give-and-find-help-search-button"
          onClick={() => {
            clearFilter();
            clearInput("");
          }}
        >
          Clear
        </button>
      </section>
      {/* Link to the Post a request page */}
      <section id="find-help-post-request-link">
        <p className="find-help-post-request">
          Need something specific?{" "}
          <Link to="/findhelpform">Post a request </Link>
        </p>
      </section>
      <h3 className="category-title">Browse by borough:</h3>
      <div className="find-help-carousel">
        <div className="find-help-card-container">
          <button className="give-help-left-arrow" onClick={handlePrev}>
            ←
          </button>
          <div className="helperCards">
            {helperCards.slice(activeIndex, activeIndex + 3).map((card) => (
              <div
                className={`find-help-card ${
                  card.id === selectedCard ? "selected-card" : ""
                }`}
                key={card}
                onClick={() => boroughFilter(card)}
              >
                <div className="give-help-card-contents">
                  <p>{card.borough}</p>
                </div>
              </div>
            ))}
          </div>{" "}
        </div>
        <button className="give-help-right-arrow" onClick={handleNext}>
          →
        </button>{" "}
      </div>
      {noHelpers && !allSelected && selectedCard && (
        <h2>No helpers found in {selectedBorough}</h2>
      )}
      {noHelpers && !selectedCard && <h2>No helpers found</h2>}
      {!noHelpers && (
        <h3 className="give-and-find-help-listings-area-title">Helpers</h3>
      )}
      <section className="give-and-find-help-listings-area">
        {/* List of helpers TITLE */}
        {filteredHelpers.map((listing) => (
          // Parent div for each new box
          <div
            key={listing.user_id}
            className="give-and-find-help-individual-listing"
          >
            {/* REMOVED FOR NOW - THERE IS NO LISTING TITLE IN THE USER DB 
            <h1 className="find-help-listing-title">{listing.listing_title}</h1> */}
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
            <div className="give-and-find-help-info-container">
              <p className="give-and-find-help-subheading">I can offer:</p>
              <p className="give-and-find-help-info">
                {listing.skills_offered}
              </p>
            </div>
            <div className="give-and-find-help-info-container">
              <p className="give-and-find-help-subheading">I need:</p>
              <p className="give-and-find-help-info">{listing.skills_needed}</p>
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
        ))}
      </section>
    </div>
  );
}
