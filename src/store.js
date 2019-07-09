import {applyMiddleware, compose, createStore} from "redux";
import  rootReducer from "./reducers/reducer";

import {watcherSaga} from "./sagas";
import createSagaMiddleware from "redux-saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watcherSaga);

export default store;
