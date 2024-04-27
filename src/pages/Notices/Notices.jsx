// @ts-nocheck
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchBarNotices from "../../components/ForNoticesPage/SearchBarNotices/SearchBarNotices";
import { fetchCategories, fetchGenders } from "../../redux/notices/operations";
import { HomePageSection } from "../Home/HomePage.styled";

const Notices = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGenders());
  }, [dispatch]);

  return (
    <HomePageSection>
      <h1>Find your favorite pet</h1>
      <SearchBarNotices />
    </HomePageSection>
  );
};

export default Notices;
