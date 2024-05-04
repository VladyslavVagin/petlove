import React from "react";
import sprite from "../../../../assets/icons/icons.svg";
import { RatingContainer } from "./Rating.styled";

const Rating = ({ popularity }) => {
  const maxStars = 5;
  const filledStars = Math.ceil((popularity / 37) * maxStars);

  const stars = Array.from({ length: maxStars }, (_, index) => (
    <svg key={index} width={16} height={16}>
      <use xlinkHref={`${sprite}#icon-star${index < filledStars ? '' : 'Gray'}`}></use>
    </svg>
  ));

  return <RatingContainer>{stars} {popularity}</RatingContainer>;
};

export default Rating;
