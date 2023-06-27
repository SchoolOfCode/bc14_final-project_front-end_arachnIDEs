import { Form } from "react-router-dom";
import React, { useState, useEffect } from "react";
import RegForm from "../RegForm/regForm";
import "./userProfile.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function UserProfile(form, session) {
  const [user, setUser] = useState([]);
  
  async function fetchUser(id) {
    const res = await fetch(`https://arachnides-backend.onrender.com/api/users/${id}`);
    const data = await res.json();
    setUser(data);
    console.log(user);
    return data;
  }
  useEffect(()=>{if (session){  fetchUser(session.user.id)}}, []);

  return (
    <div className="profile-container">
      <div className="profile-background">
        <h1>My Profile</h1> <Link to="/registration"> Edit profile</Link>
        <div className="pic-and-info-container">
          <div className="profile-pic-container">
            <img
              className="profile-pic"
              src="https://i.ibb.co/YcXqprM/a.png"
            ></img>
            <h3 className="user-rating">⭐️⭐️⭐️⭐️</h3>
          </div>
          <div className="icons-container">
            <h3 className="borough">🏠:{form.borough_name}</h3>{" "}
            <h3 className="gender">⚥:</h3>
          </div>
        </div>
        <div className="profile-details">
          <h3 className="full-name">
            Full name: {form.full_name}
            <p className="full-name-info">
              This isn't visible to other users
            </p>{" "}
          </h3>
          <h3 className="display-name">Display name: {form.display_name}</h3>
          <h3 className="age">Age: {form.age}</h3>
          <h3 className="about-me">About me... {form.about_me}</h3>
          <h3 className="skills-offered">
            I can offer... {form.skills_offered}
          </h3>
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
            <a
              href={`mailto:${form.email_address}`}
              className="contact-user-link"
            >
              <button
                className="contact-user"
                // onClick={() => contactUser(email_address)}
              >
                Email me
              </button>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
