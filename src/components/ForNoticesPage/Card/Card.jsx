// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { formatBirthday } from "../../../functions/formatBirthday";
import { useAuth } from "../../../hooks/useAuth";
import DetailsModal from "../DetailsModal/DetailsModal";
import { viewedPet } from "../../../redux/auth/operations";
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

const Card = ({ notice, setShowAttention, setShowFirstNotification, onAddFavorites, onRemoveFavorites }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(false);
  const [isViewedPage, setIsViewedPage] = useState(false);
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
  const formattedDate = formatBirthday(birthday);

  const details = [
    { label: "Name", value: name },
    { label: "Birthday", value: formattedDate },
    { label: "Sex", value: sex },
    { label: "Species", value: species },
    { label: "Category", value: category },
  ];

  useEffect(() => {
    if(location?.pathname === "/profile/viewed") {
      setIsViewedPage(true);
    } else {
      setIsViewedPage(false);
    }
  }, [location?.pathname])

  useEffect(() => {
    if(showDetails && !isViewedPage) {
      dispatch(viewedPet(_id));
    }
  }, [_id, isViewedPage, showDetails]);

  const handleAddFavorites = () => {
    if (!isLoggedIn) {
      setShowAttention(true);
    } else {
      if (favoritesNotices?.length === 0) {
        setShowFirstNotification(true);
      }
      onAddFavorites(_id);  
      setIsFavorite(true);
    }
  };

  const handleRemoveFavorites = () => {
    onRemoveFavorites(_id);
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
      <CardContainer isviewedpage={isViewedPage.toString()}>
        <ImageAnimalContainer isviewedpage={isViewedPage.toString()}>
          <img src={imgURL} alt={title} />
        </ImageAnimalContainer>
        <div style={{width: "100%"}}>
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
          {location?.pathname !== "/profile/viewed" && (<BtnLike
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
          </BtnLike>)}
        </ButtonsCardBox>
      </CardContainer>
    </>
  );
};

export default Card;
