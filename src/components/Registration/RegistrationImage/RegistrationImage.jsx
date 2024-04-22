import React from "react";
import CatImgMobile from "../../../assets/images/register/cat-mobile.webp";
import CatImgMobile2x from "../../../assets/images/register/cat-mobile-2x.webp";
import CatImgMobile3x from "../../../assets/images/register/cat-mobile-3x.webp";
import sprite from "../../../assets/icons/icons.svg"
import { RegisterImageBox } from "./RegistrationImage.styled";

const RegistrationImage = () => {
  return (
    <div>
      <RegisterImageBox>
        <picture>
          <source
            media="(max-width: 767.98px)"
            srcSet={`${CatImgMobile} 1x, ${CatImgMobile2x} 2x, ${CatImgMobile3x} 3x`}
            type="image/webp"
          />
          <img src={CatImgMobile} alt="Orange color Cat" loading="lazy" />
        </picture>
        <svg width={332}>
            <use xlinkHref={`${sprite}#icon-shape`}></use>
        </svg>
      </RegisterImageBox>
    </div>
  );
};

export default RegistrationImage;
