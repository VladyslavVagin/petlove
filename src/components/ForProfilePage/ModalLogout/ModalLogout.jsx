// @ts-nocheck
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/operations"
import ModalGeneral from "../../ModalGeneral/ModalGeneral";
import sprite from "../../../assets/icons/icons.svg";
import imgModal from "../../../assets/images/modals/formodal.webp";
import { BtnsBox, CancelBtn, CloseBtn, ImgContainer, LogoutConfirmBtn } from "./ModalLogout.styled";

const ModalLogout = ({setShowLogout, showLogout}) => {
const dispatch = useDispatch();
const handleCloseModal = () => setShowLogout(false);
const handleLogout = () => dispatch(logOut());

useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        showLogout && setShowLogout(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [setShowLogout, showLogout]);

  useEffect(() => {
    if (showLogout) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLogout]);


  return (
    <ModalGeneral fn={setShowLogout}>
      <CloseBtn onClick={handleCloseModal} type="button">
        <svg width={24} height={24}>
          <use xlinkHref={`${sprite}#icon-close`}></use>
        </svg>
      </CloseBtn>
      <ImgContainer>
        <div>
          <img src={imgModal} alt="Animated white-orange cat" />
        </div>
        <p>Already leaving?</p>
      </ImgContainer>
      <BtnsBox>
        <LogoutConfirmBtn type="button" onClick={handleLogout}>Yes</LogoutConfirmBtn>
        <CancelBtn type="button" onClick={handleCloseModal}>Cancel</CancelBtn>
      </BtnsBox>
    </ModalGeneral>
  );
};

export default ModalLogout;
