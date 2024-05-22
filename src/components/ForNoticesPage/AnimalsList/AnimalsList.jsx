// @ts-nocheck
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddToFavorites, RemoveFromFavorites } from "../../../redux/notices/operations";
import { useNotices } from "../../../hooks/useNotices";
import Card from "../Card/Card";
import { ListOfNotices } from "./AnimalList.styled";
import { Text } from "../../ForProfilePage/NoCollectionText/NoCollectionText.styled";
import Attention from "../Attention/Attention";
import FirstItemNotification from "../FirstItemNotification/FirstItemNotification";

const AnimalsList = () => {
  const { notices } = useNotices();
  const dispatch = useDispatch();
  const [showAttention, setShowAttention] = useState(false);
  const [showFirstNotification, setShowFirstNotification] = useState(false);


  const handleAddFavorites = (id) => {
    dispatch(AddToFavorites(id));
  };

  const handleRemoveFavorites = (id) => {
    dispatch(RemoveFromFavorites(id));
  };

  return (
    <>
      {showFirstNotification && (
        <FirstItemNotification
          setShowFirstNotification={setShowFirstNotification}
          showFirstNotification={showFirstNotification}
        />
      )}
      {showAttention && (
        <Attention
          setShowAttention={setShowAttention}
          showAttention={showAttention}
        />
      )}
      {notices?.length === 0 && <Text>Sorry, <b>no find</b> any notice for these search parameters!</Text>}
      <ListOfNotices>
        {notices?.map((notice) => (
          <Card
            notice={notice}
            key={notice?._id}
            setShowAttention={setShowAttention}
            setShowFirstNotification={setShowFirstNotification}
            onAddFavorites={handleAddFavorites}
            onRemoveFavorites={handleRemoveFavorites}
          />
        ))}
      </ListOfNotices>
    </>
  );
};

export default AnimalsList;
