import React from "react";
import sprite from "../../../assets/icons/icons.svg";
import { ContainerFlex, EditBtn, UserBox } from "./UserAndEditBtns.styled";

const UserAndEditBtns = ({setShowEditForm}) => {

  return (
    <ContainerFlex>
      <UserBox>
        <div>
          <p>User</p>
          <svg width={18} height={18}>
            <use xlinkHref={`${sprite}#icon-user`}></use>
          </svg>
        </div>
      </UserBox>
      <EditBtn type="button" onClick={() => setShowEditForm(true)}>
        <svg width={18} height={18}>
            <use xlinkHref={`${sprite}#icon-pencil`}></use>
        </svg>
      </EditBtn>
    </ContainerFlex>
  );
};

export default UserAndEditBtns;
