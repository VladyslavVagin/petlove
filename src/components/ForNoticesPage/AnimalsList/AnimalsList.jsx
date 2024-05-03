// @ts-nocheck
import React, { useState } from "react";
import { useNotices } from "../../../hooks/useNotices";
import Card from "../Card/Card";
import { ListOfNotices } from "./AnimalList.styled";
import Attention from "../Attention/Attention";

const AnimalsList = () => {
  const { notices } = useNotices();
  const [showAttention, setShowAttention] = useState(false);

  return (
    <>
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
