const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

const initialState = {
    fetching: false,
    dog: null,
    error: null
};



export default function reducer(state = initialState, action) {
    switch (action.type) {
        case API_CALL_REQUEST:
            return { ...state, fetching: true, error: null };
            // eslint-disable-next-line no-unreachable
            break;
        case API_CALL_SUCCESS:
            return { ...state, fetching: false, dog: action.dog };
            // eslint-disable-next-line no-unreachable
            break;
        case API_CALL_FAILURE:
            return { ...state, fetching: false, dog: null, error: action.error };
            // eslint-disable-next-line no-unreachable
            break;
        default:
            return state;
    }
}
