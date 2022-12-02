import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    pending: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: selectedId }) => {
      const index = tasks.findIndex(({ id }) => id === selectedId);
      tasks[index].done = !tasks[index].done;
    },
    setAllDone: ({ tasks }) => {
      tasks.forEach((task) => (task.done = true));
    },
    removeTask: ({ tasks }, { payload: selectedId }) => {
      const index = tasks.findIndex(({ id }) => id === selectedId);
      tasks.splice(index, 1);
    },
    fetchExampleTasks: (state) => {
      state.pending = true;
    },
    fetchExampleTasksSuccess: (state, { payload: tasks }) => {
      state.tasks = tasks;
      state.pending = false;
    },
    fetchExampleTasksError: (state) => {
      state.pending = false;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  setAllDone,
  removeTask,
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
} = tasksSlice.actions;

const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);

export const selectIsPending = (state) => selectTasksState(state).pending;

export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);
  if (!query || query.trim() === "") {
    return tasks;
  }

  return selectTasks(state).filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
