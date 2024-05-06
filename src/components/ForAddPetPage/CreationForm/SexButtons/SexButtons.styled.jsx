// @ts-nocheck
import styled from "styled-components";

export const ListItems = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 8px;

  li {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--hover-general);
  }
`;

export const FemaleLi = styled.li`
  background-color: ${({datavalue}) => datavalue === "female" ? "#f43f5e" : "rgba(244, 63, 94, 0.1)"};

  svg {
    fill: none;
    stroke: ${({datavalue}) => datavalue === "female" ? "var(--white-color)" : "#f43f5e"};
    transition: var(--hover-general);
  }

  &:hover {
    background-color: #f43f5e;

    svg {
      stroke: var(--white-color);
    }
  }
`

export const MaleLi = styled.li`
  background-color: ${({datavalue}) => datavalue === "male" ? "#54adff" : "rgba(84, 173, 255, 0.1)"};

  svg {
    fill: none;
    stroke:  ${({datavalue}) => datavalue === "male" ? "var(--white-color)" : "#54adff"};
    transition: var(--hover-general);
  }

  &:hover {
    background-color: #54adff;

    svg {
      stroke: var(--white-color);
    }
  }
`

export const MultipleLi = styled.li`
  background-color: ${({datavalue}) => datavalue === "multiple" ? "var(--accent-color)" : "var(--accent-light)"};

  svg {
    fill: none;
    fill: ${({datavalue}) => datavalue === "multiple" ? "var(--white-color)" : "var(--accent-color)"};
    transition: var(--hover-general);
  }
 
  &:hover {
    background-color: var(--accent-color);

    svg {
      fill: var(--white-color);
    }
  }
`