import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`className= tasks__item ${task.done && hideDoneTasks ? "tasks__item--hidden" : ""}`}
      >
        <button className="tasks__button tasks__button--toggleDone">
          {task.done ? "✔️" : ""}
        </button>
        <p className={`tasks__text ${task.done ? "tasks__text--done" : ""}`}>
          {task.content}
        </p>
        <button className="tasks__button tasks__button--remove">🗑️</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
