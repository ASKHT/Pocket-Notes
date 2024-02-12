import React, { useContext } from "react";
import NotesSection from "../components/notessection/NotesSection";
import SecureBanner from "../components/SecureBanner/SecureBanner";
import UserContext from "../components/context/Usercontext";
const Views = () => {
  const { currentgroup } = useContext(UserContext);
  return <>{currentgroup ? <NotesSection /> : <SecureBanner />}</>;
};

export default Views;
