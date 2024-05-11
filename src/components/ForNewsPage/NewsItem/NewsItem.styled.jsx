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

  @media screen and (min-width: 768px) {
    width: 340px;
  }
`;

export const DateReadBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;

  span {
    color: var(--placeholder-color);
  }

  a {
    color: var(--accent-color);
    text-decoration: underline;
    text-decoration-skip-ink: none;
  }
`;
