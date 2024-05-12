import React from "react";
import LoginImage from "../../components/SignIn/LoginImage/LoginImage";
import LoginForm from "../../components/SignIn/LoginForm/LoginForm";
import { HomePageSection } from "../Home/HomePage.styled";
import { DesktopBox } from "../../components/Common/DesktopBox/DesktopBox";

const Login = () => {
  return (
    <HomePageSection>
      <DesktopBox>
        <LoginImage />
        <LoginForm />
      </DesktopBox>
    </HomePageSection>
  );
};

export default Login;
