import "./homePage.css";
import image from "./home_image.png";
import logo from "./logo.png";
import { Link } from "react-router-dom";

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
            <Link to = "/give">
            <button className="home-page-buttons" id="give-help-button">
          Give Help
           </button> </Link>
            <Link to = "/find">      
              <button className="home-page-buttons" id="find-help-button">
          Get Help
        </button>
        </Link>
      </div>

      <div className ="carousel-container">
      <p className = "home-page-card">
        Test
      </p>
      </div>
    </div>
  );
}
