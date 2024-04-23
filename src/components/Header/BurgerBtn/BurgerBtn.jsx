// @ts-nocheck
import React, { useState, useEffect } from "react";
import MobileMenu from "../../MobileMenu/MobileMenu";
import sprite from "../../../assets/icons/icons.svg";
import { BurgerBtnContainer, Button } from "./BurgerBtn.styled";

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
          ishomepage={isHomepage.toString()}
        >
          <svg width={32} height={32}>
            <use xlinkHref={`${sprite}#icon-burger-menu`}></use>
          </svg>
        </Button>
      </BurgerBtnContainer>
      {isShowMobileMenu && <MobileMenu setIsShowMobileMenu={setIsShowMobileMenu} isHomepage={isHomepage}/>}
    </>
  );
};

export default BurgerBtn;
