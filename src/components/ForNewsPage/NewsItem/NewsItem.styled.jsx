import styled from "styled-components";

export const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
  color: var(--dark-color);

  img {
    width: 335px;
    height: 190px;
    object-fit: cover;
    border-radius: 15px;
  }

  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
  }
`;

export const DateReadBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: var(--placeholder-color);
  }

  button {
    display: flex;
    outline: none;
    border: none;
    background-color: transparent;
    color: var(--accent-color);
  }
`;
