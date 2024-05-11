import styled from "styled-components";

export const ContainerContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
`;

export const IconBox = styled.div`
  svg {
    @media screen and (min-width: 768px) {
      width: 175px;
      height: 300px;
    }
  }
`

export const CatImgBox = styled.div`
  width: 109px;
  height: 109px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  overflow: hidden;

  picture {
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;
