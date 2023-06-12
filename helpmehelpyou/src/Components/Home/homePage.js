import "./homePage.css";
import image from "./home_image.png";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function HomePage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const cards = [
      { id: 1, title: "Card 1", content: "This is card 1" },
      { id: 2, title: "Card 2", content: "This is card 2" },
      { id: 3, title: "Card 3", content: "This is card 3" },
    ];
  
    const handlePrev = () => {
      setActiveIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
    };

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
        <Link to="/give">
          <button className="home-page-buttons" id="give-help-button">
            Give Help
          </button>
        </Link>
        <Link to="/find">
          <button className="home-page-buttons" id="find-help-button">
            Get Help
          </button>
        </Link>
      </div>
      <div className="carousel">
      <button className="left-arrow" onClick={handlePrev}>
        ←
      </button>
      <div className="card">
        <h2>{cards[activeIndex].title}</h2>
        <p>{cards[activeIndex].content}</p>
      </div>
      <button className="right-arrow" onClick={handleNext}>
      →
      </button>
      <div className="dots">
        {cards.map((card, index) => (
          <span
            key={card.id}
            className={index === activeIndex ? "dot active" : "dot"}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div> </div>
    </div>
  );
}
