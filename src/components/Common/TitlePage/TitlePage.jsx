import styled from "styled-components";

export const TitleOfPage = styled.h1`
  font-weight: 700;
  font-size: 28px;
  letter-spacing: -0.03em;
  color: var(--dark-color);
  animation: appearRight 1000ms ease 1;

  @media screen and (min-width: 768px) {
    font-size: 54px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 32px;
  }
`;
