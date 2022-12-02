import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { Paragraph } from "./styled";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));
  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section title={task ? task.content : "Nie znaleziono zadania"} body={
        <Paragraph><strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}</Paragraph>
      } />
    </Container>
  );
}

export default TaskPage;
