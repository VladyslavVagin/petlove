// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import {
  AddToFavorites,
  RemoveFromFavorites,
} from "../../../redux/notices/operations";
import { refreshUser } from "../../../redux/auth/operations";
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
import { useDispatch } from "react-redux";

const Card = ({ notice, setShowAttention, setShowFirstNotification }) => {
  const dispatch = useDispatch();
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
    _id,
  } = notice;
  const { isLoggedIn, favoritesNotices } = useAuth();
  const [isFavorite, setIsFavorite] = useState(
    favoritesNotices?.find((fav) => (fav._id === _id ? true : false))
  );
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

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, isFavorite]);

  const handleAddFavorites = () => {
    if (!isLoggedIn) {
      setShowAttention(true);
    } else {
      if (favoritesNotices?.length === 0) {
        setShowFirstNotification(true);
      }
      dispatch(AddToFavorites(_id));
      setIsFavorite(true);
    }
  };

  const handleRemoveFavorites = () => {
    dispatch(RemoveFromFavorites(_id));
    setIsFavorite(false);
  };

  const handleLearnMore = () =>
    !isLoggedIn ? setShowAttention(true) : setShowDetails(true);

  return (
    <>
      {showDetails && (
        <DetailsModal
          setShowDetails={setShowDetails}
          notice={notice}
          showDetails={showDetails}
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
          setShowFirstNotification={setShowFirstNotification}
        />
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
          <BtnLike
            type="button"
            onClick={isFavorite ? handleRemoveFavorites : handleAddFavorites}
          >
            <svg width={18} height={18}>
              <use
                xlinkHref={
                  isFavorite ? `${sprite}#icon-trash` : `${sprite}#icon-heart`
                }
              ></use>
            </svg>
          </BtnLike>
        </ButtonsCardBox>
      </CardContainer>
    </>
  );
};

export default Card;
