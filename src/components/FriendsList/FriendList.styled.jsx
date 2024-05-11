import styled from "styled-components";

export const CardsListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 44px;
    }
`