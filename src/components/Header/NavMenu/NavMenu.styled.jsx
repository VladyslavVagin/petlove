// @ts-nocheck
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  width: 119px;
  height: 50px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color:  ${({ ishomepage }) => ishomepage === "true" ? "var(--white-color)" : "var(--dark-color)"};
  border: ${({ ishomepage }) => ishomepage === "true" ? "1px solid var(--white-color)" : "1px solid var(--link-gray)"};
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--hover-general);

  &:hover {
    border: 1px solid var(--white-light);
  }

  &.active {
    border: ${({ ishomepage }) => ishomepage === "true" ? "1px solid var(--white-color)" : "1px solid var(--accent-color)"};
    color:  ${({ ishomepage }) => ishomepage === "true" ? "var(--white-color)" : "var(--accent-color)"};
  }
`;