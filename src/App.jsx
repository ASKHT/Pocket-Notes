import { useState } from "react";
import SecureBanner from "./components/SecureBanner/SecureBanner";
import Groupcomp from "./components/Group/Groupcomp";
import Modal from "./components/GroupModal/Modal";
function App() {
  return (
    <>
      <div className="maindiv" style={{ display: "flex" }}>
        <Groupcomp />
        <SecureBanner />
        <Modal />
      </div>
    </>
  );
}

export default App;
