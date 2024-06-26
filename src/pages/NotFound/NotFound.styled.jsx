import styled from "styled-components";

export const Container404 = styled.div`
  min-height: calc(100dvh - 86px);
  width: 100%;
  height: 100%;
  background-color: var(--accent-color);
  border-radius: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    border-radius: 60px;
  }
`;

export const Text404 = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: var(--white-color);
  margin: 20px 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
    margin: 40px 0 20px 0;
  }
`;
