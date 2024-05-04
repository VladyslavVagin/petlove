// @ts-nocheck
import React from "react";
import ModalGeneral from "../../ModalGeneral/ModalGeneral";
import Rating from "./Rating/Rating";
import Info from "./Info/Info";
import Buttons from "./Buttons/Buttons";
import { ContainerModal, ImgBox } from "./DetailsModal.styled";

const DetailsModal = ({ setShowDetails, notice }) => {
  const { imgURL, title, popularity, comment, category } = notice;

  return (
    <ModalGeneral fn={setShowDetails}>
      <ContainerModal>
        <ImgBox>
          <img src={imgURL} alt={`Animal ${title}`} />
          <span>{category}</span>
        </ImgBox>
        <h2>{title}</h2>
        <Rating popularity={popularity} />
        <Info notice={notice} />
        <p>{comment}</p>
        <Buttons/>
      </ContainerModal>
    </ModalGeneral>
  );
};

export default DetailsModal;
