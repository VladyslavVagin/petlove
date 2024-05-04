import styled from "styled-components";

export const ListInfo = styled.ul`
  width: 243px;
  display: flex;
  align-items: center;
  column-gap: 27px;
  margin: 0px auto 18px auto;

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
      font-weight: 500;
      font-size: 10px;
      line-height: 1.4;
      letter-spacing: -0.02em;
      color: var(--placeholder-color);

      span {
        font-weight: 500;
        font-size: 12px;
        line-height: 1.17;
        letter-spacing: -0.02em;
        color: var(--dark-color);
        text-transform: capitalize;
        margin-top: 4px;
        display: inline-block;
      }
    }
  }
`;
