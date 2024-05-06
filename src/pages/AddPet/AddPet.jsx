import React from "react";
import { HomePageSection } from "../Home/HomePage.styled";
import ImageDog from "../../components/ForAddPetPage/ImageDog/ImageDog";
import Title from "../../components/ForAddPetPage/Title/Title";
import { ContainerCreation } from "./AddPet.styled";

const AddPet = () => {
  return (
    <HomePageSection>
      <ImageDog />
      <ContainerCreation>
        <Title />
      </ContainerCreation>
    </HomePageSection>
  );
};

export default AddPet;
