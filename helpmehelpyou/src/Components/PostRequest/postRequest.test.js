import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
import { test, expect } from "@jest/globals";
import PostRequest from "./postRequest.js";
import { BrowserRouter } from "react-router-dom";

// Test that all input fields are showing on the page - doesn't include the conditionally rendered textboxes.

test("PostRequest renders all required input fields", () => {
  render(
    <BrowserRouter>
      <PostRequest />
    </BrowserRouter>
  );

  screen.logTestingPlaygroundURL();

  // Find all the required input fields
  const emailInput = screen.getByPlaceholderText("Please enter your email");
  const displayNameInput = screen.getByPlaceholderText("Create a display name");
  const summaryInput = screen.getByPlaceholderText("What help would you like?");
  //   const categorySelect = screen.getByLabelText("Category*"); - these need checking on the playgroundy thing
  //   const boroughSelect = screen.getByLabelText("Borough*");
  const descriptionTextarea = screen.getByPlaceholderText(
    "What do you need help with?"
  );

  // Assert that all required input fields are present
  expect(emailInput).toBeInTheDocument();
  expect(displayNameInput).toBeInTheDocument();
  expect(summaryInput).toBeInTheDocument();
  //   expect(categorySelect).toBeInTheDocument();
  //   expect(boroughSelect).toBeInTheDocument();
  expect(descriptionTextarea).toBeInTheDocument();
});
