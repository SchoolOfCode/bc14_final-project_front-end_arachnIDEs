import React from "react";

export default function FindHelpListItem(props) {
  const { helper } = props;
  if (!helper) return null;
  const {
    user_id,
    display_name,
    email_address,
    borough_name,
    skills_needed,
    skills_offered,
    about_me,
    profile_picture,
    rating,
  } = helper;

  return (
    <div>
      {" "}
      <section className="give-and-find-help-listings-area">
        {/* List of helpers TITLE */}
        {helper.map(() => (
          // Parent div for each new box
          <div key={user_id} className="give-and-find-help-individual-listing">
            {/* REMOVED FOR NOW - THERE IS NO LISTING TITLE IN THE USER DB 
        <h1 className="find-help-listing-title">{listing.listing_title}</h1> */}
            <div className="find-help-user-img-and-rating">
              <div className="find-help-image-container">
                {/* Img from user profile */}
                <img
                  className="find-help-profile-picture"
                  src={profile_picture}
                  alt="profile"
                />
                <p className="find-help-rating">{rating}</p>
              </div>
              <div className="find-help-user-details-container">
                <p className="find-help-display-name">{display_name}</p>
                <p className="find-help-borough-name">{borough_name}</p>
              </div>
            </div>
            <p className="find-help-about-me">{about_me}</p>
            <div className="give-and-find-help-info-container">
              <p className="give-and-find-help-subheading">I can offer:</p>
              <p className="give-and-find-help-info">{skills_offered}</p>
            </div>
            <div className="give-and-find-help-info-container">
              <p className="give-and-find-help-subheading">I need:</p>
              <p className="give-and-find-help-info">{skills_needed}</p>
            </div>
            <div className="give-and-find-help-user-contact">
              <a href={`mailto:${email_address}`} className="contact-user-link">
                <button className="give-and-find-help-contact-user">
                  Contact user
                </button>{" "}
              </a>
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
