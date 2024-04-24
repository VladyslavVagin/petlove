// @ts-nocheck
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import sprite from "../../../assets/icons/icons.svg";
import {
  FormContainer,
  FormTitleBox,
  StyledField,
  StyledForm,
  StyledErrorMessage,
  SubmitBtn,
  TextHaveAccount,
  IconCheck,
  PasswordSecure,
  IconCheckPassword,
  ShowPasswordBtn,
} from "./RegistrationForm.styled";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .matches(
      /^[\w-]+(.[\w-]+)*@([\w-]+.)+[a-zA-Z]{2,7}$/,
      "Enter a valid Email"
    )
    .required(),
  password: yup.string().min(7).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  return (
    <FormContainer>
      <FormTitleBox>
        <h1>Registration</h1>
        <p>Thank you for your interest in our platform.</p>
      </FormTitleBox>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(dataForm) => console.log(dataForm)}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <label htmlFor="name">
              <StyledField
                type="text"
                name="name"
                placeholder="Name"
                required
                aria-label="Input for typing your name"
                style={{
                  borderColor:
                    errors.name && touched.name
                      ? "red"
                      : !errors.name && touched.name
                      ? "var(--success-color)"
                      : "var(--link-gray)",
                }}
              />
              {errors.name && touched.name && (
                <IconCheck>
                  <svg width={18} height={18}>
                    <use xlinkHref={`${sprite}#icon-x-red`}></use>
                  </svg>
                </IconCheck>
              )}
              {!errors.name && touched.name && (
                <IconCheck>
                  <svg width={18} height={18}>
                    <use xlinkHref={`${sprite}#icon-check`}></use>
                  </svg>
                </IconCheck>
              )}

              <StyledErrorMessage name="name" component="span" />
            </label>
            <label htmlFor="email">
              <StyledField
                type="email"
                name="email"
                placeholder="Email"
                required
                aria-label="Input for typing your email"
                style={{
                  borderColor:
                    errors.email && touched.email
                      ? "red"
                      : !errors.email && touched.email
                      ? "var(--success-color)"
                      : "var(--link-gray)",
                }}
              />
              {errors.email && touched.email && (
                <IconCheck>
                  <svg width={18} height={18}>
                    <use xlinkHref={`${sprite}#icon-x-red`}></use>
                  </svg>
                </IconCheck>
              )}
              {!errors.email && touched.email && (
                <IconCheck>
                  <svg width={18} height={18}>
                    <use xlinkHref={`${sprite}#icon-check`}></use>
                  </svg>
                </IconCheck>
              )}
              <StyledErrorMessage name="email" component="span" />
            </label>
            <label htmlFor="password">
              <StyledField
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
                aria-label="Input for typing your password"
                style={{
                  borderColor:
                    errors.password && touched.password
                      ? "red"
                      : !errors.password && touched.password
                      ? "var(--success-color)"
                      : "var(--link-gray)",
                }}
              />
              <ShowPasswordBtn type="button" onClick={handleShowPassword}>
                <svg width={18} height={18}>
                  <use
                    xlinkHref={
                      showPassword
                        ? `${sprite}#icon-eye`
                        : `${sprite}#icon-eye-off`
                    }
                  ></use>
                </svg>
              </ShowPasswordBtn>
              {errors.password && touched.password && (
                <IconCheckPassword>
                  <svg width={18} height={18}>
                    <use xlinkHref={`${sprite}#icon-x-red`}></use>
                  </svg>
                </IconCheckPassword>
              )}
              {!errors.password && touched.password && (
                <IconCheckPassword>
                  <svg width={18} height={18}>
                    <use xlinkHref={`${sprite}#icon-check`}></use>
                  </svg>
                </IconCheckPassword>
              )}
              <StyledErrorMessage name="password" component="span" />
              {!errors.password && touched.password && (
                <PasswordSecure>Password is secure</PasswordSecure>
              )}
            </label>
            <label htmlFor="confirmPassword">
              <StyledField
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                required
                aria-label="Input for confirm your password"
                style={{
                  borderColor:
                    errors.confirmPassword && touched.confirmPassword
                      ? "red"
                      : !errors.confirmPassword && touched.confirmPassword
                      ? "var(--success-color)"
                      : "var(--link-gray)",
                }}
              />
              <ShowPasswordBtn
                type="button"
                onClick={handleShowConfirmPassword}
              >
                <svg width={18} height={18}>
                  <use
                    xlinkHref={
                      showConfirmPassword
                        ? `${sprite}#icon-eye`
                        : `${sprite}#icon-eye-off`
                    }
                  ></use>
                </svg>
              </ShowPasswordBtn>
              {errors.confirmPassword && touched.confirmPassword && (
                <IconCheckPassword>
                  <svg width={18} height={18}>
                    <use xlinkHref={`${sprite}#icon-x-red`}></use>
                  </svg>
                </IconCheckPassword>
              )}
              {!errors.confirmPassword && touched.confirmPassword && (
                <IconCheckPassword>
                  <svg width={18} height={18}>
                    <use xlinkHref={`${sprite}#icon-check`}></use>
                  </svg>
                </IconCheckPassword>
              )}
              <StyledErrorMessage name="confirmPassword" component="span" />
            </label>
            <SubmitBtn type="submit">Registration</SubmitBtn>
            <TextHaveAccount>
              Already have an account?<Link to="/login">Login</Link>
            </TextHaveAccount>
          </StyledForm>
        )}
      </Formik>
    </FormContainer>
  );
};

export default RegistrationForm;
