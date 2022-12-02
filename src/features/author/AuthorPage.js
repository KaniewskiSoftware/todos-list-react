import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

function Author() {
    return (
        <Container>
          <Header title="O autorze" />
          <Section 
          title = "Patryk Kaniewski"
          body={
              <>nanana</>
          }
          />
        </Container>
      )
}

export default Author;