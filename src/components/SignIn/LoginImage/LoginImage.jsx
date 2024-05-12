// @ts-nocheck
import React from "react";
import { useMediaQuery } from "react-responsive";
import { LoginMessage } from "../../../lib/messageContent/messageContent.ts";
import Message from "../../Message/Message.jsx";
import DogImgMobile from "../../../assets/images/login/dog-mobile.webp";
import DogImgMobile2x from "../../../assets/images/login/dog-mobile-2x.webp";
import DogImgMobile3x from "../../../assets/images/login/dog-mobile-3x.webp";
import DogImgTablet from "../../../assets/images/login/dogLogin-tablet.webp";
import DogImgTablet2x from "../../../assets/images/login/dogLogin-tablet-2x.webp";
import DogImgTablet3x from "../../../assets/images/login/dogLogin-tablet-3x.webp";
import DogImgDesktop from "../../../assets/images/login/loginPC.webp";
import DogImgDesktop2x from "../../../assets/images/login/loginPC-2x.webp";
import DogImgDesktop3x from "../../../assets/images/login/loginPC-3x.webp";
import sprite from "../../../assets/icons/icons.svg";
import { LoginImageBox } from "./LoginImage.styled";

const LoginImage = () => {
  const tablet = useMediaQuery({minWidth: 768});
  const desktop = useMediaQuery({ minWidth: 1280 });
  const {imgUrl, name, birthday, comment} = LoginMessage;

  return (
    <div>
      <LoginImageBox>
        <picture>
        <source
            media="(min-width: 1280px)"
            srcSet={`${DogImgDesktop} 1x, ${DogImgDesktop2x} 2x, ${DogImgDesktop3x} 3x`}
            type="image/webp"
          />
        <source
            media="(min-width: 768px)"
            srcSet={`${DogImgTablet} 1x, ${DogImgTablet2x} 2x, ${DogImgTablet3x} 3x`}
            type="image/webp"
          />
          <source
            media="(max-width: 767.98px)"
            srcSet={`${DogImgMobile} 1x, ${DogImgMobile2x} 2x, ${DogImgMobile3x} 3x`}
            type="image/webp"
          />
          <img src={DogImgMobile} alt="One cute dog" loading="lazy" />
        </picture>
        <svg width={332}>
          <use xlinkHref={desktop ? `${sprite}#icon-shape-pc` : `${sprite}#icon-shape`}></use>
        </svg>
        {tablet && <Message imgUrl={imgUrl} name={name} birthday={birthday} comment={comment}/>}
      </LoginImageBox>
    </div>
  );
};

export default LoginImage;
