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
border-top: 2px solid #ededed;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
  flex-direction: column;
}
`;