import React from "react";
import sprite from "../../../../assets/icons/icons.svg";
import { useAuth } from "../../../../hooks/useAuth";
import {
  AvatarBox,
  UploadPhotoButton,
  ContainerBox,
} from "./AvatarData.styled";

const NoAvatar = ({ setShowEditForm }) => {
  const { user } = useAuth();

  return (
    <ContainerBox>
      <AvatarBox>
        {user?.avatar ? (
          <img src={user.avatar} alt={`Avatar of ${user.name}`} />
        ) : (
          <svg width={40} height={40}>
            <use xlinkHref={`${sprite}#icon-user`}></use>
          </svg>
        )}
      </AvatarBox>
      <UploadPhotoButton type="button" onClick={() => setShowEditForm(true)}>
        Upload photo
      </UploadPhotoButton>
    </ContainerBox>
  );
};

export default NoAvatar;
