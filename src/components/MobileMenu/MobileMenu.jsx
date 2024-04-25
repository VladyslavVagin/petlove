// @ts-nocheck
import React from "react";
import Modal from "../Modal/Modal";
import NavMenuMobile from "./NavMenuMobile/NavMenuMobile";
import AuthNav from "../AuthNav/AuthNav";
import sprite from "../../assets/icons/icons.svg";
import { MobileMenuContainer } from "./MobileMenu.styled";

const MobileMenu = ({ setIsShowMobileMenu, isHomepage }) => {
  return (
    <Modal setIsShowMobileMenu={setIsShowMobileMenu}>
      <MobileMenuContainer ishomepage={isHomepage.toString()}>
        <button type="button" onClick={() => setIsShowMobileMenu(false)}>
          <svg width={32} height={32}>
            <use xlinkHref={`${sprite}#icon-close`}></use>
          </svg>
        </button>
        <NavMenuMobile isHomepage={isHomepage} setIsShowMobileMenu={setIsShowMobileMenu}/>
        <AuthNav setIsShowMobileMenu={setIsShowMobileMenu}/>
      </MobileMenuContainer>
    </Modal>
  );
};

export default MobileMenu;
