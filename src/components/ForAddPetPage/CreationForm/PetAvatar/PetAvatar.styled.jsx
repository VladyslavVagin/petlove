import styled from "styled-components";

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageBox = styled.div`
  overflow: hidden;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: var(--accent-color);
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
