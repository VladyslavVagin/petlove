// @ts-nocheck
import React from "react";
import { useNews } from "../../../hooks/useNews";
import NewsItem from "../NewsItem/NewsItem";
import PaginationGeneral from "../../Pagination/Pagination";
import { Text } from "../../ForProfilePage/NoCollectionText/NoCollectionText.styled";
import { List } from "./NewsList.styled";

const NewsList = ({ setCurrentPage, currentPage }) => {
  const { news, totalPages } = useNews();

  return (
    <>
    {news?.length === 0 && <Text>Sorry, <b>no find</b> any news with these search parameter</Text>}
      <List>
        {news.map((item) => (
          <NewsItem key={item._id} item={item} />
        ))}
      </List>
      <PaginationGeneral
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default NewsList;
