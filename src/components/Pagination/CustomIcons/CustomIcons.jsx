import React from "react";
import sprite from "../../../assets/icons/icons.svg";
import { IconContainer } from "./CustomIcons.styled";

export const NextIcon = () => {
  return (
    <svg width={18} height={18}>
      <use xlinkHref={`${sprite}#icon-right`}></use>
    </svg>
  );
};

export const PreviousIcon = () => {
  return (
    <svg width={18} height={18}>
      <use xlinkHref={`${sprite}#icon-left`}></use>
    </svg>
  );
};

export const LastIcon = () => {
  return (
    <IconContainer>
      <svg width={18} height={18}>
        <use xlinkHref={`${sprite}#icon-right`}></use>
      </svg>
      <svg width={18} height={18}>
        <use xlinkHref={`${sprite}#icon-right`}></use>
      </svg>
    </IconContainer>
  );
};

export const FirstIcon = () => {
  return (
    <IconContainer>
      <svg width={20} height={20}>
        <use xlinkHref={`${sprite}#icon-left`}></use>
      </svg>
      <svg width={20} height={20}>
        <use xlinkHref={`${sprite}#icon-left`}></use>
      </svg>
    </IconContainer>
  );
};
