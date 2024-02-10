import { useState } from "react";
import SecureBanner from "./components/SecureBanner/SecureBanner";
import Groupcomp from "./components/Group/Groupcomp";
import Modal from "./components/GroupModal/Modal";
import UserContextProvider from "./components/context/UserContextProvider";
function App() {
  const [ismodalopen, setisemodalopen] = useState(false);

  // Callback function to update parent state

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
        <SecureBanner />
        {ismodalopen && (
          <Modal
            close={close}
            setisemodalopensetisemodalopen={setisemodalopen}
          />
        )}
      </div>
    </UserContextProvider>
  );
}

export default App;
