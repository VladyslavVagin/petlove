// @ts-nocheck
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFriends } from "../../hooks/useFriends";
import { fetchFriends } from "../../redux/friends/operations";
import FriendsList from "../../components/FriendsList/FriendsList";
import { TitleOfPage } from "../../components/Common/TitlePage/TitlePage";
import LoaderMain, { LoaderNewsBox } from "../../components/Common/LoaderMain/LoaderMain"
import { HomePageSection } from "../Home/HomePage.styled";

const Friends = () => {
  const dispatch = useDispatch();
  const { isLoadFriends } = useFriends();

  useEffect(() => {
   dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <HomePageSection>
      <TitleOfPage>Our friends</TitleOfPage>
      {isLoadFriends ? (<LoaderNewsBox><LoaderMain/></LoaderNewsBox>) : <FriendsList />}
    </HomePageSection>
  );
};

export default Friends;
