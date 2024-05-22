// @ts-nocheck
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RemoveFromFavorites } from "../../../redux/notices/operations";
import { refreshUser } from "../../../redux/auth/operations";
import FavoriteCard from "./FavoriteCard/FavoriteCard";
import { useAuth } from "../../../hooks/useAuth";
import NoCollectionText from "../NoCollectionText/NoCollectionText";
import { ListFavorites } from "./Favorites.styled";

const Favorites = () => {
  const { favoritesNotices } = useAuth();
  const dispatch = useDispatch();
  const [favorites, setFavorites] = useState(favoritesNotices);

  useEffect(() => {
    setFavorites(favoritesNotices);
    dispatch(refreshUser());
  }, [dispatch, favoritesNotices]);

  const handleRemoveFavorites = (id) => {
    dispatch(RemoveFromFavorites(id));
  };

  return (
    <>
      {favorites?.length > 0 ? (
        <ListFavorites>
          {favorites?.map((notice) => (
            <FavoriteCard key={notice._id} notice={notice} onRemoveFavorites={handleRemoveFavorites} favorites={favorites}/>
          ))}
        </ListFavorites>
      ) : (
        <NoCollectionText />
      )}
    </>
  );
};

export default Favorites;
