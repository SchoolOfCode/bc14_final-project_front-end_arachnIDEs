import "./homePage.css";
import image from "./home_image.png";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import female_2 from "./female_2.png";
import female_3 from "./female_3.png";
import male_1 from "./male_1.png";
import male_2 from "./male_2.png";

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = [
    {
      id: 1,
      title: "LOUISE...",
      borough: "Brent",
      need: "I need to learn how to swim",
      offer: "I can teach you how to play the guitar",
      image: female_2,
    },
    {
      id: 2,
      title: "KESHAV...",
      borough: "Croydon",
      need: "I need help tending to my garden",
      offer: "I can help you move house",
      image: male_2,
    },
    {
      id: 3,
      title: "STEVE...",
      borough: "Ealing",
      need: "I need help with my CV",
      offer: "I can teach you how to cook Filipino food",
      image: male_1,
    },
    {
      id: 4,
      title: "AMY...",
      borough: "Harrow",
      need: "I need help with caring for my cat",
      offer: "I can help you by offering a free haircut",
      image: female_3,
    },

  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
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
      <div className="about">
        <h2 className="about-title">How it works...</h2>
        <ul className="about-info-list">
        <li className= "about-list-item">Need something? Browse our community to find a local Helper who is happy to swap skills or favours, or post a bulleitin outlining what you need and we'll share it with our Helper network. </li>
        <br></br>
        <li className= "about-list-item">Eager to help? take a look through our bulliein board to find those in need of help in your local community - 90% of our users offer a favour in return, so it's win win for both of you! </li>
        <br></br>
        <li className= "about-list-item">Accept what the other person is offering in return, suggest something that you need instead, or even be super selfless and help out without a return favour. </li>
        <br></br>
        <li className= "about-list-item">You can also create a profile showcasing what you can offer and what you need, then let the community come to you.</li>
        </ul>
      </div>
      <div className="carousel">
        <button className="left-arrow" onClick={handlePrev}>
          ←
        </button>
        <div className="card">

          <h2 className="profile-title">{`Meet `+cards[activeIndex].title}</h2>
          <h3>{"Location: " + cards[activeIndex].borough}</h3>
          <p>{cards[activeIndex].need}</p>
          <p>{cards[activeIndex].offer}</p>
          <div className="image-icon-container">
            <img src={cards[activeIndex].image} alt="profile" className= "profile-image"></img>
            <img src={cards[activeIndex].image} alt="profile" className= "profile-image"></img>
          </div>{" "}

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
        </div>{" "}
      </div>

    </div>
  );
}
