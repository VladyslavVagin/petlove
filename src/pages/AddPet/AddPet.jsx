import React from "react";
import { HomePageSection } from "../Home/HomePage.styled";
import ImageDog from "../../components/ForAddPetPage/ImageDog/ImageDog";
import Title from "../../components/ForAddPetPage/Title/Title";
import { ContainerCreation } from "./AddPet.styled";
import CreationForm from "../../components/ForAddPetPage/CreationForm/CreationForm";

const AddPet = () => {
  return (
    <HomePageSection>
      <ImageDog />
      <ContainerCreation>
        <Title />
        <CreationForm />
      </ContainerCreation>
    </HomePageSection>
  );
};

export default AddPet;
