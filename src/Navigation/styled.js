import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 20px;
  list-style: none;
  background-color: ${({ theme }) => theme.color.blueLagoon};
`;

export const StyledNavLink = styled(NavLink)`
  padding: 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  transition: color .3s;
  &.active {
    font-weight: bold;
  }

  &:hover {
    color: ${({ theme }) => theme.color.black};
  }
`;
