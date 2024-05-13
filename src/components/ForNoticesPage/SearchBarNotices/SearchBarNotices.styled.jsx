import styled from "styled-components";

export const SearchContainer = styled.div`
    background-color: var(--accent-light);
    border-radius: 30px;
    padding: .1px 20px 20px;
    margin-top: 40px;

    @media screen and (min-width: 768px) {
        padding: 40px 32px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        gap: 16px;
    }

    @media screen and (min-width: 1280px) {
        justify-content: center;
    }
`
export const SelectContainer = styled.div`
    margin-top: 12px;
    margin-bottom: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;

    @media screen and (min-width: 768px) {
        width: 356px;
        column-gap: 16px;
        margin: 0;
    }

    @media screen and (min-width: 1280px) {
        width: 406px;
    }
`

export const ResetFilterBtn = styled.button`
    outline: none;
    border: none;
    background-color: transparent;
    color: var(--accent-color);
    font-size: 20px;
    font-weight: 700;
    height: 42px;
    border-radius: 30px;
    margin-left: auto;
    display: block;
    text-transform: uppercase;
    transition: var(--hover-general);

    &:hover {
        color: var(--placeholder-color);
    }

    @media screen and (min-width: 768px) {
        margin-top: -20px;
    }
`