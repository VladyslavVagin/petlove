import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonsAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const LoginBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white-color);
  background-color: var(--accent-color);
  border-radius: 30px;
  border: 1px solid var(--white-color);
  width: 178px;
  height: 42px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.03em;
  transition: var(--hover-general);

  &:hover {
    background-color: var(--hover-color);
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    width: 119px;
    height: 50px;
  }
`;

export const RegisterBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  background-color: var(--accent-light);
  border-radius: 30px;
  width: 178px;
  height: 42px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.03em;
  transition: var(--hover-general);

  &:hover {
    background-color: var(--hover-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    width: 149px;
    height: 50px;
  }
`;
