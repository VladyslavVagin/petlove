import React from "react";
import { useAuth } from "../../../../hooks/useAuth";
import { MyInfoContainer } from "./MyInformation.styled";

const MyInformation = () => {
  const { user } = useAuth();

  return (
    <MyInfoContainer>
      <h1>My information</h1>
      <ul>
        <li>
          <p>{user?.name}</p>
        </li>
        <li>
          <p>{user?.email}</p>
        </li>
        <li>
          <p>{user?.phone || "Phone number"}</p>
        </li>
      </ul>
    </MyInfoContainer>
  );
};

export default MyInformation;
