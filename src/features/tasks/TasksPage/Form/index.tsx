import React from "react";
import { useState, useRef } from "react";
import {useAppDispatch} from "../../../../hooks";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../../tasksSlice";
import { StyledButton } from "./styled";
import { StyledInput, StyledForm } from "../../StyledComponents";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
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
    ref.current?.focus();
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
