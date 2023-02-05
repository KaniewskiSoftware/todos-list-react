import React from "react";
import { useAppSelector, useAppDispatch } from "../../../../hooks"
import { useLocation } from "react-router-dom";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { List, Item, Content, Button, TaskLink } from "./styled";

const TaskList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

  const tasks = useAppSelector(state => selectTasksByQuery(state, query));
  const hideDone = useAppSelector(selectHideDone);

  const dispatch = useAppDispatch();

  return (
    <List className="tasks">
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <Button toggleDone={true} onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </Button>
          <Content done={task.done}>
            <TaskLink to={`/zadania/${task.id}`}>{task.content}</TaskLink>
          </Content>
          <Button
            remove={true}
            className="tasks__button tasks__button--remove"
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
