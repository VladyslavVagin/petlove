import React from "react";
import { useLocation, Link } from "react-router-dom";
import sprite from "../../../assets/icons/icons.svg";
import { LogoContainer } from "./Logo.styled";

const Logo = () => {
  const location = useLocation();

  return (
    <LogoContainer>
      <Link to={'/home'}>
        <svg>
          <use
            xlinkHref={
              location.pathname === "/home"
                ? `${sprite}#icon-logo-white`
                : `${sprite}#icon-logo-header`
            }
          ></use>
        </svg>
      </Link>
    </LogoContainer>
  );
};

export default Logo;
