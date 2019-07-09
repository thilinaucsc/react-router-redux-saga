import { watcherSaga } from './watcherSagaFetchDog';
import { watcherSaga2 } from './watcherSagaFetchDog2';
import { fork } from 'redux-saga/effects';


export default function* rootSaga() {
  yield fork(
      watcherSaga,
      watcherSaga2
  );
}
