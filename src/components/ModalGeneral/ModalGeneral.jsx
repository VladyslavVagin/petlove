// @ts-nocheck
import React, { useRef } from "react";
import { createPortal } from "react-dom";
import sprite from "../../assets/icons/icons.svg";
import { Backdrop, ModalContainer, CloseBtn } from "./ModalGeneral.styled";

const Modal = ({children, fn}) => {
  const modalRoot = document?.getElementById("modal-root");
  const backdropRef = useRef(null);

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef?.current) {
      fn && fn(false);
    }
  };

  return  <>
  {createPortal(
    <Backdrop ref={backdropRef} onClick={handleBackdropClick}>
      <ModalContainer>
      <CloseBtn onClick={() => fn(false)} type="button">
        <svg width={24} height={24}>
          <use xlinkHref={`${sprite}#icon-close`}></use>
        </svg>
      </CloseBtn>
        {children}
      </ModalContainer>
    </Backdrop>,
    modalRoot
  )}
</>;
};

export default Modal;