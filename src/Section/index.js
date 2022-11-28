import { StyledHeader, StyledSection, StyledTitle } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <StyledHeader>
      <StyledTitle>{title}</StyledTitle>
      {extraHeaderContent}
    </StyledHeader>
    {body}
  </StyledSection>
);

export default Section;
