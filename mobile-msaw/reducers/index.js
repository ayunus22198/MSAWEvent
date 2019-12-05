import { combineReducers, createStore } from 'redux';

// import reducers
import userReducer from './UserReducer';
import scheduleReducer from './ScheduleReducer';

const AppReducers = combineReducers({
    user: userReducer,
    schedule: scheduleReducer
});

export default store = createStore(AppReducers);