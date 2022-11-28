import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  margin: 0;
  padding: 20px;
  border-top: 2px solid #ededed;

  @media (max-width: ${({theme})=> theme.breakpoint.mobileMax}px) {
    flex-direction: column;
  }
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  padding: 10px 20px;
  border: 1px solid ${({theme})=> theme.color.ashGrey};
`;

export const StyledButton = styled.button`
  border: none;
  margin-left: 20px;
  padding: 10px 20px;
  background-color: ${({theme})=> theme.color.blueLagoon};
  color: ${({theme})=> theme.color.white};
  transition: background-color 0.5s, transform 1s;

  @media (max-width: ${({theme})=> theme.breakpoint.mobileMax}px) {
    margin-top: 20px;
    margin-left: 0;
  }

  @media (max-width: ${({theme})=> theme.breakpoint.smallMax}px) {
    margin-top: 20px;
    margin-left: 0;
  }

  &:hover {
    filter: brightness(110%);
    transform: scale(1.1);
  }
`;
