/*
Ask for help
You are posting as a guest
Email - input - email
This will be visible as you are posting as a guest. Log in or Register to hide your email address.
Title - input - listing_title
Category - input - dropdown - skills_wanted
Borough - dropdown - borough_name
Description - textarea - What do you need help with? - listing_details
Tick all that apply...
Checkbox - My request is urgent - 
if checked, show another input type - date - Select timescale. - timescale
Checkbox - I can offer something in return
if checked, show another input - input box - I can offer... - skills_offered
button - Create Listing
*/

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
import "./postRequest.css";
export default function PostRequest({ session, user }) {
  // state goes here
  // const [form, setForm] = useState({
  //   listing_id: uuidv4(),
  //   display_name: "",
  //   listing_title: "",
  //   created_at: new Date().toString(),
  //   listing_details: "",
  //   email_address: "",
  //   skills_wanted: "",
  //   skills_offered: "",
  //   borough_name: "",
  //   timescale: "",
  // });
  const [form, setForm] = useState({
    display_name: "",
    listing_title: "",
    listing_details: "",
    skills_wanted: "",
    skills_offered: "",
    borough_name: "",
    email_address: "",
    timescale: "",
  });
  const [urgent, setUrgent] = useState(false);
  const [offer, setOffer] = useState(true);

  const navigate = useNavigate();

  // functions to display textboxes after checkboxes
  const handleUrgentChange = (event) => {
    setUrgent(event.target.checked);
    console.log(urgent);
  };

  const handleOfferChange = (event) => {
    setOffer(event.target.checked);
    console.log(offer);
  };

  // document.getElementById("offer-something-checkbox").checked = true;

  // function to save the whole setForm
  const handleMakeAPostSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    // prints the form into the console
    console.log(form);

    // From here, we want the front end to send the object called form to the server for it to send it to the db.
    postToDb();

    navigate("/give");
  };

  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      // add below back in when fetch is fixed - 🚨
      // display_name: user.display_name,
      // email_address: session.user.email,
    }));
  }, [session, user]);

  // CONDITIONALLY RENDER EMAIL AND DISPLAY NAME SECTION ONCE FETCH IS FIXED 🚨

  // if (session) {setForm({
  //   display_name: "",
  //   listing_title: "",
  //   listing_details: "",
  //   skills_wanted: "",
  //   skills_offered: "",
  //   borough_name: "",
  //   email_address: session.user.email,
  //   timescale: "",
  // })}

  async function postToDb() {
    const res = await fetch(
      "https://arachnides-backend.onrender.com/api/listings",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );
    console.log("The following has now been added to the database:", { res });
  }

  return (
    // Parent container
    <div className="post-request-container">
      {/* Div to contain the ask for help form */}
      <div className="ask-for-help">
        <h1 id="ask-for-help-title" className="centered-text">
          Ask for help
        </h1>
        {!session && (
          <p className="centered-text small-text">You are posting as a guest</p>
        )}
        {/* Put an onSubmit in the form element - callback function/call a function already written. */}
        <form id="ask-for-help-form" onSubmit={handleMakeAPostSubmit}>
          <div className="ask-for-help-div">
            {/* Email */}
            <label className="ask-for-help-label">Email*</label>
            <input
              required
              className="ask-for-help-input"
              type="email"
              placeholder="Please enter your email"
              value={form.email_address}
              onChange={(e) => {
                setForm(
                  {
                    ...form,
                    email_address: e.target.value,
                  }
                  // console.log(form)
                );
              }}
            ></input>
          </div>
          {/* Log in and Register will need Link tags at some point! */}
          {!session && (
            <p className="centered-text small-text">
              This will be visible as you are posting as a guest. Log in or
              Register to hide your email address.
            </p>
          )}
          {/* Display Name  should we specify character limit in display name*/}
          <div className="ask-for-help-div">
            <label className="ask-for-help-label">Display Name*</label>
            <input
              required
              className="ask-for-help-input"
              type="text"
              placeholder="Create a display name"
              value={form.display_name}
              onChange={(e) => {
                setForm(
                  {
                    ...form,
                    display_name: e.target.value,
                  }
                  // console.log(form)
                );
              }}
            ></input>
          </div>
          {/* Summary */}
          <div className="ask-for-help-div">
            <label className="ask-for-help-label">Summary*</label>
            <input
              required
              className="ask-for-help-input"
              type="text"
              placeholder="What help would you like?"
              value={form.listing_title}
              onChange={(e) => {
                setForm(
                  {
                    ...form,
                    listing_title: e.target.value,
                  }
                  // console.log(form)
                );
              }}
            ></input>
          </div>
          {/* Category drop down */}
          <div className="ask-for-help-div">
            <label className="ask-for-help-label" htmlFor="categories">
              Category*
            </label>
            <select
              required
              className="ask-for-help-input"
              id="categories-skills-wanted"
              name="categories"
              value={form.skills_wanted}
              onChange={(e) => {
                setForm(
                  {
                    ...form,
                    skills_wanted: e.target.value,
                  }
                  // console.log(form)
                );
              }}
            >
              <option value="" disabled>
                Select One
              </option>
              <optgroup label="Household">
                <option value="Cleaning 🧹">Cleaning</option>
                <option value="Gardening 🌻">Gardening</option>
                <option value="DIY 🔧">DIY</option>
                <option value="Dog Walking 🐶">Dog Walking</option>
                <option value="Cooking 🍝">Cooking</option>
                <option value="Baking 🍰">Baking</option>
              </optgroup>
              <optgroup label="Tutoring">
                <option value="Maths 🧮">Maths</option>
                <option value="Dance 💃🏽">Dance</option>
                <option value="French 🇫🇷">French</option>
                <option value="Italian 🇮🇹">Italian</option>
                <option value="English 🏴󠁧󠁢󠁥󠁮󠁧󠁿">English</option>
                <option value="Mandarin 🇨🇳">Mandarin</option>
                <option value="German 🇩🇪">German</option>
                <option value="Science 🧬">Science</option>
                <option value="Art 🎨">Art</option>
              </optgroup>
              <optgroup label="Sport & Leisure">
                <option value="Photography 📸">Photography</option>
                <option value="Yoga 🧘‍♂️">Yoga</option>
                <option value="Piano Lessons 🎹">Piano Lessons</option>
                <option value="Get Fit 🏋️">Get fit</option>
              </optgroup>
              <optgroup label="Professional Help">
                <option value="CV Help 📄">CV Help</option>
                <option value="Accounting help 💰">Accounting Help</option>
                <option value="Legal advice ⚖️">Legal Advice</option>
                <option value="Proof-Reading 📚">Proof Reading</option>
                <option value="IT support 💻">IT Support</option>
              </optgroup>
              <optgroup label="Transport & Mobility">
                <option value="Local shopping 🛍️">Local Shopping</option>
                <option value="Moving house 🏠">Moving House</option>
                <option value="Disability Help ♿️">Disability Help</option>
                <option value="Transporting items 🚚">
                  Transporting Items
                </option>
              </optgroup>
              <optgroup label="Other">
                <option value="Just a cup of tea 🫖">Just a cup of tea</option>
              </optgroup>
            </select>
          </div>
          {/* Borough dropdown */}
          <div className="ask-for-help-div">
            <label className="ask-for-help-label" htmlFor="boroughs">
              Borough*
            </label>
            <select
              required
              className="ask-for-help-input"
              id="boroughs"
              name="boroughs"
              value={form.borough_name}
              onChange={(e) => {
                setForm(
                  {
                    ...form,
                    borough_name: e.target.value,
                  },
                  console.log(form)
                );
              }}
            >
              <option value="" disabled>
                Select One
              </option>
              <option value="City of London">City of London</option>
              <option value="City of Westminster">City of Westminster</option>
              <option value="Kensington and Chelsea">
                Kensington and Chelsea
              </option>
              <option value="Hammersmith and Fulham">
                Hammersmith and Fulham
              </option>
              <option value="Wandsworth">Wandsworth</option>
              <option value="Lambeth">Lambeth</option>
              <option value="Southwark">Southwark</option>
              <option value="Tower Hamlets">Tower Hamlets</option>
              <option value="Hackney">Hackney</option>
              <option value="Islington">Islington</option>
              <option value="Camden">Camden</option>
              <option value="Brent">Brent</option>
              <option value="Ealing">Ealing</option>
              <option value="Hounslow">Hounslow</option>
              <option value="Richmond">Richmond</option>
              <option value="Kingston">Kingston</option>
              <option value="Merton">Merton</option>
              <option value="Sutton">Sutton</option>
              <option value="Croydon">Croydon</option>
              <option value="Bromley">Bromley</option>
              <option value="Lewisham">Lewisham</option>
              <option value="Greenwich">Greenwich</option>
              <option value="Bexley">Bexley</option>
              <option value="Havering">Havering</option>
              <option value="Barking And Dagenham">Barking and Dagenham</option>
              <option value="Redbridge">Redbridge</option>
              <option value="Newham">Newham</option>
              <option value="Waltham Forest">Waltham Forest</option>
              <option value="Haringey">Haringey</option>
              <option value="Enfield">Enfield</option>
              <option value="Barnet">Barnet</option>
              <option value="Harrow">Harrow</option>
              <option value="Hillingdon">Hillingdon</option>
            </select>
          </div>
          {/* Description */}
          <div id="description-div" className="ask-for-help-div">
            <label className="ask-for-help-label">Description*</label>
            <textarea
              required
              className="ask-for-help-input"
              id="ask-for-help-description"
              name="description"
              rows="7"
              cols="30"
              placeholder="What do you need help with?"
              value={form.listing_details}
              onChange={(e) => {
                setForm(
                  {
                    ...form,
                    listing_details: e.target.value,
                  },
                  console.log(form)
                );
              }}
            ></textarea>
          </div>
          {/* <p>Tick all that apply...</p> */}
          {/* Checkboxes - urgent request & skills offered */}
          <div className="ask-for-help-div">
            <label
              className="ask-for-help-label"
              id="urgent-request-checkbox-label"
            >
              <input
                type="checkbox"
                id="urgent-request"
                name="urgent-request"
                onChange={handleUrgentChange}
              ></input>
              My request is urgent
            </label>
          </div>
          {/* Timescale input */}
          {urgent && (
            <div className="ask-for-help-div">
              <label className="ask-for-help-label">Deadline</label>
              <input
                className="ask-for-help-input"
                type="date"
                placeholder="Select timescale"
                value={form.timescale}
                onChange={(e) => {
                  setForm(
                    {
                      ...form,
                      timescale: e.target.value,
                    },
                    console.log(form)
                  );
                }}
                // onChange={handleTimeFrameChange}
              />
            </div>
          )}
          <div className="ask-for-help-div">
            <label
              className="ask-for-help-label"
              id="offer-something-checkbox-label"
            >
              <input
                id="offer-something-checkbox"
                type="checkbox"
                onChange={handleOfferChange}
                checked={offer}
              ></input>
              I can offer something in return
            </label>
          </div>
          {/* Skills Offered dropdown */}
          {offer && (
            <div className="ask-for-help-div">
              <label className="ask-for-help-label" htmlFor="categories">
                Category
              </label>

              <select
                required
                className="ask-for-help-input"
                id="categories-skills-offered"
                name="categories"
                value={form.skills_offered}
                onChange={(e) => {
                  setForm(
                    {
                      ...form,
                      skills_offered: e.target.value,
                    }
                    // console.log(form)
                  );
                }}
                // onChange={handleOfferChoiceChange}
              >
                <option value="" disabled>
                  Select One
                </option>
                <optgroup label="Household">
                  <option value="Cleaning 🧹">Cleaning</option>
                  <option value="Gardening 🌻">Gardening</option>
                  <option value="DIY 🔧">DIY</option>
                  <option value="Dog Walking 🐶">Dog Walking</option>
                  <option value="Cooking 🍝">Cooking</option>
                  <option value="Baking 🍰">Baking</option>
                </optgroup>
                <optgroup label="Tutoring">
                  <option value="Maths 🧮">Maths</option>
                  <option value="Dance 💃🏽">Dance</option>
                  <option value="French 🇫🇷">French</option>
                  <option value="Italian 🇮🇹">Italian</option>
                  <option value="English 🏴󠁧󠁢󠁥󠁮󠁧󠁿">English</option>
                  <option value="Mandarin 🇨🇳">Mandarin</option>
                  <option value="German 🇩🇪">German</option>
                  <option value="Science 🧬">Science</option>
                  <option value="Art 🎨">Art</option>
                </optgroup>
                <optgroup label="Sport & Leisure">
                  <option value="Photography 📸">Photography</option>
                  <option value="Yoga 🧘‍♂️">Yoga</option>
                  <option value="Piano Lessons 🎹">Piano lessons</option>
                  <option value="Get Fit 🏋️">Get fit</option>
                </optgroup>
                <optgroup label="Professional Help">
                  <option value="CV Help 📄">CV Help</option>
                  <option value="Accounting help 💰">Accounting Help</option>
                  <option value="Legal advice ⚖️">Legal Advice</option>
                  <option value="Proof-Reading 📚">Proof Reading</option>
                  <option value="IT support 💻">IT Support</option>
                </optgroup>
                <optgroup label="Transport & Mobility">
                  <option value="Local shopping 🛍️">Local Shopping</option>
                  <option value="Moving house 🏠">Moving House</option>
                  <option value="Disability Help ♿️">Disability Help</option>
                  <option value="Transporting items 🚚">
                    Transporting Items
                  </option>
                </optgroup>
                <optgroup label="Other">
                  <option value="Just a cup of tea 🫖">
                    Just a cup of tea
                  </option>
                </optgroup>
              </select>
            </div>
          )}
          {/* Submit button */}
          <button
            id="create-listing-btn"
            // onClick={() => alert("This will send the form")}
          >
            Create Listing
          </button>
        </form>
      </div>
    </div>
  );
}
