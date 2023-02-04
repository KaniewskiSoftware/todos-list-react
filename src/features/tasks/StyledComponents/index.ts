import styled from "styled-components";

export const StyledInput = styled.input`
  flex-grow: 1;
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.color.ashGrey};
`;

export const StyledForm = styled.form`
  display: flex;
  margin: 0;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-direction: column;
  }
`;

export const StyledButtons = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
  }
`;

export const StyledButton = styled.button`
  padding: 20px;
  color: ${({ theme }) => theme.color.blueLagoon};
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  transition: color 0.5s;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};

    &:hover {
      color: ${({ theme }) => theme.color.silver};
    }
  }
`;
