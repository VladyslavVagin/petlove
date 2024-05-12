import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 10px;
  margin-top: 40px;
`;

export const StyledLinkTo = styled(NavLink)`
  display: inline-block;
  background-color: var(--white-color);
  color: var(--dark-color);
  border-radius: 30px;
  padding: 12px;
  width: 123px;
  height: 42px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  text-align: center;
  transition: var(--hover-general);

  &.active {
    background-color: var(--accent-color);
    color: var(--white-color);
  }

  &:hover {
    background-color: var(--hover-color);
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 142px;
    height: 48px;
    padding: 14px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
