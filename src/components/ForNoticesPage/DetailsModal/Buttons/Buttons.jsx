import React from "react";
import sprite from "../../../../assets/icons/icons.svg";
import { AddRemoveBtn, ButtonsContainer, ContactBtn } from "./Buttons.styled";

const Buttons = () => {
  return (
    <ButtonsContainer>
      <AddRemoveBtn type="button">
        Add to
        <svg width={18} height={18}>
          <use xlinkHref={`${sprite}#icon-heart`}></use>
        </svg>
      </AddRemoveBtn>
      <ContactBtn to={"mailto:biggest5family@gmail.com"} target="_blank">Contact</ContactBtn>
    </ButtonsContainer>
  );
};

export default Buttons;
