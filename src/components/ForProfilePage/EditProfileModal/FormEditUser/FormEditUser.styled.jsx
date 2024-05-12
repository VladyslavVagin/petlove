import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 295px;
  width: 100%;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
  }

  @media screen and (min-width: 768px) {
    max-width: 380px;
    row-gap: 14px;

    div {
      width: 380px;
      justify-content: flex-start;
      margin-bottom: 14px;
    }
  }
`;

export const Label = styled.label`
  position: relative;

  svg {
    position: absolute;
    top: 0px;
    right: 18px;
  }

  @media screen and (min-width: 768px) {
    svg {
      right: 0px;
    }
  }
`;

export const InputAvatarURL = styled.input`
  width: 161px;
  height: 42px;
  outline: none;
  border-radius: 30px;
  border: 1px solid var(--accent-color);
  padding: 12px;

  @media screen and (min-width: 768px) {
    width: 226px;
  }
`;

export const InputStandart = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border-radius: 30px;
  border: 1px solid var(--accent-color);
  padding: 12px;

  @media screen and (min-width: 768px) {
    height: 52px;
    padding: 16px;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const AddAvatarInput = styled.input`
  max-width: 126px;
  &::-webkit-file-upload-button {
    opacity: 0;
    visibility: hidden;
    width: 1px !important;
  }

  &::before {
    content: "Upload photo";
    width: 112px;
    height: 42px;
    border-radius: 30px;
    background-color: var(--accent-light);
    color: var(--dark-color);
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    cursor: pointer;
    padding-left: 14px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    top: -44%;
    left: 0%;
    transition: var(--hover-general);
  }

  &:hover {
    &::before {
      background-color: var(--hover-color);
    }
  }

  @media screen and (min-width: 768px) {
    &::before {
      width: 122px;
      font-size: 14px;
      line-height: 1.29;
      padding-left: 18px;
    }
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 42px;
  outline: none;
  border: none;
  border-radius: 30px;
  background-color: var(--accent-color);
  color: var(--white-color);
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  transition: var(--hover-general);

  &:hover {
    background-color: var(--hover-color);
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    height: 52px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
