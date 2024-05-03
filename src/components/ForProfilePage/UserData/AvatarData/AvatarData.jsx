import React from "react";
import sprite from "../../../../assets/icons/icons.svg";
import {
  AvatarBox,
  UploadPhotoButton,
  ContainerBox,
} from "./AvatarData.styled";

const NoAvatar = ({ setShowEditForm }) => {
  return (
    <ContainerBox>
      <AvatarBox>
        <svg width={40} height={40}>
          <use xlinkHref={`${sprite}#icon-user`}></use>
        </svg>
      </AvatarBox>
      <UploadPhotoButton type="button" onClick={() => setShowEditForm(true)}>
        Upload photo
      </UploadPhotoButton>
    </ContainerBox>
  );
};

export default NoAvatar;
