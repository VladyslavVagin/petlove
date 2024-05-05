import React from "react";
import { Link } from "react-router-dom";
import sprite from "../../../assets/icons/icons.svg";
import { LogoContainer } from "./Logo.styled";

const Logo = ({isHomepage}) => {

  return (
    <LogoContainer>
      <Link to={'/home'}>
        <svg>
          <use
            xlinkHref={
              isHomepage
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
