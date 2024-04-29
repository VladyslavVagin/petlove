import React from 'react'
import { CardContainer, ImageAnimalContainer } from './Card.styled';

const Card = ({notice}) => {
const {imgURL, name, title, birthday, sex, species, popularity, comment} = notice;
console.log(notice);

  return (
    <CardContainer>
        <ImageAnimalContainer>
            <img src={imgURL} alt={title} />
        </ImageAnimalContainer>
    </CardContainer>
  )
}

export default Card