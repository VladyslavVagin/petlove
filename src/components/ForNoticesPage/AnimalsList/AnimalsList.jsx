// @ts-nocheck
import React, { useState } from "react";
import { useNotices } from "../../../hooks/useNotices";
import Card from "../Card/Card";
import { ListOfNotices } from "./AnimalList.styled";
import { Text } from "../../ForProfilePage/NoCollectionText/NoCollectionText.styled";
import Attention from "../Attention/Attention";
import FirstItemNotification from "../FirstItemNotification/FirstItemNotification";

const AnimalsList = () => {
  const { notices } = useNotices();
  const [showAttention, setShowAttention] = useState(false);
  const [showFirstNotification, setShowFirstNotification] = useState(false);

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
          />
        ))}
      </ListOfNotices>
    </>
  );
};

export default AnimalsList;
