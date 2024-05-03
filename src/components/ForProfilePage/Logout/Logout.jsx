import React from "react";
import { LogoutBtn } from "./Logout.styled";

const Logout = ({setShowLogout}) => {
  return <LogoutBtn type="button" onClick={() => setShowLogout(true)}>logout</LogoutBtn>;
};

export default Logout;
