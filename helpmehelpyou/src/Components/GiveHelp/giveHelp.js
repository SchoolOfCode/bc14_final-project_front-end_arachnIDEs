import React, { useState, useEffect } from "react";
import "../giveAndFindHelp.css";
import image from "./givehelp-image.png";
// import dummyData from "./DummyData";
import { Link } from "react-router-dom";
import GiveHelpList from "./GiveHelpList";
// Create skeleton code for give-help page.
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
  // State for carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedBorough, setSelectedBorough] = useState(null);
  // State for search box
  const [userInput, setUserInput] = useState("");
  // State for all listings
  const [listings, setListings] = useState([]);
  // State for filtered listings
  const [filteredListings, setFilteredListings] = useState([]);
  const [allSelected, setAllSelected] = useState(null);
  const [noListings, setNoListings] = useState(null);

  // useEffect call back functions
  useEffect(() => {
    setNoListings(filteredListings.length === 0);
  }, [filteredListings]);

  useEffect(() => {
    setAllSelected(selectedCard === 0.5);
  }, [selectedCard]);

  // cards for carousel
  const cards = [
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

  // functions for carousel
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

  // let found = false;

  function boroughFilter(card) {
    setSelectedCard(card.id);
    if (selectedCard === 0.5) {
      setAllSelected(true);
    }
    if (selectedCard !== 0.5) {
      setAllSelected(false);
    }
    setSelectedBorough(card.borough);
    // set the following code block to only run if something has been searched
    if (userInput !== "") {
      let filteredBoroughArray = filteredListings.filter((item) => {
        return item.borough_name.includes(card.borough);
      });
      setFilteredListings(filteredBoroughArray);
      if (filteredListings.length === 0) {
        setNoListings(true);
      } else if (filteredListings.length > 0) {
        setNoListings(null);
      }
    } else if (userInput === "" && !selectedBorough) {
      let boroughArray = listings.filter((item) => {
        return item.borough_name.includes(card.borough);
      });
      setFilteredListings(boroughArray);
      if (filteredListings.length === 0) {
        setNoListings(true);
      } else if (filteredListings.length > 0) {
        setNoListings(null);
      }
    } else if (userInput === "" && selectedBorough) {
      let boroughArray = listings.filter((item) => {
        return item.borough_name.includes(card.borough);
      });
      setFilteredListings(boroughArray);
      if (filteredListings.length === 0) {
        setNoListings(true);
      } else if (filteredListings.length > 0) {
        setNoListings(null);
      }
    }
  }

  // V1
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
  //   setFilteredListings(newArray);
  // }

  // V2: Manually searching through select keys individually.
  // function filterListings() {
  //   if (listings && listings.length > 0) {
  //     const newArray = listings.filter((item) => {
  //       return (
  //         item.listing_title.toLowerCase().includes(userInput.toLowerCase()) ||
  //         item.listing_details.toLowerCase().includes(userInput.toLowerCase())
  //       );
  //     });
  //     setFilteredListings(newArray);
  //   }
  // }

  // If listings is populated...

  // V3: using a for...in loop to search through all keys where value is of type string.
  function filterListings() {
    let newArray = [];
    if (listings && listings.length > 0 && selectedBorough) {
      newArray = filteredListings.filter((item) => {
        for (let key in item) {
          if (typeof item[key] === "string") {
            if (item[key].toLowerCase().includes(userInput.toLowerCase())) {
              return true;
            }
          }
        }
        return false;
      });

      let filteredByBoroughThenSearch = newArray.filter((item) => {
        return item.borough_name.includes(selectedBorough);
      });

      setFilteredListings(filteredByBoroughThenSearch);
    } else if (listings && listings.length > 0) {
      newArray = listings.filter((item) => {
        let found = false;
        for (let key in item) {
          if (typeof item[key] === "string") {
            if (item[key].toLowerCase().includes(userInput.toLowerCase())) {
              found = true;
              break;
            }
          }
        }
        return found;
      });

      setFilteredListings(newArray);
    } else if (filteredListings) {
      newArray = filteredListings.filter((item) => {
        for (let key in item) {
          if (typeof item[key] === "string") {
            return item[key].toLowerCase().includes(userInput.toLowerCase());
          }
        }
        return false;
      });

      setFilteredListings(newArray);
    }

    if (newArray.length === 0) {
      setNoListings(true);
    } else {
      setNoListings(null);
    }
  }

  // alert the user of the email address of the user who posted the listing
  function contactUser(email) {
    // Display email address of user
    alert(`Here's the email address: ${email}`);
  }

  // function to call the listings from the database
  async function fetchAllListings() {
    console.log("Attempting to fetch listings from database...");
    const res = await fetch(
      "https://arachnides-backend.onrender.com/api/listings"
    );
    console.log(res);
    const data = await res.json();
    console.log(data);
    const payload = data.payload;
    console.log(payload);
    setListings(payload);
  }

  // Fetch listings before rendering
  useEffect(() => {
    fetchAllListings();
  }, []);

  // Function to clear the filter and reset the page back to all listings
  function clearFilter() {
    setFilteredListings([]);
    setNoListings(null);
    setUserInput("");
    setSelectedCard(null);
  }

  function clearInput() {
    setUserInput("");
  }

  // Function to handle the enter key being pressed
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default form submission
      filterListings();
    }
  };
  /*renders:
Header
Nav Bar
give-helpSearch - searchInput (input box) & searchBtn (button)
Listing - <h1> for title / summary
<p> for details
<img> for profile picture
<button> to close the component? */

  console.log(listings, "listings");
  console.log(filteredListings, "filteredListings");
  const listingsToGenerate = filteredListings.length
    ? filteredListings
    : listings;

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
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          className="give-and-find-help-search-box"
          onKeyDown={handleKeyDown}
          onMouseDown={clearInput}
        ></input>
        <button
          className="give-and-find-help-search-button"
          onClick={() => {
            filterListings();
          }}
        >
          Search
        </button>
        {/* Button to clear filter and reset the page */}
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
      <section id="give-help-post-request-link-from-give-help">
        <p className="give-help-post-request">
          Need help? {" "} <Link to="/findhelpform">Post a request </Link>
        </p>
      </section>
      <h3 className="category-title">Browse by borough:</h3>
      <div className="carousel">
        <div className="give-and-find-help-card-container">
          <button className="give-and-find-help-left-arrow" onClick={handlePrev}>
            ←
          </button>
          {cards.slice(activeIndex, activeIndex + 3).map((card) => (
            <div
              className={`give-and-find-help-card ${
                card.id === selectedCard ? "selected-card" : ""
              }`}
              key={card.id}
              onClick={() => boroughFilter(card)}
            >
              <div className="give-and-find-help-card-contents">
                <p>{card.borough}</p>
              </div>
            </div>
          ))}
          <button className="give-and-find-help-right-arrow" onClick={handleNext}>
            →
          </button>
        </div>
      </div>
      {noListings && !allSelected && selectedCard && (
        <h2>No results found in {selectedBorough}</h2>
      )}
      <h3 className="give-and-find-help-listings-area-title">
        All recent listings:
      </h3>
      {/* Recent listings fetched from DB */}
      <section className="give-and-find-help-listings-area">
        <GiveHelpList
          listItems={listingsToGenerate}
          contactUser={contactUser}
        />
      </section>
    </div>
  );
}
