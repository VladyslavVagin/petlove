// @ts-nocheck
import React from "react";
import { useFriends } from "../../hooks/useFriends";
import FriendItem from "./FriendItem/FriendItem";
import { CardsListContainer } from "./FriendList.styled";

const FriendsList = () => {
  const { friends } = useFriends();

  return (
    <CardsListContainer>
      {friends.map((friend) => (
        <FriendItem key={friend._id} friend={friend} />
      ))}
    </CardsListContainer>
  );
};

export default FriendsList;
