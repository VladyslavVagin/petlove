import styled from "styled-components";
import { Link } from 'react-router-dom'

export const UserLinkBtn = styled(Link)`
    overflow: hidden;
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: var(--accent-light);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: var(--hover-general);

    img {
        object-fit: cover;
        border-radius: 50%;
    }

    svg {
        fill: var(--accent-color);
        stroke: var(--accent-color);
        stroke-width: 2px;
    }

    &:hover {
        background-color: var(--hover-color);
    }
`