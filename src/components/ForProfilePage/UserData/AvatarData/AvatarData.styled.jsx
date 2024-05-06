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

  svg {
    fill: var(--accent-color);
    stroke: var(--accent-color);
    stroke-width: 6px;
  }

  img {
    border-radius: 50%;
    object-fit: cover;
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
`;
