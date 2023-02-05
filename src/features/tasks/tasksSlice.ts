import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getTasksFromLocalStorage} from "./tasksLocalStorage";
import type {RootState} from "../../store";

export interface Task {
    content: string;
    id: string;
    done: boolean;
}

type TasksState = {
    tasks: Task[];
    hideDone: boolean;
    pending: boolean;
}

const initialState: TasksState = {
    tasks: getTasksFromLocalStorage() as Task[] | [],
    hideDone: false,
    pending: false,
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: ({tasks}, {payload: task}: PayloadAction<Task>) => {
            tasks.push(task);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({tasks}, {payload: selectedId}: PayloadAction<string>) => {
            const index = tasks.findIndex(({id}) => id === selectedId);
            tasks[index].done = !tasks[index].done;
        },
        setAllDone: ({tasks}) => {
            tasks.forEach((task) => (task.done = true));
        },
        removeTask: ({tasks}, {payload: selectedId}: PayloadAction<string>) => {
            const index = tasks.findIndex(({id}) => id === selectedId);
            tasks.splice(index, 1);
        },
        fetchExampleTasks: (state) => {
            state.pending = true;
        },
        fetchExampleTasksSuccess: (state, {payload: tasks}: PayloadAction<Task[]>) => {
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

const selectTasksState = (state: RootState) => state.tasks;

export const selectTasks = (state: RootState): Task[] | [] => selectTasksState(state).tasks;
export const selectHideDone = (state: RootState): boolean=> selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state: RootState): boolean => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = (state: RootState): boolean=>
    selectTasks(state).every(({done}) => done);

export const selectIsPending = (state: RootState): boolean => selectTasksState(state).pending;

export const getTaskById = (state: RootState, taskId: string) =>
    selectTasks(state).find(({id}) => id === taskId);

export const selectTasksByQuery = (state: RootState, query: string | null): Task[] => {
    const tasks = selectTasks(state);
    if (!query || query.trim() === "") {
        return tasks;
    }

    return selectTasks(state).filter(({content}) =>
        content.toUpperCase().includes(query.trim().toUpperCase())
    );
};

export default tasksSlice.reducer;
