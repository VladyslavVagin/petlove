import styled from "styled-components";
import { Link } from "react-router-dom";

export const InputPetImage = styled.input`
  max-width: 161px;
  width: 100%;
  height: 42px;
  outline: none;
  border-radius: 30px;
  border: 1px solid var(--link-gray);
  padding: 12px;
  transition: var(--hover-general);

  &::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: var(--placeholder-color);
  }

  &:focus-within,
  &:hover {
    border: 1px solid var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    max-width: 278px;
  }
`;

export const InputNormal = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border-radius: 30px;
  border: 1px solid var(--link-gray);
  padding: 12px;
  transition: var(--hover-general);

  &::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: var(--placeholder-color);
  }

  &:focus-within,
  &:hover {
    border: 1px solid var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    height: 52px;
    font-size: 16px;
    line-height: 1.25;

    &::placeholder {
    font-size: 16px;
    line-height: 1.25;
    }
  }
`;

export const InvisibleInput = styled.input`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
`;

export const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
  margin-top: 16px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-top: 12px;
    margin-bottom: 18px;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;

  @media screen and (min-width: 768px) {
    column-gap: 12px;
  }
`;

export const SubmitBtn = styled.button`
  border: none;
  outline: none;
  border-radius: 30px;
  background-color: var(--accent-color);
  color: var(--white-color);
  text-transform: capitalize;
  width: 100px;
  height: 42px;
  transition: var(--hover-general);
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;

  &:hover {
    background-color: var(--hover-color);
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 170px;
    height: 48px;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const BackBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 42px;
  border-radius: 30px;
  background-color: rgba(84, 173, 255, 0.1);
  color: var(--dark-color);
  text-transform: capitalize;
  width: 100px;
  height: 42px;
  transition: var(--hover-general);
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;

  &:hover {
    background-color: var(--hover-color);
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 170px;
    height: 48px;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const ButtonsBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 8px;
  margin-top: 31px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;

export const ErrorMsg = styled.p`
  color: var(--error-color);
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  text-transform: capitalize;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.17;
  }
`
export const InputBox = styled.div`
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`