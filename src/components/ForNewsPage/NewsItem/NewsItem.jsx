import React from "react";
import { formatDate } from "../../../functions/formatDate";
import { DateReadBox, ItemContainer } from "./NewsItem.styled";

const NewsItem = ({ item }) => {
  const { imgUrl, text, title, date, url } = item;
  const formattedDate = formatDate(date);

  return (
    <ItemContainer>
      <img src={imgUrl} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
      <DateReadBox>
        <span>{formattedDate}</span>
        <a href={url} target="_blank" rel="noreferrer">
          Read more
        </a>
      </DateReadBox>
    </ItemContainer>
  );
};

export default NewsItem;
