import styled from "styled-components";

export const ContainerBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;
`

export const AvatarBox = styled.div`
  overflow: hidden;
  width: 94px;
  height: 94px;
  border-radius: 50%;
  background-color: var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: scalingItem 1000ms ease 1;

  svg {
    fill: var(--accent-color);
    stroke: var(--accent-color);
    stroke-width: 6px;
  }

  img {
    border-radius: 50%;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 110px;

    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

export const UploadPhotoButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  color: var(--dark-color);
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  text-decoration: underline;
  text-decoration-skip-ink: none;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;
