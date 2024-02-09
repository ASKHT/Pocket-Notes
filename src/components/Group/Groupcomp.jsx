import React from "react";
import Group from "../GroupIcon/Group";
import "./Groupcompstyle.css";

const Groupcomp = () => {
  return (
    <div className="leftcontainer">
      <h1 className="h1tagofGroupcomp" style={{ marginTop: "35px" }}>
        Pocket Notes
      </h1>
      <br />
      <Group />
      <div className="circlebutton">+</div>
    </div>
  );
};

export default Groupcomp;
