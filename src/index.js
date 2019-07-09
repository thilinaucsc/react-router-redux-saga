import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';

import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history'
import indexRoutes from "./routes/index.jsx";

import store from './store'
// import syncHistoryWithStore from "react-router-redux/src/sync";

const hist = createBrowserHistory();

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(hist, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hist}>
            <Route path="/" component={App}>
                {indexRoutes.map((prop, key) => {
                    return <Route path={prop.path} component={prop.component} key={key}/>;
                })}
            </Route>
        </Router>
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
