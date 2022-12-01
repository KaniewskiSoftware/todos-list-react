export const getExampleTasks = async () => {
  const response = fetch("/todos-list-react/exampleTasks.json");

  if (!response.ok) {
    new Error(response.statusText);
  }
//   console.log(await(await response).json());
  return await (await response).json();
};
