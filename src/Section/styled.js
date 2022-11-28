import styled from "styled-components";

export const SectionBox = styled.section`
  margin: 10px 0;
  background-color: ${({theme})=> theme.color.white};
`;

export const TitleBox = styled.header`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({theme})=> theme.breakpoint.mobileMax}px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  margin: 20px;
  font-size: 20px;
`;
