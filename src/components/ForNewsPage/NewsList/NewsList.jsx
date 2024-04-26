// @ts-nocheck
import React from "react";
import { useNews } from "../../../hooks/useNews";
import NewsItem from "../NewsItem/NewsItem";

const NewsList = () => {
const { news } = useNews();

  return <ul>
    {news.map(item => (<NewsItem key={item._id} item={item}/>))}
  </ul>;
};

export default NewsList;
