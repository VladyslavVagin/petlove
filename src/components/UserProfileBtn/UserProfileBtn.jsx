// @ts-nocheck
import React from "react";
import { useMediaQuery } from "react-responsive";
import { useAuth } from "../../hooks/useAuth";
import sprite from "../../assets/icons/icons.svg";
import { UserLinkBtn, UserName } from "./UserProfile.styled";

const UserProfileBtn = ({isHomepage}) => {
  const tablet = useMediaQuery({ minWidth: 768 });
  const { user } = useAuth();

  return (
    <>
      <UserLinkBtn to={"/profile"}>
        {user?.avatar ? (
          <img src={user.avatar} alt={`Avatar of ${user.name}`} />
        ) : (
          <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-user`}></use>
          </svg>
        )}
      </UserLinkBtn>
      {tablet && (<UserName ishomepage={isHomepage.toString()}>{user.name}</UserName>)}
    </>
  );
};

export default UserProfileBtn;
