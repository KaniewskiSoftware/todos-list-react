import { List, Item, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List className="tasks">
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <Button toggleDone onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✔" : ""}
        </Button>
        <Content done={task.done}>
          {task.id} - {task.content}
        </Content>
        <Button
          remove
          className="tasks__button tasks__button--remove"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
