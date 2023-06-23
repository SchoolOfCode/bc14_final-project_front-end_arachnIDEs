import React from 'react';
import { render, screen } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
import { test, expect } from "@jest/globals";
import App from "../../App";
import { BrowserRouter } from 'react-router-dom';

// test that the home page renders

test('Home page is visible on render', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  });
  