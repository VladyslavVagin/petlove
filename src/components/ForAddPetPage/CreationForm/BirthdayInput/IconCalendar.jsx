import React from "react";
import sprite from "../../../../assets/icons/icons.svg";
import styled from "styled-components";

const Icon = styled.svg`
  fill: none;
  stroke: var(--dark-color);
  transition: var(--hover-general);

  &:hover,
  &:focus {
    stroke: var(--accent-color);
  }
`;

const IconCalendar = () => {
  return (
    <Icon width={18} height={18}>
      <use xlinkHref={`${sprite}#icon-calendar`}></use>
    </Icon>
  );
};

export default IconCalendar;
