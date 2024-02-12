// import SecureBanner from "./components/SecureBanner/SecureBanner";
import Groupcomp from "./components/Group/Groupcomp";
import Modal from "./components/GroupModal/Modal";
// import UserContextProvider from "./components/context/UserContextProvider";
// import NotesSection from "./components/notessection/NotesSection";
import Views from "./views/Views";
import { useState, useContext } from "react";
import UserContext from "./components/context/Usercontext";
function App() {
  const { notes } = useContext(UserContext);

  const [ismodalopen, setisemodalopen] = useState(false);
  const open = () => {
    setisemodalopen(true);
  };
  const close = () => {
    setisemodalopen(false);
  };

  return (
    <div className="maindiv" style={{ display: "flex" }}>
      <Groupcomp open={open} />
      {!notes && <Views />}
      {ismodalopen && <Modal close={close} setisemodalopen={setisemodalopen} />}
    </div>
  );
}

export default App;
