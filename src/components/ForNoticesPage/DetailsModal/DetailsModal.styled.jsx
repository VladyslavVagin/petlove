import styled from "styled-components";

export const ContainerModal = styled.div`
  width: calc(100dvw - 40px);
  max-width: 295px;
  text-align: center;
`;

export const ImgBox = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto;
  position: relative;

  img {
    object-fit: cover;
    border-radius: 50%;
  }

  span {
    text-transform: capitalize;
    height: 32px;
    padding: 8px 14px;
    border-radius: 30px;
    display: inline-block;
    background-color: var(--accent-light);
    color: var(--accent-color);
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    position: absolute;
    top: 0;
    left: -4px;
  }
`;
