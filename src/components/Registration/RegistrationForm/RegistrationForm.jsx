import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import {
  FormContainer,
  FormTitleBox,
  StyledField,
  StyledForm,
  StyledErrorMessage,
  SubmitBtn,
  TextHaveAccount,
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
  confirmPassword: yup.string().min(7).required(),
});

const RegistrationForm = () => {
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
                  borderColor: errors.name && touched.name ? "red" : "var(--link-gray)",
                }}
              />
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
                  borderColor: errors.email && touched.email ? "red" : "var(--link-gray)",
                }}
              />
              <StyledErrorMessage name="email" component="span" />
            </label>
            <label htmlFor="password">
              <StyledField
                type="password"
                name="password"
                placeholder="Password"
                required
                aria-label="Input for typing your password"
                style={{
                  borderColor: errors.password && touched.password ? "red" : "var(--link-gray)",
                }}
              />
              <StyledErrorMessage name="password" component="span" />
            </label>
            <label htmlFor="confirmPassword">
              <StyledField
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                required
                aria-label="Input for confirm your password"
                style={{
                  borderColor: errors.confirmPassword && touched.confirmPassword ? "red" : "var(--link-gray)",
                }}
              />
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