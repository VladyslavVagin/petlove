import styled from "styled-components";

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--dark-color);
  margin: 80px 0;
  animation: appearDown 1000ms ease 1;

  b {
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 140px;
  }
`;
