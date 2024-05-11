import React from "react";
import { ButtonsAuthContainer, LoginBtn, RegisterBtn } from "../AuthNav.styled";

const AuthNavHeader = () => {
  return (
    <ButtonsAuthContainer>
      <LoginBtn to={"/login"}>
        log in
      </LoginBtn>
      <RegisterBtn to={"/register"}>
        registration
      </RegisterBtn>
    </ButtonsAuthContainer>
  );
};

export default AuthNavHeader;
