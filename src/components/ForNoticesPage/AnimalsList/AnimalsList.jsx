// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useNotices } from "../../../hooks/useNotices";
import { useAuth } from "../../../hooks/useAuth";
import Card from "../Card/Card";
import { ListOfNotices } from "./AnimalList.styled";
import Attention from "../Attention/Attention";
import FirstItemNotification from "../FirstItemNotification/FirstItemNotification";

const AnimalsList = () => {
  const { notices } = useNotices();
  const { isFavoriteFirst } = useAuth();
  const [showAttention, setShowAttention] = useState(false);
  const [showFirstNotification, setShowFirstNotification] = useState(false);

  useEffect(() => {
    if(isFavoriteFirst) {
      setShowFirstNotification(true);
    } else {
      setShowFirstNotification(false);
    }
  }, [isFavoriteFirst])


  return (
    <>
    {showFirstNotification && <FirstItemNotification setShowFirstNotification={setShowFirstNotification} showFirstNotification={showFirstNotification}/>}
    {showAttention && <Attention setShowAttention={setShowAttention} showAttention={showAttention}/>}
      <ListOfNotices>
        {notices?.map((notice) => (
          <Card
            notice={notice}
            key={notice?._id}
            setShowAttention={setShowAttention}
          />
        ))}
      </ListOfNotices>
    </>
  );
};

export default AnimalsList;
