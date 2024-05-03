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
`;
