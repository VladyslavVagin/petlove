import styled from "styled-components"

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
`