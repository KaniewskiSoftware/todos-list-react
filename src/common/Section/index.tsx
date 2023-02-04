import React from "react";
import { StyledHeader, StyledSection, StyledTitle } from "./styled";

type Props = {
    title: string;
    body: React.ReactNode;
    extraHeaderContent?: React.ReactNode;
}

const Section = ({ title, body, extraHeaderContent }: Props) => (
  <StyledSection>
    <StyledHeader>
      <StyledTitle>{title}</StyledTitle>
      {extraHeaderContent}
    </StyledHeader>
    {body}
  </StyledSection>
);

export default Section;
