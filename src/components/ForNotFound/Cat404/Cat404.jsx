import React from "react";
import sprite from "../../../assets/icons/icons.svg";
import cat from "../../../assets/images/notFound/cat404.webp";
import cat2x from "../../../assets/images/notFound/cat404-2x.webp";
import cat3x from "../../../assets/images/notFound/cat404-3x.webp";
import { CatImgBox, ContainerContent } from "./Cat404.styled";

const Cat404 = () => {
  return (
    <ContainerContent>
      <div>
        <svg width={74} height={120}>
          <use xlinkHref={`${sprite}#icon-four`}></use>
        </svg>
      </div>
      <CatImgBox>
        <picture>
          <source
            media="(max-width: 767.98px)"
            srcSet={`${cat} 1x, ${cat2x} 2x, ${cat3x} 3x`}
            type="image/webp"
          />
          <img src={cat} alt="One cute cat" />
        </picture>
      </CatImgBox>
      <div>
        <svg width={74} height={120}>
          <use xlinkHref={`${sprite}#icon-four`}></use>
        </svg>
      </div>
    </ContainerContent>
  );
};

export default Cat404;
