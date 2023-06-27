import React from "react";

import FindHelpListItem from "./findHelpListItem.js";

export default function FindHelpList(props) {
  const { listItems } = props;
  if (!listItems.length) {
    return (
      <div className="loading-div">
        <p>Loading helpers...</p>
        <img
          src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"
          alt="Loading gif"
          className="give-and-find-help-loading-gif"
        ></img>
      </div>
    );
  }

  return (
    <>
      {listItems.map((listItem) => {
        console.log();
        return <FindHelpListItem helper={listItem} key={listItem.user_id} />;
      })}
    </>
  );
}
