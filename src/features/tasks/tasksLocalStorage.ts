import {Task} from "./tasksSlice"
const localStorageKey = "tasks";

export const saveTasksInLocalStorage = (tasks: Task[]) =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = (): string | [] =>
  JSON.parse(localStorage.getItem(localStorageKey) as string) || [];
