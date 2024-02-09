import React from "react";
import "./Modal.css";
const Modal = () => {
  return (
    <div className="popup">
      <div className="popup__title">Create New Group</div>
      <div className="popup__input">
        <span>Group Name</span>
        <input type="text" placeholder="Enter Group Name..." />
      </div>
      <div className="popup__color__input">
        <span>Group Color</span>
        <div className="popup__color__input__color">
          <div className="popup__color__input__color__1"></div>
          <div className="popup__color__input__color__2"></div>
          <div className="popup__color__input__color__3"></div>
          <div className="popup__color__input__color__4"></div>
          <div className="popup__color__input__color__5"></div>
          <div className="popup__color__input__color__6"></div>
        </div>
      </div>
      <div className="popup__closeicon">&#10006;</div>
      <div className="popup__close">
        <button>Create</button>
      </div>
    </div>
  );
};

export default Modal;
