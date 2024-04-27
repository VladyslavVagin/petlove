import styled from "@emotion/styled";

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: -8px;

  svg {
    min-width: 20px;
    min-height: 20px;
  }

  svg:last-of-type {
    margin-left: -14px;
  }
`