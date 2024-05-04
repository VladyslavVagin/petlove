// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../../hooks/useAuth";
import { refreshUser } from "../../../../redux/auth/operations";
import { RemoveFromFavorites } from "../../../../redux/notices/operations";
import DetailsModal from "../../../ForNoticesPage/DetailsModal/DetailsModal";
import sprite from "../../../../assets/icons/icons.svg";
import {
  BtnRemove,
  ButtonLearnMore,
  ButtonsCardBox,
  CardContainer,
  CommentText,
  ImageAnimalContainer,
  ListInfo,
  TitlePopularityBox,
} from "./FavoriteCard.styled";

const FavCard = ({ notice }) => {
  const dispatch = useDispatch();
  const { favoritesNotices } = useAuth();
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

  const handleRemoveFavorites = () => {
    dispatch(RemoveFromFavorites(_id));
    setIsFavorite(false);
    dispatch(refreshUser());
  };

  const handleLearnMore = () => setShowDetails(true);

  return (
    <>
      {showDetails && (
        <DetailsModal
          setShowDetails={setShowDetails}
          notice={notice}
          showDetails={showDetails}
          isFavorite={isFavorite}
          setIsFavorite={setIsFavorite}
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
          <BtnRemove type="button" onClick={handleRemoveFavorites}>
            <svg width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-trash`}></use>
            </svg>
          </BtnRemove>
        </ButtonsCardBox>
      </CardContainer>
    </>
  );
};

export default FavCard;
