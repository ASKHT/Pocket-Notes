import React, { useContext, useState, useEffect } from "react";
import "./Groupstyle.css";
import UserContext from "../context/Usercontext";
const Group = () => {
  const { user, bgcolor } = useContext(UserContext);

  const extractusernamelogo = (name) => {
    let take = name.substring(0, 1); // Add the first character of the name

    // Find the position of the first space
    const spacePos = name.indexOf(" ");
    if (spacePos !== -1) {
      // If a space is found, append the character after the space
      take += name[spacePos + 1];
    }

    return take.toUpperCase();
  };

  const extractusername = (name) => {
    let take = name[0].toUpperCase();
    for (let i = 1; i < name.length; i++) {
      if (name[i - 1] === " ") {
        take += name[i].toUpperCase();
      } else {
        take += name[i];
      }
    }
    return take;
  };

  // Retrieve groups data from local storage
  const allGroup = JSON.parse(localStorage.getItem("groups"));

  return (
    <div class="container1">
      <div class="left">
        {allGroup &&
          allGroup.map((group) => (
            <div class="profile-container">
              <div
                class="profile-icon"
                style={{ backgroundColor: group.color }}
              >
                <span>{extractusernamelogo(group.name)}</span>
              </div>
              <p>{extractusername(group.name)}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Group;
