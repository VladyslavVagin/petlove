import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    margin-top: 40px;
`

export const ContactBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 135px;
  height: 44px;
  border-radius: 30px;
  background-color: var(--accent-light);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: var(--accent-color);
  transition: var(--hover-general);

  &:hover {
    background-color: var(--hover-color);
  }
`;

export const AddRemoveBtn = styled.button`
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  background-color: var(--accent-color);
  color: var(--white-color);
  width: 135px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  border-radius: 30px;
  transition: var(--hover-general);

  svg {
    fill: none;
    stroke: var(--white-color);
    transition: var(--hover-general);
  }

  &:hover {
    background-color: var(--hover-color);
    color: var(--accent-color);

    svg {
      stroke: var(--accent-color);
    }
  }
`;
