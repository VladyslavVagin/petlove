import styled from "styled-components";
import { Link } from "react-router-dom";

export const TitlePetsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    color: var(--dark-light);
  }
`;

export const AddPetLink = styled(Link)`
  height: 38px;
  width: 103px;
  background-color: var(--accent-color);
  color: var(--white-color);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  transition: var(--hover-general);

  svg {
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
