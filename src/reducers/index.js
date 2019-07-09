import { combineReducers } from 'redux'
import a from './reducer'
import b from './reducer2'

const rootReducer = combineReducers({
    a,
    b
});

export default function(initialData) {
    return function (state, action) {
        if (!state) {
            console.log('no state', initialData);
            return initialData;
        }

        // This is showing state as having expected value
        // console.log('state', state);

        return rootReducer(state, action);
    }
};
