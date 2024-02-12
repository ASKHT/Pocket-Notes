import React from "react";
import "./Modal.css";
import { useState, useContext } from "react";
import UserContext from "../context/Usercontext";
const Modal = ({ close }) => {
  // const [name, Setname] = useState("");
  const { setbgColor } = useContext(UserContext);
  const [group, setGroup] = useState({ name: "", color: "", notes: "" });

  const handleColorSelection = (color) => {
    setbgColor(color);
    setGroup({ ...group, color: color });
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setGroup({ ...group, name: value });
  };
  const handlesubmit = () => {
    // Add the group name and color to existing lists

    if (!group.name.trim()) {
      return;
    }

    group.name = group.name.trim();
    const existingGroups = JSON.parse(localStorage.getItem("groups")) || [];
    const check = existingGroups.find((item) => item.name === group.name);
    if (!check) {
      const updatedGroups = [...existingGroups, group];
      localStorage.setItem("groups", JSON.stringify(updatedGroups));
    } else {
      alert("the user is already exist");
    }
    close();
  };

  return (
    <div className="main" onClick={close}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <div className="popup__title">Create New Group</div>
        <div className="popup__input">
          <span>Group Name</span>

          <input
            type="text"
            placeholder="Enter Group Name..."
            value={group.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="popup__color__input">
          <span>Group Color</span>
          <div className="popup__color__input__color">
            <div
              className="popup__color__input__color__1 "
              onClick={() => handleColorSelection("#b38bfa")}
            ></div>
            <div
              className="popup__color__input__color__2 "
              onClick={() => handleColorSelection("#ff79f2")}
            ></div>
            <div
              className="popup__color__input__color__3 "
              onClick={() => handleColorSelection("#43e6fc")}
            ></div>
            <div
              className="popup__color__input__color__4 "
              onClick={() => handleColorSelection("#f19576")}
            ></div>
            <div
              className="popup__color__input__color__5 "
              onClick={() => handleColorSelection("#0047ff")}
            ></div>
            <div
              className="popup__color__input__color__6"
              onClick={() => handleColorSelection("#6691ff")}
            ></div>
          </div>
        </div>
        <div className="popup__closeicon" onClick={close}>
          &#10006;
        </div>
        <div className="popup__close">
          <button
            onClick={() => {
              handlesubmit(), close();
            }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
