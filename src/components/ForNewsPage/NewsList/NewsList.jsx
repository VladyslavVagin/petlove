// @ts-nocheck
import React from "react";
import { useNews } from "../../../hooks/useNews";
import NewsItem from "../NewsItem/NewsItem";
import PaginationGeneral from "../../Pagination/Pagination";
import { List } from "./NewsList.styled";

const NewsList = () => {
  const { news, totalPages } = useNews();

  return (
    <>
      <List>
        {news.map((item) => (
          <NewsItem key={item._id} item={item} />
        ))}
      </List>
      <PaginationGeneral totalPages={totalPages}/>
    </>
  );
};

export default NewsList;
