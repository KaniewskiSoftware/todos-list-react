import "./style.css";

const Tasks = (props) => (
  <ul className="tasks">
    {props.tasks.map((task) => (
      <li
        key={task.id}
        className={`className= tasks__item ${
          task.done && props.hideDoneTasks ? "tasks__item--hidden" : ""
        }`}
      >
        <button className="tasks__button tasks__button--toggleDone js-done">
          {task.done ? "✔️" : ""}
        </button>
        <p className={`tasks__text ${task.done ? "tasks__text--done" : ""}`}>
          {task.content}
        </p>
        <button className="tasks__button tasks__button--remove js-remove">
          🗑️
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
