import styled from "styled-components";

export const RegisterImageBox = styled.div`
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
`