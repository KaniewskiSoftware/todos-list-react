import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

export const List = styled.ul`
  margin: 0;
  padding: 20px 20px 30px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
  border-bottom: 1px solid ${({theme}) => theme.color.ashGrey};

  ${({hidden}) =>
          hidden &&
          css`
            display: none;
          `}
`;

export const Content = styled.span<{ done?: boolean }>`
  word-break: break-word;
  flex-grow: 1;

  ${({done}) =>
          done &&
          css`
            text-decoration: line-through;
          `}
`;

export const TaskLink = styled(Link)`
  text-decoration: none;
  color: ${({theme}) => theme.color.blueLagoon};

  &:visited {
    color: ${({theme}) => theme.color.black};
  }

  &:hover {
    filter: brightness(110%);
  }
`;

export const Button = styled.button<{ toggleDone?: boolean, remove?: boolean }>`
  align-self: center;
  width: 35px;
  height: 35px;
  margin: 10px;
  color: ${({theme}) => theme.color.white};
  flex-shrink: 0;
  cursor: pointer;
  border: none;
  transition: background-color 0.5s;

  ${({toggleDone}) =>
          toggleDone &&
          css`
            background-color: ${({theme}) => theme.color.treeGreen};

            &:hover {
              filter: brightness(110%);
            }
          `}

  ${({remove}) =>
          remove &&
          css`
            background-color: ${({theme}) => theme.color.strawberry};

            &:hover {
              filter: brightness(110%);
            }
          `}
`;
