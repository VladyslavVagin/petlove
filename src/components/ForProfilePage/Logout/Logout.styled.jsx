import styled from "styled-components";

export const LogoutBtn = styled.button`
  width: 114px;
  height: 42px;
  border-radius: 30px;
  outline: none;
  border: none;
  background-color: var(--accent-light);
  color: var(--accent-color);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  transition: var(--hover-general);
  margin-top: 40px;

  &:hover {
    background-color: var(--hover-color);
  }
`;
