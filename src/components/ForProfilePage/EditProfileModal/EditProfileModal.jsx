// @ts-nocheck
import React, { useState } from "react";
import ModalGeneral from "../../ModalGeneral/ModalGeneral";
import sprite from "../../../assets/icons/icons.svg";
import { AvatarBox } from "../UserData/AvatarData/AvatarData.styled";
import { EditModalContainer } from "./EditProfileModal.styled";
import FormEditUser from "./FormEditUser/FormEditUser";

const EditProfileModal = ({ setShowEditForm }) => {
  const [imageURL, setImageURL] = useState("");

  return (
    <ModalGeneral fn={setShowEditForm}>
      <EditModalContainer>
        <h1>Edit information</h1>
        <AvatarBox>
          {imageURL !== "" ? (<img src={imageURL} alt="user's avatar"/>) : (<svg width={40} height={40}>
            <use xlinkHref={`${sprite}#icon-user`}></use>
          </svg>)}
        </AvatarBox>
        <FormEditUser setImageURL={setImageURL}/>
      </EditModalContainer>
    </ModalGeneral>
  );
};

export default EditProfileModal;
