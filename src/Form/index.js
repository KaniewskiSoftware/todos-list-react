import { useState, useRef } from "react";
import { ContentCreator, Input, Button} from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const ref = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim()) {
      addNewTask(newTaskContent.trim());
    }
    setNewTaskContent("");
    ref.current.focus();
  };

  return (
    <ContentCreator onSubmit={onFormSubmit}>
      <Input
        ref={ref}
        value={newTaskContent}
        type="text"
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Dodaj zadanie</Button>
    </ContentCreator>
  );
};

export default Form;
