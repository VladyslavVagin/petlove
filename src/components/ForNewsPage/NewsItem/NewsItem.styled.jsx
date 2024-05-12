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
    height: 476px;
    row-gap: 0px;

    img {
      width: 340px;
      height: 226px;
      min-width: 340px;
      min-height: 226px;
    }

    h2 {
      font-size: 20px;
      line-height: 1.3;
      margin-top: 28px;
      margin-bottom: 14px;
    }

    p {
      max-height: 100px;
      min-height: 100px;
      font-size: 16px;
      line-height: 1.25;
      overflow-y: scroll;
    }
  }

  @media screen and (min-width: 1280px) {
    width: 361px;

    img {
      width: 361px;
      min-width: 361px
    }
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

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    height: 100%;
    align-items: flex-end;
  }
`;
