import React from 'react'
import sprite from "../../../assets/icons/icons.svg"
import { BtnLike, ButtonLearnMore, ButtonsCardBox, CardContainer, CommentText, ImageAnimalContainer, ListInfo, TitlePopularityBox } from './Card.styled';

const Card = ({notice}) => {
const {imgURL, name, title, birthday, sex, species, popularity, comment, category} = notice;
const date = new Date(birthday);
const formattedDate = date.toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
}).replace(/\//g, '.');

  return (
    <CardContainer>
        <ImageAnimalContainer>
            <img src={imgURL} alt={title} />
        </ImageAnimalContainer>
        <div>
          <TitlePopularityBox>
            <h2>{title}</h2>
            <span>
              <svg width={16} height={16}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg> {popularity}
            </span>
          </TitlePopularityBox>
          <ListInfo>
            <li>
              <p>Name <span>{name}</span></p>
            </li>
            <li>
              <p>Birthday <span>{formattedDate}</span></p>
            </li>
            <li>
              <p>Sex <span>{sex}</span></p>
            </li>
            <li>
              <p>Species <span>{species}</span></p>
            </li>
            <li>
              <p>Category <span>{category}</span></p>
            </li>
          </ListInfo>
          <CommentText>{comment}</CommentText>
        </div>
        <ButtonsCardBox>
          <ButtonLearnMore type='button'>Learn more</ButtonLearnMore>
          <BtnLike type='button'>
            <svg width={18} height={18}>
              <use xlinkHref={`${sprite}#icon-heart`}></use>
            </svg>
          </BtnLike>
        </ButtonsCardBox>
    </CardContainer>
  )
}

export default Card