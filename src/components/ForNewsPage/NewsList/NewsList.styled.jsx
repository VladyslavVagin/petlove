import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    animation: appearDown 1000ms ease 1;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
        column-gap: 24px;
        row-gap: 32px;
    }

    @media screen and (min-width: 1280px) {
        column-gap: 35px;
        row-gap: 40px;
    }
`