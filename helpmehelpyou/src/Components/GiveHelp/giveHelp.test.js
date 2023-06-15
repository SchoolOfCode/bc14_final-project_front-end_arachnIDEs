import React, { useContext } from 'react';
import { render, screen, waitFor } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
import { test, expect } from "@jest/globals";
import GiveHelp from "./giveHelp";
import { BrowserRouter } from 'react-router-dom';

/*
test("The title 'Home page!' should appear on the page.", () => {
  render(<HomePage />);
  //   screen.logTestingPlaygroundURL(); // a red line will appear underneath logTestingPlaygroundURL, but I ran the test anyway and the URL still appeared in the console.
  //   const actual = screen.getBytext("Home page!");
  const actual = screen.getByRole("heading", { name: /home page!/i }); // I got getByRole("heading", { name: /home page!/i }); by using screen.logTestingPlaygroundURL();
  expect(actual).toBeInTheDocument();
});
 */

// Test to check whether Give Help appears on the page

test('The title "Give Help!" should appear on the page.', () => {
    render(<BrowserRouter><GiveHelp /></BrowserRouter>);
    // screen.logTestingPlaygroundURL();
    const actual = screen.getByText("Give Help");
    expect(actual).toBeInTheDocument();

});

// testing to see if the search bar appears on the page
test('There is an input box on the page.', () => {
    render(<BrowserRouter><GiveHelp /></BrowserRouter>);
    // screen.logTestingPlaygroundURL();
    const actual = screen.getByRole("textbox");
    expect(actual).toBeInTheDocument();
});

// testing to see if the search button appears on the page
test('There is a search button on the page.', () => {
    render(<BrowserRouter><GiveHelp /></BrowserRouter>);
    // screen.logTestingPlaygroundURL();
    const actual = screen.getByRole("button");
    expect(actual).toBeInTheDocument();
});

// testing to see if there is a list of listings on the page
test('There is a list of listings on the page.', async () => {    
    render(<BrowserRouter><GiveHelp /></BrowserRouter>);
    await waitFor(() => {
    const listingElements = screen.queryAllByTestId("listing");
    expect(listingElements.length).toBeGreaterThan(0);
    });
  });
