import React from "react";
import sprite from "../../../../assets/icons/icons.svg";
import { AvatarContainer, ImageBox } from "./PetAvatar.styled";

const PetAvatar = ({ petImageURL }) => {
  return (
    <AvatarContainer>
      <ImageBox>
        {petImageURL !== "" ? (
          <img src={petImageURL} alt="Pet's avatar" />
        ) : (
          <svg width={34} height={34}>
            <use xlinkHref={`${sprite}#icon-footprint`}></use>
          </svg>
        )}
      </ImageBox>
    </AvatarContainer>
  );
};

export default PetAvatar;
