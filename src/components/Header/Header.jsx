// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UserProfileBtn from "../UserProfileBtn/UserProfileBtn";
import { useAuth } from "../../hooks/useAuth";
import Logo from "./Logo/Logo";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import { BlockBtns, HeaderContainer, MainHeader } from "./Header.styled";

const Header = () => {
  const location = useLocation();
  const [isHomepage, setIsHomepage] = useState(false);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (location.pathname === "/home") {
      setIsHomepage(true);
    } else {
      setIsHomepage(false);
    }
  }, [location.pathname]);

  return (
    <MainHeader>
      <HeaderContainer ishomepage={isHomepage.toString()}>
        <Logo />
        <BlockBtns>
          {isLoggedIn && <UserProfileBtn />}
          <BurgerBtn isHomepage={isHomepage} />
        </BlockBtns>
      </HeaderContainer>
    </MainHeader>
  );
};

export default Header;
