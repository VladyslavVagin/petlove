// @ts-nocheck
import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalContainer } from "./Modal.styled";
import { useLocation } from "react-router-dom";

const Modal = ({children, setIsShowMobileMenu}) => {
  const [isHomepage, setIsHomepage] = useState(false);
  const modalRoot = document?.getElementById("modal-root");
  const backdropRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/home' || location.pathname === '/') {
      setIsHomepage(true);
    } else {
      setIsHomepage(false);
    }
  }, [location.pathname]);

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef?.current) {
      setIsShowMobileMenu && setIsShowMobileMenu(false);
    }
  };

  return  <>
  {createPortal(
    <Backdrop ref={backdropRef} onClick={handleBackdropClick}>
      <ModalContainer ishomepage={isHomepage.toString()}>
        {children}
      </ModalContainer>
    </Backdrop>,
    modalRoot
  )}
</>;
};

export default Modal;
