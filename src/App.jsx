import { useState } from "react";
import SecureBanner from "./components/SecureBanner/SecureBanner";
import Groupcomp from "./components/Group/Groupcomp";
function App() {
  return (
    <>
      <div className="maindiv" style={{ display: "flex" }}>
        <Groupcomp />
        <SecureBanner />
      </div>
    </>
  );
}

export default App;
