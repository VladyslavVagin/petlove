// @ts-nocheck
import styled from "styled-components";

export const BurgerBtnContainer = styled.div`
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  width: 36px;
  height: 32px;

  svg {
    stroke: ${({ ishomepage }) => ishomepage === "true" ? "var(--white-color)" : "var(--dark-color)"};
  }
`;
