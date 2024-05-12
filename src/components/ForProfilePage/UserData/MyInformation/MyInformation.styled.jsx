import styled from "styled-components";

export const MyInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 28px;

  h1 {
    color: var(--dark-light);
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    li {
      height: 42px;
      padding: 12px;
      border-radius: 30px;
      border: 1px solid var(--link-gray);
      display: flex;
      align-items: center;

      p {
        font-weight: 500;
        font-size: 14px;
        line-height: 1.29;
        letter-spacing: -0.03em;
        color: var(--dark-color);
      }
    }
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 18px;
      line-height: 1.33;
    }

    ul {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      row-gap: 14px;
      column-gap: 14px;

      li {
        width: 305px;
        height: 52px;
        padding: 16px;

        @media screen and (min-width: 1280px) {
          width: 100%;
        }

        p {
          font-size: 16px;
          line-height: 1.25;
        }
      }
    }
  }
`;
