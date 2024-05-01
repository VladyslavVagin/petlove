// @ts-nocheck
import React from "react";
import sprite from "../../../../assets/icons/icons.svg";
import { ContainerRadioBtns, OptionsList } from "./RadioSection.styled";

const RadioSection = ({ setRadioSearch, radioSearch, setCurrentPage }) => {
  const handleClick = (e) => {
    const choosenValue = e.currentTarget.dataset.value;
    setRadioSearch(choosenValue);
    setCurrentPage(1);
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    setRadioSearch(null);
    setCurrentPage(1);
  };

  return (
    <ContainerRadioBtns>
      <OptionsList>
        <li
          data-value="Popular"
          onClick={handleClick}
          style={
            radioSearch === "Popular"
              ? {
                  backgroundColor: "var(--accent-color)",
                  color: "var(--white-color)",
                }
              : {}
          }
        >
          <p>Popular</p>
          {radioSearch === "Popular" && (
            <button type="button" onClick={handleCancel}>
              <svg width={18} height={18}>
                <use xlinkHref={`${sprite}#icon-close`}></use>
              </svg>
            </button>
          )}
        </li>
        <li
          data-value="Unpopular"
          onClick={handleClick}
          style={
            radioSearch === "Unpopular"
              ? {
                  backgroundColor: "var(--accent-color)",
                  color: "var(--white-color)",
                }
              : {}
          }
        >
          <p>Unpopular</p>
          {radioSearch === "Unpopular" && (
            <button type="button" onClick={handleCancel}>
              <svg width={18} height={18}>
                <use xlinkHref={`${sprite}#icon-close`}></use>
              </svg>
            </button>
          )}
        </li>
        <li
          data-value="Cheap"
          onClick={handleClick}
          style={
            radioSearch === "Cheap"
              ? {
                  backgroundColor: "var(--accent-color)",
                  color: "var(--white-color)",
                }
              : {}
          }
        >
          <p>Cheap</p>
          {radioSearch === "Cheap" && (
            <button type="button" onClick={handleCancel}>
              <svg width={18} height={18}>
                <use xlinkHref={`${sprite}#icon-close`}></use>
              </svg>
            </button>
          )}
        </li>
        <li
          data-value="Expensive"
          onClick={handleClick}
          style={
            radioSearch === "Expensive"
              ? {
                  backgroundColor: "var(--accent-color)",
                  color: "var(--white-color)",
                }
              : {}
          }
        >
          <p>Expensive</p>
          {radioSearch === "Expensive" && (
            <button type="button" onClick={handleCancel}>
              <svg width={18} height={18}>
                <use xlinkHref={`${sprite}#icon-close`}></use>
              </svg>
            </button>
          )}
        </li>
      </OptionsList>
    </ContainerRadioBtns>
  );
};

export default RadioSection;
