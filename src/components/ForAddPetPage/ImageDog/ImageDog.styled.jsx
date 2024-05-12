import styled from "styled-components";

export const ImageBox = styled.div`
  position: relative;
  background-color: var(--accent-color);
  border-radius: 30px;
  overflow: hidden;

  picture {
    position: relative;
    z-index: 1;

    img {
      position: relative;
      left: 6%;
    }
  }

  svg {
    position: absolute;
    bottom: -16px;
    left: 11px;
    transform: scale(1.6);
    z-index: 0;
  }

  @media screen and (min-width: 768px) {
    border-radius: 60px;

    picture {
      img {
        left: 30%;
      }
    }
  }

  svg {
    transform: scale(2.8);
    bottom: -82px;
    left: 223px;
  }

  @media screen and (min-width: 1280px) {
        width: 592px;
        height: 654px;

        picture {
            right: unset;
            left: -132px;
            bottom: -8px;
        }

        svg {
            transform: scale(4);
            bottom: unset;
            top: 278px;
            left: 134px;
        }
    }
`;
