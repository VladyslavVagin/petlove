import styled from "styled-components";

export const SearchContainer = styled.div`
    background-color: var(--accent-light);
    border-radius: 30px;
    padding: .1px 20px 20px;
    margin-top: 40px;
`
export const SelectContainer = styled.div`
    margin-top: 12px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
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
`