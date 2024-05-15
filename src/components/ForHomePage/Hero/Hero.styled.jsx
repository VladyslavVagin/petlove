import styled from "styled-components";

export const HeroContainer = styled.div`
  background-color: var(--accent-color);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 20px 20px 50px 20px;
  color: var(--white-color);

  h1 {
    font-weight: 700;
    font-size: 50px;
    line-height: 0.96;
    letter-spacing: -0.03em;
    margin-bottom: 24px;
    animation: appearRight 1000ms ease 1;

    strong {
      color: var(--title-accent);
    }
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    animation: appearLeft 1000ms ease 1;
  }

  @media screen and (min-width: 768px) {
    margin-top: -4px;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
    padding: 1px 30px 44px 30px;

    h1 {
      font-size: 80px;
      margin-top: 60px;
      margin-bottom: 32px;
    }

    p {
      font-size: 18px;
      line-height: 1.22;
      max-width: 255px;
      margin-left: auto;
    }
  }

  @media screen and (min-width: 1280px) {
    padding: 1px 64px 32px 64px;
    display: flex;
    align-items: flex-end;

    h1 {
      font-size: 90px;
      line-height: 0.97;
      max-width: 760px;
      margin-bottom: 0;
    }
  }
`;
