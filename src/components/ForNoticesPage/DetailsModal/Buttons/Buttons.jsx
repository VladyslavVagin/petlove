// @ts-nocheck
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../../hooks/useAuth";
import { refreshUser } from "../../../../redux/auth/operations";
import {
  AddToFavorites,
  RemoveFromFavorites,
} from "../../../../redux/notices/operations";
import sprite from "../../../../assets/icons/icons.svg";
import { AddRemoveBtn, ButtonsContainer, ContactBtn } from "./Buttons.styled";

const Buttons = ({ isFavorite, id, setIsFavorite, setShowFirstNotification }) => {
  const dispatch = useDispatch();
  const {favoritesNotices} = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch, isFavorite]);

  const handleAddFavorites = () => {
    if(favoritesNotices?.length === 0) {
      setShowFirstNotification(true);
    }
    dispatch(AddToFavorites(id));
    setIsFavorite(true);
  };

  const handleRemoveFavorites = () => {
    dispatch(RemoveFromFavorites(id));
    setIsFavorite(false);
  };

  return (
    <ButtonsContainer>
      <AddRemoveBtn
        type="button"
        onClick={isFavorite ? handleRemoveFavorites : handleAddFavorites}
      >
        {isFavorite ? "Remove from" : "Add to"}
        <svg width={18} height={18}>
          <use xlinkHref={`${sprite}#icon-heart`}></use>
        </svg>
      </AddRemoveBtn>
      <ContactBtn to={"mailto:biggest5family@gmail.com"} target="_blank">
        Contact
      </ContactBtn>
    </ButtonsContainer>
  );
};

export default Buttons;
