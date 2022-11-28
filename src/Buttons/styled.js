import styled from "styled-components";

export const StyledButtons = styled.div`
  @media (max-width: ${({theme})=> theme.breakpoint.mobileMax}px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
  }
`;

export const StyledButton = styled.button`
  padding: 20px;
  color: ${({theme})=> theme.color.blueLagoon};
  background-color: ${({theme})=> theme.color.white};
  border: none;
  transition: color 0.5s;

  &:hover {
    filter: brightness(110%);
  }

  &:disabled {
    color: ${({theme})=> theme.color.silver};

    &:hover {
      color: ${({theme})=> theme.color.silver};
    }
  }
`;
