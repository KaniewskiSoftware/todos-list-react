import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 10px 0;
  background-color: ${({theme})=> theme.color.white};
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({theme})=> theme.breakpoint.mobileMax}px) {
    flex-direction: column;
  }
`;

export const StyledTitle = styled.h2`
  margin: 20px;
  font-size: 20px;
`;
