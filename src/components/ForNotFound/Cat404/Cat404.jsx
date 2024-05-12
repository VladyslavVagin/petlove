import React from "react";
import sprite from "../../../assets/icons/icons.svg";
import cat from "../../../assets/images/notFound/cat404.webp";
import cat2x from "../../../assets/images/notFound/cat404-2x.webp";
import cat3x from "../../../assets/images/notFound/cat404-3x.webp";
import catTablet from "../../../assets/images/notFound/cat404tablet.webp";
import catTablet2x from "../../../assets/images/notFound/cat404tablet-2x.webp";
import catTablet3x from "../../../assets/images/notFound/cat404tablet-3x.webp";
import catDesktop from "../../../assets/images/notFound/errorPC.webp";
import catDesktop2x from "../../../assets/images/notFound/errorPC-2x.webp";
import catDesktop3x from "../../../assets/images/notFound/errorPC-3x.webp";
import { CatImgBox, ContainerContent, IconBox } from "./Cat404.styled";

const Cat404 = () => {
  return (
    <ContainerContent>
      <IconBox>
        <svg width={74} height={120}>
          <use xlinkHref={`${sprite}#icon-four`}></use>
        </svg>
      </IconBox>
      <CatImgBox>
        <picture>
        <source
            media="(min-width: 1280px)"
            srcSet={`${catDesktop} 1x, ${catDesktop2x} 2x, ${catDesktop3x} 3x`}
            type="image/webp"
          />
        <source
            media="(min-width: 768px)"
            srcSet={`${catTablet} 1x, ${catTablet2x} 2x, ${catTablet3x} 3x`}
            type="image/webp"
          />
          <source
            media="(max-width: 767.98px)"
            srcSet={`${cat} 1x, ${cat2x} 2x, ${cat3x} 3x`}
            type="image/webp"
          />
          <img src={cat} alt="One cute cat" />
        </picture>
      </CatImgBox>
      <IconBox>
        <svg width={74} height={120}>
          <use xlinkHref={`${sprite}#icon-four`}></use>
        </svg>
      </IconBox>
    </ContainerContent>
  );
};

export default Cat404;
