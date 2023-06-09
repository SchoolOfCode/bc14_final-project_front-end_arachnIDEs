import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
import "./regForm.css";
export default function RegForm({ session }) {
  let userID;
  let emailAddress;
  const url = "https://arachnides-backend.onrender.com/api/users";
  // const url = "http://localhost:5001/api/users";

  const [fetchAttempt, setFetchAttempt] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    attemptingFetch(session.user.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {}, [session]);

  if (session) {
    console.log("there is a session");
    userID = session.user.id;
    emailAddress = session.user.email;
    console.log(
      "these are the values from the user object within the session object itself - ",
      session.user.id,
      session.user.email
    );
    console.log("These are the variables - ", userID, emailAddress);
  } else {
    console.log("No session found.");
  }

  const [form, setForm] = useState({
    full_name: "",
    display_name: "",
    email_address: `${emailAddress}`,
    about_me: "",
    gender: "",
    age: "",
    skills_needed: "",
    skills_offered: "",
    user_id: userID,
    borough_name: "",
    social_media: "",
    profile_picture: "https://i.ibb.co/YcXqprM/a.png",
  });

  const navigate = useNavigate();

  // function to save the whole setForm
  const handleRegSubmit = async (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    // prints the form into the console
    console.log(form);

    // See commit messages regarding the below.

    // New Plan
    // state: isEditing(false) ✅
    // When page loads, attemptingFetch(session.user.id).✅
    // Store result in state called fetchAttempt. ✅
    // When fetchAttempt has populated (i.e. use useEffect),✅ do the following...
    // If the payload is empty, setIsEdit(false) ready for a POST request after save.✅
    // If not, setIsEdit(true) ready for a PATCH request.✅
    //  setForm(fetchAttempt).✅
    // When submit button is pressed, do POST or PATCH request according to state of isEdit.✅
    // nav to myprofile.✅

    if (isEditing) {
      console.log("isEditing is true. About to patch...");
      await patchUser(session.user.id);
    } else {
      console.log("isEditing is false. About to post...");
      await register();
    }

    // Ignore below.
    // When the submit button is clicked, we first want to attempt to fetch the user with the id session.user.id. ✅
    // attemptingFetch(session.user.id);
    // Store result in state called fetchAttempt. ✅
    // When fetchAttempt has populated (i.e. use useEffect),✅ do the following...
    // If the payload is empty, do a POST request. (Then nav to myprofile)
    // If not, do a PATCH request. (Then nav to myprofile)

    // From here, we want the front end to send the object called form to the server for it to send it to the db.
    // register();

    navigate("/myprofile");
  };

  async function attemptingFetch(id) {
    const res = await fetch(`${url}/${id}`);
    const data = await res.json();
    console.log({ data });
    setFetchAttempt(data);
  }

  useEffect(() => {
    console.log(fetchAttempt);
    if (fetchAttempt.length !== 0) {
      if (fetchAttempt.payload.length === 0) {
        setIsEditing(false);
        // register();
        // navigate("/myprofile");
      } else {
        setIsEditing(true);
        setForm(fetchAttempt.payload[0]);
        // patchUser(session.user.id);
        // navigate("/myprofile");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchAttempt]);

  useEffect(() => {
    console.log({ form });
  }, [form]);

  useEffect(() => {
    console.log({ isEditing });
  }, [isEditing]);

  async function patchUser(id) {
    console.log("Attempting to patch...");
    const res = await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    console.log({ res });
    return res;
  }

  async function register() {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    console.log("The following has now been added to the database:", { res });
    return res;
  }

  return (
    // Parent container
    <div className="reg-container">
      {/* Div to contain the ask for help form */}
      <div className="registration">
        <h1 id="reg-title" className="centered-text">
          Complete Profile
        </h1>
        <form id="reg-form" onSubmit={handleRegSubmit}>
          {/* Display Name  should we specify character limit in display name*/}
          <div className="reg-div-email">
            <label className="reg-label">My email:</label>
            <input
              disabled
              className="reg-input"
              type="text"
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
          <div className="reg-div">
            <label className="reg-label">
              Full Name{" "}
              <p className="about_me_desc">
                This won't be visible to other users{" "}
              </p>
            </label>
            <input
              required
              className="reg-input"
              type="text"
              placeholder="My name is..."
              value={form.full_name}
              onChange={(e) => {
                setForm(
                  {
                    ...form,
                    full_name: e.target.value,
                  }
                  // console.log(form)
                );
              }}
            ></input>
          </div>
          <div className="reg-div">
            <label className="reg-label">
              Display Name{" "}
              <p className="about_me_desc">
                Which name would you like shown on your profile?
              </p>
            </label>
            <input
              required
              className="reg-input"
              type="text"
              placeholder="E.g 'John S'"
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
          <div className="reg-div">
            <label className="reg-label">
              How old are you?{" "}
              <p className="about_me_desc">Please type as numerical digits</p>
            </label>
            <input
              required
              className="reg-input"
              type="text"
              placeholder="It's just a number!"
              value={form.age}
              onChange={(e) => {
                setForm(
                  {
                    ...form,
                    age: e.target.value,
                  }
                  // console.log(form)
                );
              }}
            ></input>
          </div>
          {/* Summary */}
          {/* Borough dropdown */}
          <div className="reg-div">
            <label className="reg-label" htmlFor="boroughs">
              I live in...
            </label>
            <select
              required
              className="reg-input"
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
                Select Borough
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
          <div className="reg-div">
            <label className="reg-label" htmlFor="genders">
              Gender
            </label>
            <select
              required
              className="reg-input"
              id="categories-skills-offered"
              name="categories"
              value={form.gender}
              onChange={(e) => {
                setForm(
                  {
                    ...form,
                    gender: e.target.value,
                  }
                  // console.log(form)
                );
              }}
            >
              <option value="" disabled>
                I identify as...
              </option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="non-binary">Non Binary</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
          <div className="reg-div">
            <label className="reg-label">
              Tell us about yourself...
              <p className="about_me_desc">
                Give your community a flavour of who you are and how you can
                help.
              </p>
            </label>
            <textarea
              required
              className="reg-input"
              rows="7"
              cols="30"
              placeholder="Tell us a little about yourself!"
              id="reg-description"
              name="description"
              value={form.about_me}
              onChange={(e) => {
                setForm(
                  {
                    ...form,
                    about_me: e.target.value,
                  }
                  // console.log(form)
                );
              }}
            ></textarea>
          </div>
          {/* Category drop down */}
          <div className="reg-div">
            <label className="reg-label" htmlFor="categories">
              I can offer...{" "}
              <p className="about_me_desc">
                What skill, help, or favour are you able to give?
              </p>
            </label>
            <select
              required
              className="reg-input"
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
            >
              <option value="" disabled>
                Select a skill
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
          {/* Description */}
          <div className="reg-div">
            <label className="reg-label" htmlFor="categories">
              I need...{" "}
              <p className="about_me_desc">What might you need help with?</p>
            </label>
            <select
              required
              className="reg-input"
              id="categories-skills-wanted"
              name="categories"
              value={form.skills_needed}
              onChange={(e) => {
                setForm(
                  {
                    ...form,
                    skills_needed: e.target.value,
                  }
                  // console.log(form)
                );
              }}
              // onChange={handleOfferChoiceChange}
            >
              <option value="" disabled>
                Select a need
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
                <option value="Just a cup of tea 🫖">Just a cup of tea</option>
              </optgroup>
            </select>
          </div>
          <div className="reg-div">
            <label className="reg-label">
              Social media link{" "}
              <p className="about_me_desc">
                This helps other users know that you are who you say you are!{" "}
              </p>
            </label>
            <input
              required
              className="reg-input"
              type="text"
              placeholder="Find me at..."
              value={form.social_media}
              onChange={(e) => {
                setForm(
                  {
                    ...form,
                    social_media: e.target.value,
                  }
                  // console.log(form)
                );
              }}
            ></input>
          </div>
          {/* Submit button */}
          <button
            id="reg-btn"
            // onClick={() => alert("This will send the form")}
          >
            Save my profile
          </button>
        </form>
      </div>
    </div>
  );
}
