import styled from "styled-components";

export const CardContainer = styled.li`
  background-color: var(--white-color);
  padding: 24px;
  border-radius: 16px;
  color: var(--dark-color);

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 444px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    width: 363px;
  }
`;

export const ImageAnimalContainer = styled.div`
  width: 287px;
  height: 178px;
  margin-bottom: 24px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 315px;
  }
`;

export const TitlePopularityBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
  }

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    display: flex;
    align-items: center;
    column-gap: 4px;
  }

  @media screen and (min-width: 1280px) {
    h2 {
      font-size: 18px;
      line-height: 1.33;
    }

    span {
      line-height: 1.43;
    }
  }
`;

export const ListInfo = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 14px;
  margin-top: 8px;
  margin-bottom: 16px;

  li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 2px;

    p {
      font-weight: 500;
      font-size: 10px;
      line-height: 1.4;
      letter-spacing: -0.02em;
      color: var(--placeholder-color);
      display: flex;
      flex-direction: column;

      span {
        font-weight: 500;
        font-size: 12px;
        line-height: 1.17;
        letter-spacing: -0.02em;
        color: var(--dark-color);
        text-transform: capitalize;
      }
    }
  }
`;

export const CommentText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
`;

export const ButtonsCardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

export const ButtonLearnMore = styled.button`
  outline: none;
  color: var(--white-color);
  background-color: var(--accent-color);
  border: none;
  border-radius: 30px;
  padding: 14px;
  width: 231px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  transition: var(--hover-general);

  &:hover {
    background-color: var(--bright-orange);
  }

  @media screen and (min-width: 768px) {
    width: 236px;
    height: 48px;
    font-size: 16px;
    line-height: 1.25;
  }

  @media screen and (min-width: 1280px) {
    width: 257px;
  }
`;

export const BtnLike = styled.button`
  width: 46px;
  height: 46px;
  outline: none;
  border: none;
  background-color: var(--accent-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--hover-general);

  svg {
    fill: none;
    stroke: var(--accent-color);
  }

  &:hover {
    background-color: var(--hover-color);
  }

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;
