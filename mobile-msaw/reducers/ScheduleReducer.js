import * as Actions from '../actions/types';
import { AsyncStorage } from 'react-native';

let scheduleState = { friday: null, saturday: null, sunday: null };

const scheduleReducer = (state = scheduleState, action) => {
    switch (action.type) {
        case Actions.SCHEDULE_SET:
            return state;
        case Actions.SCHEDULE_RETRIEVE:
            const { friday, saturday, sunday } = action.payload;
            state = Object.assign({}, state, { friday, saturday, sunday } )
            return state;
        case Actions.UPDATE_SCHEDULE:
            return state
        default:
            return state;
    }
}

export default scheduleReducer;
