import styled from "styled-components";

export const CardsListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    animation: appearDown 1000ms ease 1;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 44px;
    }

    @media screen and (min-width: 1280px) {
        justify-content: center;
        margin-top: 60px;
        row-gap: 28px;
        
    }
`