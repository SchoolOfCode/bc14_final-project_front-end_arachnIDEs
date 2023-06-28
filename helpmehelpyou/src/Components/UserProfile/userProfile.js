import React, { useEffect } from "react";
import "./userProfile.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UserProfile({ session, user, setUser }) {
  console.log("here is the session in userProfile: ", session);
  // const id = session.user.id

  const navigate = useNavigate();

  async function fetchUser(id) {
    console.log("id: ", id);
    const res = await fetch(
      `https://arachnides-backend.onrender.com/api/users/${id}`
    );
    const data = await res.json();
    console.log({ data });
    // let payloadExists = false;
    // for (let key in data) {
    //   console.log("Hello from inside for...in loop.");
    //   if (key === "payload") {
    //     payloadExists = true;
    //   }
    // }
    if (data.payload.length > 0) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // setInterval(console.log(user), 3000);
    console.log(user);
    // if (!user) {
    //   navigate("/registration");
    // }
  }, [user]);

  return (
    <div className="profile-parent-container">
      <div className="my-profile-container">
        <h1>My Profile</h1> <Link to="/registration"> Edit profile</Link>
        <div className="pic-rating-and-icons-container">
          <div className="profile-pic-and-rating-container">
            <img
              className="profile-pic"
              src={user && user.profile_picture}
              alt="profile"
            ></img>
            <h3 className="user-rating">⭐️⭐️⭐️⭐️</h3>
          </div>
          <div className="my-profile-icons">
            {" "}
            <h3 className="borough">🏠: {user && user.borough_name}</h3>
            <h3 className="gender">⚥: {user && user.gender}</h3>
          </div>
        </div>
        <div className="my-profile-info-container">
          <p className="my-profile-subheading">Full name:</p>
          <p className="my-profile-info">{user && user.full_name}</p>
        </div>
        <p className="full-name-info">This isn't visible to other users</p>{" "}
        <div className="my-profile-info-container">
          <p className="my-profile-subheading">Display name: </p>
          <p className="my-profile-info">{user && user.display_name}</p>
        </div>
        <div className="my-profile-info-container">
          {" "}
          <p className="my-profile-subheading">Age: </p>
          <p className="my-profile-info">{user && user.age}</p>
        </div>
        <div className="my-profile-info-container">
          <p className="my-profile-subheading">About me...</p>
          <div className="about_content"><p className="my-profile-info">{user && user.about_me}</p></div>
        </div>
        <div className="my-profile-info-container">
          <p className="my-profile-subheading"> I can offer...</p>
          <p className="my-profile-info">{user && user.skills_offered}</p>
        </div>
        <div className="my-profile-info-container">
          <p className="my-profile-subheading"> I need...</p>
          <p className="my-profile-info">{user && user.skills_needed}</p>
        </div>
        <div className="my-profile-info-container-buttons">
          <div className="user-contact">
            <a href={"{user.social_media}"} className="contact-user-link">
              <button className="social-media">Social Media</button>{" "}
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
