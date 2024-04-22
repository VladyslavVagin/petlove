// @ts-nocheck
import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
`;

export const ModalContainer = styled.div`
  background-color: ${({ ishomepage }) => ishomepage === "true" ? "var(--white-color)" : "var(--accent-color)"};
  max-width: 60%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 40px 20px;
  animation: appearModal 1000ms ease 1;

  @keyframes appearModal {
    0% {
      opacity: 0;
      right: -100%;
    }
    100% {
      opacity: 1;
      right: 0%;
    }
  }
`;