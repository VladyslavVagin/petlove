import React from 'react'
import sprite from "../../assets/icons/icons.svg"
import { UserLinkBtn } from './UserProfile.styled'

const UserProfileBtn = () => {
  return (
    <UserLinkBtn to={'/profile'}>
        <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-user`}></use>
        </svg>
    </UserLinkBtn>
  )
}

export default UserProfileBtn