// @ts-nocheck
import React, { useEffect } from "react";
import imgDogModal from "../../../assets/images/modals/dogmodal.webp";
import ModalGeneral from "../../ModalGeneral/ModalGeneral";
import {
  BtnsBox,
  ImgContainer,
  ToLogin,
  ToRegistration,
} from "./Attention.styled";

const Attention = ({ setShowAttention, showAttention }) => {

  useEffect(() => {
    const handleKeyPress = (e) => {
        if (e.key === "Escape") {
          showAttention && setShowAttention(false);
        }
      };
  
      document.addEventListener("keydown", handleKeyPress);
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
  }, [setShowAttention, showAttention])

  useEffect(() => {
    if (showAttention) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAttention]);

  return (
    <ModalGeneral fn={setShowAttention}>
      <ImgContainer>
        <div>
          <img src={imgDogModal} alt="Animated dog" />
        </div>
        <span>Attention</span>
        <p>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </p>
      </ImgContainer>
      <BtnsBox>
        <ToLogin to={"/login"} onClick={() => setShowAttention(false)}>Log in</ToLogin>
        <ToRegistration to={"/register"} onClick={() => setShowAttention(false)}>Registration</ToRegistration>
      </BtnsBox>
    </ModalGeneral>
  );
};

export default Attention;
