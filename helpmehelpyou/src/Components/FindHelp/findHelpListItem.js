import React from 'react'

export default function FindHelpListItem(props) {
  const { listItem } = props;
  if (!listItem) return null;
  const {display_name,
    email_address,
    about_me,
    gender,
    age,
    skills_needed,
    skills_offered,
    user_id,
    borough_name,
    profile_picture, } = listItem;

       return <div> <section className="give-and-find-help-listings-area">
      {/* List of helpers TITLE */}
      {listItem.map((helper) => (
        // Parent div for each new box
        <div
          key={helper.user_id}
          className="give-and-find-help-individual-listing"
        >
          {/* REMOVED FOR NOW - THERE IS NO LISTING TITLE IN THE USER DB 
        <h1 className="find-help-listing-title">{listing.listing_title}</h1> */}
          <div className="find-help-user-img-and-rating">
            <div className="find-help-image-container">
              {/* Img from user profile */}
              <img
                className="find-help-profile-picture"
                src={helper.profile_picture}
                alt="profile"
              />
              <p className="find-help-rating">{helper.rating}</p>
            </div>
            <div className="find-help-user-details-container">
              <p className="find-help-display-name">{helper.display_name}</p>
              <p className="find-help-borough-name">{helper.borough_name}</p>
            </div>
          </div>
          <p className="find-help-about-me">{helper.about_me}</p>
          <div className="give-and-find-help-info-container">
            <p className="give-and-find-help-subheading">I can offer:</p>
            <p className="give-and-find-help-info">{helper.skills_offered}</p>
          </div>
          <div className="give-and-find-help-info-container">
            <p className="give-and-find-help-subheading">I need:</p>
            <p className="give-and-find-help-info">{helper.skills_needed}</p>
          </div>
          <div className="give-and-find-help-user-contact">
            <a
              href={`mailto:${helper.email_address}`}
              className="contact-user-link"
            >
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
  </div>;
}
