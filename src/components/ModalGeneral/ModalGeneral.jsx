// @ts-nocheck
import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalContainer } from "./ModalGeneral.styled";

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
        {children}
      </ModalContainer>
    </Backdrop>,
    modalRoot
  )}
</>;
};

export default Modal;