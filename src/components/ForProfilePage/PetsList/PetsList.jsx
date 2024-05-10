import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import PetItem from "./PetItem/PetItem";
import { ListOfPets } from "./PetsList.styled";

const PetsList = () => {
  const { pets } = useAuth();

  return (
    <ListOfPets>
      {pets.map((pet) => (
        <PetItem key={pet._id} pet={pet} />
      ))}
    </ListOfPets>
  );
};

export default PetsList;
