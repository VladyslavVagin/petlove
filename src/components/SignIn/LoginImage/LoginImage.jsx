import React from "react";
import DogImgMobile from "../../../assets/images/login/dog-mobile.webp";
import DogImgMobile2x from "../../../assets/images/login/dog-mobile-2x.webp";
import DogImgMobile3x from "../../../assets/images/login/dog-mobile-3x.webp";
import sprite from "../../../assets/icons/icons.svg";
import { LoginImageBox } from "./LoginImage.styled";

const LoginImage = () => {
  return (
    <div>
      <LoginImageBox>
        <picture>
          <source
            media="(max-width: 767.98px)"
            srcSet={`${DogImgMobile} 1x, ${DogImgMobile2x} 2x, ${DogImgMobile3x} 3x`}
            type="image/webp"
          />
          <img src={DogImgMobile} alt="One cute dog" loading="lazy" />
        </picture>
        <svg width={332}>
          <use xlinkHref={`${sprite}#icon-shape`}></use>
        </svg>
      </LoginImageBox>
    </div>
  );
};

export default LoginImage;
