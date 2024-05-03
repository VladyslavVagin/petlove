import React from "react";
import sprite from "../../../assets/icons/icons.svg";
import { AddPetLink, TitlePetsContainer } from "./MyPetsTitle.styled";

const MyPetsTitle = () => {
  return (
    <TitlePetsContainer>
      <h2>My pets</h2>
      <AddPetLink to={"/add-pet"}>
        Add pet{" "}
        <svg width={18} height={18}>
          <use xlinkHref={`${sprite}#icon-plus`}></use>
        </svg>
      </AddPetLink>
    </TitlePetsContainer>
  );
};

export default MyPetsTitle;
