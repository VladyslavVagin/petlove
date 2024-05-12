// @ts-nocheck
import React, { useState } from "react";
import ModalLogout from "../../ForProfilePage/ModalLogout/ModalLogout";
import { LogoutButton } from "./LogoutHeader.styled";

const LogoutHeader = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <>
    {showLogoutModal && <ModalLogout showLogout={showLogoutModal} setShowLogout={setShowLogoutModal}/>}
      <LogoutButton type="button" onClick={() => setShowLogoutModal(true)}>
        log out
      </LogoutButton>
    </>
  );
};

export default LogoutHeader;
