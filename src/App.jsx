// import SecureBanner from "./components/SecureBanner/SecureBanner";
import Groupcomp from "./components/Group/Groupcomp";
import Modal from "./components/GroupModal/Modal";
import UserContextProvider from "./components/context/UserContextProvider";
// import NotesSection from "./components/notessection/NotesSection";
import Views from "./views/Views";
import { useState } from "react";
function App() {
  const [ismodalopen, setisemodalopen] = useState(false);
  const open = () => {
    setisemodalopen(true);
  };
  const close = () => {
    setisemodalopen(false);
  };

  return (
    <UserContextProvider>
      <div className="maindiv" style={{ display: "flex" }}>
        <Groupcomp open={open} />
        <Views />
        {ismodalopen && (
          <Modal close={close} setisemodalopen={setisemodalopen} />
        )}
      </div>
    </UserContextProvider>
  );
}

export default App;
