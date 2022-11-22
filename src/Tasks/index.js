import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`className= tasks__item ${task.done && hideDone ? "tasks__item--hidden" : ""
        }`}
      >
        <button
        className="tasks__button tasks__button--toggleDone"
        onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔️" : ""}
        </button>
        <p className={`tasks__text ${task.done ? "tasks__text--done" : ""}`}>
          {task.id} - {task.content}
        </p>
        <button
          className="tasks__button tasks__button--remove"
          onClick={() => removeTask(task.id)}
        >
          🗑️
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
