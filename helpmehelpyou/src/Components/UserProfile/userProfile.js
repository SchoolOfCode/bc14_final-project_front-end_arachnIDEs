import { Form } from "react-router-dom";
import React, { useState } from "react";
import RegForm from "../RegForm/regForm";
import "./userProfile.css"

export default function UserProfile(form) {
  return (
    <div className="profile-container">
    <div className= "profile-background">
      <h1>My Profile</h1>
      <div className="pic-and-info-container">
      <div className="profile-pic-container"><img className="profile-pic" src="https://i.ibb.co/YcXqprM/a.png"></img></div>
        <div className="icons-container">
        <h3 className="borough">🏠:{form.borough_name}</h3>{" "}
      <h3 className="gender">⚥:</h3></div>
      </div>
      <div className="profile-details">
      <h3 className="display-name">Display name: {form.display_name}</h3>
      <h3 className="age">Age: {form.age}</h3>
      <h3 className="about-me">About me... {form.about_me}</h3>
      <h3 className="skills-offered">I can offer... {form.skills_offered}</h3>
      <h3 className="skills-wanted">I need... {form.skills_wanted}</h3>
      </div>
      <div className="profile-buttons">
      <div className="user-contact">
        <a href={"{form.social_media}"} className="contact-user-link">
          <button
            className="contact-user"
            // onClick={() => contactUser(email_address)}
          >
         Social Media
          </button>{" "}
        </a>
      </div>
      <div className="user-contact">
        <a href={`mailto:${form.email_address}`} className="contact-user-link">
          <button
            className="contact-user"
            // onClick={() => contactUser(email_address)}
          >
            Email me
          </button>{" "}
        </a>
      </div>
      </div>
      <h3 className="full-name">Full name: {form.full_name}<p className="full-name-info">This isn't visible to other users</p> </h3>
    </div>
    </div>
  );
}
