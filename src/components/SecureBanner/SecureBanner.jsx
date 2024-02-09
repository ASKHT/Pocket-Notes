import React from "react";
import SecureBannerimg from "../../assets/image-removebg-preview 1.png";
import Lockicon from "../../assets/lockicon.png";
import "./Securestyle.css";
const SecureBanner = () => {
  return (
    <div className="container">
      <div className="innerelement">
        <div className="innerimage">
          <img src={SecureBannerimg} alt="secureimage" />
        </div>

        <div className="innercontent">
          <h1>Pocket Notes</h1>
          <p className="ptagofsecurebanner">
            Send and receive messages without keeping your phone online.
            <br />
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>

        <div className="bottomdiv">
          <img src={Lockicon} alt="Lockicon" />
          <p className="ptagofsecurebanner">end-to-end encrypted</p>
        </div>
      </div>
    </div>
  );
};

export default SecureBanner;
