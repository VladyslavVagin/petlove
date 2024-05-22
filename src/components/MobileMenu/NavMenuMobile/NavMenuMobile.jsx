// @ts-nocheck
import React from "react";
import { linksData } from "../../../lib/menuLinks/menu";
import { NavMenuList, StyledNavLink } from "./NavMenuMobile.styled";

const NavMenuMobile = ({ isHomepage, setIsShowMobileMenu }) => {
  return (
    <NavMenuList>
      {linksData.map(({ to, label }) => (
        <StyledNavLink key={to} to={to} ishomepage={isHomepage.toString()} onClick={() => setIsShowMobileMenu(false)}>
          {label}
        </StyledNavLink>
      ))}
    </NavMenuList>
  );
};

export default NavMenuMobile;
