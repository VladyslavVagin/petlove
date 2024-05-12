import styled from "styled-components";
import bgImg from "../../assets/images/main/maindog.webp";
import bgImg2x from "../../assets/images/main/maindog-2x.webp";
import bgTablet from "../../assets/images/main/preloaderTablet.webp";
import bgTablet2x from "../../assets/images/main/preloaderTablet-2x.webp";
import bgDesktop from "../../assets/images/main/screenPC.webp"
import bgDesktop2x from "../../assets/images/main/screenPC-2x.webp"

export const MainScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background: url(${bgImg}) no-repeat center / cover;
  z-index: 103;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: appear 1200ms ease 1;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background: url(${bgImg2x}) no-repeat center / cover;
  }

  @media screen and (min-width: 768px) {
    background: url(${bgTablet}) no-repeat center / cover;

    svg {
      width: 374px;
      height: 100px;
    }

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${bgTablet2x}) no-repeat center / cover;
    }
  }

  @media screen and (min-width: 1280px) {
    background: url(${bgDesktop}) no-repeat center / cover;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background: url(${bgDesktop2x}) no-repeat center / cover;
    }
  }
`;
