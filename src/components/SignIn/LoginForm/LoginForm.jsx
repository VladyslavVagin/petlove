// @ts-nocheck
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { schemaLogin } from "../../../schemas/schemas.ts";
import { logIn } from "../../../redux/auth/operations";
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
} from "../../Registration/RegistrationForm/RegistrationForm.styled";

const initialValues = {
    email: "",
    password: "",
  };

const LoginForm = () => {
    const [showPasswordLogin, setShowPasswordLogin] = useState(false);
    const dispatch = useDispatch();

    const handleShowPasswordLogin = () => setShowPasswordLogin((prev) => !prev);

    const submitLogin = (dataForm) => {
      const {email, password} = dataForm;
      dispatch(logIn({email, password}));
    }

  return (
    <FormContainer>
      <FormTitleBox>
        <h1>Log in</h1>
        <p>Welcome! Please, enter your credentials to login to the platform:</p>
      </FormTitleBox>
      <Formik
        initialValues={initialValues}
        validationSchema={schemaLogin}
        onSubmit={submitLogin}
      >
        {({ errors, touched }) => (
          <StyledForm>
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
                type={showPasswordLogin ? "text" : "password"}
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
              <ShowPasswordBtn type="button" onClick={handleShowPasswordLogin}>
                <svg width={18} height={18}>
                  <use
                    xlinkHref={
                      showPasswordLogin
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
            <SubmitBtn type="submit">log in</SubmitBtn>
            <TextHaveAccount>
              Don't have an account?<Link to="/register">Register</Link>
            </TextHaveAccount>
          </StyledForm>
        )}
      </Formik>
    </FormContainer>
  )
}

export default LoginForm