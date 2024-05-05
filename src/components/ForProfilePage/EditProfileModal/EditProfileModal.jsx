// @ts-nocheck
import React, { useState, useEffect } from "react";
import ModalGeneral from "../../ModalGeneral/ModalGeneral";
import { useAuth } from "../../../hooks/useAuth";
import sprite from "../../../assets/icons/icons.svg";
import { AvatarBox } from "../UserData/AvatarData/AvatarData.styled";
import { EditModalContainer } from "./EditProfileModal.styled";
import FormEditUser from "./FormEditUser/FormEditUser";

const EditProfileModal = ({ setShowEditForm, showEditForm }) => {
  const { user } = useAuth();
  const [imageURL, setImageURL] = useState(user?.avatar || "");

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        showEditForm && setShowEditForm(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [setShowEditForm, showEditForm]);

  useEffect(() => {
    if (showEditForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showEditForm]);

  return (
    <ModalGeneral fn={setShowEditForm}>
      <EditModalContainer>
        <h1>Edit information</h1>
        <AvatarBox>
          {imageURL !== "" ? (<img src={imageURL} alt="user's avatar"/>) : (<svg width={40} height={40}>
            <use xlinkHref={`${sprite}#icon-user`}></use>
          </svg>)}
        </AvatarBox>
        <FormEditUser setImageURL={setImageURL} setShowEditForm={setShowEditForm}/>
      </EditModalContainer>
    </ModalGeneral>
  );
};

export default EditProfileModal;
