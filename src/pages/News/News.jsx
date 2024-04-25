// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchNews } from '../../redux/news/operations';
import { HomePageSection } from '../Home/HomePage.styled';
import SearchBar from '../../components/ForNewsPage/SearchBar/SearchBar';

const News = () => {
  const dispatch = useDispatch();
  const [currentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchNews(currentPage));
  }, [currentPage, dispatch])


  return (
    <HomePageSection>
      <h1>News</h1>
      <SearchBar/>
    </HomePageSection>
  )
}

export default News