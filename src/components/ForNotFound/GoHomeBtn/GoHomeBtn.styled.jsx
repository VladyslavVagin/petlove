import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: var(--accent-color);
  padding: 12px 30px;
  border-radius: 30px;
  background-color: var(--accent-light);
  transition: var(--hover-general);

  &:hover {
    background-color: var(--hover-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px 30px;
  }
`;
