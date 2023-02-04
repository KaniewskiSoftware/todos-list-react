import React from "react";
import Container from "../../../common/Container/index";
import Header from "../../../common/Header/index";
import Section from "../../../common/Section/index";
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
