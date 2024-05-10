import styled from "styled-components";

export const ItemContainer = styled.li`
    border: 1px solid var(--pets-cards);
    border-radius: 20px;
    width: 100%;
    height: 132px;
    padding: 16px;
    display: flex;
    align-items: flex-start;
    column-gap: 14px;
`

export const Content = styled.div`
    h3 {
        max-width: 153px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 14px;
        font-weight: 700;
        line-height: 1.29;
        color: var(--dark-light);
        margin-bottom: 8px;
    }
`

export const PetImgBox = styled.div`
    min-width: 66px;
    min-height: 66px;
    width: 66px;
    height: 66px;
    border-radius: 50%;
    overflow: hidden;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`