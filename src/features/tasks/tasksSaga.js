import { takeEvery, call, put } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    console.log(exampleTasks);
    yield put(setTasks(exampleTasks));
  } catch (error) {
    yield call(console.error, error);
  }
}

export function* watchFetchExampleTasks() {
  console.log("Saga jest podłączona");
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}
