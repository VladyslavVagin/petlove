import React from "react";
import RegistrationImage from "../../components/Registration/RegistrationImage/RegistrationImage";
import RegistrationForm from "../../components/Registration/RegistrationForm/RegistrationForm";
import { HomePageSection } from "../Home/HomePage.styled";
import { DesktopBox } from "../../components/Common/DesktopBox/DesktopBox";

const Register = () => {
  return (
    <HomePageSection>
      <DesktopBox>
        <RegistrationImage />
        <RegistrationForm />
      </DesktopBox>
    </HomePageSection>
  );
};

export default Register;
