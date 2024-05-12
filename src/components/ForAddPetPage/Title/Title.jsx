import React from "react";
import styled from "styled-components";

const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--dark-color);
  margin-bottom: 24px;

  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.29;
    color: var(--subtitle-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;

    span {
      font-size: 16px;
      line-height: 1.25;
    }
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 40px;
  }
`;

const Title = () => {
  return (
    <MainTitle>
      Add my pet / <span>Personal details</span>
    </MainTitle>
  );
};

export default Title;
