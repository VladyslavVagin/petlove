// @ts-nocheck
import React from "react";
import { useLocation } from "react-router-dom";
import { StyledLinkTo, NavContainer } from "./LinksCollections.styled";

const LinksCollections = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <StyledLinkTo
        to={"favorites"}
        style={
          location.pathname === "/profile"
            ? {
                backgroundColor: "var(--accent-color)",
                color: "var(--white-color)",
              }
            : {}
        }
      >
        My favorite pets
      </StyledLinkTo>
      <StyledLinkTo to={"viewed"}>Viewed</StyledLinkTo>
    </NavContainer>
  );
};

export default LinksCollections;
