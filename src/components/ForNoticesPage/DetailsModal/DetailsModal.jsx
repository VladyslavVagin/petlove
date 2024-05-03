// @ts-nocheck
import React from "react";
import ModalGeneral from "../../ModalGeneral/ModalGeneral";
import { ContainerModal, ImgBox } from "./DetailsModal.styled";

const DetailsModal = ({ setShowDetails, notice }) => {
  const {
    imgURL,
    name,
    title,
    birthday,
    sex,
    species,
    popularity,
    comment,
    category,
  } = notice;

  return (
    <ModalGeneral fn={setShowDetails}>
      <ContainerModal>
        <ImgBox>
          <img src={imgURL} alt={`Animal ${title}, ${sex}`} />
          <span>{category}</span>
        </ImgBox>
      </ContainerModal>
    </ModalGeneral>
  );
};

export default DetailsModal;
