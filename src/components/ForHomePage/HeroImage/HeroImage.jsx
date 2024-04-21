import React from "react";
import heroImgMobile from "../../../assets/images/homepage/hero-mobile.webp";
import heroImgMobile2x from "../../../assets/images/homepage/hero-mobile-2x.webp";
import heroImgMobile3x from "../../../assets/images/homepage/hero-mobile-3x.webp";
import { HeroImgContainer } from "./HeroImage.styled";

const HeroImage = () => {
  return (
    <HeroImgContainer>
      <picture>
        <source
          media="(max-width: 767.98px)"
          srcSet={`${heroImgMobile} 1x, ${heroImgMobile2x} 2x, ${heroImgMobile3x} 3x`}
          type="image/webp"
        />
        <img
          src={heroImgMobile}
          alt="Girl which loves her dog"
          loading="lazy"
        />
      </picture>
    </HeroImgContainer>
  );
};

export default HeroImage;
