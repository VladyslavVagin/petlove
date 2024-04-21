// @ts-nocheck
import React from "react";
import Modal from "../Modal/Modal";
import NavMenuMobile from "./NavMenuMobile/NavMenuMobile";
import AuthNav from "../AuthNav/AuthNav";
import { MobileMenuContainer } from "./MobileMenu.styled";

const MobileMenu = ({ setIsShowMobileMenu }) => {
  return (
    <Modal setIsShowMobileMenu={setIsShowMobileMenu}>
      <MobileMenuContainer>
        <NavMenuMobile />
        <AuthNav />
      </MobileMenuContainer>
    </Modal>
  );
};

export default MobileMenu;
