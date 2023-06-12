/*
Ask for help
You are posting as a guest
Email - input
This will be visible as you are posting as a guest. Log in or Register to hide your email address.
Title - input
Category - input - dropdown
Description - textarea - What do you need help with?
Tick all that apply...
Checkbox - My request is urgent
if checked, show another input type - date - Select timescale
Checkbox - I can offer something in return
if checked, show another input - input box - I can offer...
button - Create Listing
*/

import React, { useState } from "react";
import "./postRequest.css";
export default function PostRequest() {
  // state goes here
  const [urgent, setUrgent] = useState(false);
  const [timeFrame, setTimeFrame] = useState("");
  const [offer, setOffer] = useState(false);
  const [offerChoice, setOfferChoice] = useState("");

  // functions to display textboxes after checkboxes
  const handleUrgentChange = (event) => {
    setUrgent(event.target.checked);
    console.log(urgent);
  };

  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
    console.log(timeFrame);
  };

  const handleOfferChange = (event) => {
    setOffer(event.target.checked);
    console.log(offer);
  };

  const handleOfferChoiceChange = (event) => {
    setOfferChoice(event.target.value);
    console.log(offerChoice);
  };

  return (
    <div className="post-request">
      <h1>This is request form</h1>

      <div className="ask-for-help">
        <h1 id="ask-for-help-title">Ask for help</h1>
        <p>You are posting as a guest</p>
        <form id="ask-for-help-form">
          {/* <label>Email</label> */}
          <input type="text" placeholder="Please enter your email"></input>
          {/* Log in and Register will need Link tags at some point! */}
          <p>
            This will be visible as you are posting as a guest. Log in or
            Register to hide your email address.
          </p>
          {/* <label>Summary</label> */}
          <input type="text" placeholder="What help would you like?"></input>

          <label htmlFor="categories">Categories</label>
          <select id="categories" name="categories" defaultValue="">
            <option value="" disabled>
              Select One
            </option>
            <optgroup label="Household">
              <option value="cleaning">Cleaning</option>
              <option value="gardening">Gardening</option>
              <option value="diy">DIY</option>
              <option value="dogWalking">Dog Walking</option>
            </optgroup>
            <optgroup label="Tutoring">
              <option value="maths">Maths</option>
              <option value="dance">Dance</option>
              <option value="rench">French</option>
              <option value="italian">Italian</option>
              <option value="english">English</option>
              <option value="mandarin">Mandarin</option>
              <option value="german">German</option>
              <option value="science">Science</option>
              <option value="art">Art</option>
            </optgroup>
            <optgroup label="Sport & Leisure">
              <option value="photography">Photography</option>
              <option value="yoga">Yoga</option>
              <option value="pianoLessons">Piano lessons</option>
              <option value="getFit">Get fit</option>
            </optgroup>
            <optgroup label="Professional Help">
              <option value="cvHelp">CV Help</option>
              <option value="accountingHelp">Accounting Help</option>
              <option value="legalAdvice">Legal Advice</option>
            </optgroup>
            <optgroup label="Transport & Mobility">
              <option value="localShopping">Local Shopping</option>
              <option value="movingHouse">Moving House</option>
              <option value="disabilityHelp">Disability Help</option>
              <option value="transportingItems">Transporting Items</option>
            </optgroup>
            <optgroup label="Other">
              <option value="justACupOfTea">Just a cup of tea</option>
            </optgroup>
          </select>
          <textarea
            name="description"
            rows="10"
            cols="30"
            placeholder="What do you need help with?"
          ></textarea>
          <p>Tick all that apply...</p>
          <label>
            <input
              type="checkbox"
              id="urgent-request"
              name="urgent-request"
              onChange={handleUrgentChange}
            ></input>{" "}
            My request is urgent
          </label>

          {/* Timescale input - we haven't added state to save the date yet*/}
          {urgent && (
            <input
              type="date"
              placeholder="Select timescale"
              value={timeFrame}
              onChange={handleTimeFrameChange}
            />
          )}
          <label>
            <input type="checkbox" onChange={handleOfferChange}></input> I can
            offer something in return
          </label>
          {/* Offer text input */}
          {offer && (
            <select
              id="categories"
              name="categories"
              value={offerChoice}
              onChange={handleOfferChoiceChange}
            >
              <option value="" disabled>
                Select One
              </option>
              <optgroup label="Household">
                <option value="cleaning">Cleaning</option>
                <option value="gardening">Gardening</option>
                <option value="diy">DIY</option>
                <option value="dogWalking">Dog Walking</option>
              </optgroup>
              <optgroup label="Tutoring">
                <option value="maths">Maths</option>
                <option value="dance">Dance</option>
                <option value="rench">French</option>
                <option value="italian">Italian</option>
                <option value="english">English</option>
                <option value="mandarin">Mandarin</option>
                <option value="german">German</option>
                <option value="science">Science</option>
                <option value="art">Art</option>
              </optgroup>
              <optgroup label="Sport & Leisure">
                <option value="photography">Photography</option>
                <option value="yoga">Yoga</option>
                <option value="pianoLessons">Piano lessons</option>
                <option value="getFit">Get fit</option>
              </optgroup>
              <optgroup label="Professional Help">
                <option value="cvHelp">CV Help</option>
                <option value="accountingHelp">Accounting Help</option>
                <option value="legalAdvice">Legal Advice</option>
              </optgroup>
              <optgroup label="Transport & Mobility">
                <option value="localShopping">Local Shopping</option>
                <option value="movingHouse">Moving House</option>
                <option value="disabilityHelp">Disability Help</option>
                <option value="transportingItems">Transporting Items</option>
              </optgroup>
              <optgroup label="Other">
                <option value="justACupOfTea">Just a cup of tea</option>
              </optgroup>
            </select>
          )}
          <button>Create Listing</button>
        </form>
      </div>
    </div>
  );
}
