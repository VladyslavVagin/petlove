import styled from "styled-components";
import bgImg from "../../assets/images/main/maindog.webp";

export const MainScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  background: url(${bgImg}) no-repeat center / cover;

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
`;
