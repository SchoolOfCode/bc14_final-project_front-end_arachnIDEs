//import React, { useContext } from 'react';
import { render, screen, BrowserRouter } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
import { test, expect } from "@jest/globals";
import GiveHelp from "../../pages/giveHelp";

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

test('the title "Give Help" should appear on the page.', () => {
  render(<BrowserRouter><GiveHelp /></BrowserRouter>);
  screen.logTestingPlaygroundURL();
  const actual = screen.getByText("Give Help");
  expect(actual).toBeInTheDocument();
});