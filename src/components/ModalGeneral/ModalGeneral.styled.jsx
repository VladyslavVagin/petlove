import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  background: rgba(38, 38, 38, 0.3);
`;

export const ModalContainer = styled.div`
  background-color: var(--white-color);
  border-radius: 30px;
  min-height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 20px;
`;