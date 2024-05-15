// @ts-nocheck
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { schemaRegister } from "../../../schemas/schemas";
import { register } from "../../../redux/auth/operations";
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

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();

  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const handleShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  const submitRegistration = (dataForm) => {
    const { name, email, password } = dataForm;
    dispatch(register({name, email, password}));
  };

  return (
    <FormContainer>
      <FormTitleBox>
        <h1>Registration</h1>
        <p>Thank you for your interest in our platform.</p>
      </FormTitleBox>
      <Formik
        initialValues={initialValues}
        validationSchema={schemaRegister}
        onSubmit={submitRegistration}
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
                  <svg>
                    <use xlinkHref={`${sprite}#icon-x-red`}></use>
                  </svg>
                </IconCheck>
              )}
              {!errors.email && touched.email && (
                <IconCheck>
                  <svg>
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
                <svg>
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
                  <svg>
                    <use xlinkHref={`${sprite}#icon-x-red`}></use>
                  </svg>
                </IconCheckPassword>
              )}
              {!errors.password && touched.password && (
                <IconCheckPassword>
                  <svg>
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
                <svg>
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
                  <svg>
                    <use xlinkHref={`${sprite}#icon-x-red`}></use>
                  </svg>
                </IconCheckPassword>
              )}
              {!errors.confirmPassword && touched.confirmPassword && (
                <IconCheckPassword>
                  <svg>
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
