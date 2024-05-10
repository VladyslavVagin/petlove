import styled from "styled-components";

export const ListInfoPet = styled.ul`
  width: 100%;
  max-width: 173px;
  display: flex;
  align-items: flex-start;
  column-gap: 10px;
  row-gap: 6px;
  flex-wrap: wrap;

  li {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    &:first-of-type {
      p {
        span {
          max-width: 54px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }

    p {
      display: flex;
      flex-direction: column;
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
