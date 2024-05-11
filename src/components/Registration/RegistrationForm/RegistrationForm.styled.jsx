import styled from "styled-components";
import { Field, ErrorMessage, Form } from "formik";

export const FormContainer = styled.div`
  margin-top: 10px;
  padding: 20px;
  background-color: var(--white-color);
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    margin-top: 16px;
    border-radius: 60px;
    padding: 27px 140px;
  }
`;

export const FormTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 12px;
  color: var(--dark-color);
  margin-bottom: 20px;

  h1 {
    font-size: 28px;
    letter-spacing: -0.04em;
    font-weight: 700;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
  }

  @media screen and (min-width: 768px) {
    row-gap: 16px;
    margin-bottom: 32px;

    h1 {
      font-size: 54px;
    }

    p {
      font-size: 18px;
      line-height: 1.22;
    }
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;

  label {
    width: 100%;
    position: relative;
  }

  @media screen and (min-width: 768px) {
    row-gap: 16px;
  }
`;

export const IconCheck = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;

  svg {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
    top: 14px;
    right: 16px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const IconCheckPassword = styled.span`
  position: absolute;
  top: 12px;
  right: 44px;

  svg {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
    top: 14px;
    right: 54px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const ShowPasswordBtn = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 6px;
  right: 12px;

  svg {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
    width: 36px;
    height: 36px;
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

export const StyledField = styled(Field)`
  font-family: "Manrope", sans-serif;
  width: 100%;
  height: 42px;
  padding: 12px;
  border: 1px solid var(--link-gray);
  border-radius: 30px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: var(--text-input);

  &::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;
    color: var(--placeholder-color);
  }

  @media screen and (min-width: 768px) {
    height: 52px;
    padding: 16px;
    font-size: 16px;

    &::placeholder {
      font-size: 16px;
    }
  }
`;
export const StyledErrorMessage = styled(ErrorMessage)`
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
`;

export const PasswordSecure = styled.p`
  color: var(--success-color);
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.03em;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.17;
  }
`;

export const SubmitBtn = styled.button`
  font-family: "Manrope", sans-serif;
  width: 100%;
  height: 42px;
  background-color: var(--accent-color);
  border-radius: 30px;
  border: none;
  outline: none;
  text-transform: uppercase;
  color: var(--white-color);
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
  transition: var(--hover-general);

  &:hover {
    background-color: var(--hover-color);
    color: var(--accent-color);
  }

  @media screen  and ( min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    margin-top: 24px;
  }
`;

export const TextHaveAccount = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.03em;
  color: var(--placeholder-color);

  a {
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.43;
  }
`;
