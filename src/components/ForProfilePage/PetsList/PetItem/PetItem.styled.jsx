import styled from "styled-components";

export const ItemContainer = styled.li`
  position: relative;
  border: 1px solid var(--pets-cards);
  border-radius: 20px;
  width: 100%;
  height: 132px;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  column-gap: 14px;

  @media screen and (min-width: 768px) {
    width: 305px;
    height: 149px;
    padding: 22px 16px;
  }
`;

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
`;

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

  @media screen and (min-width: 768px) {
    min-width: 75px;
    min-height: 75px;
    width: 75px;
    height: 75px;
  }
`;

export const DeletePetBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent-light);
  transition: var(--hover-general);

  &:hover {
    background-color: var(--hover-color);
  }

  svg {
    fill: none;
    stroke: var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
