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

  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--accent-color);
    margin: 20px 0;
    display: inline-block;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--dark-light);
  }

  @media screen and (min-width: 768px) {
    max-width: 346px;
    width: 346px;
    margin: 20px auto;

    span {
      font-size: 24px;
      line-height: 1.17;
    }
  }
`;

export const BtnsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    margin-top: 28px;
`

export const ToLogin = styled(Link)`
  outline: none;
  border: none;
  border-radius: 30px;
  width: 135px;
  height: 42px;
  font-size: 14px;
  line-height: 1.29;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-color);
  color: var(--white-color);
  transition: var(--hover-general);

  &:hover {
    background-color: var(--hover-color);
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 48px;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const ToRegistration = styled(Link)`
  outline: none;
  border: none;
  border-radius: 30px;
  font-size: 14px;
  line-height: 1.29;
  font-weight: 700;
  width: 135px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-light);
  color: var(--accent-color);
  transition: var(--hover-general);

  &:hover {
    background-color: var(--hover-color);
  }

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 48px;
    font-size: 16px;
    line-height: 1.25;
  }
`;

