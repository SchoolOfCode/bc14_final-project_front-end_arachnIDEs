import { Form } from "react-router-dom";
import React, { useState, useEffect } from "react";
import RegForm from "../RegForm/regForm";
import "./userProfile.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UserProfile({ session }) {
  const [user, setUser] = useState({});
  console.log("here is the session in userProfile: ", session);

  async function fetchUser(id) {
    console.log("id: ", id);
    const res = await fetch(
      `https://arachnides-backend.onrender.com/api/users/${id}`
    );
    const data = await res.json();
    setUser(data.payload[0]);
    // console.log(user);
    return data;
  }
  useEffect(() => {
    if (session && session.user) {
      fetchUser(session.user.id);
    }
  }, []);

  useEffect(() => {
    // setInterval(console.log(user), 3000);
    console.log(user);
  }, [user]);

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
            <h3 className="borough">🏠:{user && user.borough_name}</h3>{" "}
            <h3 className="gender">⚥:</h3>
          </div>
        </div>
        <div className="profile-details">
          <h3 className="full-name">
            Full name: {user && user.full_name}
            <p className="full-name-info">
              This isn't visible to other users
            </p>{" "}
          </h3>
          <h3 className="display-name">
            Display name: {user && user.display_name}
          </h3>
          <h3 className="age">Age: {user && user.age}</h3>
          <h3 className="about-me">About me... {user && user.about_me}</h3>
          <h3 className="skills-offered">
            I can offer... {user && user.skills_offered}
          </h3>
          <h3 className="skills-wanted">
            I need... {user && user.skills_needed}
          </h3>
        </div>
        <div className="profile-buttons">
          <div className="user-contact">
            <a href={"{user.social_media}"} className="contact-user-link">
              <button
                className="contact-user"
                // onClick={() => contactUser(email_address)}
              >
                Social Media
              </button>{" "}
            </a>
          </div>
          <div className="user-contact">
            {session && (
              <a
                href={`mailto:${session.user.email}`}
                className="contact-user-link"
              >
                <button
                  className="contact-user"
                  // onClick={() => contactUser(email_address)}
                >
                  Email me
                </button>{" "}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
