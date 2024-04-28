import { components } from "react-select";
import sprite from "../../../../assets/icons/icons.svg";
import React from "react";

export const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <svg width={18} height={18} style={{fill: "var(--white-color)", stroke: "var(--dark-color)", marginRight: "8px"}}>
            <use xlinkHref={`${sprite}#icon-search`}></use>
        </svg>
      </components.DropdownIndicator>
    );
  };