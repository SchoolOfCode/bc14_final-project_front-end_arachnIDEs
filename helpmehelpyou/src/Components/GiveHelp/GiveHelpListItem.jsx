function GiveHelpListItem(props) {
  const { listing, contactUser } = props;
  if (!listing) return null;

  const {
    listing_id,
    listing_title,
    listing_details,
    skills_wanted,
    skills_offered,
    borough_name,
    display_name,
    created_at,
    email_address,
  } = listing;

  return (
    <div
      key={listing_id}
      className="give-and-find-help-individual-listing"
      data-testid="listing"
    >
      <h1 className="give-and-find-help-listing-title">{listing_title}</h1>
      <p className="give-and-find-help-info" id="give-help-listing-details">
        {listing_details}
      </p>

      {/* What they need? */}
      <div className="give-and-find-help-info-container">
        <p className="give-and-find-help-subheading">I need:</p>
        <p className="give-and-find-help-info">{skills_wanted}</p>
      </div>
      {/* What I am offering */}
      <div className="give-and-find-help-info-container">
        <p className="give-and-find-help-subheading">I can offer:</p>
        <p className="give-and-find-help-info">{skills_offered}</p>
      </div>

      {/* Location of the user (london boroughs) */}
      <div className="give-and-find-help-info-container">
        <p className="give-and-find-help-subheading">Location:</p>
        <p className="give-and-find-help-info">{borough_name}</p>
      </div>

      {/* Name of the person who posted */}
      <div className="give-and-find-help-info-container">
        <p className="give-and-find-help-subheading">Posted by:</p>
        <p className="give-and-find-help-info">{display_name}</p>
      </div>

      {/* Date posted */}
      <div className="give-and-find-help-info-container">
        <p className="give-and-find-help-subheading">Date posted: </p>
        <p className="give-and-find-help-info">
          {created_at.substring(8, 10)}
          {created_at.substring(4, 8)}
          {created_at.substring(0, 4)}
        </p>
      </div>
      {/* This div isn't being used at the moment and was messing up the alignment of the box! When an image is added - this div can be added again. 
      <div className="give-help-user-info"> */}
      {/* <div className="give-help-image-container">
          {/* There is no image in the DB at the moment 
          <img
            className="give-help-profile-picture"
            src={listing.profile_picture}
            alt="profile"
          />
          There is no rating yet - we need to do a join to the user table 
          <p className="give-help-rating">{listing.rating}</p>
        </div> */}
      <div className="give-and-find-help-user-contact">
        <button
          className="give-and-find-help-contact-user"
          onClick={() => contactUser(email_address)}
        >
          Contact user
        </button>
        <button className="give-and-find-help-visit-profile">
          View Profile
        </button>
      </div>
    </div>
  );
}

export default GiveHelpListItem;
