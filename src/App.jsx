import { useState } from "react";
import SecureBanner from "./components/SecureBanner/SecureBanner";
import Groupcomp from "./components/Group/Groupcomp";
import Modal from "./components/GroupModal/Modal";
function App() {
  const [ismodalopen, setisemodalopen] = useState(false);

  const open = () => {
    setisemodalopen(true);
  };
  const close = () => {
    setisemodalopen(false);
  };

  return (
    <>
      <div className="maindiv" style={{ display: "flex" }}>
        <Groupcomp open={open} />
        <SecureBanner />
        {ismodalopen && <Modal close={close} />}
      </div>
    </>
  );
}

export default App;
