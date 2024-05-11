import React from "react";
import { LinkBox, StyledLink } from "./GoHomeBtn.styled";

const GoHomeBtn = () => {
  return (
    <LinkBox>
      <StyledLink to={"/home"}>To home page</StyledLink>
    </LinkBox>
  );
};

export default GoHomeBtn;
