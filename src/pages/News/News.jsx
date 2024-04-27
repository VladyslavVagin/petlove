// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchNews } from '../../redux/news/operations';
import SearchBar from '../../components/ForNewsPage/SearchBar/SearchBar';
import NewsList from '../../components/ForNewsPage/NewsList/NewsList';
import { HomePageSection } from '../Home/HomePage.styled';

const News = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if(!searchValue || searchValue === "") {
      dispatch(fetchNews({ page: currentPage, searchQuery: null }));
    } else {
      dispatch(fetchNews({ page: currentPage, searchQuery: searchValue }));
    }
  }, [currentPage, dispatch, searchValue]);


  return (
    <HomePageSection>
      <h1>News</h1>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} setCurrentPage={setCurrentPage}/>
      <NewsList setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </HomePageSection>
  )
}

export default News