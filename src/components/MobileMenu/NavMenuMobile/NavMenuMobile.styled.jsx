// @ts-nocheck
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  width: 100%;
`;

export const StyledNavLink = styled(NavLink)`
  width: 119px;
  height: 48px;
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.03em;
  color:  ${({ ishomepage }) => ishomepage === "true" ? "var(--dark-color)" : "var(--white-color)"};
  border: ${({ ishomepage }) => ishomepage === "true" ? "1px solid var(--link-gray)" : "1px solid var(--white-light)"};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    border: ${({ ishomepage }) => ishomepage === "true" ? "1px solid var(--accent-color)" : "1px solid var(--white-color)"};
  }
`;
