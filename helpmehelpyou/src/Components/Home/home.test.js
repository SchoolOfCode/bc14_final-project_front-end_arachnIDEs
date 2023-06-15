import { render, screen } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
import { test, expect } from "@jest/globals";
import HomePage from "./homePage";

test("The title '' should appear on the page.", () => {
  render(<HomePage />);
  //   screen.logTestingPlaygroundURL(); // a red line will appear underneath logTestingPlaygroundURL, but I ran the test anyway and the URL still appeared in the console.
  //   const actual = screen.getBytext("Home page!");
  const actual = screen.getByRole("heading", { name: /home page!/i }); // I got getByRole("heading", { name: /home page!/i }); by using screen.logTestingPlaygroundURL();
  expect(actual).toBeInTheDocument();
});
