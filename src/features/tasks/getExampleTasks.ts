import {Task} from "./tasksSlice"

export const getExampleTasks = async (): Promise<Task[]>=> {
  const response = await fetch("/todos-list-react/exampleTasks.json");

  if (!response.ok) {
    new Error(response.statusText);
  }
  
  return await response.json();
};
