import styled from "styled-components";

export const HeroImgContainer = styled.div`
    picture {
        img {
            border-radius: 30px;
        }
    }

    @media screen and (min-width: 768px) {
        picture {
            img {
                border-radius: 60px;
            }
        }
    }
`