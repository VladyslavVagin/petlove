// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "./Logo/Logo";
import BurgerBtn from "./BurgerBtn/BurgerBtn";
import { HeaderContainer, MainHeader } from "./Header.styled";

const Header = () => {
  const location = useLocation();
  const [isHomepage, setIsHomepage] = useState(false);

  useEffect(() => {
    if(location.pathname === '/home') {
      setIsHomepage(true);
    } else {
      setIsHomepage(false);
    }
  }, [location.pathname]);

  return (
    <MainHeader>
      <HeaderContainer ishomepage={isHomepage.toString()}>
        <Logo />
        <BurgerBtn isHomepage={isHomepage}/>
      </HeaderContainer>
    </MainHeader>
  );
};

export default Header;
