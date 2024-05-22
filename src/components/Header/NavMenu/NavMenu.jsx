// @ts-nocheck
import React from "react";
import { linksData } from "../../../lib/menuLinks/menu";
import { NavMenuList } from "../../MobileMenu/NavMenuMobile/NavMenuMobile.styled";
import { StyledNavLink } from "./NavMenu.styled";

const NavMenu = ({ isHomepage }) => {
  return (
    <NavMenuList>
      {linksData.map(({ to, label }) => (
        <StyledNavLink key={to} to={to} ishomepage={isHomepage.toString()}>
          {label}
        </StyledNavLink>
      ))}
    </NavMenuList>
  );
};

export default NavMenu;
