import React from "react";
import RegistrationImage from "../../components/Registration/RegistrationImage/RegistrationImage";
import RegistrationForm from "../../components/Registration/RegistrationForm/RegistrationForm";
import { HomePageSection } from "../Home/HomePage.styled";

const Register = () => {
  return (
    <HomePageSection>
      <RegistrationImage />
      <RegistrationForm />
    </HomePageSection>
  );
};

export default Register;
