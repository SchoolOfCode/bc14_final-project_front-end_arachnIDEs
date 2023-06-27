import { Form } from "react-router-dom";
import React, { useState, useEffect } from "react";
import RegForm from "../RegForm/regForm";
import "./userProfile.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UserProfile({ session, user, setUser }) {
  const navigate = useNavigate();

  console.log("here is the session in userProfile: ", session);
  // const id = session.user.id

  async function fetchUser(id) {
    console.log("id: ", id);
    const res = await fetch(
      `https://arachnides-backend.onrender.com/api/users/${id}`
    );
    const data = await res.json();
    console.log(res);
    if (data && data.payload) {
      console.log("res exists", res);
      setUser(data.payload[0]);
      // console.log(user);
      return data;
    } else {
      console.log("res doesn't exist", res);
      navigate("/registration");
    }
  }
  useEffect(() => {
    if (session && session.user) {
      fetchUser(session.user.id);
    }
  }, []);

  useEffect(() => {
    // setInterval(console.log(user), 3000);
    console.log(user);
    // if (!user) {
    //   navigate("/registration");
    // }
  }, [user]);

  return (
    <div className="profile-container">
    </div>
  )}/* {user !== null && (
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
              <h3 className="borough">🏠:{user.borough_name}</h3>{" "}
              <h3 className="gender">⚥: {user.gender}</h3>
            </div>
          </div>
          <div className="profile-details">
            <h3 className="full-name">
              Full name: {user.full_name}
              <p className="full-name-info">
                This isn't visible to other users
              </p>{" "}
            </h3>
            <h3 className="display-name">Display name: {user.display_name}</h3>
            <h3 className="age">Age: {user.age}</h3>
            <h3 className="about-me">About me... {user.about_me}</h3>
            <h3 className="skills-offered">
              I can offer... {user.skills_offered}
            </h3>
            <h3 className="skills-wanted">I need... {user.skills_wanted}</h3>
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
              <a
                href={`mailto:${user.email_address}`}
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
      )}
    </div>}
  );
}*/ 
