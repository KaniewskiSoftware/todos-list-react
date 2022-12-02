import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../tasksSlice";
import { StyledForm, StyledInput, StyledButton } from "./styled";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const ref = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (trimmedNewTaskContent) {
      dispatch(
        addTask({
          content: trimmedNewTaskContent,
          done: false,
          id: nanoid(),
        })
      );
    }
    setNewTaskContent("");
    ref.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledInput
        ref={ref}
        value={newTaskContent}
        type="text"
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <StyledButton>Dodaj zadanie</StyledButton>
    </StyledForm>
  );
};

export default Form;
