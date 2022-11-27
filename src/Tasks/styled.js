import styled, { css } from "styled-components";

export const List = styled.ul`
  margin: 0;
  padding: 20px 20px 30px;
  border-top: 2px solid #ededed;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
  border-bottom: 1px solid #b9b9b9;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  word-break: break-word;
  flex-grow: 1;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  align-self: center;
  width: 35px;
  height: 35px;
  margin: 10px;
  flex-shrink: 0;
  cursor: pointer;
  border: none;
  transition: background-color 0.5s;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: #1a7b1e;

      &:hover {
        background-color: #36b43a;
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: #ec293a;

      &:hover {
        background-color: #ff081d;
      }
    `}
`;
