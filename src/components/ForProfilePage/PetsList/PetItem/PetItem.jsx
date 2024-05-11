// @ts-nocheck
import React from "react";
import { useDispatch } from "react-redux";
import PetInfo from "../PetInfo/PetInfo";
import { removePet } from "../../../../redux/auth/operations";
import sprite from "../../../../assets/icons/icons.svg";
import { ItemContainer, PetImgBox, Content, DeletePetBtn } from "./PetItem.styled";

const PetItem = ({ pet }) => {
  const { title, imgURL, _id } = pet;
  const dispatch = useDispatch();

  const handleDeletePet = () => dispatch(removePet(_id));

  return (
    <ItemContainer>
      <PetImgBox>
        <img src={imgURL} alt={title} />
      </PetImgBox>
      <Content>
        <h3>{title}</h3>
        <PetInfo pet={pet}/>
      </Content>
      <DeletePetBtn type="button" onClick={handleDeletePet}>
        <svg width={16} height={16}>
          <use xlinkHref={`${sprite}#icon-trash`}></use>
        </svg>
      </DeletePetBtn>
    </ItemContainer>
  );
};

export default PetItem;
