// @ts-nocheck
import styled from "styled-components";

export const MainHeader = styled.header`
  padding: 10px 20px 0 20px;
  max-width: 375px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 10px 32px 0 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:  ${({ ishomepage }) =>
    ishomepage === "true" ? "24px 20px 22px 20px" : "24px 0px 22px 0px"};
  background-color: ${({ ishomepage }) =>
    ishomepage === "true" ? "var(--accent-color)" : "transparent"};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  @media screen and (min-width: 768px) {
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    padding: ${({ ishomepage }) =>
    ishomepage === "true" ? "27px 32px 62px 32px" : "27px 0px 62px 0px"};
  }

  @media screen and (min-width: 1280px) {
    padding: ${({ ishomepage }) =>
    ishomepage === "true" ? "27px 64px 32px 64px" : "27px 32px 32px 32px"};
  }
`;

export const BlockBtns = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;
