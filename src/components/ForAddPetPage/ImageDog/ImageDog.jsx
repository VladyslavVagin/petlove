import React from 'react'
import sprite from "../../../assets/icons/icons.svg";
import dogMobile from "../../../assets/images/add-pet/dogBrown.webp"
import dogMobile2x from "../../../assets/images/add-pet/dogBrown-2x.webp"
import dogMobile3x from "../../../assets/images/add-pet/dogBrown-3x.webp"
import { ImageBox } from './ImageDog.styled';

const ImageDog = () => {
  return (
    <div>
         <ImageBox>
        <picture>
          <source
            media="(max-width: 767.98px)"
            srcSet={`${dogMobile} 1x, ${dogMobile2x} 2x, ${dogMobile3x} 3x`}
            type="image/webp"
          />
          <img src={dogMobile} alt="One cute dog" loading="lazy" />
        </picture>
        <svg width={332}>
          <use xlinkHref={`${sprite}#icon-shape`}></use>
        </svg>
      </ImageBox>
    </div>
  )
}

export default ImageDog