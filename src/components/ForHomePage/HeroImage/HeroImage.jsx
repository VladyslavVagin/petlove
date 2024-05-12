import React from "react";
import heroImgMobile from "../../../assets/images/homepage/hero-mobile.webp";
import heroImgMobile2x from "../../../assets/images/homepage/hero-mobile-2x.webp";
import heroImgMobile3x from "../../../assets/images/homepage/hero-mobile-3x.webp";
import heroImgTablet from "../../../assets/images/homepage/home-tablet.webp";
import heroImgTablet2x from "../../../assets/images/homepage/home-tablet-2x.webp";
import heroImgTablet3x from "../../../assets/images/homepage/home-tablet-3x.webp";
import heroImgDesktop from "../../../assets/images/homepage/heroPC.webp";
import heroImgDesktop2x from "../../../assets/images/homepage/heroPC-2x.webp";
import heroImgDesktop3x from "../../../assets/images/homepage/heroPC-3x.webp";
import { HeroImgContainer } from "./HeroImage.styled";

const HeroImage = () => {
  return (
    <HeroImgContainer>
      <picture>
      <source
          media="(min-width: 1280px)"
          srcSet={`${heroImgDesktop} 1x, ${heroImgDesktop2x} 2x, ${heroImgDesktop3x} 3x`}
          type="image/webp"
        />
      <source
          media="(min-width: 768px)"
          srcSet={`${heroImgTablet} 1x, ${heroImgTablet2x} 2x, ${heroImgTablet3x} 3x`}
          type="image/webp"
        />
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
