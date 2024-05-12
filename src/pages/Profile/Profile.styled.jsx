import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white-color);
  padding: 18px 20px;
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 520px;
    width: 520px;
    padding: 40px 40px 30px 40px;
  }
`