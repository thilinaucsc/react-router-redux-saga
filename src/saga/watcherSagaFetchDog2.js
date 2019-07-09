import { takeLatest, call, put } from "redux-saga/effects";
import {getEmployee} from "../service/service";
import * as types from '../constants/actionTypes';

// worker saga: makes the api call when watcher saga sees the action
function* watcherSagaFetchDog2() {
    try {
        const response = yield call(getEmployee);
        const dog = response.data.message;

        // dispatch a success action to the store with the new dog
        yield put({ type: types.EMPLOYEE_SUCCESS, dog });
    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: types.EMPLOYEE_FAILURE, error });
    }
}

export function* watcherSaga2() {
    yield takeLatest(types.EMPLOYEE_REQUEST, watcherSagaFetchDog2);
}

// function that returns api response
/*function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  });
}*/
