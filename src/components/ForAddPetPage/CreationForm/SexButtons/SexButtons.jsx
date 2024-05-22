// @ts-nocheck
import React from "react";
import sprite from "../../../../assets/icons/icons.svg";
import { FemaleLi, ListItems, MaleLi, MultipleLi } from "./SexButtons.styled";

const SexButtons = ({ setSexPet, sexPet }) => {

  const handleChooseSex = e => {
    const choosenValue = e.currentTarget.dataset.value;
    setSexPet(choosenValue);
  }

  return (
      <ListItems>
        <FemaleLi data-value="female" onClick={handleChooseSex} datavalue={sexPet}>
          <svg width={24} height={24} datavalue={sexPet}>
            <use xlinkHref={`${sprite}#icon-female`}></use>
          </svg>
        </FemaleLi>
        <MaleLi data-value="male" onClick={handleChooseSex} datavalue={sexPet}>
          <svg width={24} height={24} datavalue={sexPet}>
            <use xlinkHref={`${sprite}#icon-male`}></use>
          </svg>
        </MaleLi>
        <MultipleLi data-value="multiple" onClick={handleChooseSex} datavalue={sexPet}>
          <svg width={24} height={24} datavalue={sexPet}>
            <use xlinkHref={`${sprite}#icon-sex`}></use>
          </svg>
        </MultipleLi>
      </ListItems>
  );
};

export default SexButtons;
