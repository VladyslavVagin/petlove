// @ts-nocheck
import React, { useEffect } from "react";
import ModalGeneral from "../../ModalGeneral/ModalGeneral";
import Rating from "./Rating/Rating";
import Info from "./Info/Info";
import Buttons from "./Buttons/Buttons";
import { ContainerModal, ImgBox } from "./DetailsModal.styled";

const DetailsModal = ({ setShowDetails, notice, showDetails, isFavorite, setIsFavorite }) => {
  const { imgURL, title, popularity, comment, category, _id } = notice;

  useEffect(() => {
    const handleKeyPress = (e) => {
        if (e.key === "Escape") {
          showDetails && setShowDetails(false);
        }
      };
  
      document.addEventListener("keydown", handleKeyPress);
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
  }, [setShowDetails, showDetails])

  useEffect(() => {
    if (showDetails) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showDetails]);

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
        <Buttons isFavorite={isFavorite} id={_id} setIsFavorite={setIsFavorite}/>
      </ContainerModal>
    </ModalGeneral>
  );
};

export default DetailsModal;
