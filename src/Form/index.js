import { useState, useRef, useEffect } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const ref = useRef();

  useEffect(()=>{
    ref.current.focus();
  })

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim()) {
      addNewTask(newTaskContent.trim());
    }
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        ref={ref}
        value={newTaskContent}
        className="form__input"
        type="text"
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
