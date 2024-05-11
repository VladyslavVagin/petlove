// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchBarNotices from "../../components/ForNoticesPage/SearchBarNotices/SearchBarNotices";
import {
  fetchCategories,
  fetchGenders,
  fetchSpecies,
  fetchCities,
} from "../../redux/notices/operations";
import AnimalsList from "../../components/ForNoticesPage/AnimalsList/AnimalsList";
import PaginationGeneral from "../../components/Pagination/Pagination";
import { useNotices } from "../../hooks/useNotices";
import { HomePageSection } from "../Home/HomePage.styled";
import { TitleOfPage } from "../../components/Common/TitlePage/TitlePage";

const Notices = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { totalPagesNotices } = useNotices();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGenders());
    dispatch(fetchSpecies());
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <HomePageSection>
      <TitleOfPage>Find your favorite pet</TitleOfPage>
      <SearchBarNotices
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <AnimalsList />
      <PaginationGeneral
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPagesNotices}
      />
    </HomePageSection>
  );
};

export default Notices;
