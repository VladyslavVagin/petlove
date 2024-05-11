import React from 'react'
import { ContentBox, ImgBox, MessageContainer, NameBirthdayBox } from './Message.styled'

const Message = ({imgUrl, name, birthday, comment}) => {
  return (
    <MessageContainer>
        <ImgBox>
            <img src={imgUrl} alt="Decoration avatar of message" width={32} height={32}/>
        </ImgBox>
        <ContentBox>
            <NameBirthdayBox>
                <p>{name}</p>
                <p>Birthday: <span>{birthday}</span></p>
            </NameBirthdayBox>
            <p>{comment}</p>
        </ContentBox>
    </MessageContainer>
  )
}

export default Message