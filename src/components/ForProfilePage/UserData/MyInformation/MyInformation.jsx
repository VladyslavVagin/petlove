import React from "react";
import { useAuth } from "../../../../hooks/useAuth";
import { MyInfoContainer } from "./MyInformation.styled";

const MyInformation = () => {
  const { user } = useAuth();

  return (
    <MyInfoContainer>
      <h1>My information</h1>
      <ul>
        <li  style={{borderColor: user.name && "var(--accent-color)"}}>
          <p>{user?.name}</p>
        </li>
        <li style={{borderColor: user.email && "var(--accent-color)"}}>
          <p>{user?.email}</p>
        </li>
        <li style={{borderColor: user.phone &&  "var(--accent-color)"}}>
          <p>{user?.phone || "+38"}</p>
        </li>
      </ul>
    </MyInfoContainer>
  );
};

export default MyInformation;
