// @ts-nocheck
import React, { useState, useEffect } from "react";
import { BurgerBtnContainer, Button, BtnIcon } from "./BurgerBtn.styled";
import MobileMenu from "../../MobileMenu/MobileMenu";

const BurgerBtn = ({ isHomepage }) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  useEffect(() => {
    if (isShowMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isShowMobileMenu]);

  return (
    <>
      <BurgerBtnContainer>
        <Button
          type="button"
          onClick={() => setIsShowMobileMenu((prev) => !prev)}
        >
          <BtnIcon
            isshowmobilemenu={isShowMobileMenu.toString()}
            ishomepage={isHomepage.toString()}
          ></BtnIcon>
        </Button>
      </BurgerBtnContainer>
      {isShowMobileMenu && <MobileMenu setIsShowMobileMenu={setIsShowMobileMenu}/>}
    </>
  );
};

export default BurgerBtn;
