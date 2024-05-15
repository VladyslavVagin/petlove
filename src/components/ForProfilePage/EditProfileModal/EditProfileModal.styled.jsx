import styled from "styled-components";

export const EditModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 295px;

  h1 {
    width: 100%;
    font-weight: 700;
    font-size: 20px;
    color: var(--dark-light);
    text-align: left;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 380px;
    margin: 0 auto;

    h1 {
      font-size: 18px;
      line-height: 1.33;
    }
  }
`;

export const AvatarBox = styled.div`
  overflow: hidden;
  min-width: 94px;
  min-height: 94px;
  width: 94px;
  height: 94px;
  border-radius: 50%;
  background-color: var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: var(--accent-color);
    stroke: var(--accent-color);
    stroke-width: 6px;
  }

  img {
    border-radius: 50%;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    width: 86px;
    height: 86px;
    min-width: 86px;
    min-height: 86px;
  }
`;
