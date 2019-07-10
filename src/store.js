import {applyMiddleware, compose, createStore} from "redux";
// import rootReducer from "./reducers/reducer";
import {rootReducer} from "./reducers/rootReducer";
// import { reducer } from './combineReducers';

import rootSaga  from "./saga";
import createSagaMiddleware from "redux-saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
