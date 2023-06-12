import "./homePage.css";
import image from "./home_image.png";
import logo from "./logo.png";

export default function HomePage() {
  return (
    <div className="home-page">
      <img className="app-logo" src={logo} alt="logo"></img>
      <img
        className="home-image"
        src={image}
        alt="cartoon person showing someone how to do something"
      ></img>
      <h3 className="intro-text">
        Connect with your local community to give and receive favours, skills,
        and support. <br></br>
        <br></br>
        From moving flats to feeding cats - we have it covered.
      </h3>
      <div className="button-container">
        <button className="home-page-buttons" id="give-help-button">
          Give Help
        </button>
        <button className="home-page-buttons" id="find-help-button">
          Get Help
        </button>
      </div>
    </div>
  );
}
