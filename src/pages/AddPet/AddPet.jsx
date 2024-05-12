import React from "react";
import { HomePageSection } from "../Home/HomePage.styled";
import ImageDog from "../../components/ForAddPetPage/ImageDog/ImageDog";
import Title from "../../components/ForAddPetPage/Title/Title";
import CreationForm from "../../components/ForAddPetPage/CreationForm/CreationForm";
import { DesktopBox } from "../../components/Common/DesktopBox/DesktopBox";
import { ContainerCreation } from "./AddPet.styled";

const AddPet = () => {
  return (
    <HomePageSection>
      <DesktopBox>
        <ImageDog />
        <ContainerCreation>
          <Title />
          <CreationForm />
        </ContainerCreation>
      </DesktopBox>
    </HomePageSection>
  );
};

export default AddPet;
