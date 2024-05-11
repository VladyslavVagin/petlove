import styled from "styled-components";

export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    animation: rotateLoader 2000ms linear infinite;
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: 700;
    font-size: 50px;
    line-height: 100%;
    letter-spacing: -0.04em;
  }

  @keyframes rotateLoader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media screen and (min-width: 768px) {
    img {
      width: 396px;
      height: 396px;
    }

    span {
      font-size: 80px;
    }
  }
`;
