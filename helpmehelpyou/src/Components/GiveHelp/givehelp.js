import React, { useState, useEffect } from "react";

//create skeleton code for GiveHelp page.

export default function GiveHelp() {
  // state goes here

  // functions: saving input from input box, click on button in listing to get email address of user.

  /*renders:
Header
Nav Bar
GiveHelpSearch - searchInput (input box) & searchBtn (button)
Listing - <h1> for title / summary
<p> for details
<img> for profile picture
<button> to close the component? */

  return (
    <div>
      <section id="header"></section>
      <section id="navBar"></section>
      <section id="giveHelpSearch">
        <input type="text"></input>
        <button>Search</button>
      </section>
      <section id="listing">
        <h1>Listing Title</h1>
        <p>Listing Details</p>
        <button>Contact user</button>
      </section>
    </div>
  );
}
