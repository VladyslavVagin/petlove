// @ts-nocheck
import React from "react";
import { useMediaQuery } from "react-responsive";
import Message from "../../Message/Message";
import { RegisterMessage } from "../../../lib/messageContent/messageContent.ts";
import CatImgMobile from "../../../assets/images/register/cat-mobile.webp";
import CatImgMobile2x from "../../../assets/images/register/cat-mobile-2x.webp";
import CatImgMobile3x from "../../../assets/images/register/cat-mobile-3x.webp";
import CatImgTablet from "../../../assets/images/register/catRegister-tablet.webp";
import CatImgTablet2x from "../../../assets/images/register/catRegister-tablet-2x.webp";
import CatImgTablet3x from "../../../assets/images/register/catRegister-tablet-3x.webp";
import sprite from "../../../assets/icons/icons.svg";
import { RegisterImageBox } from "./RegistrationImage.styled";

const RegistrationImage = () => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const { imgUrl, name, birthday, comment } = RegisterMessage;

  return (
    <div>
      <RegisterImageBox>
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`${CatImgTablet} 1x, ${CatImgTablet2x} 2x, ${CatImgTablet3x} 3x`}
            type="image/webp"
          />
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
        {tablet && <Message imgUrl={imgUrl} name={name} birthday={birthday} comment={comment}/>}
      </RegisterImageBox>
    </div>
  );
};

export default RegistrationImage;
