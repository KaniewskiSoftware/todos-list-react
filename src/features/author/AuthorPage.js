import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Paragraph } from "./styled";

function Author() {
  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Patryk Kaniewski"
        body={
          <Paragraph>
            <strong>Cześć!</strong><br/>
            W tym momencie uczę się programować. Wiążę z tym swoją najbliższą
            przyszłość. Oprócz tego sprawia mi to ogrom frajdy. Dzięki, że
            zainteresowałeś się tą podstroną. <strong>Pozdrawiam serdecznie!</strong>.
          </Paragraph>
        }
      />
    </Container>
  );
}

export default Author;
