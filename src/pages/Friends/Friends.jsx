// @ts-nocheck
import React, { useEffect } from "react";
import { fetchFriends } from "../../redux/friends/operations";
import { useDispatch } from "react-redux";
import FriendsList from "../../components/FriendsList/FriendsList";
import { HomePageSection } from "../Home/HomePage.styled";
import { TitleOfPage } from "../../components/Common/TitlePage/TitlePage";

const Friends = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getFriends = async () => await dispatch(fetchFriends());
    getFriends();
    return () => getFriends();
  }, [dispatch])

  return (
    <HomePageSection>
      <TitleOfPage>Our friends</TitleOfPage>
      <FriendsList/>
    </HomePageSection>
  );
};

export default Friends;
