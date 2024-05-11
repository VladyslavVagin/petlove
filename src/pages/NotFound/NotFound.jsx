import React from "react";
import Cat404 from "../../components/ForNotFound/Cat404/Cat404";
import { HomePageSection } from "../Home/HomePage.styled";
import { Container404, Text404 } from "./NotFound.styled";
import GoHomeBtn from "../../components/ForNotFound/GoHomeBtn/GoHomeBtn";

const NotFound = () => {
  return (
    <HomePageSection>
      <Container404>
        <Cat404 />
        <Text404>Ooops! This page not found :(</Text404>
        <GoHomeBtn/>
      </Container404>
    </HomePageSection>
  );
};

export default NotFound;
