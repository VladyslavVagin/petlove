import styled from "styled-components";

export const BoxTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;

  @media screen and (min-width: 768px) {
    max-height: 74px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 44px;
  }
`;
