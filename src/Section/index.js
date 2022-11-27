import { SectionBox, TitleBox, Title } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <SectionBox>
    <TitleBox>
      <Title>{title}</Title>
      {extraHeaderContent}
    </TitleBox>
    {body}
  </SectionBox>
);

export default Section;
