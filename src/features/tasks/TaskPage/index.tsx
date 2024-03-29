import React from "react";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getTaskById} from "../tasksSlice";
import {Paragraph} from "./styled";
import {RootState} from "../../../store";

type TaskParams = {
    id: string;
}

function TaskPage() {
    const {id} = useParams<TaskParams>();
    const task = useSelector((state: RootState) => getTaskById(state, id));
    return (
        <Container>
            <Header title="Szczegóły zadania"/>
            <Section
                title={task ? task.content : "Sorka, nie ma takiego zadania 😜"}
                body={
                    task ? (
                        <Paragraph>
                            <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
                        </Paragraph>
                    ) : (
                        <Paragraph/>
                    )
                }
            />
        </Container>
    );
}

export default TaskPage;
