import { takeLatest, call, put } from "redux-saga/effects";
import {fetchDog} from "../service/service";

// worker saga: makes the api call when watcher saga sees the action
function* watcherSagaFetchDog() {
    try {
        const response = yield call(fetchDog);
        const dog = response.data.message;

        // dispatch a success action to the store with the new dog
        yield put({ type: "API_CALL_SUCCESS", dog });
    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: "API_CALL_FAILURE", error });
    }
}

export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", watcherSagaFetchDog);
}

// function that returns api response
/*function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  });
}*/
