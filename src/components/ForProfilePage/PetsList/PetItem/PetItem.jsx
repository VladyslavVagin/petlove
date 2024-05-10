// @ts-nocheck
import React from "react";
import PetInfo from "../PetInfo/PetInfo";
import { ItemContainer, PetImgBox, Content } from "./PetItem.styled";

const PetItem = ({ pet }) => {
  const { title, imgURL, _id } = pet;

  return (
    <ItemContainer>
      <PetImgBox>
        <img src={imgURL} alt={title} />
      </PetImgBox>
      <Content>
        <h3>{title}</h3>
        <PetInfo pet={pet}/>
      </Content>
    </ItemContainer>
  );
};

export default PetItem;
