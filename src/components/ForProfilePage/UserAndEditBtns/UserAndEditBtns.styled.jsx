import styled from "styled-components";

export const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserBox = styled.div`
  background-color: var(--accent-color);
  color: var(--white-color);
  display: inline-block;
  border-radius: 30px;
  padding: 10px 14px;

  div {
    display: flex;
    align-items: center;
    column-gap: 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;

    svg {
      fill: var(--white-color);
      stroke: var(--white-color);
      stroke-width: 6px;
    }
  }
`;

export const EditBtn = styled.button`
  outline: none;
  border: none;
  border-radius: 50%;
  background-color: var(--accent-light);
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--hover-general);

  svg {
    fill: none;
    stroke: var(--accent-color);
  }

  &:hover {
    background-color: var(--hover-color);
  }
`;
