import styled from "styled-components";

export const SearchForm = styled.form`
  position: relative;
  margin-top: 20px;

  input {
    width: 100%;
    height: 42px;
    padding: 12px;
    border-radius: 30px;
    border: 1px solid transparent;
    outline: none;
    &:focus-within,
    &:hover {
      border-color: var(--accent-color);
    }

    &::placeholder {
      color: var(--dark-color);
      font-weight: 500;
      font-size: 14px;
      line-height: 1.29;
      letter-spacing: -0.03em;
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
    width: 265px;

    input {
      height: 48px;
      padding: 14px;
      font-size: 16px;
      line-height: 1.25;

      &::placeholder {
        font-size: 16px;
        line-height: 1.25;
      }
    }
  }
`;

export const SubmitSearchBtn = styled.button`
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
    transition: var(--hover-general);
  }

  @media screen and (min-width: 768px) {
    top: 10px;
  }
`;

export const CancelSearchBtn = styled.button`
  width: 32px;
  height: 32px;
  outline: none;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 6px;
  right: 42px;

  svg {
    stroke: var(--placeholder-color);
    transition: var(--hover-general);
  }

  &:hover svg {
    transform: scale(1.2);
  }

  @media screen and (min-width: 768px) {
    top: 10px;
  }
`;
