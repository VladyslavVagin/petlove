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
  max-width: 335px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 20px;

  @media screen and (min-width: 768px) {
    max-width: 473px;
  }
`;

export const CloseBtn = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: var(--hover-general);

  svg {
    stroke: var(--dark-color);
  }

  &:hover {
    transform: scale(1.2);
  }
`;