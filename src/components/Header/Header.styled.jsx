// @ts-nocheck
import styled from "styled-components";

export const MainHeader = styled.header`
  padding: 10px 20px 0 20px;
  max-width: 375px;
  margin: 0 auto;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 20px 22px 20px;
  background-color: ${({ishomepage}) => (ishomepage === 'true' ? "var(--accent-color)" : "transparent")};
  border-top-left-radius: ${({ishomepage}) => (ishomepage === 'true' ? "30px" : "0px")};
  border-top-right-radius: ${({ishomepage}) => (ishomepage === 'true' ? "30px" : "0px")};
`;
