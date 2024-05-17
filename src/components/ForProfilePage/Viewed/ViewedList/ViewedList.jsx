import React, { useState } from 'react'
import { useAuth } from "../../../../hooks/useAuth";
import Card from "../../../ForNoticesPage/Card/Card";
import { ListFavorites } from "../../Favorites/Favorites.styled";


const ViewedList = () => {
    const { viewedNotices } = useAuth();
    const [, setShowFirstNotification] = useState(false);

  return (
    <ListFavorites>
        {viewedNotices.map(notice => (<Card key={notice._id} notice={notice} setShowAttention={null} setShowFirstNotification={setShowFirstNotification}/>))}
    </ListFavorites>
  )
}

export default ViewedList