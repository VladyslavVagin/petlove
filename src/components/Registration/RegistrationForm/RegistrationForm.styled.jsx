import styled from "styled-components";
import { Field, ErrorMessage, Form } from "formik";

export const FormContainer = styled.div`
  margin-top: 10px;
  padding: 20px;
  background-color: var(--white-color);
  border-radius: 30px;
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
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;

  label {
    width: 100%;
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
`;
export const StyledErrorMessage = styled(ErrorMessage)`
  color: var(--error-color);
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  text-transform: capitalize;
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
`;
