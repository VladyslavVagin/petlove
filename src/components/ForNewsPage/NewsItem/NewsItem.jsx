import React from "react";
import { DateReadBox, ItemContainer } from "./NewsItem.styled";

const NewsItem = ({ item }) => {
 const {imgUrl, text, title, date, url } = item;
 const dateStr = date.split('T')[0];
 const dateObj = new Date(dateStr);
 const formattedDate = `${dateObj.getDate().toString().padStart(2, '0')}/${(dateObj.getMonth() + 1).toString().padStart(2, '0')}/${dateObj.getFullYear()}`;

  return <ItemContainer>
    <img src={imgUrl} alt={title} />
    <h2>{title}</h2>
    <p>{text}</p>
    <DateReadBox>
        <span>{formattedDate}</span>
        <a href={url} target="_blank" rel="noreferrer">Read more</a>
    </DateReadBox>
  </ItemContainer>;
};

export default NewsItem;
