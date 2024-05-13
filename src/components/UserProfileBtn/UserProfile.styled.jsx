// @ts-nocheck
import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserLinkBtn = styled(Link)`
  overflow: hidden;
  display: inline-block;
  min-height: 40px;
  min-width: 40px;
  width: 40px;
  height: 40px;
  background-color: var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: var(--hover-general);

  img {
    object-fit: cover;
    border-radius: 50%;
  }

  svg {
    fill: var(--accent-color);
    stroke: var(--accent-color);
    stroke-width: 2px;
  }

  &:hover {
    background-color: var(--hover-color);
  }

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    min-height: 50px;
    min-width: 50px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${({ ishomepage }) => ishomepage === "true" ? "var(--white-color)" : "var(--dark-color)"};
`;
