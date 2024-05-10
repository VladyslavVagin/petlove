import React from "react";
import { ListInfoPet } from "./PetInfo.styled";

const PetInfo = ({ pet }) => {
  const { name, birthday, sex, species } = pet;

  const date = new Date(birthday);
  const formattedDate = date
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, ".");

  const details = [
    { label: "Name", value: name },
    { label: "Birthday", value: formattedDate },
    { label: "Sex", value: sex },
    { label: "Species", value: species },
  ];

  return (
    <ListInfoPet>
      {details.map(({ label, value }) => (
        <li key={label}>
          <p>
            {label} <span>{value}</span>
          </p>
        </li>
      ))}
    </ListInfoPet>
  );
};

export default PetInfo;
