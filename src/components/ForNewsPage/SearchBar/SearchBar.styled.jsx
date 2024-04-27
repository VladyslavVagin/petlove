import styled from "styled-components";

export const SearchForm = styled.form`
  position: relative;
  margin-top: 20px;

  input {
    width: 100%;
    height: 42px;
    padding: 12px;
    border-radius: 30px;
    border: 1px solid var(--link-gray);
    outline: none;

    &::placeholder {
      color: var(--placeholder-color);
      font-weight: 500;
      font-size: 14px;
      line-height: 1.29;
      letter-spacing: -0.03em;
    }
  }

  button {
    width: 32px;
    height: 32px;
    outline: none;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 6px;
    right: 12px;

    svg {
        fill: var(--white-color);
        stroke: var(--dark-color);
    }
  }
`;