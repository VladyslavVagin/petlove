// @ts-nocheck
import React from "react";
import FavoriteCard from "./FavoriteCard/FavoriteCard";
import { useAuth } from "../../../hooks/useAuth";
import NoCollectionText from "../NoCollectionText/NoCollectionText";
import { ListFavorites } from "./Favorites.styled";

const Favorites = () => {
  const { favoritesNotices } = useAuth();
  console.log(favoritesNotices);

  return (
    <>
      {favoritesNotices?.length > 0 ? (
        <ListFavorites>
          {favoritesNotices?.map((notice) => (
            <FavoriteCard key={notice._id} notice={notice} />
          ))}
        </ListFavorites>
      ) : (
        <NoCollectionText />
      )}
    </>
  );
};

export default Favorites;
