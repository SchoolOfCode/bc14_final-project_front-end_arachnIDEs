import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
import { test, expect } from "@jest/globals";
import GiveHelp from "./giveHelp";
import { BrowserRouter } from "react-router-dom";
// import API mocking utilities from Mock Service Worker
// import { rest } from "msw";
// import { setupServer } from "msw/node";

/*
Tutorial which I am following: https://www.youtube.com/watch?v=dL_TsWTASfg .
0. Install msw (Mock Service Worker), by following instructions on https://mswjs.io/docs/getting-started/install . ✅
1. In src folder, create new folder called mocks. ✅
2. Within this folder, create new file called server.ts (or server.js in our case).✅
3. Visit https://mswjs.io/docs/getting-started/integrate/node and copy the code under the heading Configure Server and paste it into server.js.✅
4. Within the mocks folder, create another new file called handlers.js.✅
5. Within this file import { rest } from 'msw';✅
6. Export an array called handlers in which we will contain:
    rest.get(url, (req, res, ctx)=>{
        return res(ctx.status(200), ctx.json([{objectContainingWhatTheFetchExpects}]))
    }); ✅
7. Write the test in your test file...
    test("description of test", async ()=>{
        render(ComponentInJSX)
        // Find is used below as it is async and All is used as we expect there to be more than one listing in the DOM (Assuming we passed in multiple listings (see line 21 above)).
        const listings = await screen.findAllByRole("listitem")
        expect(listings).toHaveLength(numberOfObjectsPassedIntoLine21Above)
    }); ✅
8. At this point, the test will fail still as we haven't told our test to use msw. To do this, we need to modify setupTests.js.
    Visit https://mswjs.io/docs/getting-started/integrate/node and scroll down to Using Create React App.
    Copy the code and paste it into setupTests.js under what is already there by default. ✅
*/

// const testListing = {
//   borough_name: "Hammersmith and Fulham",
//   created_at: "2023-06-21T16:30:13.968168+00:00",
//   display_name: "vgh",
//   email_address: "olga84h@gmail.com",
//   listing_details: "ghghg",
//   listing_id: "beee3ec6-cbf8-4c79-8610-db7a9a0f2223",
//   listing_title: "ghgh",
//   skills_offered: "Photography 📸",
//   skills_wanted: "Gardening 🌻",
//   timescale: "",
// };

// // declare which API requests to mock
// const server = setupServer(
//   // capture "GET /greeting" requests
//   rest.get(
//     "https://arachnides-backend.onrender.com/api/listings",
//     (req, res, ctx) => {
//       // respond using a mocked JSON body
//       return res(ctx.json(testListing));
//     }
//   )
// );

// // establish API mocking before all tests
// beforeAll(() => server.listen());
// // reset any request handlers that are declared as a part of our tests
// // (i.e. for testing one-time error scenarios)
// afterEach(() => server.resetHandlers());
// // clean up once the tests are done
// afterAll(() => server.close());

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
  render(
    <BrowserRouter>
      <GiveHelp url="/give" />
    </BrowserRouter>
  );
  // screen.logTestingPlaygroundURL();
  const actual = screen.getByText("Give Help");
  expect(actual).toBeInTheDocument();
});

// testing to see if the search bar appears on the page
test("There is an input box on the page.", () => {
  render(
    <BrowserRouter>
      <GiveHelp />
    </BrowserRouter>
  );
  // screen.logTestingPlaygroundURL();
  const actual = screen.getByRole("textbox");
  expect(actual).toBeInTheDocument();
});

// testing to see if the search button appears on the page
test("There is a search button on the page.", () => {
  render(
    <BrowserRouter>
      <GiveHelp />
    </BrowserRouter>
  );
  // screen.logTestingPlaygroundURL();
  const actual = screen.getByRole("button", { name: /search/i });
  expect(actual).toBeInTheDocument();
});

// // testing to see if there is a list of listings on the page
// test("There is a list of listings on the page.", async () => {
//   render(
//     <BrowserRouter>
//       <GiveHelp />
//     </BrowserRouter>
//   );
//   screen.logTestingPlaygroundURL();
//   // await waitFor(() => {
//   // const listingElements = screen.queryAllByTestId("listing");
//   // expect(listingElements.length).toBeGreaterThan(0);
//   // });
// });

test("Number of listings rendered should be 3", async () => {
  render(
    <BrowserRouter>
      <GiveHelp />
    </BrowserRouter>
  );
  screen.logTestingPlaygroundURL();
  // Find is used below as it is async and All is used as we expect there to be more than one listing in the DOM (Assuming we passed in multiple listings (see line 21 above)).
  //   const listings = await screen.findAllByRole("listitem");
  //   expect(listings).toHaveLength(3);
});
