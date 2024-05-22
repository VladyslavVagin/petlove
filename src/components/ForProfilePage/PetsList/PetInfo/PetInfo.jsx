import React from "react";
import { formatBirthday } from "../../../../functions/formatBirthday";
import { ListInfoPet } from "./PetInfo.styled";

const PetInfo = ({ pet }) => {
  const { name, birthday, sex, species } = pet;
  const formattedDate = formatBirthday(birthday);

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
