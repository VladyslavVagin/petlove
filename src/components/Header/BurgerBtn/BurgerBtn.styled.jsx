// @ts-nocheck
import styled from "styled-components";

export const BurgerBtnContainer = styled.div`
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  width: 36px;
  height: 32px;
  z-index: 102;
`;

export const BtnIcon = styled.div`
  width: 24px;
  height: 3px;
  border-radius: 100px;
  background-color: ${({ isshowmobilemenu, ishomepage }) =>
    isshowmobilemenu === "true"
      ? "transparent"
      : ishomepage === "true"
      ? "var(--white-color)"
      : "var(--dark-color)"};
  transition: var(--hover-general);
  transform: ${({ isshowmobilemenu }) =>
    isshowmobilemenu === "true" && "translateX(-50px)"};

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 24px;
    height: 3px;
    border-radius: 100px;
    background-color: ${({ ishomepage }) =>
      ishomepage === "true" ? "var(--white-color)" : "var(--dark-color)"};
    transition: var(--hover-general);
  }

  &::before {
    transform: ${({ isshowmobilemenu }) =>
      isshowmobilemenu === "true"
        ? " rotate(45deg) translate(35px, -35px)"
        : "translateY(-6px)"};
    background-color: ${({ isshowmobilemenu }) =>
      isshowmobilemenu === "true" && "var(--dark-color)"};
  }

  &::after {
    transform: ${({ isshowmobilemenu }) =>
      isshowmobilemenu === "true"
        ? " rotate(-45deg) translate(35px, 35px)"
        : "translateY(6px)"};
    background-color: ${({ isshowmobilemenu }) =>
      isshowmobilemenu === "true" && "var(--dark-color)"};
  }
`;
