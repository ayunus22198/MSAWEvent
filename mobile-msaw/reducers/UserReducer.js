import * as Actions from '../actions/types';

let userState = { user: null };

const userReducer = (state = userState, action) => {
    switch (action.type) {
        case Actions.USER_LOGIN:
            state = Object.assign({}, state, { user: action.payload.user } )
            return state;
        case Actions.USER_LOGOUT:
            state = Object.assign({}, state, { user: null })
            return state;
        default:
            return state;
    }
}

export default userReducer;
