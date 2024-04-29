// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchBarNotices from "../../components/ForNoticesPage/SearchBarNotices/SearchBarNotices";
import { fetchCategories, fetchGenders, fetchSpecies, fetchCities } from "../../redux/notices/operations";
import AnimalsList from "../../components/ForNoticesPage/AnimalsList/AnimalsList";
import PaginationGeneral from "../../components/Pagination/Pagination"
import { useNotices } from "../../hooks/useNotices";
import { HomePageSection } from "../Home/HomePage.styled";

const Notices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {totalPagesNotices} = useNotices();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGenders());
    dispatch(fetchSpecies());
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <HomePageSection>
      <h1>Find your favorite pet</h1>
      <SearchBarNotices currentPage={currentPage}/>
      <AnimalsList/>
      <PaginationGeneral currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPagesNotices}/>
    </HomePageSection>
  );
};

export default Notices;
