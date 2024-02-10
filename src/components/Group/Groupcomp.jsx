import React from "react";
import Group from "../GroupIcon/Group";
import "./Groupcompstyle.css";
// import UserContext from "../context/Usercontext";
const Groupcomp = ({ open }) => {
  // const { user } = useContext(UserContext)
  return (
    <div className="leftcontainer">
      <h1 className="h1tagofGroupcomp" style={{ marginTop: "35px" }}>
        Pocket Notes
      </h1>
      <Group />
      <div className="circlebutton" onClick={open}>
        +
      </div>
    </div>
  );
};

export default Groupcomp;
