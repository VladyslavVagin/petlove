import styled from "styled-components";
import { Link } from "react-router-dom";

export const ImgContainer = styled.div`
  width: calc(100dvw - 40px);
  max-width: 295px;
  text-align: center;

  div {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: var(--accent-light);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    img {
      width: 44px;
      height: 44px;
    }
  }

  p {
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--accent-color);
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    max-width: 300px;
    width: 300px;
    margin: 25px auto;

    p {
      font-size: 24px;
      line-height: 1.17;
    }
  }
`;

export const TextCongrats = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--dark-light);
  margin-top: 20px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    max-width: 300px;
    margin: 14px auto 28px auto;
  }
`;

export const ButtonLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 42px;
  border-radius: 30px;
  background-color: var(--accent-color);
  color: var(--white-color);
  transition: var(--hover-general);

  &:hover {
    background-color: var(--hover-color);
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 250px;
    height: 48px;
    font-size: 16px;
    line-height: 1.25;
    margin: 0 auto;
  }
`;
