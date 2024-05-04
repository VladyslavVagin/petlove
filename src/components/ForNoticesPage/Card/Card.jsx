// @ts-nocheck
import React, { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import sprite from "../../../assets/icons/icons.svg";
import {
  BtnLike,
  ButtonLearnMore,
  ButtonsCardBox,
  CardContainer,
  CommentText,
  ImageAnimalContainer,
  ListInfo,
  TitlePopularityBox,
} from "./Card.styled";
import DetailsModal from "../DetailsModal/DetailsModal";

const Card = ({ notice, setShowAttention }) => {
  const [showDetails, setShowDetails] = useState(false);
  const {
    imgURL,
    name,
    title,
    birthday,
    sex,
    species,
    popularity,
    comment,
    category,
  } = notice;
  const { isLoggedIn } = useAuth();
  const date = new Date(birthday);
  const formattedDate = date
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, ".");

  const details = [
    { label: "Name", value: name },
    { label: "Birthday", value: formattedDate },
    { label: "Sex", value: sex },
    { label: "Species", value: species },
    { label: "Category", value: category },
  ];

  const handleAddFavorites = () =>
    !isLoggedIn ? setShowAttention(true) : console.log("Add to favorites");
  const handleLearnMore = () =>
    !isLoggedIn ? setShowAttention(true) : setShowDetails(true);

  return (
    <>
      {showDetails && (
        <DetailsModal setShowDetails={setShowDetails} notice={notice} />
      )}
      <CardContainer>
        <ImageAnimalContainer>
          <img src={imgURL} alt={title} />
        </ImageAnimalContainer>
        <div>
          <TitlePopularityBox>
            <h2>{title}</h2>
            <span>
              <svg width={16} height={16}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>{" "}
              {popularity}
            </span>
          </TitlePopularityBox>
          <ListInfo>
            {details.map(({ label, value }) => (
              <li key={label}>
                <p>
                  {label} <span>{value}</span>
                </p>
              </li>
            ))}
          </ListInfo>
          <CommentText>{comment}</CommentText>
        </div>
        <ButtonsCardBox>
          <ButtonLearnMore type="button" onClick={handleLearnMore}>
            Learn more
          </ButtonLearnMore>
          <BtnLike type="button" onClick={handleAddFavorites}>
            <svg width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-heart`}></use>
            </svg>
          </BtnLike>
        </ButtonsCardBox>
      </CardContainer>
    </>
  );
};

export default Card;
