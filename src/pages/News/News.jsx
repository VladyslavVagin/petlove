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

  useEffect(() => {
    dispatch(fetchNews(currentPage));
  }, [currentPage, dispatch])


  return (
    <HomePageSection>
      <h1>News</h1>
      <SearchBar/>
      <NewsList setCurrentPage={setCurrentPage}/>
    </HomePageSection>
  )
}

export default News