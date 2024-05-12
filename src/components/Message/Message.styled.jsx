import styled from "styled-components";

export const MessageContainer = styled.div`
  position: absolute;
  bottom: 32px;
  left: 32px;
  width: 294px;
  height: 121px;
  border-radius: 20px;
  background-color: var(--white-color);
  padding: 18px 16px;
  display: flex;
  align-items: flex-start;
  column-gap: 8px;
  z-index: 2;

  @media screen and (min-width: 1280px) {
    left: 61px;
    bottom: 97px;
  }
`;

export const ImgBox = styled.div`
  width: 60px;
  min-width: 60px;
  height: 60px;
  min-height: 60px;
  background-color: var(--accent-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentBox = styled.div`
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: rgba(38, 38, 38, 0.8);
  }
`;

export const NameBirthdayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;

  p {
    &:first-of-type {
      color: var(--accent-color);
      font-weight: 700;
      font-size: 16px;
      line-height: 1.25;
      letter-spacing: -0.03em;
    }

    &:last-of-type {
      font-weight: 500;
      font-size: 12px;
      line-height: 1.17;
      letter-spacing: -0.02em;
      color: var(--placeholder-color);

      span {
        color: var(--dark-color);
      }
    }
  }
`;
