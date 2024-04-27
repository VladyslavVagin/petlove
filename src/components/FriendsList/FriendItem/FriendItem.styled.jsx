import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardContainer = styled.li`
  background-color: var(--white-color);
  border-radius: 15px;
  padding: 40px 20px;
  position: relative;
  display: flex;
  align-items: flex-start;
  column-gap: 14px;

  span {
    position: absolute;
    top: 12px;
    right: 12px;
    border-radius: 30px;
    width: 90px;
    height: 32px;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    letter-spacing: -0.02em;
    color: var(--accent-color);
    background-color: var(--accent-light);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const LogoCompany = styled(Link)`
  display: block;
  width: 80px;
  height: 80px;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const InfoCompany = styled.div`
  color: var(--dark-color);

  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.04em;
  }
`;

export const ListDetails = styled.ul`
  margin-top: 14px;
  width: 194px;

  li {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    column-gap: 2px;

     &:not(:last-of-type) {
        margin-bottom: 8px;
    }

    p {
      color: var(--placeholder-color);
    }
  }
`;

export const InfoLink = styled(Link)`
  color: var(--dark-color);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow-x: hidden;
`;
