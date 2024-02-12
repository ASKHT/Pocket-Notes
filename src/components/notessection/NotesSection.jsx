import React, { useContext, useState, useRef, useEffect } from "react";
import "./notesstyle.css";
import UserContext from "../context/Usercontext";
import { IoMdSend } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import dayjs from "dayjs";
const NotesSection = () => {
  const { currentgroup, hiddennotes } = useContext(UserContext);
  const [text, setText] = useState("");
  const ref = useRef();
  // console.log(currentgroup.name);
  //extract username logo
  const extractusernamelogo = (name) => {
    if (!name) return;
    let take = name.substring(0, 1); // Add the first character of the name

    // Find the position of the first space
    const spacePos = name.indexOf(" ");
    if (spacePos !== -1) {
      // If a space is found, append the character after the space
      take += name[spacePos + 1];
    }

    return take.toUpperCase();
  };
  const groups = JSON.parse(localStorage.getItem("groups"));
  let group = groups?.find((item) => item.name === currentgroup.name);
  const handleNotes = () => {
    if (text.length <= 0) {
      return;
    }
    const note = {
      text: text,
      date: dayjs().format("D MMM YYYY"),
      time: dayjs().format("hh:mm A"),
    };

    group.notes = [...group.notes, note];
    localStorage.setItem("groups", JSON.stringify(groups));
    setText("");
  };

  useEffect(() => {
    if (text.length > 0) {
      ref.current.style.color = "blue";
      ref.current.disabled = false;
    } else {
      ref.current.style.color = "gray";
      ref.current.disabled = true;
    }
  }, [text]);

  return (
    <div className="notes-section">
      <div className="notes-header">
        <FaArrowLeft className="arrow" onClick={hiddennotes(true)} />
        <div
          className="profile"
          style={{ backgroundColor: currentgroup.color }}
        >
          {extractusernamelogo(currentgroup.name)}
        </div>
        <div className="group-name">{currentgroup.name}</div>
      </div>
      <div className="notes-body">
        {group &&
          group.notes &&
          group.notes.map((item, idx) => (
            <div key={idx} className="note-body">
              {item.text}
              <div className="note-time">
                <div className="">{item.date} </div>
                <div className="dot"></div>
                <div className="">{item.time}</div>
              </div>
            </div>
          ))}
      </div>

      <div className="notes-input">
        <textarea
          cols="30"
          rows="10"
          placeholder="Enter your text here"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <span className="send" ref={ref}>
          <IoMdSend onClick={handleNotes} />
        </span>
      </div>
    </div>
  );
};

export default NotesSection;
