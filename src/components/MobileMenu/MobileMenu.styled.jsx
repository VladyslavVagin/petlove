// @ts-nocheck
import styled from "styled-components";

export const MobileMenuContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  button {
     width: 36px;
     min-height: 36px;
     display: flex;
     align-items: center;
     justify-content: center;
     outline: none;
     border: none;
     background-color: transparent;
     margin-left: auto;
     margin-top: -10px;

    svg {
    stroke: ${({ ishomepage }) => ishomepage === "true" ? "var(--dark-color)" : "var(--white-color)"};
  }
  }
`;
