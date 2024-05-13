import styled from "styled-components";

export const HomePageSection = styled.section`
  position: relative;
  padding: 0 20px;
  max-width: 375px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;
