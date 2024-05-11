import React from "react";
import LoginImage from "../../components/SignIn/LoginImage/LoginImage";
import LoginForm from "../../components/SignIn/LoginForm/LoginForm";
import { HomePageSection } from "../Home/HomePage.styled";

const Login = () => {
  return (
    <HomePageSection>
      <LoginImage />
      <LoginForm />
    </HomePageSection>
  );
};

export default Login;
