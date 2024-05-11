// @ts-nocheck
import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/operations";
import { LogoutButton } from "./LogoutHeader.styled";

const LogoutHeader = () => {
  const dispatch = useDispatch();

  return (
    <LogoutButton type="button" onClick={() => dispatch(logOut())}>
      log out
    </LogoutButton>
  );
};

export default LogoutHeader;
