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
    line-height: 96%;
    letter-spacing: -0.03em;
    margin-bottom: 24px;

    strong {
      color: var(--title-accent);
    }
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
  }
`;
