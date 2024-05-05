import React from "react";
import { useAuth } from "../../hooks/useAuth";
import sprite from "../../assets/icons/icons.svg";
import { UserLinkBtn } from "./UserProfile.styled";

const UserProfileBtn = () => {
  const { user } = useAuth();

  return (
    <UserLinkBtn to={"/profile"}>
      {user?.avatar ? (
        <img src={user.avatar} alt={`Avatar of ${user.name}`} />
      ) : (
        <svg width={20} height={20}>
          <use xlinkHref={`${sprite}#icon-user`}></use>
        </svg>
      )}
    </UserLinkBtn>
  );
};

export default UserProfileBtn;
