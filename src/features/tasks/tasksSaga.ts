import {
    takeLatest,
    call,
    put,
    delay,
    takeEvery,
    select,
} from "redux-saga/effects";
import {
    fetchExampleTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
    selectTasks,
    Task
} from "./tasksSlice";
import {getExampleTasks} from "./getExampleTasks";
import {saveTasksInLocalStorage} from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks: Task[] = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak... Spróbuj ponownie później");
        yield put(fetchExampleTasksError());
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks: Task[] = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}
