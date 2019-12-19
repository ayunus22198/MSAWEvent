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
            console.log(state);
            const { event } = action.payload;
            for(let i = 0; i < state.friday.length; i++) {
              if(state.friday[i]._id == event._id) {
                state.friday[i].title = event.title;
                state.friday[i].selectable = true;
                state.friday[i].destination = event.destination;
                state.friday[i].speaker = event.speaker;
                state.friday[i].dateBegin = event.dateBegin;
                state.friday[i].dateEnd = event.dateEnd;
                state.friday[i].dayOfWeek = "FRIDAY";
                state.friday[i].attending = event.attending;
                AsyncStorage.setItem(state.friday[i].text + 'selectableItem', state.friday[i]);
                break;
              }
            }
            state = Object.assign({}, state, { friday } )
            return state
        default:
            return state;
    }
}

export default scheduleReducer;
