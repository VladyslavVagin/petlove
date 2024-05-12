import styled from "styled-components";

export const ImgContainer = styled.div`
  width: calc(100dvw - 40px);
  max-width: 295px;
  text-align: center;

  div {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: var(--accent-light);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    img {
      width: 44px;
      height: 44px;
    }
  }

  p {
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.03em;
    color: var(--dark-color);
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    max-width: 288px;
    height: 204px;
    padding-top: 40px;
    margin: 0 auto;

    p {
      font-size: 24px;
      line-height: 1.17;
    }
  }
`;

export const BtnsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    margin-top: 28px;

    @media screen and (min-width: 768px) {
      margin-top: 0px;
      margin-bottom: 40px;
    }
`

export const LogoutConfirmBtn = styled.button`
  outline: none;
  border: none;
  width: 137px;
  height: 42px;
  border-radius: 30px;
  color: var(--white-color);
  background-color: var(--accent-color);
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  transition: var(--hover-general);

  &:hover {
    background-color: var(--hover-color);
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 48px;
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const CancelBtn = styled.button`
  outline: none;
  border: none;
  width: 137px;
  height: 42px;
  border-radius: 30px;
  color: var(--dark-color);
  background-color:  var(--bg-button);
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  transition: var(--hover-general);

  &:hover {
    background-color: var(--hover-color);
    color: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 48px;
    font-size: 16px;
    line-height: 1.25;
  }
`;
