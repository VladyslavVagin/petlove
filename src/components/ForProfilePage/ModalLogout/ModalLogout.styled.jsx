import styled from "styled-components";

export const CloseBtn = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: var(--hover-general);

  svg {
    stroke: var(--dark-color);
  }

  &:hover {
    transform: scale(1.2);
  }
`;

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
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--dark-color);
    margin-top: 20px;
  }
`;

export const BtnsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    margin-top: 28px;
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
`;
