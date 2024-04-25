import React from "react";
import LoginImage from "../../components/SignIn/LoginImage/LoginImage";
import LoginForm from "../../components/SignIn/LoginForm/LoginForm";
import { LoginSection } from "./Login.styled";

const Login = () => {
  return (
    <LoginSection>
      <LoginImage />
      <LoginForm/>
    </LoginSection>
  );
};

export default Login;
