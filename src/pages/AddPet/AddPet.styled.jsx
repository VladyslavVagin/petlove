import styled from "styled-components";

export const ContainerCreation = styled.div`
    background-color: var(--white-color);
    border-radius: 30px;
    padding: 28px 20px;
    margin-top: 10px;

    @media screen and (min-width: 768px) {
        border-radius: 60px;
        margin-top: 16px;
        padding: 40px 136px;
    }

    @media screen and (min-width: 1280px) {
        margin-top: 0px;
        width: 592px;
        height: 654px;
        padding: 60px 80px;
    }
`