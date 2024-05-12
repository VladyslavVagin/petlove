import styled from "styled-components";

export const LoginImageBox = styled.div`
    position: relative;
    background-color: var(--accent-color);
    border-radius: 30px;
    overflow: hidden;

    picture {
        position: relative;
        z-index: 1;
    }

    svg {
        position: absolute;
        bottom: 45px;
        left: 0;
        transform: scale(1.6);
        z-index: 0;
    }

    @media screen and (min-width: 768px) {
        border-radius: 60px;

        picture {
            right: -250px;
        }

        svg {
            transform: scale(2.8);
            bottom: -24px;
            left: 224px;
        }
    }

    @media screen and (min-width: 1280px) {
        width: 592px;
        height: 654px;

        picture {
            right: unset;
            left: 40px;
            bottom: -22px;
        }

        svg {
            transform: scale(4);
            bottom: unset;
            top: 278px;
            left: 134px;
        }
    }
`