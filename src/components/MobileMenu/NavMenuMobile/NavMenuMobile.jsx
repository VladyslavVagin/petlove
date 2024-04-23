// @ts-nocheck
import React from "react";
import { NavMenuList, StyledNavLink } from "./NavMenuMobile.styled";

const linksData = [
  { to: "/news", label: "News" },
  { to: "/notices", label: "Find pet" },
  { to: "friends", label: "Our friends" },
];

const NavMenuMobile = ({ isHomepage }) => {
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

export default NavMenuMobile;
