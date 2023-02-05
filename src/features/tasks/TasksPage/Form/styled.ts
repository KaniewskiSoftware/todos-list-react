import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  margin-left: 20px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.color.blueLagoon};
  color: ${({ theme }) => theme.color.white};
  transition: background-color 0.5s, transform 1s;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 20px;
    margin-left: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.smallMax}px) {
    margin-top: 20px;
    margin-left: 0;
  }

  &:hover {
    filter: brightness(110%);
    transform: scale(1.1);
  }
`;
