import styled from "styled-components";

export const ListFavorites = styled.ul`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;

    @media screen and (min-width: 768px) {
        margin-top: 20px;
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 20px;
    }

    @media screen and (min-width: 1280px) {
        margin-top: 32px;
        column-gap: 24px;
        row-gap: 24px;
    }
`