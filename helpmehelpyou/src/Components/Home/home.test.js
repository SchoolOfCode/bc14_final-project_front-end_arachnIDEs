import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
import { test, expect } from "@jest/globals";
import App from "../../App";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./homePage";

// test that the home page renders

test("Home page is visible on render", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

// test to see if the homepage renders correctly
describe("HomePage", () => {
  test("renders home page components correctly", () => {
    render(<HomePage />);

    // Check if the logo image is rendered
    const logoImage = screen.getByAltText("logo");
    expect(logoImage).toBeInTheDocument();

    // Check if the home image is rendered
    const homeImage = screen.getByAltText(
      "cartoon person showing someone how to do something"
    );
    expect(homeImage).toBeInTheDocument();

    // Check if the intro text is rendered
    const introText = screen.getByText(/Connect with your local community/i);
    expect(introText).toBeInTheDocument();

    // Check if the "Give Help" button is rendered
    const giveHelpButton = screen.getByText(/Give Help/i);
    expect(giveHelpButton).toBeInTheDocument();

    // Check if the "Get Help" button is rendered
    const getHelpButton = screen.getByText(/Get Help/i);
    expect(getHelpButton).toBeInTheDocument();

    // Check if the "How it works" section is rendered
    const howItWorksTitle = screen.getByText(/How it works.../i);
    expect(howItWorksTitle).toBeInTheDocument();

    // Check if the carousel component is rendered
    const carousel = screen.getByTestId("carousel");
    expect(carousel).toBeInTheDocument();

    // Check if the map section is rendered
    const mapText = screen.getByText(
      /📍 Now active across all 32 London boroughs/i
    );
    expect(mapText).toBeInTheDocument();

    // Check if the map image is rendered
    const mapImage = screen.getByAltText("map of London");
    expect(mapImage).toBeInTheDocument();
  });

  test("carousel navigation works correctly", () => {
    render(<HomePage />);

    // Check if the left arrow button is clickable
    const leftArrowButton = screen.getByText(/←/i);
    expect(leftArrowButton).toBeEnabled();

    // Check if the right arrow button is clickable
    const rightArrowButton = screen.getByText(/→/i);
    expect(rightArrowButton).toBeEnabled();

    // Click the right arrow button and check if the active card changes
    fireEvent.click(rightArrowButton);
    const activeCard = screen.getByText(/MEET/i);
    expect(activeCard).toHaveTextContent(/MAX.../i);

    // Click the left arrow button and check if the active card changes back
    fireEvent.click(leftArrowButton);
    expect(activeCard).toHaveTextContent(/LOUISE.../i);
  });
});
