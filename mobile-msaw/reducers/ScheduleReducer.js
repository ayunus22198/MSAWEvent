import * as Actions from './ActionTypes';

let userState = { friday: null, saturday: null, sunday: null };

const userReducer = (state = userState, action) => {
    switch (action.type) {
        case Actions.SCHEDULE_SET:
            const { friday, saturday, sunday } = action.payload;
            state = Object.assign({}, state, { friday, saturday, sunday } )
            return state;
        default:
            return state;
    }
}

export default userReducer;